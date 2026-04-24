import { Link } from 'react-router-dom'

const primaryLinks = [
  { label: 'Help', to: '/help' },
  { label: 'Contact', to: '/contact' },
  { label: 'Fees', to: '/fees' },
  { label: 'Security Center', to: '/security' },
  { label: 'Privacy Center', to: '/privacy' },
  { label: 'Shop', to: '/shop' },
  { label: 'Apps', to: '/apps' },
  { label: 'Enterprise', to: '/enterprise' },
  { label: 'Partners', to: '/partners' },
]

const secondaryLinks = [
  { label: 'About', to: '/about' },
  { label: 'Newsroom', to: '/newsroom' },
  { label: 'Jobs', to: '/jobs' },
  { label: 'Investor Relations', to: '/investors' },
  { label: 'Government Relations', to: '/government' },
]

const legalLinks = [
  { label: 'Accessibility', to: '/accessibility' },
  { label: 'Privacy Statement', to: '/privacy-statement' },
  { label: 'Cookies', to: '/cookies' },
  { label: 'Legal', to: '/legal' },
  { label: 'Licenses', to: '/licenses' },
]

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

        <div className="footer__row footer__row--secondary">
          <nav className="footer__links">
            {secondaryLinks.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </nav>
          <div className="footer__legal">
            <span className="footer__copy">&copy; 1999-{year}</span>
            {legalLinks.map((l) => (
              <Link key={l.to} to={l.to}>{l.label}</Link>
            ))}
          </div>
        </div>

        <p className="footer__address">
          Galion is located at 2211 N 1st St. San Jose, CA 95131
        </p>
      </div>
    </footer>
  )
}
