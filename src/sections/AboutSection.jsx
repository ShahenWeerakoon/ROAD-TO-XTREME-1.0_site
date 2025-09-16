import { motion } from "framer-motion";

const eventPoints = [
  "An engaging platform designed to enhance logical reasoning, problem-solving abilities, and programming expertise.",
  "Serves as a training ground for IEEEXtreme 19.0 Global Hackathon, motivating students to step onto the international stage",
  "Is conducting within the university, ensuring inclusive participation from students across different faculties.",
  "Fosters teamwork, creativity, and collaboration among undergraduate participants.",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 border border-cyan-500 rounded-lg p-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-400 mb-2">OVERVIEW</p>
          <h2 className="text-4xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Road to Xtreme
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Left column */}
          <div className="space-y-6">
            <p>
              Road to Xtreme is an island-wide, inter-university coding
              hackathon organized by the Computer Society Chapter – IEEE Student
              Branch of CINEC campus.
            </p>
          </div>

          {/* Right column - points */}
          <div className="grid gap-6">
            {eventPoints.map((point, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Accent line */}
                <div className="w-1 h-6 bg-cyan-400 mt-1"></div>
                <p>{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
