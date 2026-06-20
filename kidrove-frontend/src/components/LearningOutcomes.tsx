import { FaCheck } from "react-icons/fa";
import { outcomes } from "../data/workshop";

function LearningOutcomes() {
  return (
    <section id="outcomes" className="bg-brand-50/60 py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Learning Outcomes
          </h2>
          <p className="mt-3 text-gray-600">
            By the end of four weeks, every student walks away with real skills
            and a project to be proud of.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {outcomes.map((text) => (
            <div
              key={text}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-green-100 text-green-600">
                <FaCheck />
              </span>
              <p className="pt-1 font-semibold leading-relaxed text-gray-700">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningOutcomes;
