import "../../src/sections/Sections.css";
import "../../src/index.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <h1 className="overview">OVERVIEW</h1>

      <div className="about-details">
        <div className="about-content">
            <h1 className="about-heading">About <br /><span> Road to Xtreme</span></h1>
            <p className="about-description">
                Road to xtreme is an island-wide, inter-university coding hackathon<br/> organized by Computer Society Chapter - IEEE Student Branch of CINEC<br /> campus
            </p>
        </div>

        <div class="about-points">
            <div class="point first-row">
                <p>An engaging platform designed to enhance logical reasoning, problem-solving abilities, and programming expertise.</p>
                <p>Serves as a training ground for IEEEXtreme 19.0 Global Hackathon, motivating students to step onto the international stage</p>
            </div>
            <div class="point second-row">
                <p>Is conducting within the university, ensuring inclusive participation from students across different faculties.</p>
                <p>Fosters teamwork, creativity, and collaboration among undergraduate participants.</p>
            </div>
        </div>

      </div>
      

    </section>
  );
};

export default AboutSection;
