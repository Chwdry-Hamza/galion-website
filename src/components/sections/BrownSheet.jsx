import { useEffect, useRef, useState } from 'react'
import './BrownSheet.css'
import sendPizzaImg from '../../assets/images/istockphoto-2209673866-612x612.jpg'
import restaurantsImg from '../../assets/images/restaurants.jpg'
import featureSplitImg from '../../assets/images/feature-split.webp'
import safetyPrivacyImg from '../../assets/images/pexels-gustavo-fring-4148845.jpg'

const TAB_OPTIONS = ['Send', 'Receive', 'Split', 'Pool']

export default function BrownSheet() {
  const [sendOption, setSendOption] = useState('Send')
  const brownSheetRef = useRef(null)

  const touchStartX = useRef(null)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(dx) < 40) return
    setSendOption((prev) => {
      const idx = TAB_OPTIONS.indexOf(prev)
      const next = dx < 0 ? idx + 1 : idx - 1
      const wrapped = (next + TAB_OPTIONS.length) % TAB_OPTIONS.length
      return TAB_OPTIONS[wrapped]
    })
  }

  useEffect(() => {
    const el = brownSheetRef.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      if (window.innerWidth <= 720) return
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const total = rect.height - vh
        if (total <= 0) return
        const scrolled = Math.min(Math.max(-rect.top, 0), total)
        const progress = scrolled / total
        const tabProgress = Math.min(progress / 0.75, 1)
        const idx = Math.min(TAB_OPTIONS.length - 1, Math.floor(tabProgress * TAB_OPTIONS.length))
        setSendOption((prev) => (prev === TAB_OPTIONS[idx] ? prev : TAB_OPTIONS[idx]))
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

  const sendOptionContent = {
    Send: {
      variant: 'transfer',
      caption: 'Send in seconds.',
      cta: 'Send Money',
      photo: sendPizzaImg,
      cardTitle: (
        <>Yesterday&rsquo;s <span aria-hidden="true">🍕</span> dinner!</>
      ),
      price: '$14',
      status: 'Sending',
      cardBtn: 'Share Galion Link',
    },
    Receive: {
      variant: 'transfer',
      caption: 'Request money easily.',
      cta: 'Get Paid',
      photo: restaurantsImg,
      cardTitle: (
        <>Brunch was great! <span aria-hidden="true">🥐</span><br />Here&rsquo;s your share</>
      ),
      price: '$24',
      status: 'Requesting',
      cardBtn: 'Share Galion Link',
    },
    Split: {
      variant: 'split',
      caption: 'Simply split the bill with friends and family.',
      cta: 'Share Costs',
      photo: featureSplitImg,
      cardTitle: 'Split money from your contacts',
      contacts: [
        { initial: 'J', name: 'Jenny W.', amount: '$55' },
        { initial: 'T', name: 'Tiffany T.', amount: '$55' },
      ],
      total: '$110',
    },
    Pool: {
      variant: 'pool',
      caption: (
        <>Pool money up front for group<br />gifts and more.<sup>10</sup></>
      ),
      cta: 'Start a Pool',
      photo: safetyPrivacyImg,
      cardTitle: 'Adam’s Gift',
      price: '$250',
      cardBtn: 'Transfer',
    },
  }
  const c = sendOptionContent[sendOption] ?? sendOptionContent.Send

  return (
    <section className="brown-sheet" ref={brownSheetRef}>
      <h2 className="brown-sheet__headline">
        Send money to just<br />
        about<br />
        anyone, anywhere<sup>8</sup>
      </h2>
      <div className="brown-sheet__stage">
        <div className="send-feature">
          <div className="send-feature__left">
            <div className="word-stack" role="tablist" aria-label="Send options">
              {TAB_OPTIONS.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  role="tab"
                  aria-selected={sendOption === opt}
                  className={`word-stack__word ${sendOption === opt ? 'word-stack__word--active' : ''}`}
                  onClick={() => setSendOption(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="send-feature__info" key={sendOption}>
              <p className="send-feature__caption">{c.caption}</p>

              <button type="button" className="send-feature__cta">{c.cta}</button>

              <p
                className="send-feature__footnote"
                style={{ visibility: sendOption === 'Send' ? 'visible' : 'hidden' }}
              >
                <sup>9</sup> An account with Galion is required to create a
                link. Galion links must be created in the Galion app.
              </p>
            </div>
          </div>

          <div className="send-feature__right">
            <div
              key={sendOption}
              className="send-feature__photo"
              style={{ backgroundImage: `url(${c.photo})` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {c.variant === 'transfer' && (
                <div className="send-feature__card">
                  <p className="send-feature__card-title">{c.cardTitle}</p>
                  <div className="send-feature__card-amount">
                    <p className="send-feature__card-brand">Galion</p>
                    <p className="send-feature__card-price">{c.price}</p>
                    <p className="send-feature__card-status">{c.status}</p>
                  </div>
                  <button type="button" className="send-feature__card-btn">
                    {c.cardBtn}
                  </button>
                </div>
              )}

              {c.variant === 'split' && (
                <div className="send-feature__card send-feature__card--split">
                  <p className="send-feature__card-title">{c.cardTitle}</p>
                  <ul className="send-feature__contacts">
                    {c.contacts.map((p) => (
                      <li key={p.name} className="send-feature__contact">
                        <span className="send-feature__contact-avatar">{p.initial}</span>
                        <span className="send-feature__contact-name">{p.name}</span>
                        <span className="send-feature__contact-amount">{p.amount}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="send-feature__split-total">{c.total}</p>
                </div>
              )}

              {c.variant === 'pool' && (
                <div className="send-feature__card send-feature__card--pool">
                  <p className="send-feature__pool-header">
                    <span className="send-feature__pool-arrow" aria-hidden="true">→</span>
                    <span>{c.cardTitle}</span>
                  </p>
                  <div className="send-feature__pool-icon" aria-hidden="true">🎧</div>
                  <p className="send-feature__pool-amount">{c.price}</p>
                  <button type="button" className="send-feature__card-btn">
                    {c.cardBtn}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
