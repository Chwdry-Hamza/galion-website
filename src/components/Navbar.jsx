import { NavLink, Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import Logo from './Logo.jsx'

const menu = [
  {
    label: 'Personal',
    items: [
      { label: 'Send Money', to: '/personal/send' },
      { label: 'Receive Money', to: '/personal/receive' },
      { label: 'Shopping', to: '/personal/shopping' },
      { label: 'Rewards', to: '/personal/rewards' },
    ],
  },
  {
    label: 'Business',
    items: [
      { label: 'Accept Payments', to: '/business/payments' },
      { label: 'Invoicing', to: '/business/invoicing' },
      { label: 'Business Tools', to: '/business/tools' },
    ],
  },
  {
    label: 'Advertiser',
    items: [
      { label: 'Overview', to: '/advertiser' },
      { label: 'Campaigns', to: '/advertiser/campaigns' },
      { label: 'Analytics', to: '/advertiser/analytics' },
    ],
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
              item.items ? (
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
                  <ul className="navbar__dropdown">
                    {item.items.map((sub) => (
                      <li key={sub.to}>
                        <Link
                          to={sub.to}
                          onClick={() => {
                            setOpenDropdown(null)
                            setMobileOpen(false)
                          }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
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
            <Link to="/login" className="navbar__login" onClick={() => setMobileOpen(false)}>
              Log In
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
