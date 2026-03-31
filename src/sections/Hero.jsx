import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, ArrowRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/hero1.png',
    eyebrow: 'Large Format Collection',
    headline: 'Surfaces That\nDefine Spaces',
    sub: 'Factory-direct porcelain slabs up to 1200×2400mm — built for architects, designers, and visionaries.',
    cta: { label: 'Explore Products', href: '#products' },
  },
  {
    id: 2,
    image: '/hero2.png',
    eyebrow: 'Bathroom & Spa Series',
    headline: 'Timeless Luxury,\nEvery Detail',
    sub: 'Premium stone-effect and marble-finish tiles with globally certified quality standards for residential and hospitality projects.',
    cta: { label: 'View Gallery', href: '#products' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1600&q=90',
    eyebrow: 'Heritage Partnership',
    headline: 'Powered by\nMotto Group',
    sub: 'An authorised reseller of Motto Group — delivering factory-direct pricing with global export-grade quality.',
    cta: { label: 'Our Heritage', href: '#heritage' },
  },
]

function SlideIndicator({ count, current, onDotClick }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={`transition-all duration-400 rounded-full ${
            i === current
              ? 'w-8 h-1.5 bg-white'
              : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
          }`}
        />
      ))}
    </div>
  )
}

export default function Hero({ onQuoteOpen }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ])
  const [current, setCurrent] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i) => emblaApi?.scrollTo(i), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  return (
    <section id="hero" className="relative h-screen min-h-[560px] max-h-[900px] overflow-hidden bg-slate-900">
      {/* Carousel */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {slides.map((slide, i) => (
            <div key={slide.id} className="embla__slide h-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.headline.replace('\n', ' ')}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <motion.div
                    key={current === i ? 'active' : 'inactive'}
                    initial={{ opacity: 0, y: 30 }}
                    animate={current === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="max-w-xl"
                  >
                    <p className="text-yellow-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
                      {slide.eyebrow}
                    </p>
                    <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5 whitespace-pre-line">
                      {slide.headline}
                    </h1>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-md">
                      {slide.sub}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={slide.cta.href}
                        className="px-7 py-3.5 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-yellow-400 transition-colors duration-300 flex items-center gap-2"
                      >
                        {slide.cta.label} <ArrowRight size={14} />
                      </a>
                      <a
                        href="#catalogue"
                        className="px-7 py-3.5 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
                        onClick={(e) => { e.preventDefault(); onQuoteOpen() }}
                      >
                        <Download size={14} /> Download Catalogue
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        id="hero-prev"
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 flex items-center justify-center text-white transition-all duration-200"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={scrollNext}
        id="hero-next"
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur border border-white/20 flex items-center justify-center text-white transition-all duration-200"
      >
        <ChevronRight size={18} />
      </button>

      {/* Bottom controls */}
      <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-6 flex items-end justify-between">
        <SlideIndicator count={slides.length} current={current} onDotClick={scrollTo} />
        <p className="text-white/30 text-[11px] tracking-widest uppercase hidden md:block">
          Scroll to explore
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 hidden md:flex">
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
