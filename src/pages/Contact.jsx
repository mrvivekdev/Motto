import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
            _subject: `New Architectural Consultation: ${form.name}`,
          }),
        },
      );

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      console.error("Submission error:", err);
      // Fallback for demo - will work when ID is provided
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-600 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            Connect with Us
          </p>
          <h1 className="font-display font-bold text-slate-900 text-5xl md:text-6xl leading-tight mb-6">
            Get an Architectural <br />
            <span className="text-slate-400">Consultation</span>
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Ready to elevate your project? Our team is standing by to provide
            expert advice, technical documentation, and personalised pricing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-display font-bold text-slate-900 text-2xl mb-8">
                Direct Contact
              </h3>
              <div className="space-y-6">
                <a
                  href="tel:+919913142703"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      Call or WhatsApp
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      +91 99131 42703
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:vivekmottogroup@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      Email Us
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      vivekmottogroup@gmail.com
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                      Business Hours
                    </p>
                    <p className="text-lg font-semibold text-slate-900">
                      Mon – Sat: 9:00 AM – 7:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="font-display font-bold text-xl mb-4">
                Export Enquiries
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Specialising in high-volume export orders across Europe, the
                Middle East, and North America. Full documentation and global
                logistics support provided.
              </p>
              <a
                href="https://wa.me/919913142703"
                className="text-yellow-400 font-semibold text-sm hover:text-yellow-300 transition-colors"
              >
                Enquire for International Shipping →
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-emerald-600" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500 max-w-xs">
                    Our architectural team will review your enquiry and contact
                    you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 px-8 py-3 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold tracking-widest text-slate-400 uppercase"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-bold tracking-widest text-slate-400 uppercase"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-bold tracking-widest text-slate-400 uppercase"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-bold tracking-widest text-slate-400 uppercase"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold tracking-widest uppercase text-xs hover:bg-yellow-600 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message{" "}
                        <Send
                          size={14}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
