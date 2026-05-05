import { Link, useLocation } from 'react-router-dom'
import './ComingSoon.css'

function SparkleIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 4l2.4 6.6L25 13l-6.6 2.4L16 22l-2.4-6.6L7 13l6.6-2.4L16 4z"
        fill="currentColor"
      />
      <path
        d="M25 22l1 2.7L28.7 26 26 27l-1 2.7L24 27l-2.7-1L24 24.7 25 22z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  )
}

function ArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M13 8H3M7 4L3 8l4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const featureByPath = {
  '/personal/send': 'Send & Receive',
  '/personal/paying': 'Pay your way',
  '/personal/savings': 'Save & grow',
  '/personal/crypto': 'Crypto, the easy way',
}

export default function ComingSoon() {
  const { pathname } = useLocation()
  const featureName = featureByPath[pathname] || 'This feature'

  return (
    <main className="coming-soon">
      <div className="coming-soon__card">
        <span className="coming-soon__eyebrow">Coming soon</span>
        <div className="coming-soon__icon" aria-hidden="true">
          <SparkleIcon />
        </div>
        <h1 className="coming-soon__title">
          {featureName} is on the way
        </h1>
        <p className="coming-soon__desc">
          We&rsquo;re putting the finishing touches on this experience.
          Check back shortly — or head back home to keep exploring Galion.
        </p>
        <div className="coming-soon__actions">
          <Link to="/" className="coming-soon__btn">
            <ArrowLeft />
            <span>Back to home</span>
          </Link>
          <Link to="/contact" className="coming-soon__btn coming-soon__btn--ghost">
            <span>Notify me</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
