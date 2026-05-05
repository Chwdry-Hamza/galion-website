import LegalLayout from './LegalLayout.jsx'

const sections = [
  {
    id: 'agreement',
    heading: '1. Agreement',
    body: (
      <p>
        These Terms and Conditions form a binding agreement between you and
        Galion when you use our websites, apps, and services. By using
        Galion, you agree to these Terms.
      </p>
    ),
  },
  {
    id: 'eligibility',
    heading: '2. Eligibility',
    body: (
      <ul>
        <li>You must be at least 18 years old.</li>
        <li>You must provide accurate, current registration information.</li>
        <li>You must be permitted to use our services under applicable law.</li>
      </ul>
    ),
  },
  {
    id: 'account',
    heading: '3. Your account',
    body: (
      <p>
        You&rsquo;re responsible for keeping your credentials safe and for
        all activity on your account. Notify us at{' '}
        <a href="mailto:security@galion.com">security@galion.com</a> if you
        suspect unauthorized access.
      </p>
    ),
  },
  {
    id: 'acceptable-use',
    heading: '4. Acceptable use',
    body: (
      <ul>
        <li>No unlawful, fraudulent, or harmful activity.</li>
        <li>No interference with the services or our infrastructure.</li>
        <li>No reverse-engineering or reselling any part of Galion.</li>
        <li>No impersonating others or misrepresenting your identity.</li>
      </ul>
    ),
  },
  {
    id: 'fees',
    heading: '5. Fees',
    body: (
      <p>
        Some features carry fees, which we&rsquo;ll always disclose before
        you incur them. The full fee schedule is available at{' '}
        <a href="/fees">galion.com/fees</a>.
      </p>
    ),
  },
  {
    id: 'ip',
    heading: '6. Intellectual property',
    body: (
      <p>
        Galion and its licensors own all rights in the services, including
        software, designs, and trademarks. We grant you a limited license
        to use the services for their intended purpose.
      </p>
    ),
  },
  {
    id: 'liability',
    heading: '7. Disclaimers and liability',
    body: (
      <p>
        Galion is provided &ldquo;as is&rdquo; without warranties of any
        kind. To the fullest extent permitted by law, we are not liable for
        indirect or consequential damages arising from your use of the
        services.
      </p>
    ),
  },
  {
    id: 'termination',
    heading: '8. Termination',
    body: (
      <p>
        You can close your account at any time. We may suspend or terminate
        access if these Terms are violated or as required by law.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: '9. Changes',
    body: (
      <p>
        We may update these Terms from time to time. Material changes will
        be communicated in advance through the services or by email.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '10. Contact',
    body: (
      <p>
        Questions? Email{' '}
        <a href="mailto:legal@galion.com">legal@galion.com</a> or write to
        Galion, 2211 N 1st St., San Jose, CA 95131.
      </p>
    ),
  },
]

export default function TermsOfService() {
  return (
    <LegalLayout
      eyebrow="Legal · Terms"
      title="Terms and Conditions"
      lede="The agreement that applies when you use Galion — kept short and clear."
      lastUpdated="May 4, 2026"
      sections={sections}
    />
  )
}
