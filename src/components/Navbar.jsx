import { NavLink, Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Logo from './Logo.jsx'

const menu = [
  {
    label: 'Personal',
    mega: {
      title: 'Galion for You',
      to: '/personal',
      columns: [
        {
          title: 'Shopping & Rewards',
          links: [
            { label: 'Buy Now, Pay Later', to: '/personal/bnpl' },
            { label: 'Rewards', to: '/personal/rewards' },
            { label: 'Galion credit and cards', to: '/personal/cards' },
            { label: 'Galion Debit Card', to: '/personal/debit' },
            { label: 'Paying with Galion', to: '/personal/paying' },
          ],
        },
        {
          title: 'Send & Receive',
          links: [
            { label: 'Send money', to: '/personal/send' },
            { label: 'Request money', to: '/personal/request' },
            { label: 'Pool money', to: '/personal/pool' },
            { label: 'Donate', to: '/personal/donate' },
            { label: 'Start selling', to: '/personal/sell' },
          ],
        },
        {
          title: 'Manage Your Money',
          links: [
            { label: 'Add cards and banks', to: '/personal/add-cards' },
            { label: 'Security and safety', to: '/personal/security' },
            { label: 'Set up Direct Deposit', to: '/personal/deposit' },
            { label: 'Add cash', to: '/personal/cash' },
            { label: 'Subscriptions', to: '/personal/subscriptions' },
            { label: 'Savings and goals', to: '/personal/savings' },
            { label: 'Cryptocurrency', to: '/personal/crypto' },
          ],
        },
      ],
      cta: [
        { label: 'Get the App', to: '/get-app', primary: true },
        { label: 'How Galion Works', to: '/how-it-works', primary: true },
        { label: 'Money Hub', to: '/money-hub', primary: true },
      ],
    },
  },
  {
    label: 'Business',
    mega: {
      title: 'Galion Open',
      subtitle: 'The platform for all business',
      to: '/business',
      columns: [
        {
          title: 'Business Types',
          links: [
            { label: 'Enterprises', to: '/business/enterprises' },
            { label: 'Small Businesses', to: '/business/small' },
            { label: 'Solopreneurs', to: '/business/solopreneurs' },
            { label: 'Partners', to: '/business/partners' },
            { label: 'Platforms', to: '/business/platforms' },
            { label: 'Industries', to: '/business/industries' },
            { label: 'Developers', to: '/business/developers' },
            { label: 'Advertisers', to: '/business/advertisers' },
          ],
        },
        {
          title: 'Accept Payments',
          links: [
            { label: 'Online Checkout', to: '/business/checkout' },
            { label: 'Installment Payments', to: '/business/installments' },
            { label: 'Guest Checkout', to: '/business/guest-checkout' },
            { label: 'Accept Galion', to: '/business/accept-galion' },
            { label: 'POS System', to: '/business/pos' },
            { label: 'Invoicing', to: '/business/invoicing' },
            { label: 'Payment Links', to: '/business/payment-links' },
            { label: 'Enterprise Payments', to: '/business/enterprise-payments' },
            { label: 'Tap to Pay', to: '/business/tap-to-pay' },
          ],
        },
        {
          title: 'Risk & Operations',
          links: [
            { label: 'Make Payments', to: '/business/make-payments' },
            { label: 'Risk Management', to: '/business/risk' },
            { label: 'Reporting Tools', to: '/business/reporting' },
            { label: 'Shipping', to: '/business/shipping' },
            { label: 'Agentic Commerce', to: '/business/agentic' },
          ],
        },
        {
          title: 'Financial Services',
          links: [
            { label: 'Working Capital Loan', to: '/business/working-capital' },
            { label: 'Business Loan', to: '/business/loan' },
            { label: 'Business Debit Card', to: '/business/debit-card' },
          ],
        },
      ],
      cta: [
        { label: 'Get Started', to: '/business/start', primary: true },
        { label: 'Fees', to: '/business/fees', primary: true },
        { label: 'Payment Methods', to: '/business/payment-methods' },
        { label: '3rd Party Integrations', to: '/business/integrations' },
        { label: 'Business Resource Center', to: '/business/resources' },
        { label: 'Events', to: '/business/events' },
      ],
    },
  },
  {
    label: 'Advertiser',
    mega: {
      title: 'Galion Ads',
      to: '/advertiser',
      columns: [
        {
          links: [
            { label: 'About Galion Ads', to: '/advertiser/about' },
            { label: 'Galion Ads Solutions', to: '/advertiser/solutions' },
            { label: 'Galion Ads Resources', to: '/advertiser/resources' },
          ],
        },
      ],
    },
  },
  { label: 'Developer', to: '/developer' },
]

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const toggleDropdown = (label) => {
    setOpenDropdown((cur) => (cur === label ? null : label))
  }

  const closeAll = () => {
    setOpenDropdown(null)
    setMobileOpen(false)
  }

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        <button
          className="navbar__toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navbar__nav ${mobileOpen ? 'is-open' : ''}`}
          ref={navRef}
        >
          <ul className="navbar__menu">
            {menu.map((item) =>
              item.mega ? (
                <li
                  key={item.label}
                  className={`navbar__item has-dropdown ${
                    openDropdown === item.label ? 'is-open' : ''
                  }`}
                >
                  <button
                    className="navbar__link"
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <Chevron />
                  </button>

                  <div
                    className={`navbar__mega ${
                      item.mega.columns.length === 1 ? 'navbar__mega--narrow' : ''
                    } ${item.mega.cta ? 'navbar__mega--with-cta' : ''}`}
                    role="menu"
                  >
                    <div className="navbar__mega-inner">
                      <div className="navbar__mega-cols">
                        <Link
                          to={item.mega.to}
                          className="navbar__mega-title"
                          onClick={closeAll}
                        >
                          <span>{item.mega.title}</span>
                          <Arrow />
                        </Link>
                        {item.mega.subtitle && (
                          <p className="navbar__mega-subtitle">{item.mega.subtitle}</p>
                        )}

                        <div
                          className="navbar__mega-grid"
                          style={{
                            gridTemplateColumns: `repeat(${item.mega.columns.length}, minmax(0, 1fr))`,
                          }}
                        >
                          {item.mega.columns.map((col, idx) => (
                            <div className="navbar__mega-col" key={idx}>
                              {col.title && (
                                <Link
                                  to={item.mega.to}
                                  className="navbar__mega-col-title"
                                  onClick={closeAll}
                                >
                                  <span>{col.title}</span>
                                  <Arrow />
                                </Link>
                              )}
                              <ul className="navbar__mega-list">
                                {col.links.map((sub) => (
                                  <li key={sub.to}>
                                    <Link to={sub.to} onClick={closeAll}>
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {item.mega.cta && (
                        <aside className="navbar__mega-cta">
                          {item.mega.cta.map((c) =>
                            c.primary ? (
                              <Link
                                key={c.to}
                                to={c.to}
                                className="navbar__mega-cta-btn"
                                onClick={closeAll}
                              >
                                <span>{c.label}</span>
                                <Arrow />
                              </Link>
                            ) : (
                              <Link
                                key={c.to}
                                to={c.to}
                                className="navbar__mega-cta-link"
                                onClick={closeAll}
                              >
                                {c.label}
                              </Link>
                            )
                          )}
                        </aside>
                      )}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label} className="navbar__item">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? 'is-active' : ''}`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <div className="navbar__actions">
            <Link to="/help" className="navbar__help" onClick={() => setMobileOpen(false)}>
              Help
            </Link>
            <Link to="/contact" className="navbar__login" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
