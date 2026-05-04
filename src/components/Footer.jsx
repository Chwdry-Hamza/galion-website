import { Link } from 'react-router-dom'

const primaryLinks = [
  { label: 'About', to: '/about' },
]

const secondaryLinks = []



const legalLinks = []


function Globe() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Galion</Link>
        </div>

        <div className="footer__row">
          <nav className="footer__links">
            {primaryLinks.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </nav>
          <div className="footer__region">
            <Globe />
            <span>United States</span>
          </div>
        </div>

        <p className="footer__address">
          &copy; 1999-{year} · Galion is located at 2211 N 1st St. San Jose, CA 95131
        </p>
      </div>
    </footer>
  )
}
