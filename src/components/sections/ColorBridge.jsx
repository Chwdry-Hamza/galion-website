import { useEffect, useRef } from 'react'
import './ColorBridge.css'

export default function ColorBridge({ variant = 'white-to-navy' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const total = rect.height - vh
        if (total <= 0) {
          el.style.setProperty('--bridge-p', '0')
          return
        }
        const scrolled = Math.min(Math.max(-rect.top, 0), total)
        const progress = scrolled / total
        el.style.setProperty('--bridge-p', progress.toFixed(4))
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
    <div
      className={`color-bridge color-bridge--${variant}`}
      ref={ref}
      aria-hidden="true"
    >
      <div className="color-bridge__sticky" />
    </div>
  )
}
