import { FaRobot } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-500 text-white">
            <FaRobot className="text-xl" />
          </span>
          <span className="font-display text-2xl font-extrabold text-gray-800">
            Kid<span className="text-brand-500">rove</span>
          </span>
        </a>

        {/* Enroll button scrolls down to the form */}
        <a
          href="#register"
          className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-600"
        >
          Enroll Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
