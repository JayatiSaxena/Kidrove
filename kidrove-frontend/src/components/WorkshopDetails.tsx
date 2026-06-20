import {
  FaChild,
  FaRegClock,
  FaLaptopCode,
  FaTags,
  FaRegCalendarCheck,
} from "react-icons/fa";
import { workshop } from "../data/workshop";

// The five detail cards. Icons stay next to their labels so it's easy to read.
const details = [
  { icon: <FaChild />, label: "Age Group", value: workshop.ageGroup },
  { icon: <FaRegClock />, label: "Duration", value: workshop.duration },
  { icon: <FaLaptopCode />, label: "Mode", value: workshop.mode },
  { icon: <FaTags />, label: "Fee", value: workshop.fee },
  { icon: <FaRegCalendarCheck />, label: "Start Date", value: workshop.startDate },
];

function WorkshopDetails() {
  return (
    <section id="details" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Workshop Details
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to know before you enroll your young innovator.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-5">
          {details.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-gray-100 bg-brand-50/40 p-6 text-center shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-2xl text-brand-600">
                {item.icon}
              </div>
              <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-gray-400">
                {item.label}
              </h3>
              <p className="mt-1 font-display text-lg font-extrabold text-gray-800">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopDetails;
