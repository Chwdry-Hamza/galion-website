import { useEffect, useRef, useState } from 'react'
import heroCardImg from '../../assets/images/hero-card.jpg'

export default function HeroScroll() {
  const [selected, setSelected] = useState('personal')
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        const scrolled = Math.min(Math.max(-rect.top, 0), total)
        const progress = total > 0 ? scrolled / total : 0
        el.style.setProperty('--p', progress.toFixed(4))
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero-scroll" ref={scrollRef}>
      <div className="hero-scroll__sticky">
        <div className="hero-scroll__headline-wrap">
          <div className="hero__toggle" role="tablist" aria-label="Account type">
            <button
              type="button"
              role="tab"
              aria-selected={selected === 'personal'}
              className={`hero__toggle-btn ${selected === 'personal' ? 'is-active' : ''}`}
              onClick={() => setSelected('personal')}
            >
              Personal
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selected === 'business'}
              className={`hero__toggle-btn ${selected === 'business' ? 'is-active' : ''}`}
              onClick={() => setSelected('business')}
            >
              Business
            </button>
          </div>

          <h1 className="hero__headline">
            {selected === 'personal' ? (
              <>Pay, send, and save<br />smarter</>
            ) : (
              <>Accept payments and<br />grow faster</>
            )}
          </h1>
        </div>

        <div className="hero-card">
          <div className="hero-card__brand">Galion</div>
          <div
            className="hero-card__media"
            style={{ backgroundImage: `url(${heroCardImg})` }}
          >
            <span className="hero-card__word hero-card__word--tl">pay</span>
            <span className="hero-card__word hero-card__word--br">smarter</span>
          </div>
        </div>
      </div>
    </section>
  )
}
