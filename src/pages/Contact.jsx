import { useState } from 'react'
import './Contact.css'

const supportChannels = [
  {
    title: 'Email us',
    desc: 'We respond within one business day.',
    value: 'support@galion.com',
    href: 'mailto:support@galion.com',
  },
  {
    title: 'Talk to sales',
    desc: 'For partnerships and enterprise.',
    value: 'sales@galion.com',
    href: 'mailto:sales@galion.com',
  },
  {
    title: 'Call us',
    desc: 'Mon–Fri, 9am–6pm PT.',
    value: '+1 (888) 555-0142',
    href: 'tel:+18885550142',
  },
  {
    title: 'Visit us',
    desc: 'Our home office.',
    value: '2211 N 1st St., San Jose, CA 95131',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', topic: 'general', message: '' })
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <p className="contact-hero__eyebrow">Contact</p>
          <h1 className="contact-hero__title">We&rsquo;d love to hear from you</h1>
          <p className="contact-hero__lede">
            Whether you have a question about your account, want to partner
            with us, or just want to say hello — our team is here for you.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-body__inner">
          <aside className="contact-info">
            <h2 className="contact-info__title">Get in touch</h2>
            <p className="contact-info__desc">
              Pick the channel that suits you best, or fill out the form and
              we&rsquo;ll route your message to the right team.
            </p>

            <ul className="contact-channels">
              {supportChannels.map((c) => (
                <li className="contact-channel" key={c.title}>
                  <p className="contact-channel__title">{c.title}</p>
                  <p className="contact-channel__desc">{c.desc}</p>
                  {c.href ? (
                    <a className="contact-channel__value" href={c.href}>
                      {c.value}
                    </a>
                  ) : (
                    <p className="contact-channel__value">{c.value}</p>
                  )}
                </li>
              ))}
            </ul>
          </aside>

          <div className="contact-form-card">
            <h2 className="contact-form-card__title">Send us a message</h2>
            <p className="contact-form-card__desc">
              Tell us a bit about what you need and we&rsquo;ll get back to
              you shortly.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <label className="contact-form__field">
                  <span>Full name</span>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                  />
                </label>
                <label className="contact-form__field">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>

              <label className="contact-form__field">
                <span>Topic</span>
                <select
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                >
                  <option value="general">General question</option>
                  <option value="account">Account &amp; billing</option>
                  <option value="security">Security &amp; fraud</option>
                  <option value="partnership">Partnerships</option>
                  <option value="press">Press &amp; media</option>
                </select>
              </label>

              <label className="contact-form__field">
                <span>Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </label>

              <button type="submit" className="contact-form__btn">
                Send message
              </button>

              {sent && (
                <p className="contact-form__success" role="status">
                  Thanks! We&rsquo;ve received your message and will be in
                  touch soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
