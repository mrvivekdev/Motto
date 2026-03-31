import Hero from '../sections/Hero'
import ProductGallery from '../sections/ProductGallery'
import FinishesSection from '../sections/Finishes'
import Heritage from '../sections/Heritage'
import BuilderSolutions from '../sections/BuilderSolutions'

export default function Home({ onQuoteOpen }) {
  return (
    <>
      <Hero onQuoteOpen={onQuoteOpen} />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-yellow-600 text-xs font-bold tracking-[0.2em] uppercase mb-4">The Collection</p>
          <h2 className="font-display font-bold text-slate-900 text-4xl md:text-5xl mb-6">Uncompromising Quality</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-12">
            Explore our curated selection of premium architectural surfaces, from large-format slabs to intricate mosaics.
          </p>
        </div>
        <ProductGallery onQuoteOpen={onQuoteOpen} />
      </section>
      <FinishesSection />
      <BuilderSolutions onQuoteOpen={onQuoteOpen} />
      <Heritage onQuoteOpen={onQuoteOpen} />
    </>
  )
}
