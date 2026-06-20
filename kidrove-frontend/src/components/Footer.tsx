import { FaRobot } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center md:flex-row md:justify-between md:px-8 md:text-left">
        <div className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500 text-white">
            <FaRobot />
          </span>
          <span className="font-display text-xl font-extrabold text-white">
            Kid<span className="text-brand-400">rove</span>
          </span>
        </div>
        <p className="text-sm">
          Workshops, camps &amp; courses that spark young minds.
        </p>
        <p className="text-sm">© 2026 Kidrove. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
