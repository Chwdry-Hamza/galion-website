import { useEffect, useRef } from 'react'
import './SafetyPrivacy.css'
import safetyPrivacyImg from '../../assets/images/pexels-gustavo-fring-4148845.jpg'
import safetyPrivacyTopImg from '../../assets/images/pexels-silverkblack-36812950.jpg'

export default function SafetyPrivacy() {
  const safetyRef = useRef(null)
  const safetyRiseRef = useRef(null)

  useEffect(() => {
    const el = safetyRef.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const imageCenter = rect.top + rect.height / 2
        const start = vh / 2
        const end = -rect.height / 2
        const progress = Math.min(Math.max((start - imageCenter) / (start - end), 0), 1)
        el.style.setProperty('--safety-p', progress.toFixed(4))
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

  useEffect(() => {
    const el = safetyRiseRef.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const isMobile = window.innerWidth <= 720
        const start = vh * 0.55
        const end = isMobile ? vh * -0.8 : vh * -1.2
        const current = rect.top
        const progress = Math.min(Math.max((start - current) / (start - end), 0), 1)
        el.style.setProperty('--rise-p', progress.toFixed(4))
        const textProgress = Math.min(progress * 4, 1)
        el.style.setProperty('--rise-text-p', textProgress.toFixed(4))
        const textProgressFast = Math.min(progress * 8, 1)
        el.style.setProperty('--rise-text-p-fast', textProgressFast.toFixed(4))
        const downStart = isMobile ? 0.31 : 0.23
        const downProgress = Math.min(Math.max((progress - downStart) / (1 - downStart), 0), 1)
        el.style.setProperty('--rise-down-p', downProgress.toFixed(4))
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
    <section className="safety-privacy">
      <div className="container">
        <h2 className="safety-privacy__title">
          Safety and privacy<br />are built in
        </h2>
        <div ref={safetyRef} className="safety-privacy__fade">
          <div
            className="safety-privacy__media"
            style={{ backgroundImage: `url(${safetyPrivacyImg})` }}
            aria-hidden="true"
          />
          <div className="safety-privacy__caption">
            <p className="safety-privacy__desc">
              Your payments are encrypted and we don&rsquo;t share<br />your full financial info
            </p>
            <button type="button" className="safety-privacy__btn">
              See How You&rsquo;re Safe
            </button>
          </div>
        </div>
        <div
          ref={safetyRiseRef}
          className="safety-privacy__media safety-privacy__media--bottom"
          style={{ backgroundImage: `url(${safetyPrivacyTopImg})` }}
        >
          <span className="safety-privacy__word safety-privacy__word--tl">send</span>
          <span className="safety-privacy__word safety-privacy__word--br">smarter</span>
        </div>
      </div>
    </section>
  )
}
