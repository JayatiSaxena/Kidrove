import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqs } from "../data/workshop";

function FAQ() {
  // Index of the FAQ that's currently open (null = all closed).
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-800 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-gray-100"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-lg font-bold text-gray-800">
                    {item.question}
                  </span>
                  <FaChevronDown
                    className={`shrink-0 text-brand-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="px-6 pb-5 leading-relaxed text-gray-600">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
