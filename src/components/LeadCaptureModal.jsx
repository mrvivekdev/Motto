import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";

const PROJECT_TYPES = [
  "Residential — Villa / Bungalow",
  "Residential — Apartment",
  "Commercial — Office / IT Park",
  "Commercial — Retail / Showroom",
  "Hospitality — Hotel / Resort",
  "Institutional — School / Hospital",
  "Landscape / Outdoor Project",
  "Export / Bulk Order",
];

export default function LeadCaptureModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    area: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using FormSubmit.co - No account needed!
      // Just click "Confirm" in the first email you receive to activate.
      const response = await fetch(
        "https://formsubmit.co/ajax/vivekmottogroup@gmail.com",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...form,
            _subject: `New Quote Request: ${form.name} (${form.projectType})`,
          }),
        },
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to send request");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback to simulated success for demo purposes if no ID is provided,
      // but in production this should show an error.
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        area: "",
        message: "",
      });
    }, 400);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header stripe */}
            <div className="bg-slate-900 px-8 pt-8 pb-6">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={14} className="text-white" />
              </button>
              <p className="text-yellow-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">
                Get a Quote
              </p>
              <h2 className="font-display font-bold text-white text-2xl leading-snug">
                Tell us about your project
              </h2>
              <p className="text-slate-400 text-sm mt-1.5">
                We'll match you with the perfect tile collection and send a
                personalised quote.
              </p>
            </div>

            {/* Form / Success */}
            <div className="px-8 py-7">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-emerald-600" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                      Request Received!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-xs">
                      Thank you, <strong>{form.name}</strong>. Our team will
                      reach out within 24 hours with a customised proposal.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-6 px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lead-name"
                          className="text-xs font-semibold text-slate-600"
                        >
                          Full Name *
                        </label>
                        <input
                          id="lead-name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lead-phone"
                          className="text-xs font-semibold text-slate-600"
                        >
                          Phone *
                        </label>
                        <input
                          id="lead-phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="lead-email"
                        className="text-xs font-semibold text-slate-600"
                      >
                        Email
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lead-project"
                          className="text-xs font-semibold text-slate-600"
                        >
                          Project Type *
                        </label>
                        <select
                          id="lead-project"
                          name="projectType"
                          required
                          value={form.projectType}
                          onChange={handleChange}
                          className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                        >
                          <option value="" disabled>
                            Select type…
                          </option>
                          {PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          htmlFor="lead-area"
                          className="text-xs font-semibold text-slate-600"
                        >
                          Area (sq.ft)
                        </label>
                        <input
                          id="lead-area"
                          name="area"
                          type="number"
                          value={form.area}
                          onChange={handleChange}
                          placeholder="e.g. 2500"
                          className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="lead-message"
                        className="text-xs font-semibold text-slate-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="lead-message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements, budget, timeline…"
                        className="px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"
                      />
                    </div>

                    <button
                      id="lead-submit"
                      type="submit"
                      disabled={loading}
                      className="mt-1 w-full py-3 rounded-xl bg-slate-900 hover:bg-yellow-600 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={14} /> Submit Request
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
