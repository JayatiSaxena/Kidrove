import { workshop } from "../data/workshop";

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-orange-50 to-blue-50"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-2 md:px-8 md:pb-28 md:pt-16">
        {/* Left: text */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-bold text-brand-600">
            🚀 Summer 2026 · Now Enrolling
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
            AI & Robotics
            <br />
            <span className="text-brand-500">Summer Workshop</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-600">
            {workshop.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#register"
              className="rounded-full bg-brand-500 px-7 py-4 text-lg font-bold text-white shadow-lg transition-colors hover:bg-brand-600"
            >
              Enroll Now
            </a>
            <a
              href="#details"
              className="rounded-full border-2 border-gray-200 bg-white px-7 py-4 text-lg font-bold text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-600"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Right: simple illustration */}
        <div className="mx-auto grid h-72 w-72 place-items-center rounded-[2.5rem] bg-gradient-to-br from-brand-400 to-grape-500 shadow-2xl sm:h-80 sm:w-80">
          <div className="animate-float text-[8rem] sm:text-[9rem]">🤖</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
