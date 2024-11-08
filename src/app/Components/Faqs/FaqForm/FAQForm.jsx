'use client';
import React, { useState } from "react";

const FAQForm = ({ ShowTitle = true, padding = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    question: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field changed: ${name}, Value: ${value}`); // Debugging line
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted:", formData); // This should log the form data to the console
    setFormData({
      name: "",
      email: "",
      subject: "",
      question: "",
    });
  };
  {/*
  return (
    <div className={`faq-forms px-[20px] max-w-[830px] mx-auto ${padding ? 'py-[120px]' : 'py-0'}`}>
      {ShowTitle && (
        <div className="section-title text-center mb-[50px]">
          <h3 className="sub-title text-[16px] uppercase font-medium text-[#fa7070] tracking-[3px] mb-2">
            Question form
          </h3>
          <h2 className="title text-[36px] font-semibold leading-tight mb-2">
            Do you have any Question?
          </h2>
        </div>
      )}

      <form onSubmit={handleSubmit} className="faq-form">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#fdfafa] py-4 px-3 md:px-4 border border-[#efe7e7] rounded-[30px] outline-none transition-all duration-300 ease-in-out"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-6">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#fdfafa] py-4 px-3 md:px-4 border border-[#efe7e7] rounded-[30px] outline-none transition-all duration-300 ease-in-out"
            />
          </div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-[#fdfafa] py-4 px-3 md:px-4 border border-[#efe7e7] rounded-[30px] outline-none transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <textarea
            name="question"
            cols="30"
            rows="10"
            placeholder="Your Comment"
            value={formData.question}
            onChange={handleChange}
            className="w-full bg-[#fdfafa] py-4 px-3 md:px-4 border border-[#efe7e7] rounded-[30px] outline-none transition-all duration-300 ease-in-out"
          ></textarea>
        </div>

        <button
          type="submit"
          className="pix-btn  submit-btn border-0 transition-all duration-300 shadow-[0px_20px_30px_rgba(176,70,70,0.3)] hover:shadow-none ease-in-out hover:bg-[#fa5050] inline-block px-[30px] py-[13px] bg-[#fa7070] rounded-[30px] text-[15px] text-white font-medium shadow-[0px 20px 30px rgba(176,70,70,0.3)]"
        >
          Send Questions
        </button>
      </form>
    </div>
  );
*/}
};

export default FAQForm;
