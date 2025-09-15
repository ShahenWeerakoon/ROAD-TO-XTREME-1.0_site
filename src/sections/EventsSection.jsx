import './Sections.css'

const EventsSection = () => {
  return (
    <section id="events" className="section">
      <div className="section-content">
        <h2>Upcoming Events</h2>
        <div className="content">
          <div className="event-card">
            <h3>IEEE Xtreme 17.0</h3>
            <p><strong>Date:</strong> October 21, 2023</p>
            <p><strong>Duration:</strong> 24 Hours</p>
            <p><strong>Participants:</strong> 5,000+ expected</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventsSection