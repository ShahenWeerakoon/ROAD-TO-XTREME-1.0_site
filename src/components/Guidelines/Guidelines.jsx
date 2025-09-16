import React from "react";
import "./Guidelinesc.css";

function Guidelines() {
  return (
    <section className="guidelines">
      <h2 className="guidelines-title">Road to Xtreme Guidelines</h2>
      <div className="guidelines-grid">
        <div className="guideline-card">
          <h3>Who can participate</h3>
          <p>Open to all university undergraduates across all Sri Lankan universities. No prior experience required.</p>
        </div>
        <div className="guideline-card">
          <h3>Team Size</h3>
          <p>Teams of maximum 3 members. You can compete individually or as a team of 2–3 members.</p>
        </div>
        <div className="guideline-card">
          <h3>Location</h3>
          <p>Fully online hackathon! All teams must register and compete through HackerRank.</p>
        </div>
        <div className="guideline-card">
          <h3>Registration</h3>
          <p>All teams must register before the closing date. Team name must match your HackerRank account handle.</p>
        </div>
      </div>
    </section>
  );
}

export default Guidelines; 
