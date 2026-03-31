import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Loader2 } from 'lucide-react'

// Set up worker for react-pdf using Vite-compatible URL
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export default function PdfViewer({ isOpen, onClose, fileUrl, title }) {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)

  // Reset page when file changes
  useEffect(() => {
    setPageNumber(1)
    setScale(1.0)
  }, [fileUrl])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

  const changePage = (offset) => setPageNumber(prev => Math.min(Math.max(1, prev + offset), numPages))
  const zoom = (delta) => setScale(prev => Math.min(Math.max(0.5, prev + delta), 2.5))

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md"
      >
        {/* Header Controls */}
        <div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-between px-6 bg-slate-900 shadow-xl border-b border-white/10 z-10">
          <div className="flex items-center gap-4">
            <button onClick={onClose} className="p-2 text-white/70 hover:text-white transition-colors">
              <X size={24} />
            </button>
            <h3 className="text-white font-display font-medium hidden md:block">{title}</h3>
          </div>

          <div className="flex items-center gap-4 bg-white/5 p-1 rounded-full border border-white/10">
            <button onClick={() => zoom(-0.2)} className="p-2 text-white/50 hover:text-white transition-colors" title="Zoom Out"><ZoomOut size={18} /></button>
            <span className="text-white/70 text-xs font-mono min-w-[3rem] text-center">{Math.round(scale * 100)}%</span>
            <button onClick={() => zoom(0.2)} className="p-2 text-white/50 hover:text-white transition-colors" title="Zoom In"><ZoomIn size={18} /></button>
          </div>

          <div className="flex items-center gap-3">
             <a href={fileUrl} download className="p-2 text-white/70 hover:text-white transition-colors" title="Download">
              <Download size={20} />
            </a>
          </div>
        </div>

        {/* PDF Container */}
        <div className="w-full h-full pt-16 flex overflow-auto justify-center select-none custom-scrollbar">
          <div className="p-6 transition-all duration-300">
            <Document
              file={fileUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex flex-col items-center justify-center p-20 gap-4">
                  <Loader2 className="text-yellow-400 animate-spin" size={40} />
                  <p className="text-white/50 text-sm font-display tracking-widest uppercase">Initialising document...</p>
                </div>
              }
              error={
                <div className="text-white/50 text-center p-20">
                  <p>Failed to load catalog. Please check the file path.</p>
                </div>
              }
            >
              <Page 
                pageNumber={pageNumber} 
                scale={scale} 
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-2xl rounded-sm overflow-hidden"
              />
            </Document>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-slate-800/80 backdrop-blur rounded-full px-6 py-3 border border-white/10 shadow-2xl z-10 transition-transform hover:scale-105">
          <button 
            onClick={() => changePage(-1)} 
            disabled={pageNumber <= 1}
            className="text-white disabled:opacity-30 hover:text-yellow-400 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center gap-2 text-white/80 font-display text-sm min-w-[4rem] justify-center">
            <span className="text-white font-bold">{pageNumber}</span>
            <span className="text-white/30">/</span>
            <span>{numPages || '––'}</span>
          </div>

          <button 
            onClick={() => changePage(1)} 
            disabled={pageNumber >= numPages}
            className="text-white disabled:opacity-30 hover:text-yellow-400 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
