import { Link } from 'react-router-dom'
import './LegalPage.css'

export default function LegalLayout({
  eyebrow,
  title,
  lede,
  lastUpdated,
  sections,
}) {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero__inner">
          {eyebrow && <p className="legal-hero__eyebrow">{eyebrow}</p>}
          <h1 className="legal-hero__title">{title}</h1>
          {lede && <p className="legal-hero__lede">{lede}</p>}
          {lastUpdated && (
            <span className="legal-hero__meta">
              Last updated · {lastUpdated}
            </span>
          )}
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-body__inner">
          <aside className="legal-toc" aria-label="On this page">
            <p className="legal-toc__title">On this page</p>
            <ul className="legal-toc__list">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.heading}</a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="legal-content">
            {sections.map((s) => (
              <section id={s.id} key={s.id}>
                <h2>{s.heading}</h2>
                {s.body}
              </section>
            ))}

            <div className="legal-help">
              <div>
                <h3 className="legal-help__title">Have a question?</h3>
                <p className="legal-help__desc">
                  Our support team is here to help with anything related to
                  your Galion account, payments, or this policy.
                </p>
              </div>
              <Link to="/contact" className="legal-help__btn">Contact support</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
