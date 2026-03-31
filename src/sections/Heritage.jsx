import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ShieldCheck,
  Globe,
  Factory,
  Award,
  ArrowUpRight,
  Star,
} from "lucide-react";

const stats = [
  { value: "25+", label: "Years of Craftsmanship" },
  { value: "60+", label: "Countries Exported" },
  { value: "500+", label: "Active Tile Designs" },
  { value: "ISO", label: "9001 : 2015 Certified" },
];

const pillars = [
  {
    icon: Factory,
    title: "Factory-Direct Quality",
    body: `We source exclusively from Motto Group's state-of-the-art facilities in Morbi, Gujarat — ensuring you receive tiles at manufacturer pricing without compromising on grade.`,
  },
  {
    icon: Globe,
    title: "Global Export Standards",
    body: "Every batch is tested to international ISO and CE standards. Our tiles are trusted in projects across Europe, the Middle East, North America and Southeast Asia.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & Guaranteed",
    body: "ISO 9001:2015 certified manufacturing. Anti-slip, frost-resistance, and chemical-resistance testing on every product line to meet architectural specifications.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    body: `Motto Group's design studio collaborates with Italian and Spanish ceramic designers to produce surfaces that set trends in contemporary architecture.`,
  },
];

function StatCard({ value, label, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="text-center"
    >
      <p className="font-display font-bold text-4xl md:text-5xl text-white mb-1">
        {value}
      </p>
      <p className="text-slate-400 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

function PillarCard({ icon: Icon, title, body, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/30 rounded-2xl p-7 transition-all duration-400"
    >
      <div className="w-11 h-11 rounded-xl bg-yellow-500/10 group-hover:bg-yellow-500/20 flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon size={20} className="text-yellow-400" />
      </div>
      <h3 className="font-display font-semibold text-white text-lg mb-3">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
    </motion.div>
  );
}

export default function Heritage({ onQuoteOpen }) {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      id="heritage"
      className="bg-slate-900 py-28 relative overflow-hidden"
    >
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Eyebrow + Heading */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
            <Star size={11} className="text-yellow-400 fill-current" />
            <span className="text-yellow-400 text-[11px] font-bold tracking-[0.2em] uppercase">
              Our Heritage
            </span>
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl leading-tight mb-5">
            Partner with
            <br />
            <span className="text-gold-gradient">Motto Group</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We are an authorised distribution partner of Motto Group — one of
            India&#39;s leading ceramic tile manufacturers with over 25 years of
            heritage and a global footprint spanning 60+ countries.
          </p>
          <a
            href="https://www.mottogroup.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-semibold transition-colors"
          >
            Visit Motto Group <ArrowUpRight size={14} />
          </a>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-y border-white/10 py-12">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <PillarCard key={p.title} {...p} index={i} />
          ))}
        </div>

        {/* Visual call-to-action strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-yellow-600/20 to-yellow-400/10 border border-yellow-500/20 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-1.5">
              Factory-Direct Pricing
            </p>
            <h3 className="font-display font-semibold text-white text-xl">
              No middlemen. Maximum value.
            </h3>
            <p className="text-slate-400 text-sm mt-1.5">
              Get access to institutional pricing on bulk orders with guaranteed
              quality certification.
            </p>
          </div>
          <button
            onClick={onQuoteOpen}
            className="shrink-0 px-6 py-3 rounded-full bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold text-sm transition-colors duration-200 whitespace-nowrap"
          >
            Request Bulk Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
