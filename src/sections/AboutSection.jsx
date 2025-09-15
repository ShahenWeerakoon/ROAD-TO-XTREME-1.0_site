import { motion } from 'framer-motion'
import './Sections.css'

const timelineEvents = [
  {
    main: 'Registration Opening',
    date: 'September 03 - 6.00 PM',
    description:
      "Participants can sign up and form their teams as registration opens for all eligible students ready to embark on this exciting coding journey.",
  },
  {
    main: 'Awareness Session',
    date: 'The September 03 - 6.00 PM',
    description:
      "A dedicated session to guide participants through the hackathon process, rules, and expectations—ensuring everyone is prepared and inspired.",
  },
  {
    main: 'Workshop 1',
    date: 'September 03 - 6.00 PM',
    description:
      'Participants can sign up and form their teams as registration opens for all eligible students ready to embark on this exciting coding journey.',
  },
  {
    main: 'Awareness Session',
    date: 'The September 03 - 6.00 PM',
    description:
      'A dedicated session to guide participants through the hackathon process, rules, and expectations—ensuring everyone is prepared and inspired.',
  },
  {
    main: 'Workshop 1',
    date: 'September 03 - 6.00 PM',
    description:
      'Participants can sign up and form their teams as registration opens for all eligible students ready to embark on this exciting coding journey.',
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="section-content">
        <motion.h2
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
          Stay updated with our latest workshops, announcements, and success stories from the IEEEXtreme community.
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

export default AboutSection
