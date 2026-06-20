import { useState } from "react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";
import { workshop } from "../data/workshop";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
};

const emptyForm: FormValues = { name: "", email: "", phone: "" };

// Check the form and return a message for each invalid field.
function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email);
  const digitCount = values.phone.replace(/\D/g, "").length;

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!emailLooksValid) {
    errors.email = "Please enter a valid email address.";
  }
  if (digitCount < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  return errors;
}

function RegistrationForm() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const newErrors = validate(values);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Pretend to send the data to a server.
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setDone(true);
  }

  // The three fields, so we can render them with one loop.
  const fields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "e.g. Aarav Sharma" },
    { name: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
  ] as const;

  return (
    <section id="register" className="bg-gray-900 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        {/* Left: heading and highlights */}
        <div className="text-white">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Reserve your child&apos;s spot today
          </h2>
          <p className="mt-4 max-w-md text-lg text-gray-300">
            Seats are limited to keep classes small and personal. Fill in the
            form and our team will reach out with the next steps.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              `Starts ${workshop.startDate} · ${workshop.duration}`,
              `For ages ${workshop.ageGroup} · ${workshop.mode}`,
              `Just ${workshop.fee} · Full refund in week one`,
            ].map((line) => (
              <li key={line} className="flex items-center gap-3 text-gray-200">
                <FaCheckCircle className="shrink-0 text-brand-400" />
                <span className="font-semibold">{line}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: the form card */}
        <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
          {done ? (
            <div className="flex flex-col items-center py-8 text-center">
              <FaCheckCircle className="text-6xl text-green-500" />
              <h3 className="mt-5 text-2xl font-extrabold text-gray-800">
                You&apos;re on the list! 🎉
              </h3>
              <p className="mt-2 text-gray-600">
                Thanks, {values.name.trim()}. We&apos;ll email you at{" "}
                <span className="font-semibold text-brand-600">
                  {values.email.trim()}
                </span>{" "}
                with the next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h3 className="font-display text-2xl font-extrabold text-gray-800">
                Registration Form
              </h3>
              <p className="mt-1 text-sm text-gray-500">It only takes a minute.</p>

              <div className="mt-6 space-y-5">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="mb-1.5 block text-sm font-bold text-gray-700"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={values[field.name]}
                      onChange={handleChange}
                      disabled={loading}
                      className={`w-full rounded-xl border-2 bg-gray-50 px-4 py-3 font-medium text-gray-800 outline-none transition-colors focus:bg-white disabled:opacity-60 ${
                        errors[field.name]
                          ? "border-red-300 focus:border-red-400"
                          : "border-gray-200 focus:border-brand-400"
                      }`}
                    />
                    {errors[field.name] && (
                      <p className="mt-1.5 text-sm font-semibold text-red-500">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-600 disabled:opacity-80"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Complete Registration"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;
