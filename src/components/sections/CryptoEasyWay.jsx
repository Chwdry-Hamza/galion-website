import { useEffect, useRef } from 'react'

const CRYPTO_LIST = [
  { name: 'Galion USD', symbol: 'G' },
  { name: 'Bitcoin', symbol: '₿' },
  { name: 'Ethereum', symbol: 'Ξ' },
  { name: 'Litecoin', symbol: 'Ł' },
]

export default function CryptoEasyWay() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const start = vh * 0.85
        const end = vh * 0.15
        const current = rect.top
        const progress = Math.min(Math.max((start - current) / (start - end), 0), 1)
        el.style.setProperty('--easy-p', progress.toFixed(4))
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
    <section className="crypto-easy" ref={sectionRef}>
      <div className="container crypto-easy__inner">
        <div className="crypto-easy__text">
          <h2 className="crypto-easy__title">
            Crypto the<br />easy way
          </h2>
          <p className="crypto-easy__desc">
            Crypto curious? Confidently buy, sell, and transfer your crypto
            on Galion. Get peace of mind knowing we don&rsquo;t share your
            full financial information.<sup>12</sup>
          </p>
          <button type="button" className="crypto-easy__btn">Explore Crypto</button>
        </div>

        <div className="crypto-easy__visual">
          <div className="crypto-easy__coins">
            <div className="crypto-coin crypto-coin--gold">
              <span className="crypto-coin__glyph">₿</span>
            </div>
            <div className="crypto-coin crypto-coin--blue">
              <span className="crypto-coin__glyph">₽</span>
            </div>
            <div className="crypto-coin crypto-coin--dark">
              <span className="crypto-coin__glyph">Ξ</span>
            </div>
            <div className="crypto-coin crypto-coin--steel">
              <span className="crypto-coin__glyph">Ł</span>
            </div>
          </div>
          <div className="crypto-card">
            <div className="crypto-card__header">Crypto</div>
            <div className="crypto-card__tabs">
              {['Buy', 'Sell', 'Send', 'Receive'].map((t) => (
                <span key={t} className="crypto-card__tab">{t}</span>
              ))}
            </div>
            <ul className="crypto-card__list">
              {CRYPTO_LIST.map((c) => (
                <li key={c.name} className="crypto-card__item">
                  <span className="crypto-card__icon">{c.symbol}</span>
                  <span className="crypto-card__name">{c.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
