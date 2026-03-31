import { motion } from "framer-motion";
import {
  Truck,
  Layers,
  BarChart3,
  PackageCheck,
  Users2,
  ShieldCheck,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import { cn } from "../lib/utils";

const packages = [
  {
    title: "Builder Package",
    segment: "Budget Segment",
    description:
      "Standard vitrified tiles for high-volume residential projects with a focus on speed and clarity.",
    features: [
      "2–3 fixed high-demand designs",
      "Special bulk discount pricing",
      "Fast delivery commitment",
      "Reliable stock availability",
    ],
    color: "bg-slate-50",
    badge: "Most Popular",
  },
  {
    title: "Premium Project",
    segment: "Luxury & Commercial",
    description:
      "GVT & PGVT collections with architectural support for high-end developments.",
    features: [
      "Curated matching wall + floor combos",
      "Professional design consultation",
      "Custom branding options",
      "Priority manufacturing slot",
    ],
    color: "bg-slate-900 shadow-2xl shadow-slate-900/20",
    dark: true,
    badge: "Exclusive",
  },
];

const advantage = [
  {
    icon: BarChart3,
    title: "Smart Pricing Strategy",
    desc: "Tiered pricing from 5,000 to 50,000+ sq ft with hidden value like free loading and priority dispatch.",
  },
  {
    icon: Truck,
    title: "Logistics: 3–5 Day Delivery",
    desc: "Dedicated transport routes to Surat and surrounding regions for zero project delays.",
  },
  {
    icon: ShieldCheck,
    title: "Full Reliability Guarantee",
    desc: "Includes a replacement guarantee and site visit support from our technical team.",
  },
  {
    icon: PackageCheck,
    title: "Decision Friction Reduction",
    desc: "Pre-created ready-to-use combinations and real site mockups for 30-minute selection.",
  },
];

export default function BuilderSolutions({ onQuoteOpen }) {
  return (
    <section id="builders" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-yellow-600 text-xs font-bold tracking-[0.25em] uppercase mb-4">
              Builder Solutions
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6">
              Crafted for <br />
              <span className="text-gold-gradient italic">Every Vision.</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              We specialize in bulk tile supply for fast-moving construction
              projects with guaranteed delivery timelines. Trusted by the
              region's leading developers.
            </p>
          </div>
          <div className="hidden lg:block">
            <button
              onClick={onQuoteOpen}
              className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-xs tracking-widest uppercase hover:bg-yellow-600 transition-all duration-300 shadow-xl shadow-slate-900/10 flex items-center gap-2"
            >
              Get Contract Pricing <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn(
                "relative p-8 md:p-12 rounded-3xl border border-slate-100 flex flex-col justify-between",
                pkg.color,
                pkg.dark ? "text-white" : "text-slate-900",
              )}
            >
              <div>
                <span
                  className={cn(
                    "inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6",
                    pkg.dark
                      ? "bg-white/10 text-yellow-400 border border-white/10"
                      : "bg-yellow-500/10 text-yellow-700 border border-yellow-500/20",
                  )}
                >
                  {pkg.badge}
                </span>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">
                  {pkg.title}
                </h3>
                <p
                  className={cn(
                    "text-sm font-semibold mb-6",
                    pkg.dark ? "text-slate-400" : "text-yellow-600",
                  )}
                >
                  {pkg.segment}
                </p>
                <p
                  className={cn(
                    "text-sm mb-8 leading-relaxed",
                    pkg.dark ? "text-slate-300" : "text-slate-500",
                  )}
                >
                  {pkg.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <ShieldCheck
                        size={18}
                        className="text-yellow-500 shrink-0"
                      />
                      <span
                        className={cn(
                          "text-sm",
                          pkg.dark ? "text-slate-300" : "text-slate-600",
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={onQuoteOpen}
                className={cn(
                  "w-full py-4 rounded-xl font-bold text-[10px] tracking-widest uppercase transition-all duration-300",
                  pkg.dark
                    ? "bg-white text-slate-900 hover:bg-yellow-400 shadow-none"
                    : "bg-slate-900 text-white hover:bg-yellow-600 shadow-lg shadow-slate-900/10",
                )}
              >
                Inquire for Bulk Order
              </button>
            </motion.div>
          ))}
        </div>

        {/* Advantage Matrix */}
        <div className="py-20 border-y border-slate-100 mb-20 relative px-8">
          <div className="absolute top-0 left-1/4 -translate-y-1/2 w-32 h-px bg-yellow-500" />
          <h4 className="font-display font-bold text-2xl text-slate-900 mb-12 text-center md:text-left">
            The Motto Advantage{" "}
            <span className="text-slate-400 text-lg ml-2 font-normal">
              / Developer Services
            </span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {advantage.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 mb-6">
                  <item.icon size={20} />
                </div>
                <h5 className="font-bold text-slate-900 mb-2">{item.title}</h5>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CEO Quote / Positioning Statement */}
        <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-16 rounded-[40px] text-center border border-slate-100">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-8">
            <Users2 size={18} className="text-slate-500" />
          </div>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-400 mb-6">
            Positioning Statement
          </p>
          <blockquote className="font-display font-bold text-xl md:text-2xl text-slate-900 leading-normal mb-8">
            “We specialize in bulk tile supply for fast-moving construction
            projects with guaranteed delivery timelines.”
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-px bg-yellow-500 mb-4" />
            <p className="text-sm font-semibold text-slate-900">
              Motto Signature Tiles Bulk Solutions{" "}
            </p>
            <p className="text-xs text-slate-400">
              Supporting Surat-based Builders & Contractors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
