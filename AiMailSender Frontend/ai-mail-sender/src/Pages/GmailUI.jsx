import React, { useState } from "react";

const GmailUI = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const emailList = [
    {
      subject: "Welcome to Gmail UI!",
      sender: "Google",
      preview: "This is a sample email preview to showcase the design.",
      date: "Jan 12",
    },
    {
      subject: "Meeting Reminder",
      sender: "John Doe",
      preview: "Don’t forget about our meeting scheduled for tomorrow.",
      date: "Jan 11",
    },
    {
      subject: "New Updates Available",
      sender: "Support Team",
      preview: "We’ve released some exciting new features.",
      date: "Jan 10",
    },
  ];

  return (
    <div className=" space-y-4 ">
          {emailList.map((email, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white shadow-md rounded-md hover:shadow-lg cursor-pointer"
            >
              <div>
                <h3 className="text-md font-semibold">{email.sender}</h3>
                <p className="text-sm text-gray-500 truncate">{email.preview}</p>
              </div>
              <div className="text-sm text-gray-400">{email.date}</div>
            </div>
          ))}
        </div>
  );
};

export default GmailUI;
