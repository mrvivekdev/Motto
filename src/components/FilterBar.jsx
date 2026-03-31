import { motion } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'
import { SIZES, FINISHES, APPLICATIONS } from '../constants/products'

export default function FilterBar({ filters, setFilters, resultCount }) {
  const setFilter = (key, value) =>
    setFilters((prev) => ({ ...prev, [key]: value }))

  const clearAll = () =>
    setFilters({ size: 'All', finish: 'All', application: 'All' })

  const isActive = Object.values(filters).some((v) => v !== 'All')

  const groups = [
    { key: 'size', label: 'Size', options: SIZES },
    { key: 'finish', label: 'Finish', options: FINISHES },
    { key: 'application', label: 'Application', options: APPLICATIONS },
  ]

  return (
    <div className="sticky top-[64px] z-40 bg-[#fafaf8]/90 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <SlidersHorizontal size={14} />
            <span className="font-medium">Filter</span>
            <span className="text-slate-300">·</span>
            <span className="text-slate-400">{resultCount} product{resultCount !== 1 ? 's' : ''}</span>
          </div>
          {isActive && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={clearAll}
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full"
            >
              <X size={10} /> Clear all
            </motion.button>
          )}
        </div>

        {/* Filter Groups */}
        <div className="flex flex-wrap gap-y-3 gap-x-6">
          {groups.map(({ key, label, options }) => (
            <div key={key} className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 shrink-0 w-20 md:w-auto">
                {label}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {options.map((option) => {
                  const active = filters[key] === option
                  return (
                    <button
                      key={option}
                      id={`filter-${key}-${option.replace(/[^a-zA-Z0-9]/g, '-')}`}
                      onClick={() => setFilter(key, option)}
                      className={`text-[11px] font-medium px-3 py-1 rounded-full border transition-all duration-200 ${
                        active
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                      }`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
