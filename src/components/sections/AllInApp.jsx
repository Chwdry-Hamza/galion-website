import { useEffect, useRef } from 'react'
import './AllInApp.css'

export default function AllInApp() {
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
        const start = vh * 0.9
        const end = vh * 0.1
        const current = rect.top
        const progress = Math.min(Math.max((start - current) / (start - end), 0), 1)
        el.style.setProperty('--app-p', progress.toFixed(4))
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
    <section className="all-in-app" ref={ref}>
      <div className="all-in-app__inner">
        <h2 className="all-in-app__title">
          <span className="all-in-app__line all-in-app__line--1">All in the</span>
          <span className="all-in-app__line all-in-app__line--2">Galion</span>
          <span className="all-in-app__line all-in-app__line--3">app</span>
        </h2>
      </div>
    </section>
  )
}
