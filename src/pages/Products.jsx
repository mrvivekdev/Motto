import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, ExternalLink, Download, Search } from 'lucide-react'
import ProductGallery from '../sections/ProductGallery'
import PdfViewer from '../components/PdfViewer'
import { CATALOGS } from '../constants/catalogs'

export default function ProductsPage({ onQuoteOpen }) {
  const [selectedCatalog, setSelectedCatalog] = useState(null)
  const [search, setSearch] = useState('')

  const filteredCatalogs = CATALOGS.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.title.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0)

  return (
    <div className="pt-32 pb-24 bg-[#fafaf8]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-yellow-600 text-xs font-bold tracking-[0.25em] uppercase mb-4">Our Collection</p>
            <h1 className="font-display font-bold text-slate-900 text-5xl md:text-6xl leading-tight mb-6">
              Architectural <br />
              <span className="text-slate-400">Surface Gallery</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-lg">
              Explore our full range of premium porcelain and sintered stone surfaces — from live product filters to detailed technical catalogs.
            </p>
          </motion.div>

          {/* Search / Tab Switcher (Visual only for now) */}
          <div className="flex flex-col md:flex-row items-center gap-4">
             <div className="relative w-full max-w-sm">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search series or sizes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition shadow-sm"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Main Content Tabs (Products / Catalogs) */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          
          {/* Section 1: Live Gallery */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-display font-bold text-2xl text-slate-900">Live Product Filters</h2>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <ProductGallery hideHeader={true} onQuoteOpen={onQuoteOpen} />
          </section>

          {/* Section 2: PDF Catalogs */}
          <section id="catalogs">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-display font-bold text-2xl text-slate-900">Technical Catalogs</h2>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="space-y-16">
              {filteredCatalogs.map((category, idx) => (
                <div key={category.category}>
                  <h3 className="font-display font-semibold text-slate-400 text-sm tracking-widest uppercase mb-8 ml-1">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-yellow-400/30 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-yellow-50 group-hover:text-yellow-600 transition-colors">
                            <FileText size={24} />
                          </div>
                          <a 
                            href={`/catalogs/${item.file}`} 
                            download 
                            className="p-2 text-slate-300 hover:text-slate-600 transition-colors"
                            title="Download PDF"
                          >
                            <Download size={18} />
                          </a>
                        </div>
                        <h4 className="font-display font-bold text-slate-900 text-lg leading-tight mb-2 pr-4">{item.title}</h4>
                        <p className="text-slate-400 text-xs font-medium tracking-wide mb-6">Motto Group Premium Series</p>
                        
                        <button
                          onClick={() => setSelectedCatalog(item)}
                          className="w-full py-3 rounded-xl bg-slate-50 text-slate-600 text-sm font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          View Catalog <ExternalLink size={14} />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <PdfViewer
        isOpen={!!selectedCatalog}
        onClose={() => setSelectedCatalog(null)}
        fileUrl={selectedCatalog ? `/catalogs/${selectedCatalog.file}` : ''}
        title={selectedCatalog?.title}
      />
    </div>
  )
}
