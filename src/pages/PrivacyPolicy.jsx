import LegalLayout from './LegalLayout.jsx'

const sections = [
  {
    id: 'overview',
    heading: '1. Overview',
    body: (
      <p>
        This Privacy Policy explains what information Galion collects, how
        we use it, and the choices you have. We&rsquo;ve kept it short and
        clear on purpose.
      </p>
    ),
  },
  {
    id: 'what-we-collect',
    heading: '2. What we collect',
    body: (
      <ul>
        <li>Account details (name, email, phone, address).</li>
        <li>Identity and payment information needed to verify and process transactions.</li>
        <li>Device, browser, and usage data.</li>
        <li>Messages you send to our support team.</li>
      </ul>
    ),
  },
  {
    id: 'how-we-use',
    heading: '3. How we use it',
    body: (
      <ul>
        <li>To run, secure, and improve our services.</li>
        <li>To process payments and prevent fraud.</li>
        <li>To send important account and product updates.</li>
        <li>To comply with applicable laws.</li>
      </ul>
    ),
  },
  {
    id: 'sharing',
    heading: '4. Sharing',
    body: (
      <p>
        We share information only with trusted service providers, financial
        partners, and authorities when legally required.{' '}
        <strong>We do not sell your personal information.</strong>
      </p>
    ),
  },
  {
    id: 'security',
    heading: '5. Security',
    body: (
      <p>
        Your data is encrypted in transit and at rest, access is tightly
        controlled, and our systems are monitored 24/7. Use a strong
        password and enable two-factor authentication to keep your account
        safe.
      </p>
    ),
  },
  {
    id: 'your-rights',
    heading: '6. Your rights',
    body: (
      <p>
        You can access, update, or delete your information at any time from
        your account settings, or by emailing{' '}
        <a href="mailto:privacy@galion.com">privacy@galion.com</a>.
      </p>
    ),
  },
  {
    id: 'updates',
    heading: '7. Updates',
    body: (
      <p>
        We may update this policy from time to time. Material changes will
        be announced before they take effect.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '8. Contact',
    body: (
      <p>
        Questions? Email{' '}
        <a href="mailto:privacy@galion.com">privacy@galion.com</a> or write
        to Galion, 2211 N 1st St., San Jose, CA 95131.
      </p>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      lede="How Galion collects, uses, and protects your information — kept short and clear."
      lastUpdated="May 4, 2026"
      sections={sections}
    />
  )
}
