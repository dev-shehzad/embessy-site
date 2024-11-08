import { NextResponse } from "next/server";
import sql from "mssql";

// Azure SQL Database configuration
const config = {
  user: process.env.AZURE_SQL_ADMIN_USER,
  password: process.env.AZURE_SQL_ADMIN_PASS,
  server: process.env.AZURE_SQL_SERVER,
  database: process.env.AZURE_SQL_DATABASE,
  options: {
    encrypt: true, // Use encryption for Azure SQL Database
  },
};

export async function POST(request) {
  const { firstName, surname, company, country, subject, message } =
    await request.json();

  // Get the current date and time in UTC
  const submittedAt = new Date().toISOString(); // This returns the current UTC date and time as a string

  try {
    // Connect to the Azure SQL database
    const pool = await sql.connect(config);

    // Insert the form data and the current timestamp into the database
    await pool
      .request()
      .input("firstName", sql.NVarChar, firstName)
      .input("surname", sql.NVarChar, surname)
      .input("company", sql.NVarChar, company)
      .input("country", sql.NVarChar, country)
      .input("subject", sql.NVarChar, subject)
      .input("message", sql.NVarChar, message)
      .input("submittedAt", sql.DateTime2, submittedAt) // Add the timestamp to the query
      .query(`
        INSERT INTO contact_form (FirstName, Surname, Company, Country, Subject, Message, SubmittedAt)
        VALUES (@firstName, @surname, @company, @country, @subject, @message, @submittedAt)
      `);

    return NextResponse.json(
      { message: "Form data saved successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error saving form data:", err);
    return NextResponse.json(
      { error: "Failed to save form data" },
      { status: 500 }
    );
  } finally {
    sql.close(); // Close the SQL connection
  }
}
