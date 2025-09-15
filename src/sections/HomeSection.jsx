import Countdown from '../components/Countdown';

const HomeSection = () => {
  return (
    <section
      id="home"
      className="page-section min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="bg-black/50 p-10 rounded-xl text-white text-center max-w-3xl">
        <Countdown />
        <h2 className="text-4xl font-bold mt-6 mb-4">Road to XTreme</h2>
        <p className="text-lg">
          IEEEXtreme is a global challenge in which teams of IEEE Student members –
          advised and proctored by an IEEE member, and often supported by an IEEE Student Branch –
          compete in a 24-hour time span against each other to solve a set of programming problems.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;
