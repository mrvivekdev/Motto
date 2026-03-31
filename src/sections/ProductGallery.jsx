import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, LayoutList, Sparkles, Download } from "lucide-react";
import { products } from "../constants/products";
import FilterBar from "../components/FilterBar";
import TileCard from "../components/TileCard";

export default function ProductGallery({ hideHeader = false, onQuoteOpen }) {
  const [filters, setFilters] = useState({
    size: "All",
    finish: "All",
    application: "All",
  });
  const [view, setView] = useState("grid"); // 'grid' | 'large'

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const sizeMatch = filters.size === "All" || p.size === filters.size;
      const finishMatch =
        filters.finish === "All" || p.finish === filters.finish;
      const appMatch =
        filters.application === "All" ||
        p.application.includes(filters.application);
      return sizeMatch && finishMatch && appMatch;
    });
  }, [filters]);

  return (
    <section id="products" className="min-h-screen bg-[#fafaf8]">
      {/* Section header */}
      {!hideHeader && (
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-50 border border-yellow-200 mb-5">
                <Sparkles size={11} className="text-yellow-600" />
                <span className="text-yellow-700 text-[11px] font-bold tracking-[0.2em] uppercase">
                  Premium Collection
                </span>
              </div>
              <h2 className="font-display font-bold text-slate-900 text-4xl md:text-5xl leading-tight">
                Explore the Gallery
              </h2>
              <p className="text-slate-500 text-base mt-3 max-w-lg">
                Filter by size, finish, or application to find the perfect
                surface for your project. Click any tile to see full
                specifications.
              </p>
            </div>
            {/* View toggle */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg self-start md:self-auto">
              <button
                id="view-grid"
                onClick={() => setView("grid")}
                className={`p-2 rounded-md transition-all duration-200 ${view === "grid" ? "bg-white shadow-sm text-slate-900" : "text-slate-400 hover:text-slate-700"}`}
                aria-label="Grid view"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                id="view-large"
                onClick={() => setView("large")}
                className={`p-2 rounded-md transition-all duration-200 ${view === "large" ? "bg-white shadow-sm text-slate-900" : "text-slate-400 hover:text-slate-700"}`}
                aria-label="Large view"
              >
                <LayoutList size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Sticky filter bar */}
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        resultCount={filtered.length}
      />

      {/* Product grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <AnimatePresence mode="sync">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-28 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                <Sparkles size={24} className="text-slate-400" />
              </div>
              <h3 className="font-display font-semibold text-slate-700 text-xl mb-2">
                No tiles match your filters
              </h3>
              <p className="text-slate-400 text-sm">
                Try adjusting your selection or clear all filters.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              layout
              className={`grid gap-3 md:gap-6 ${
                view === "grid"
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              <AnimatePresence>
                {filtered.map((product) => (
                  <TileCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left font-medium">
            Can't find what you need? We have <strong>500+ designs</strong> in
            our full catalogue.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={onQuoteOpen}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-slate-900 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-yellow-600 transition-all duration-300 shadow-lg shadow-slate-900/10"
            >
              Get a Quote
            </button>
            <a
              href="https://wa.me/919913142703?text=Hi! I'd like to request the full Motto Tiles product catalogue."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-xl border border-slate-200 text-slate-600 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Catalogue <Download size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
