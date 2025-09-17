import { motion } from "framer-motion";
import "./EventSection.css";

const timelineEvents = [
  {
    main: "Registration Opening",
    date: "September 03 - 6.00 PM",
    description:
      "Participants can sign up and form their teams as registration opens for all eligible students ready to embark on this exciting coding journey.",
  },
  {
    main: "Awareness Session",
    date: "September 03 - 6.00 PM",
    description:
      "A dedicated session to guide participants through the hackathon process, rules, and expectations—ensuring everyone is prepared and inspired.",
  },
  {
    main: "Workshop 1",
    date: "September 03 - 6.00 PM",
    description:
      "Participants can sign up and form their teams as registration opens for all eligible students ready to embark on this exciting coding journey.",
  },
  {
    main: "Awareness Session",
    date: "September 03 - 6.00 PM",
    description:
      "A dedicated session to guide participants through the hackathon process, rules, and expectations—ensuring everyone is prepared and inspired.",
  },
  {
    main: "Workshop 1",
    date: "September 3 - 6.00 AM",
    description:
      "Participants can sign up and form their teams as registration opens for all eligible students ready to embark on this exciting coding journey",
  },
];

const EventSection = () => {
  return (
    <section id="event" className="event-section">
      <div className="event-content">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="event-title"
        >
          Event Timeline
        </motion.h2>

        <motion.p
          className="event-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our latest workshops, announcements, and success
          stories from the IEEE Xtreme community.
        </motion.p>

        <div className="timeline-container">
          <div className="timeline-line" aria-hidden="true"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div
                className={`timeline-card ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <p className="event-main">{event.main}</p>
                <h3 className="event-date">{event.date}</h3>
                <p className="event-desc">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
