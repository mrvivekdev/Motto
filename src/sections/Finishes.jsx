import { motion } from 'framer-motion'

const finishShowcase = [
  {
    name: 'High Gloss',
    desc: 'Mirror-polished surface that amplifies light and adds dramatic depth to any interior.',
    bg: 'bg-gradient-to-br from-slate-100 to-white',
    border: 'border-slate-200',
  },
  {
    name: 'Matt',
    desc: 'Understated, non-reflective finish. Ideal for rustic, industrial, and nature-inspired aesthetics.',
    bg: 'bg-gradient-to-br from-stone-200 to-stone-100',
    border: 'border-stone-200',
  },
  {
    name: 'Carving',
    desc: 'Three-dimensional surface relief created with precision moulding for tactile, sculptural interiors.',
    bg: 'bg-gradient-to-br from-zinc-200 to-zinc-100',
    border: 'border-zinc-200',
  },
  {
    name: 'Lappato',
    desc: 'Semi-polished finish combining the warmth of matt with subtle gloss — a sophisticated middle ground.',
    bg: 'bg-gradient-to-br from-amber-50 to-amber-100',
    border: 'border-amber-200',
  },
]

export default function FinishesSection() {
  return (
    <section id="finishes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-600 text-xs font-bold tracking-[0.25em] uppercase mb-3">Surface Finishes</p>
          <h2 className="font-display font-bold text-slate-900 text-4xl md:text-5xl">Crafted for Every Vision</h2>
          <p className="text-slate-500 text-base mt-4 max-w-lg mx-auto">
            Each finish is engineered to complement specific architectural contexts and project requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {finishShowcase.map((finish, i) => (
            <motion.div
              key={finish.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border ${finish.border} overflow-hidden group cursor-default`}
            >
              <div className={`h-36 ${finish.bg} flex items-center justify-center`}>
                <div className={`w-20 h-20 rounded-xl ${finish.bg} border ${finish.border} shadow-inner group-hover:scale-105 transition-transform duration-300`} />
              </div>
              <div className="p-5 bg-white">
                <h3 className="font-display font-semibold text-slate-900 text-base mb-1.5">{finish.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{finish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
