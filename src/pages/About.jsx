import { Link, NavLink } from 'react-router-dom'
import './About.css'
import aboutHeroImg from '../assets/images/pexels-gustavo-fring-4148845.jpg'
import whoWeAreImg from '../assets/images/pexels-silverkblack-36812950.jpg'
import howWeWorkImg from '../assets/images/feature-split.webp'
import ourImpactImg from '../assets/images/restaurants.jpg'

const subNavLinks = [
  { label: 'Who we are', to: '/about/who-we-are' },
  { label: 'How we work', to: '/about/how-we-work' },
  { label: 'Our impact', to: '/about/impact' },
  { label: 'Investors', to: '/about/investors' },
  { label: 'Newsroom', to: '/about/newsroom' },
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

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55V14.9c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.13 1.44-2.13 2.93v5.64H9.38V9h3.41v1.56h.05c.47-.9 1.63-1.84 3.36-1.84 3.6 0 4.26 2.37 4.26 5.45v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.16 17.52h1.833L7.084 4.126H5.117l11.967 15.644z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.71 3.71 0 01-1.38-.9 3.71 3.71 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.86 5.86 0 00-2.13 1.38A5.86 5.86 0 00.63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13.67.65 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 002.13-1.38 5.86 5.86 0 001.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 00-1.38-2.13A5.86 5.86 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
    </svg>
  )
}

const footerColumns = [
  {
    title: 'Who we are',
    links: [
      { label: 'Mission & Values', to: '/about/mission' },
      { label: 'History & Facts', to: '/about/history' },
      { label: 'Executive Leadership', to: '/about/leadership' },
      { label: 'Board of Directors', to: '/about/board' },
    ],
  },
  {
    title: 'How we work',
    links: [
      { label: 'Trust & Privacy', to: '/about/trust' },
      { label: 'Responsible Business Practices', to: '/about/responsible-business' },
      { label: 'Employees & Culture', to: '/about/culture' },
      { label: 'Issues & Advocacy', to: '/about/issues' },
      { label: 'Reporting & Other Resources', to: '/about/reporting' },
    ],
  },
  {
    title: 'Our impact',
    links: [
      { label: 'Customers', to: '/about/customers' },
      { label: 'Enabling Generosity', to: '/about/generosity' },
      { label: 'Strengthening Communities', to: '/about/communities' },
      { label: 'Environmental Sustainability', to: '/about/sustainability' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Investors', to: '/about/investors' },
      { label: 'Galion Ventures', to: '/about/ventures' },
    ],
  },
]

const socialLinks = [
  { label: 'Facebook', href: '#', Icon: FacebookIcon },
  { label: 'LinkedIn', href: '#', Icon: LinkedInIcon },
  { label: 'X', href: '#', Icon: XIcon },
  { label: 'Instagram', href: '#', Icon: InstagramIcon },
]

const aboutFooterLinks = [
  { label: 'Accessibility', to: '/accessibility' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Cookies', to: '/cookies' },
  { label: 'Legal', to: '/legal' },
  { label: 'Feedback', to: '/feedback' },
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
    desc: 'We design products that work for everyone — from the first-time saver to the established business.',
  },
  {
    title: 'Innovation',
    desc: 'We invest in technology and people that push the boundaries of what money can do.',
  },
  {
    title: 'Collaboration',
    desc: 'We build with our customers, partners, and communities — the best solutions are never built alone.',
  },
  {
    title: 'Wellness',
    desc: 'We protect the financial and personal wellbeing of every customer who trusts us with their money.',
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
  { year: '2008', text: 'Galion founded with a mission to make money move freely.' },
  { year: '2014', text: 'Launched in 50 markets, surpassed 50 million accounts.' },
  { year: '2019', text: 'Introduced Galion Send and Pool to make group payments effortless.' },
  { year: '2023', text: 'Crossed $1T in total payment volume and expanded into crypto.' },
  { year: '2026', text: 'Reimagined the Galion app — all your money, in one place.' },
]

const pillarCards = [
  {
    title: 'Who we are',
    image: whoWeAreImg,
    desc: "A global community dedicated to putting more money back in our customers' pockets, faster and with innovative solutions.",
    cta: 'Explore Galion',
    to: '/about/who-we-are',
  },
  {
    title: 'How we work',
    image: howWeWorkImg,
    desc: 'Our values of Inclusion, Innovation, Collaboration, and Wellness guide the way we do business every day.',
    cta: 'Learn how',
    to: '/about/how-we-work',
  },
  {
    title: 'Our impact',
    image: ourImpactImg,
    desc: 'We leverage our platform and resources to support our customers, communities, and the environment.',
    cta: 'Find out more',
    to: '/about/impact',
  },
]

export default function About() {
  return (
    <div className="about-page">
      <div className="about-subnav">
        <div className="about-subnav__inner">
          <Link to="/about" className="about-subnav__brand">About</Link>
          <nav className="about-subnav__nav" aria-label="About navigation">
            {subNavLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `about-subnav__link ${isActive ? 'is-active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="about-subnav__actions">
            <Link to="/contact" className="about-subnav__cta">Work With Us</Link>
            <button type="button" className="about-subnav__search" aria-label="Search">
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>

      <section className="about-hero">
        <div className="about-hero__inner">
          <h1 className="about-hero__title">
            Shaping the future of finance for millions globally
          </h1>
          <div
            className="about-hero__media"
            style={{ backgroundImage: `url(${aboutHeroImg})` }}
            role="img"
            aria-label="People collaborating"
          />
        </div>
      </section>

      <section className="about-pillars">
        <div className="about-pillars__inner">
          {pillarCards.map((c) => (
            <article className="about-pillar" key={c.title}>
              <div
                className="about-pillar__media"
                style={{ backgroundImage: `url(${c.image})` }}
                role="img"
                aria-label={c.title}
              />
              <div className="about-pillar__body">
                <h2 className="about-pillar__title">{c.title}</h2>
                <p className="about-pillar__desc">{c.desc}</p>
                <Link to={c.to} className="about-pillar__link">
                  <span>{c.cta}</span>
                  <ArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission__inner">
          <p className="about-mission__eyebrow">Our mission</p>
          <h2 className="about-mission__quote">
            We believe everyone deserves a fair, simple, and modern way to
            move, save, and grow their money.
          </h2>
          <p className="about-mission__sig">— The Galion team</p>
        </div>
      </section>

      <section className="about-stats">
        <div className="about-stats__inner">
          {stats.map((s) => (
            <div className="about-stat" key={s.label}>
              <p className="about-stat__num">{s.num}</p>
              <p className="about-stat__label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__inner">
          <h2 className="about-values__title">What we stand for</h2>
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

      <section className="about-leaders">
        <div className="about-leaders__inner">
          <h2 className="about-leaders__title">Meet our leadership</h2>
          <p className="about-leaders__desc">
            A global team committed to making finance more open, transparent,
            and useful for everyone.
          </p>
          <div className="about-leaders__grid">
            {leaders.map((p) => (
              <article className="about-leader" key={p.name}>
                <div className="about-leader__avatar" aria-hidden="true">
                  {p.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <p className="about-leader__name">{p.name}</p>
                <p className="about-leader__role">{p.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-timeline">
        <div className="about-timeline__inner">
          <h2 className="about-timeline__title">Our journey so far</h2>
          <ol className="about-timeline__list">
            {milestones.map((m) => (
              <li className="about-timeline__item" key={m.year}>
                <span className="about-timeline__year">{m.year}</span>
                <span className="about-timeline__text">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__inner">
          <h2 className="about-cta__title">Build the future of money with us</h2>
          <p className="about-cta__desc">
            From engineering to design to customer care — there&rsquo;s a place
            for you on the Galion team.
          </p>
          <Link to="/contact" className="about-cta__btn">
            <span>Explore careers</span>
            <ArrowRight />
          </Link>
        </div>
      </section>

      <footer className="about-footer">
        <div className="about-footer__inner">
          <div className="about-footer__top">
            <Link to="/" className="about-footer__brand">Galion</Link>
            <Link to="/contact" className="about-footer__work-btn">Work with us</Link>
            <div className="about-footer__social">
              <span className="about-footer__social-label">Stay connected</span>
              <div className="about-footer__social-icons">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="about-footer__social-icon"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="about-footer__cols">
            {footerColumns.map((col) => (
              <div className="about-footer__col" key={col.title}>
                <h3 className="about-footer__col-title">{col.title}</h3>
                <ul className="about-footer__col-list">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="about-footer__bottom">
            <p className="about-footer__powered">
              Powered By Galion {new Date().getFullYear()}
            </p>
            <div className="about-footer__legal">
              <span className="about-footer__copy">&copy; 1999-{new Date().getFullYear()}</span>
              {aboutFooterLinks.map((l) => (
                <Link key={l.to} to={l.to}>{l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
