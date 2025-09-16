// Timeline.jsx
import React from "react";

const timelineEvents = [
  {
    title: "Awareness Session 1",
    mode: "Virtually",
    date: "20th September 2025",
    details:
      "Resource Person: Sasanka Weerakoon – Full Stack Developer at Aiken (Pvt.) Ltd",
  },
  {
    title: "Workshop 01: Algorithms & Strategy Bootcamp",
    mode: "Physically",
    date: "22nd September 2025",
    details: "",
  },
  {
    title: "Workshop 02: Submission of an AI Task with a Well-Prepared Prompt",
    mode: "Virtually",
    date: "6th October 2025",
    details:
      "Resource Person: Vidura Bandara Wijekoon – Senior Software Engineer – AI/ML at Virtusa",
  },
  {
    title: "Training Weeks: Trial Coding Sessions",
    mode: "Flexible",
    date: "6th October – 19th October 2025",
    details:
      "Participants will experience a simulated contest environment, explore different problem levels, and assess readiness for the main competition. Schedule can be adjusted for maximum participation.",
  },
  {
    title: "IEEE Xtreme Global Hackathon – On-Campus Hosting",
    mode: "Physically at CINEC Campus – Zenith Lecture Hall",
    date: "25th October 00:00 UTC – 26th October 00:00 UTC",
    details: "Minimum 12 hours duration. Schedule flexible.",
  },
];

const Timeline = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Road to Xtreme – Event Timeline
      </h1>
      <div className="relative border-l-4 border-blue-500 ml-4">
        {timelineEvents.map((event, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white font-bold">
              {index + 1}
            </span>
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">
              <span className="font-medium">Mode:</span> {event.mode}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Date:</span> {event.date}
            </p>
            {event.details && (
              <p className="text-gray-500 mt-1">{event.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
