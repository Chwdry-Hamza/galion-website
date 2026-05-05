import { Link, NavLink } from 'react-router-dom'
import './About.css'
import storyImg from '../assets/images/pexels-silverkblack-36812950.jpg'
import productSendImg from '../assets/images/Free-Floating-Credit-Cards-Mockup-PSD.webp'
import productPayImg from '../assets/images/Elegant Payment at Upscale Restaurant.png'
import productSaveImg from '../assets/images/family card payments.jpg'
import productCryptoImg from '../assets/images/Piggy Bank and Bitcoin.png'

const subNavLinks = [
  { label: 'Our story', to: '#story' },
  { label: 'What we do', to: '#products' },
  { label: 'Values', to: '#values' },
]

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="10" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

const productCards = [
  {
    title: 'Send & receive money',
    image: productSendImg,
    desc:
      'Move money to anyone, anywhere — split a bill, pool for a gift, or get paid for what you sell. Simple, fast, and global.',
    cta: 'Explore Send',
    to: '/personal/send',
  },
  {
    title: 'Pay your way',
    image: productPayImg,
    pos: 'center 55%',
    desc:
      'Buy now and pay over time, monthly, or in store. Earn cashback when you check out with Galion. You choose how to pay.',
    cta: 'Explore Pay',
    to: '/personal/paying',
  },
  {
    title: 'Save & grow',
    image: productSaveImg,
    pos: 'center 45%',
    desc:
      'A high-yield savings account that helps your balance work harder — plus tools to set goals and stay on track.',
    cta: 'Explore Savings',
    to: '/personal/savings',
  },
  {
    title: 'Crypto, the easy way',
    image: productCryptoImg,
    desc:
      'Buy, sell, and transfer Bitcoin, Ethereum, and more — without sharing your full financial information.',
    cta: 'Explore Crypto',
    to: '/personal/crypto',
  },
]

const stats = [
  { num: '430M+', label: 'Active accounts worldwide' },
  { num: '200+', label: 'Markets we operate in' },
  { num: '$1.5T', label: 'Total payment volume' },
  { num: '36k+', label: 'Team members globally' },
]

const values = [
  {
    title: 'Inclusion',
    desc: 'Money should work for everyone. We design for first-time savers as much as established businesses.',
  },
  {
    title: 'Innovation',
    desc: 'We invest in technology and people that push the boundaries of what money can do.',
  },
  {
    title: 'Collaboration',
    desc: 'We build with our customers, partners, and communities — the best products are never built alone.',
  },
  {
    title: 'Wellness',
    desc: 'We protect the financial and personal wellbeing of every customer who trusts us with their money.',
  },
]

const trustPoints = [
  {
    Icon: ShieldIcon,
    title: 'Bank-level protection',
    desc: 'Funds held with FDIC-insured partner banks and protected by industry-leading fraud monitoring.',
  },
  {
    Icon: LockIcon,
    title: 'End-to-end encryption',
    desc: 'Your data is encrypted in transit and at rest with the same standards used by global financial institutions.',
  },
  {
    Icon: EyeIcon,
    title: 'Privacy by default',
    desc: 'We never sell your personal information. You choose what to share — never your full financial profile.',
  },
  {
    Icon: ClockIcon,
    title: '24/7 monitoring',
    desc: 'A global security team watches for risk around the clock so you can move money with confidence.',
  },
]

const leaders = [
  { name: 'Alex Mendez', role: 'Chief Executive Officer' },
  { name: 'Priya Raghav', role: 'Chief Financial Officer' },
  { name: 'Daniel Okafor', role: 'Chief Product Officer' },
  { name: 'Lina Park', role: 'Chief Technology Officer' },
  { name: 'Marcus Reed', role: 'Chief Operating Officer' },
  { name: 'Sara Costa', role: 'Chief People Officer' },
]

const milestones = [
  { year: '2008', text: 'Galion is founded with a mission to make money move freely and fairly across borders.' },
  { year: '2014', text: 'Crossed 50 million accounts and launched in 50 markets across four continents.' },
  { year: '2019', text: 'Introduced Galion Send and Pool to make group payments and shared expenses effortless.' },
  { year: '2023', text: 'Surpassed $1T in total payment volume and expanded into crypto buy / sell / transfer.' },
  { year: '2026', text: 'Reimagined the Galion app — every product, every payment, every account in one place.' },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__inner">
          <p className="about-hero__eyebrow">About Galion</p>
          <h1 className="about-hero__title">
            Money that moves with you
          </h1>
          <p className="about-hero__lede">
            Galion is a global financial platform on a mission to give
            everyone a modern, fair, and human way to move, save, and grow
            their money — whether you&rsquo;re paying a friend, building a
            business, or saving for what comes next.
          </p>
        </div>
      </section>

      <section className="about-story" id="story">
        <div className="about-story__inner">
          <div className="about-story__media" style={{ backgroundImage: `url(${storyImg})` }} />
          <div className="about-story__copy">
            <p className="about-story__eyebrow">Our story</p>
            <h2 className="about-story__title">
              Built for the way money actually moves
            </h2>
            <p>
              Galion started with a simple observation: the way people pay,
              save, and get paid was stuck in another era. Money sat in
              silos, fees were hidden, and access was limited by where you
              happened to be born.
            </p>
            <p>
              So we built a platform that brings everything into one place —
              your accounts, your spending, your savings, and your payments —
              all protected by industry-leading security and designed
              around real human moments.
            </p>
            <p>
              Today, Galion is trusted by millions of people and businesses
              around the world. And we&rsquo;re just getting started.
            </p>
          </div>
        </div>
      </section>

      <section className="about-products" id="products">
        <div className="about-products__inner">
          <div className="about-products__header">
            <p className="about-products__eyebrow">What we do</p>
            <h2 className="about-products__title">
              One platform for every part of your money
            </h2>
            <p className="about-products__desc">
              From sending a few dollars to a friend to running payments for
              a global business, Galion brings the tools together so you
              never have to leave the app.
            </p>
          </div>

          <div className="about-products__grid">
            {productCards.map((p) => (
              <article className="about-product" key={p.title}>
                <div
                  className="about-product__media"
                  style={{
                    backgroundImage: `url(${p.image})`,
                    backgroundSize: p.fit || 'cover',
                    backgroundColor: p.bg || 'transparent',
                    backgroundPosition: p.pos || 'down center',
                  }}
                  role="img"
                  aria-label={p.title}
                />
                <div className="about-product__body">
                  <h3 className="about-product__title">{p.title}</h3>
                  <p className="about-product__desc">{p.desc}</p>
                  <Link to={p.to} className="about-product__link">
                    <span>{p.cta}</span>
                    <ArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values" id="values">
        <div className="about-values__inner">
          <div className="about-values__header">
            <p className="about-values__eyebrow">What we stand for</p>
            <h2 className="about-values__title">
              The principles behind every Galion product
            </h2>
          </div>
          <div className="about-values__grid">
            {values.map((v) => (
              <article className="about-value" key={v.title}>
                <h3 className="about-value__title">{v.title}</h3>
                <p className="about-value__desc">{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-trust">
        <div className="about-trust__inner">
          <div className="about-trust__header">
            <p className="about-trust__eyebrow">Trust &amp; security</p>
            <h2 className="about-trust__title">
              Your money. Protected at every layer.
            </h2>
            <p className="about-trust__desc">
              Security isn&rsquo;t a feature at Galion — it&rsquo;s the
              foundation. Here&rsquo;s how we keep your money and your data
              safe.
            </p>
          </div>
          <div className="about-trust__grid">
            {trustPoints.map(({ Icon, title, desc }) => (
              <article className="about-trust-card" key={title}>
                <div className="about-trust-card__icon" aria-hidden="true">
                  <Icon />
                </div>
                <h3 className="about-trust-card__title">{title}</h3>
                <p className="about-trust-card__desc">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__inner">
          <h2 className="about-cta__title">Build the future of money with us</h2>
          <p className="about-cta__desc">
            From engineering and design to customer care and risk —
            there&rsquo;s a place for you on the Galion team.
          </p>
          <div className="about-cta__actions">
            <Link to="/contact" className="about-cta__btn">
              <span>Explore careers</span>
              <ArrowRight />
            </Link>
            <Link to="/contact" className="about-cta__btn about-cta__btn--ghost">
              <span>Contact us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
