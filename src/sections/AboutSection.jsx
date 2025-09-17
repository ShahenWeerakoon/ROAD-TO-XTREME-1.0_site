import "../../src/sections/Sections.css";
import "../../src/index.css";

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
    <section id="events" className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">Road to Xtreme – Event Timeline</h2>

        <div className="timeline-line">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              {/* Number bubble */}
              <span className="timeline-circle">{index + 1}</span>

              {/* Event card */}
              <div className="timeline-card">
                <h3 className="timeline-card-title">{event.title}</h3>
                <p className="timeline-card-info">
                  <span>Mode:</span> {event.mode}
                </p>
                <p className="timeline-card-info">
                  <span>Date:</span> {event.date}
                </p>
                {event.details && (
                  <p className="timeline-card-details">{event.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
