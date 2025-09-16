import { motion } from 'framer-motion'
import './Sections.css'
import { title } from 'framer-motion/client';

const timelineEvents = [
  {
    title: "Awareness Session 1",
    mode: "Virtually",
    date: "20th September 2025",
    description:
      "Resource Person: Sasanka Weerakoon – Full Stack Developer at Aiken (Pvt.) Ltd",
  },
  {
    title: "Workshop 01: Algorithms & Strategy Bootcamp",
    mode: "Physically",
    date: "22nd September 2025",
    description: "",
  },
  {
    title: "Workshop 02: Submission of an AI Task with a Well-Prepared Prompt",
    mode: "Virtually",
    date: "6th October 2025",
    description:
      "Resource Person: Vidura Bandara Wijekoon – Senior Software Engineer – AI/ML at Virtusa",
  },
  {
    title: "Training Weeks: Trial Coding Sessions",
    mode: "Flexible",
    date: "6th October – 19th October 2025",
    description:
      "Participants will experience a simulated contest environment, explore different problem levels, and assess readiness for the main competition. Schedule can be adjusted for maximum participation.",
  },
  {
    title: "IEEE Xtreme Global Hackathon – On-Campus Hosting",
    mode: "Physically at CINEC Campus – Zenith Lecture Hall",
    date: "25th October 00:00 UTC – 26th October 00:00 UTC",
    description: "Minimum 12 hours duration. Schedule flexible.",
  },
];

const EventSection = () => {
  return (
    <section id="about" className="timeline">
      <div className="timeline-content">
        <motion.h2
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Event Timeline
        </motion.h2>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our latest workshops, announcements, and success stories from the <br /> IEEEXtreme community.
        </motion.p>

        {/* Timeline */}
        <div className="timeline-container">
          {/* Vertical line */}
          <div className="timeline-line" aria-hidden="true"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Timeline dot */}
                <div className="timeline-dot"></div>

                {/* Timeline card */}
                <div
                  className={`timeline-card ${
                    index % 2 === 0 ? 'left' : 'right'
                  }`}
                >
                  <p className="main">{event.main}</p>
                  <h3 className="date">{event.date}</h3>
                  <p className="mode">{event.mode}</p>
                  <p className="desc">{event.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventSection
