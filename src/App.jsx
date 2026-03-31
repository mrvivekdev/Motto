import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LeadCaptureModal from './components/LeadCaptureModal'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import ProductsPage from './pages/Products'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'

export default function App() {
  const [quoteOpen, setQuoteOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#fafaf8]">
        <Header onQuoteOpen={() => setQuoteOpen(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home onQuoteOpen={() => setQuoteOpen(true)} />} />
            <Route path="/products" element={<ProductsPage onQuoteOpen={() => setQuoteOpen(true)} />} />
            <Route path="/about" element={<AboutPage onQuoteOpen={() => setQuoteOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback for catch-all or 404 */}
            <Route path="*" element={<Home onQuoteOpen={() => setQuoteOpen(true)} />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Quote Trigger for non-home pages if needed, 
            but we primarily use Header and Page buttons. 
            Keeping the modal logic global. */}
        <LeadCaptureModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
        
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
