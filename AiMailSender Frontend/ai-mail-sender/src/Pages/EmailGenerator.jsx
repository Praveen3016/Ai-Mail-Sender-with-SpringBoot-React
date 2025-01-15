import React, { useState } from "react";
import axios from "axios";

const EmailGenerator = () => {
  const [userInput, setUserInput] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateEmail = async () => {
    if (!userInput) return alert("Please enter your message.");

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/api/openai/generate", {
        message: "only write mail not other extra text ," + userInput,
      });
      setGeneratedEmail(response.data.choices[0].message.content);
    } catch (error) {
      alert("An error occurred while generating the email.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUserInput("");
    setGeneratedEmail("");
  };

  return (
    <div className="flex flex-col gap-6 bg-gray-100 min-h-screen p-1">
      <div className="p-5 bg-white shadow-md rounded-lg">
        <h1 className="text-xl font-bold text-blue-600 mb-6">
          AI Email Generator 
        </h1>
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleGenerateEmail();
          }}
        >
          <textarea
            className="w-full p-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Write a professional email inviting someone to a meeting."
            rows={1}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          ></textarea>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
            <button
              type="submit"
              className={`px-4 py-1 font-semibold text-white rounded-lg transition ${
                loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <span className="spinner-border animate-spin inline-block w-5 h-5 border-2 rounded-full border-white border-t-transparent"></span>
                  Generating...
                </div>
              ) : (
                "Generate Email"
              )}
            </button>
            <button
              type="button"
              className="px-4 py-1 font-semibold text-blue-600 bg-blue-100 hover:bg-blue-200 rounded-lg transition"
              onClick={handleClear}
            >
              Clear
            </button>
            </div>
            <div>
              <button  className={`px-4 py-1 font-semibold text-white rounded-lg transition bg-blue-500 hover:bg-blue-600`}>Mail</button>
            </div>
          </div>
        </form>

        {generatedEmail && (
          <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-sm overflow-auto">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Generated Email 📧
            </h2>
            <p className="text-gray-600 whitespace-pre-wrap">{generatedEmail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailGenerator;
