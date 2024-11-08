"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import "./Form.css";
import Button from "../Common/Button/Button";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    company: "",
    country: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // New loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, surname, company, country, subject, message } = formData;

    // Basic validation: check if all fields are filled
    if (
      !firstName ||
      !surname ||
      !company ||
      !country ||
      !subject ||
      !message
    ) {
      toast.error("Please fill in all fields."); // Show error toast
      return;
    }

    setLoading(true); // Set loading state to true when submission starts

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({
          firstName: "",
          surname: "",
          company: "",
          country: "",
          subject: "",
          message: "",
        }); // Clear form fields
        toast.success("Your message has been sent successfully!"); // Show success toast
      } else {
        toast.error("Failed to submit the form."); // Show error toast
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("An error occurred while submitting the form."); // Show error toast
    } finally {
      setLoading(false); // Set loading state back to false when submission finishes
    }
  };

  return (
    <div className="container">
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <div className="input-container">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              maxLength={100}
              disabled={loading} // Disable input while loading
            />
          </div>
          <div className="input-container">
            <label>Surname:</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              maxLength={100}
              disabled={loading} // Disable input while loading
            />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              maxLength={100}
              disabled={loading} // Disable input while loading
            />
          </div>
          <div className="input-container">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              maxLength={100}
              disabled={loading} // Disable input while loading
            />
          </div>
        </div>
        <div>
          <label>Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            maxLength={200}
            disabled={loading} // Disable input while loading
          />
        </div>
        <div>
          <label>Your Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            maxLength={2000}
            rows={5}
            disabled={loading} // Disable textarea while loading
          ></textarea>
        </div>
        {/* <button
          className="px-5 py-2 text-base rounded-lg bg-[#ffa500] text-black border-none cursor-pointer transition-colors duration-300 hover:bg-[#ffff00]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send your message"}
        </button> */}
        <Button
          text={loading ? "Sending..." : "Send your message"}
          type="submit"
          disabled={loading}
          variant="secondary"
        />
        {/* Button changes text to "Sending..." when loading */}
      </form>

      {/* Toastify Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
