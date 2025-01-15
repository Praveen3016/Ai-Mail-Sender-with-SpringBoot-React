// src/components/EmailSender.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'tailwindcss/tailwind.css';
const SendEmail = () => {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const handleMessageChange = (value) => {
    setEmailData({ ...emailData, message: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual email sending logic
    alert(`Email sent to: ${emailData.to}\nSubject: ${emailData.subject}`);
  };

  return (
    <div className=" mx-auto p-4 pt-3 bg-white shadow-md rounded-lg ">
      <h1 className="text-xl font-semibold text-gray-800 mb-3">Send Email</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="to" className="block text-gray-700 font-medium mb-1">To</label>
          <input
            type="email"
            id="to"
            name="to"
            value={emailData.to}
            onChange={handleInputChange}
            className="w-full p-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Recipient's email address"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={handleInputChange}
            className="w-full p-2 px-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email subject"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
          <ReactQuill
            theme="snow"
            value={emailData.message}
            onChange={handleMessageChange}
            className="bg-white border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};
export default SendEmail;
