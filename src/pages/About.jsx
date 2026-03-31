import { motion } from 'framer-motion'
import { 
  Globe, 
  Factory, 
  Award, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Target, 
  Users, 
  Heart, 
  CheckCircle2,
  History
} from 'lucide-react'
import { cn } from '../lib/utils'

const stats = [
  { label: 'Established', value: '2004', icon: History },
  { label: 'Factories', value: '7+', icon: Factory },
  { label: 'Countries', value: '60+', icon: Globe },
  { label: 'Production', value: 'Advanced', icon: Cpu },
]

const FadeIn = ({ children, delay = 0, direction = 'up' }) => (
  <motion.div
    initial={{ 
      opacity: 0, 
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0
    }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
  >
    {children}
  </motion.div>
)

const SectionTitle = ({ eyebrow, title, description, light = false }) => (
  <div className="max-w-3xl mb-12 sm:mb-16">
    <FadeIn>
      <p className={cn(
        "text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-4",
        light ? "text-yellow-400" : "text-yellow-600"
      )}>
        {eyebrow}
      </p>
      <h2 className={cn(
        "font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-6",
        light ? "text-white" : "text-slate-900"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-base sm:text-lg leading-relaxed",
          light ? "text-slate-300" : "text-slate-500"
        )}>
          {description}
        </p>
      )}
    </FadeIn>
  </div>
)

export default function AboutPage({ onQuoteOpen }) {
  return (
    <div className="bg-[#fafaf8] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              <span className="text-yellow-700 text-[10px] font-bold tracking-widest uppercase">Since 2004</span>
            </div>
            <h1 className="font-display font-extrabold text-slate-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8">
              Legacy of <br />
              <span className="text-gold-gradient">Motto Group</span>
            </h1>
            <p className="max-w-2xl text-slate-500 text-lg sm:text-xl leading-relaxed mb-12">
              A leading Indian manufacturer and global exporter of ceramic and vitrified tiles, 
              shaping the future of architecture from the heart of Morbi, Gujarat.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-5xl">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={0.1 * i}>
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-sm flex flex-col items-center group hover:border-yellow-500/20 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-yellow-600 mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                    <stat.icon size={20} />
                  </div>
                  <p className="text-3xl font-display font-bold text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 bg-slate-900 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionTitle
              light
              eyebrow="Introduction"
              title="Global Export-Driven Excellence"
              description="Founded between 2002–2004, Motto Group has evolved from a local manufacturer into a global ceramic powerhouse. We don't just make tiles; we create architectural surfaces that define spaces across continents."
            />
            
            <FadeIn direction="left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "7+ Units", desc: "Advanced production units in Morbi." },
                  { title: "Domestic Leader", desc: "Trusted by major Indian projects." },
                  { title: "Global Reach", desc: "Supplying across 5 major continents." },
                  { title: "Sector Focus", desc: "Residential, commercial & industrial." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 size={18} className="text-yellow-400 mb-3" />
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Business Reach"
            title="Supplying the World"
            description="Our tiles travel across North America, Europe, Africa, Asia, and Australia, meeting the most stringent international standards."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-12 text-center">
            {['North America', 'Europe', 'Africa', 'Asia', 'Australia'].map((region, i) => (
              <FadeIn key={region} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors duration-300">
                    <Globe size={24} />
                  </div>
                  <span className="font-display font-semibold text-slate-800 text-sm sm:text-base">{region}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tech & Manufacturing */}
      <section className="py-24 px-6 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <SectionTitle 
                eyebrow="Innovation"
                title="Manufacturing & Technology"
                description="We leverage modern machinery and cutting-edge technology to maintain a large-scale production capacity without compromising on precision."
              />
              <div className="space-y-6">
                {[
                  { icon: Cpu, title: "Italian Digital Printing", desc: "Incorporating the world's most advanced printing tech for realistic textures." },
                  { icon: Zap, title: "Precision Classification", desc: "Using sensor-based surface quality testing and optical scanning." },
                  { icon: ShieldCheck, title: "Flatness Testing", desc: "Multi-stage checks ensuring every tile is perfectly flat and robust." }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.2 + (i * 0.1)}>
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-yellow-600">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <FadeIn direction="left">
                <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/5] group">
                   <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Advanced Manufacturing" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-end p-8">
                    <p className="text-white text-sm font-medium self-end">
                      "Quality is the top-most priority." — Motto Core Philosophy
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            eyebrow="Portfolio"
            title="Diverse Product Range"
            description="From high-performance sintered stones to premium digital wall tiles."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { title: "Sintered Stone", items: ["Large Slabs", "Kitchen Surfaces", "Cladding"] },
              { title: "GVT & PGVT", items: ["Glazed Vitrified", "Polished Glazed", "Satin Finish"] },
              { title: "Digital Wall", items: ["High Definition", "Textured Wall", "3D Murals"] },
              { title: "Large Formats", items: ["1200×2400 mm", "800×1600 mm", "600×1200 mm"] },
              { title: "Classic Range", items: ["600×600 mm", "Double Charge", "Heavy Duty"] },
              { title: "Designer Series", items: ["Bogota Series", "BaliStone Series", "Endless Series"] }
            ].map((cat, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-yellow-500/20 transition-colors duration-300">
                  <h4 className="font-display font-bold text-xl text-slate-900 mb-4">{cat.title}</h4>
                  <ul className="space-y-2">
                    {cat.items.map(item => (
                      <li key={item} className="text-slate-500 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeIn>
              <div className="h-full p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Target className="text-yellow-400 mb-6" size={32} />
                <h3 className="font-display font-bold text-3xl mb-6">Vision</h3>
                <p className="text-slate-300 leading-relaxed">
                  To shape the future of architecture and restore India’s design excellence globally by providing innovative surfacing solutions.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="h-full p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Award className="text-yellow-400 mb-6" size={32} />
                <h3 className="font-display font-bold text-3xl mb-6">Mission</h3>
                <p className="text-slate-300 leading-relaxed">
                  To combine quality, service, and innovation to deliver world-class products that satisfy the aesthetic and functional needs of our customers.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="h-full p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Users className="text-yellow-400 mb-6" size={32} />
                <h3 className="font-display font-bold text-3xl mb-6">Core Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Heart, label: "Authenticity" },
                    { icon: ShieldCheck, label: "Integrity" },
                    { icon: Users, label: "Teamwork" },
                    { icon: Award, label: "Excellence" }
                  ].map(v => (
                    <div key={v.label} className="flex flex-col items-start gap-2 p-3 rounded-xl bg-white/5">
                      <v.icon size={16} className="text-yellow-400" />
                      <span className="text-xs font-bold uppercase tracking-wider">{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quality & Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white mb-6">
                <span className="text-[10px] font-bold tracking-widest uppercase">Certified Excellence</span>
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-6">ISO & CE <br />International Benchmarks</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Our core philosophy: <span className="italic font-medium text-slate-900">“Quality is the top-most priority.”</span> every product undergoes multi-stage quality checks including flatness testing and optical surface scanning.
              </p>
              <div className="flex flex-wrap gap-4">
                {['ISO Certified', 'CE Mark', 'Bureau Veritas', 'Precision Scanned'].map(cert => (
                  <div key={cert} className="px-4 py-2 rounded-lg bg-slate-50 border border-slate-100 text-slate-700 text-sm font-semibold">
                    {cert}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
             <FadeIn direction="up">
                <div className="aspect-square rounded-2xl bg-white p-8 border border-slate-100 flex flex-col justify-center items-center text-center">
                  <ShieldCheck size={40} className="text-yellow-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Multi-stage Checks</h4>
                  <p className="text-xs text-slate-400">Strict QC at every level of manufacturing.</p>
                </div>
             </FadeIn>
             <FadeIn direction="up" delay={0.1}>
                <div className="aspect-square rounded-2xl bg-white p-8 border border-slate-100 flex flex-col justify-center items-center text-center">
                  <Cpu size={40} className="text-yellow-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Optical Scanning</h4>
                  <p className="text-xs text-slate-400">Precision classification using latest sensors.</p>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-6 font-display uppercase tracking-tight">Ready to Elevate Your Project?</h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether it's a large-scale commercial development or a bespoke residential space, our team is here to provide the technical expertise and material quality Motto Group is known for.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onQuoteOpen}
                className="px-8 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-[10px] tracking-widest uppercase hover:bg-yellow-600 transition-all duration-300 shadow-xl shadow-slate-900/10"
              >
                Request Premium Quote
              </button>
              <a 
                href="/contact"
                className="px-8 py-3.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-[10px] tracking-widest uppercase hover:bg-slate-50 transition-all duration-300"
              >
                Personal Consultation
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
