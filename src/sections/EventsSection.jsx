import { motion } from 'framer-motion'

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
  const sectionStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    scrollMarginTop: '80px',
    backgroundColor: '#070606ff',
  }

  const sectionContentStyle = {
    maxWidth: '1000px',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  }

  const subtitleStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '2rem',
  }

  const timelineContainerStyle = {
    position: 'relative',
    padding: '2rem 0',
  }

  const timelineLineStyle = {
    position: 'absolute',
    left: '50%',
    top: 0,
    transform: 'translateX(-50%)',
    width: '4px',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    zIndex: 0,
  }

  const timelineItemStyle = {
    position: 'relative',
    marginBottom: '3rem',
  }

  const timelineDotStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: '#4fc3f7',
    border: '4px solid rgba(0,0,0,0.2)',
    borderRadius: '50%',
    zIndex: 10,
  }

  const timelineCardBaseStyle = {
    width: '45%',
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    position: 'relative',
    textAlign: 'left',
    transition: 'all 0.3s ease',
  }

  const mainStyle = {
    color: '#4fc3f7',
    fontWeight: 600,
    marginBottom: '0.5rem',
  }

  const dateStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  }

  const descStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    lineHeight: '1.5rem',
  }

  return (
    <section id="about" style={sectionStyle}>
      <div style={sectionContentStyle}>
        <motion.h2
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  style={{
    width: '351px',
    height: '60px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500, // Medium
    fontStyle: 'normal',
    fontSize: '47px',
    lineHeight: '60px', // 100% of 60px height
    letterSpacing: '0%',
    textAlign: 'center',
    background: 'linear-gradient(90deg, #21B88B 0%, #E2ECED 43.27%, #C1D9ED 62.5%, #498FD5 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    margin: '0 auto 1rem auto', // center it horizontally
  }}
>
  Event Timeline
</motion.h2>


        <motion.p
          style={subtitleStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay updated with our latest workshops, announcements, and success stories from the IEEEXtreme community.
        </motion.p>

        <div style={timelineContainerStyle}>
          <div style={timelineLineStyle} aria-hidden="true"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} style={timelineItemStyle}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div style={timelineDotStyle}></div>

                <div
                  style={{
                    ...timelineCardBaseStyle,
                    marginLeft: index % 2 === 0 ? 0 : 'auto',
                    marginRight: index % 2 === 0 ? 'auto' : 0,
                  }}
                >
                  <p style={mainStyle}>{event.main}</p>
                  <h3 style={dateStyle}>{event.date}</h3>
                  <p style={descStyle}>{event.description}</p>
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
