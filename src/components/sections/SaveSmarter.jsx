import { useEffect, useRef } from 'react'
import saveSmarterImg from '../../assets/images/image_b47dd024.png'

export default function SaveSmarter() {
  const riseRef = useRef(null)

  useEffect(() => {
    const el = riseRef.current
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
        const downStart = isMobile ? 0.38 : 0.25
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
    <section className="save-smarter">
      <div
        ref={riseRef}
        className="save-smarter__media"
        style={{ backgroundImage: `url(${saveSmarterImg})` }}
      >
        <span className="save-smarter__word save-smarter__word--tl">save</span>
        <span className="save-smarter__word save-smarter__word--br">smarter</span>
      </div>
    </section>
  )
}
