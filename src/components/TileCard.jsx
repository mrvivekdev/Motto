import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowUpRight, Maximize2 } from 'lucide-react'

export default function TileCard({ product }) {
  const [detailOpen, setDetailOpen] = useState(false)

  const badgeColor = {
    Bestseller: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    New: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Premium: 'bg-slate-800 text-slate-100 border-slate-700',
    Exclusive: 'bg-violet-100 text-violet-800 border-violet-200',
    Signature: 'bg-slate-100 text-slate-700 border-slate-200',
  }[product.badge] || ''

  return (
    <>
      {/* Card */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-slate-100 cursor-pointer"
        onClick={() => setDetailOpen(true)}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-square bg-slate-50">
          <img
            src={product.image_url}
            alt={`${product.name} — ${product.finish} tile ${product.size}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          {/* Expand icon */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            <Maximize2 size={13} className="text-slate-700" />
          </div>
          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${badgeColor}`}>
              {product.badge}
            </span>
          )}
          {/* Bottom hover info */}
          <div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
            <p className="text-white/90 text-xs leading-relaxed line-clamp-2">{product.description}</p>
          </div>
        </div>

        {/* Info */}
        <div className="p-2.5 sm:p-3.5 pb-1.5 sm:pb-2">
          <p className="text-[8px] sm:text-[9px] font-bold tracking-[0.2em] uppercase text-yellow-600 mb-0.5 sm:mb-1">{product.series}</p>
          <h3 className="font-display font-bold text-slate-900 text-[13px] sm:text-sm leading-tight mb-1.5 sm:mb-2.5 h-8 sm:h-10 line-clamp-2">{product.name}</h3>
          <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap">
            <span className="text-[9px] sm:text-[10px] bg-slate-50 text-slate-500 border border-slate-100 px-1.5 sm:px-2 py-0.5 rounded-full">{product.size}</span>
            <span className="text-[9px] sm:text-[10px] bg-slate-50 text-slate-500 border border-slate-100 px-1.5 sm:px-2 py-0.5 rounded-full">{product.finish}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3.5 pb-3.5 hidden md:block">
          <button
            onClick={(e) => { e.stopPropagation(); setDetailOpen(true) }}
            className="w-full py-1.5 rounded-lg border border-slate-200 text-slate-600 text-[11px] font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-250 flex items-center justify-center gap-1.5"
          >
            Details <ArrowUpRight size={10} />
          </button>
        </div>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {detailOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={() => setDetailOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image panel */}
              <div className="relative overflow-hidden aspect-square md:aspect-auto bg-slate-100">
                <img
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border ${badgeColor}`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Content panel */}
              <div className="p-8 overflow-y-auto">
                <button
                  onClick={() => setDetailOpen(false)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                  aria-label="Close"
                >
                  <X size={14} className="text-slate-600" />
                </button>

                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-yellow-600 mb-2">{product.series}</p>
                <h2 className="font-display font-bold text-2xl text-slate-900 mb-1">{product.name}</h2>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">{product.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    { label: 'Size', value: product.size },
                    { label: 'Finish', value: product.finish },
                    { label: 'Material', value: product.material },
                    { label: 'Thickness', value: product.thickness },
                    { label: 'Color', value: product.color },
                    { label: 'Application', value: product.application.join(', ') },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-slate-50 rounded-lg p-3">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-slate-800">{value}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/919913142703?text=Hi! I'm interested in ${encodeURIComponent(product.name)} (${product.size}, ${product.finish}). Please send me pricing & samples.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold text-center transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setDetailOpen(false)}
                    className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold text-center hover:bg-slate-50 transition-colors duration-200"
                  >
                    Request Sample
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
