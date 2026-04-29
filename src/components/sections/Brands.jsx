import { useEffect, useRef } from 'react'
import adidasImg from '../../assets/images/adidas-gazelle.jpg'
import sonyImg from '../../assets/images/sony-headphones.jpg'
import adidasLogo from '../../assets/images/adidas-logo.jpg'
import sonyLogo from '../../assets/images/sony-logo.webp'
import instacartLogo from '../../assets/images/instacart-logo.png'
import instacartImg from '../../assets/images/instacart-carrots.jpg'
import flowersLogo from '../../assets/images/flowers-logo.png'
import flowersImg from '../../assets/images/flowers-bouquet.avif'
import originsLogo from '../../assets/images/origins-logo.png'
import originsImg from '../../assets/images/origins-product.jpg'
import nobullLogo from '../../assets/images/nobull-logo.webp'
import nobullImg from '../../assets/images/nobull-shoe.jpg'
import ticketmasterLogo from '../../assets/images/ticketmaster-logo.jpg'
import ticketmasterImg from '../../assets/images/ticketmaster-event.jpg'
import apparelImg from '../../assets/images/apparel.webp'
import restaurantsImg from '../../assets/images/restaurants.jpg'
import fuelImg from '../../assets/images/fuel.webp'
import rideshareImg from '../../assets/images/rideshare.jpg'
import groceriesImg from '../../assets/images/groceries.jpg'

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

export default function Brands() {
  const brandsRef = useRef(null)
  const catsRef = useRef(null)

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
  )
}
