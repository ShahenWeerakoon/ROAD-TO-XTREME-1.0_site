import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EventsSection from "./sections/EventsSection";

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <EventsSection />
      </main>
    </div>
  );
}

export default App;
