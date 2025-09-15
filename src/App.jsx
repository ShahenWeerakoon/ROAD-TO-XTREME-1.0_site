import './App.css'
import Navbar from './components/Navbar'
import Countdown from './components/Countdown'
import Background from './components/Background'
import AboutSection from './sections/AboutSection'

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />

      {/* Main content */}
      <main className="main-content">
        {/* Home Section */}
        <section id="home" className="page-section">
          <div className="section-container">
            <div className="app-content">
              <Countdown />
              <div className="content">
                <h2>Road to XTreme</h2>
                <p>
                  IEEEXtreme is a global challenge in which teams of IEEE Student members – 
                  advised and proctored by an IEEE member, and often supported by an IEEE Student Branch – 
                  compete in a 24-hour time span against each other to solve a set of programming problems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section (Timeline) */}
        <AboutSection />

        {/* Events Section */}
        <section id="events" className="page-section">
          <div className="section-container">
            <div className="app-content">
              <div className="content">
                <h2>Events</h2>
                <p>Upcoming IEEE Xtreme events and competitions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section id="rules" className="page-section">
          <div className="section-container">
            <div className="app-content">
              <div className="content">
                <h2>Competition Rules</h2>
                <p>Rules and guidelines for participants.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="page-section">
          <div className="section-container">
            <div className="app-content">
              <div className="content">
                <h2>Resources</h2>
                <p>Helpful resources for competitors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="page-section">
          <div className="section-container">
            <div className="app-content">
              <div className="content">
                <h2>Contact Us</h2>
                <p>Get in touch with the IEEE Xtreme team.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <div className="footer">
        <p>© {new Date().getFullYear()} IEEE Xtreme. All rights reserved.</p>
      </div>
    </div>
  )
}

export default App
