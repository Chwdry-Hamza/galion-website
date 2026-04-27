import { useEffect, useRef, useState } from 'react'
import heroCardImg from '../assets/images/hero-card.jpg'
import featureSplitImg from '../assets/images/feature-split.webp'
import payIn4Img from '../assets/images/pay-in-4.jpg'
import payMonthlyImg from '../assets/images/pay-monthly.webp'
import payInStoreImg from '../assets/images/surfer.png'
import creditCardImg from '../assets/images/Free-Floating-Credit-Cards-Mockup-PSD.webp'
import creditFinancingImg from '../assets/images/credit-card-financing.png'
import adidasImg from '../assets/images/adidas-gazelle.jpg'
import sonyImg from '../assets/images/sony-headphones.jpg'
import adidasLogo from '../assets/images/adidas-logo.jpg'
import sonyLogo from '../assets/images/sony-logo.webp'
import instacartLogo from '../assets/images/instacart-logo.png'
import instacartImg from '../assets/images/instacart-carrots.jpg'
import flowersLogo from '../assets/images/flowers-logo.png'
import flowersImg from '../assets/images/flowers-bouquet.avif'
import originsLogo from '../assets/images/origins-logo.png'
import originsImg from '../assets/images/origins-product.jpg'
import nobullLogo from '../assets/images/nobull-logo.webp'
import nobullImg from '../assets/images/nobull-shoe.jpg'
import ticketmasterLogo from '../assets/images/ticketmaster-logo.jpg'
import ticketmasterImg from '../assets/images/ticketmaster-event.jpg'
import apparelImg from '../assets/images/apparel.webp'
import restaurantsImg from '../assets/images/restaurants.jpg'
import fuelImg from '../assets/images/fuel.webp'
import rideshareImg from '../assets/images/rideshare.jpg'
import groceriesImg from '../assets/images/groceries.jpg'

export default function Home() {
  const [selected, setSelected] = useState('personal')
  const scrollRef = useRef(null)
  const catsRef = useRef(null)
  const brandsRef = useRef(null)

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

  useEffect(() => {
    const el = brandsRef.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const start = vh
        const end = -rect.height + vh * 0.3
        const current = rect.top
        const progress = Math.min(Math.max((start - current) / (start - end), 0), 1)
        el.style.setProperty('--brands-p', progress.toFixed(4))
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
    const el = catsRef.current
    if (!el) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        // Animate from when section top is at 85% viewport (start)
        // to when section top is at 25% viewport (end) — completes while section is in view.
        const start = vh * 0.85
        const end = vh * 0.25
        const current = rect.top
        const progress = Math.min(Math.max((start - current) / (start - end), 0), 1)
        el.style.setProperty('--cta-p', progress.toFixed(4))
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
    <div className="home-page">
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

      <section className="feature-split">
        <div className="container feature-split__inner">
          <div className="feature-split__text">
            <h2 className="feature-split__title">
              Shop in<br />stores<br />and online
            </h2>
            <p className="feature-split__desc">
              Tap to pay in stores with the Galion Debit Card<sup>1</sup> and
              earn rewards<sup>2</sup> online with Galion checkout.
            </p>
          </div>
          <div
            className="feature-split__media"
            style={{ backgroundImage: `url(${featureSplitImg})` }}
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="brands" ref={brandsRef}>
        <div className="container">
          <h2 className="brands__title">Get cash back on the<br />brands you love</h2>

          <div className="brands__grid">
            <div className="brands__col brands__col--left">
              {leftBrands.map((b, i) => (
                <BrandCard key={i} brand={b} tall={b.tall} />
              ))}
            </div>

            <div className="brands__col brands__col--center">
              {centerBrands.map((b, i) => (
                <BrandCard key={i} brand={b} tall={b.tall} />
              ))}
              <div className="brands-cta brands-cta--desktop">
                <div className="brands-cta__pct">
                  7<sup>%</sup>
                </div>
                <div className="brands-cta__label">cash back</div>
                <p className="brands-cta__text">
                  Get hundreds of cash back offers.<sup>3</sup>
                </p>
                <button type="button" className="brands-cta__btn">Browse Offers</button>
                <p className="brands-cta__fine">
                  Check offers for details. Terms and exclusions apply.
                </p>
              </div>
            </div>

            <div className="brands__col brands__col--right">
              {rightBrands.map((b, i) => (
                <BrandCard key={i} brand={b} tall={b.tall} />
              ))}
            </div>
          </div>

          <div className="brands-cta brands-cta--mobile">
            <div className="brands-cta__pct">
              7<sup>%</sup>
            </div>
            <div className="brands-cta__label">cash back</div>
            <p className="brands-cta__text">
              Get hundreds of cash back offers.<sup>3</sup>
            </p>
            <button type="button" className="brands-cta__btn">Browse Offers</button>
            <p className="brands-cta__fine">
              Check offers for details. Terms and exclusions apply.
            </p>
          </div>

          <div className="brands-cta brands-cta--alt cats-cta--mobile">
            <div className="brands-cta__pct">
              +5<sup>%</sup>
            </div>
            <div className="brands-cta__label">cash back</div>
            <p className="brands-cta__text">
              Also get 5% on purchases in your monthly category<sup>3</sup>{' '}
              when you check out with your Galion Debit Card.
            </p>
            <button type="button" className="brands-cta__btn">Get the Debit Card</button>
            <p className="brands-cta__fine">
              5% cash back earned on up to $1000 of selected category spend
              per month. Cash back awarded as points that can be redeemed
              for cash or other options. Terms apply.
            </p>
          </div>

          <div className="cats-grid" ref={catsRef}>
            <div className="brands__col brands__col--left">
              {leftCats.map((c, i) => (
                <CategoryCard key={i} cat={c} />
              ))}
            </div>

            <div className="cats-grid__center">
              <div className="brands-cta brands-cta--alt cats-cta--desktop">
                <div className="brands-cta__pct">
                  +5<sup>%</sup>
                </div>
                <div className="brands-cta__label">cash back</div>
                <p className="brands-cta__text">
                  Also get 5% on purchases in your monthly category<sup>3</sup>{' '}
                  when you check out with your Galion Debit Card.
                </p>
                <button type="button" className="brands-cta__btn">Get the Debit Card</button>
                <p className="brands-cta__fine">
                  5% cash back earned on up to $1000 of selected category spend
                  per month. Cash back awarded as points that can be redeemed
                  for cash or other options. Terms apply.
                </p>
              </div>
            </div>

            <div className="brands__col brands__col--right">
              {rightCats.map((c, i) => (
                <CategoryCard key={i} cat={c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pay-choice">
        <div className="container">
          <h2 className="pay-choice__title">
            Pay now or pay over time.<br />It&rsquo;s your choice.
          </h2>
        </div>
      </section>

      <div className="pay-stack">
        <section className="pay-in-4 pay-stack__item">
          <div className="container pay-in-4__inner">
            <div className="pay-in-4__panel">
              <h2 className="pay-in-4__title">
                Pay in 4<br />interest-free<br />payments
              </h2>
              <div className="pay-in-4__bottom">
                <p className="pay-in-4__desc">
                  Paid every two weeks.<br className="mobile-br" />
                  {' '}No late fees. Won&rsquo;t<br className="mobile-br" />
                  {' '}affect your credit score<br className="mobile-br" />
                  {' '}to apply.<sup>4</sup>
                </p>
                <button type="button" className="pay-in-4__btn">
                  Learn About Pay<br className="mobile-br" />{' '}in 4
                </button>
              </div>
            </div>
            <div
              className="pay-in-4__media"
              style={{ backgroundImage: `url(${payIn4Img})` }}
              aria-hidden="true"
            />
          </div>
        </section>

        <section className="pay-in-4 pay-monthly pay-stack__item">
          <div className="container pay-in-4__inner">
            <div className="pay-in-4__panel pay-in-4__panel--blue">
              <h2 className="pay-in-4__title">
                Pay Monthly in 3,<br />6, 12, or 24<br />payments
              </h2>
              <div className="pay-in-4__bottom">
                <p className="pay-in-4__desc">
                  With $0 down.<br />
                  No sign-up fees<br className="mobile-br" />
                  {' '}or late fees.<sup>5</sup>
                </p>
                <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                  Learn About<br className="mobile-br" />{' '}Pay Monthly
                </button>
              </div>
            </div>
            <div
              className="pay-in-4__media pay-in-4__media--full pay-in-4__media--monthly"
              style={{ backgroundImage: `url(${payMonthlyImg})` }}
              aria-hidden="true"
            />
          </div>
        </section>

        <section className="pay-in-4 pay-in-store pay-stack__item">
          <div className="container pay-in-4__inner">
            <div className="pay-in-4__panel pay-in-4__panel--gray">
              <h2 className="pay-in-4__title">
                Pay Monthly<br />in store<sup>5</sup>
              </h2>
              <div className="pay-in-4__bottom">
                <p className="pay-in-4__desc">
                  Buy an item you&rsquo;d like<br className="mobile-br" />
                  {' '}to purchase now but would<br className="mobile-br" />
                  {' '}prefer to pay for over time.
                </p>
                <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                  Learn About Pay<br className="mobile-br" />{' '}Monthly In Store
                </button>
              </div>
            </div>
            <div
              className="pay-in-4__media pay-in-4__media--full pay-in-4__media--surfer"
              style={{ backgroundImage: `url(${payInStoreImg})` }}
              aria-hidden="true"
            />
          </div>
        </section>

        <section className="pay-in-4 pay-cashback pay-stack__item">
          <div className="container pay-in-4__inner">
            <div className="pay-in-4__panel pay-in-4__panel--peach">
              <h2 className="pay-in-4__title">
                Pay with the<br />Galion Cashback<br />Mastercard<sup>&reg;</sup>
              </h2>
              <div className="pay-in-4__bottom">
                <p className="pay-in-4__desc">
                  Earn 3% cash back when<br className="mobile-br" />
                  {' '}you check out with Galion<br className="mobile-br" />
                  {' '}and 1.5% on all other<br className="mobile-br" />
                  {' '}Mastercard purchases.<sup>6</sup>
                </p>
                <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                  Apply for<br className="mobile-br" />{' '}the Credit Card
                </button>
              </div>
            </div>
            <div
              className="pay-in-4__media pay-in-4__media--full"
              style={{ backgroundImage: `url(${creditCardImg})` }}
              aria-hidden="true"
            />
          </div>
        </section>

        <section className="pay-in-4 pay-financing pay-stack__item">
          <div className="container pay-in-4__inner">
            <div className="pay-in-4__panel pay-in-4__panel--gray">
              <h2 className="pay-in-4__title">
                Special financing<br />with the Galion<br />Credit Card
              </h2>
              <div className="pay-in-4__bottom">
                <p className="pay-in-4__desc">
                  Enjoy special financing<br className="mobile-br" />
                  {' '}on all purchases of $149+<br className="mobile-br" />
                  {' '}everywhere Galion or<br className="mobile-br" />
                  {' '}Mastercard is accepted.<sup>7</sup>
                </p>
                <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="pay-in-4__media pay-in-4__media--full pay-in-4__media--financing"
              style={{ backgroundImage: `url(${creditFinancingImg})` }}
              aria-hidden="true"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

function CategoryCard({ cat }) {
  return (
    <article className="cat-card" style={{ background: cat.bg }}>
      <span className="cat-card__label">{cat.name}</span>
    </article>
  )
}

function BrandCard({ brand, tall }) {
  const classes = [
    'brand-card',
    tall ? 'brand-card--tall' : '',
    brand.mobileHide ? 'brand-card--mobile-hide' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article
      className={classes}
      style={{ background: brand.bg, '--mobile-order': brand.mobileOrder ?? 99 }}
    >
      <div className="brand-card__chip">
        <span className="brand-card__chip-dot" style={{ background: brand.dot }}>
          {brand.logo ? (
            <img src={brand.logo} alt={`${brand.name} logo`} className="brand-card__chip-logo" />
          ) : (
            brand.name[0]
          )}
        </span>
        <span className="brand-card__chip-name">{brand.name}</span>
      </div>
      <div className="brand-card__art" style={{ background: brand.art }} />
    </article>
  )
}

const leftBrands = [
  { name: 'Adidas',         bg: '#ececec', dot: '#fff',    logo: adidasLogo, art: `url(${adidasImg}) center top/cover no-repeat, #ececec`, tall: false, mobileOrder: 1 },
  { name: '1-800-flowers',  bg: '#f5f5f5', dot: '#fff',    logo: flowersLogo, art: `url(${flowersImg}) center top/cover no-repeat, #f5f5f5`, tall: true,  mobileOrder: 4 },
]

const centerBrands = [
  { name: 'Sony',    bg: '#f4f4f4', dot: '#fff',    logo: sonyLogo, art: `url(${sonyImg}) center top/cover no-repeat, #f4f4f4`, tall: true, mobileOrder: 2 },
  { name: 'Origins', bg: '#f1ede2', dot: '#fff',    logo: originsLogo, art: `url(${originsImg}) center top/cover no-repeat, #f1ede2`, tall: true, mobileOrder: 5 },
]

const rightBrands = [
  { name: 'Instacart',   bg: '#fff5e6', dot: '#fff',    logo: instacartLogo, art: `url(${instacartImg}) center top/cover no-repeat, #fff5e6`, tall: false, mobileOrder: 3 },
  { name: 'Nobull',      bg: '#efefef', dot: '#fff',    logo: nobullLogo, art: `url(${nobullImg}) center top/cover no-repeat, #efefef`, tall: false, mobileOrder: 6 },
  { name: 'Ticketmaster',bg: '#e9f0fb', dot: '#fff',    logo: ticketmasterLogo, art: `url(${ticketmasterImg}) center top/cover no-repeat, #e9f0fb`, tall: false, mobileOrder: 7 },
]

const leftCats = [
  { name: 'Apparel',     bg: `url(${apparelImg}) center top/cover no-repeat, linear-gradient(180deg, #4fa4e0 0%, #1f4ea3 100%)` },
  { name: 'Restaurants', bg: `url(${restaurantsImg}) center/cover no-repeat, linear-gradient(160deg, #2b4a6b 0%, #4a6b8a 60%, #c97a4a 100%)` },
  { name: 'Groceries',   bg: `url(${groceriesImg}) center top/cover no-repeat, linear-gradient(160deg, #d4a574 0%, #a87c4d 100%)` },
]

const rightCats = [
  { name: 'Travel', bg: `url(${rideshareImg}) center top/cover no-repeat, linear-gradient(160deg, #e88a3d 0%, #c44a3a 100%)` },
  { name: 'Fuel',   bg: `url(${fuelImg}) center top/cover no-repeat, linear-gradient(160deg, #6a8a55 0%, #3d4a3a 100%)` },
]
