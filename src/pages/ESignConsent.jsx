import LegalLayout from './LegalLayout.jsx'

const sections = [
  {
    id: 'consent',
    heading: '1. Your consent to electronic records',
    body: (
      <p>
        By creating a Galion account or applying for a Galion product, you
        agree to receive notices, disclosures, agreements, statements, and
        other communications (collectively, &ldquo;Records&rdquo;)
        electronically. This consent is given in compliance with the U.S.
        Electronic Signatures in Global and National Commerce Act
        (&ldquo;E-SIGN&rdquo;).
      </p>
    ),
  },
  {
    id: 'scope',
    heading: '2. Scope of consent',
    body: (
      <>
        <p>This consent applies to:</p>
        <ul>
          <li>Account agreements, terms, and disclosures.</li>
          <li>Periodic statements and transaction confirmations.</li>
          <li>Privacy notices and required regulatory disclosures.</li>
          <li>Tax forms (such as 1099s, where applicable).</li>
          <li>Notices of changes to any Galion product or policy.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'delivery',
    heading: '3. How we deliver Records',
    body: (
      <p>
        We deliver Records by posting them to your Galion account, sending
        them to the email address on file, or both. Some Records may be
        delivered via push notification or in-app messaging. You agree to
        keep your contact information current in the Galion app.
      </p>
    ),
  },
  {
    id: 'system-requirements',
    heading: '4. System requirements',
    body: (
      <>
        <p>To access electronic Records, you need:</p>
        <ul>
          <li>An internet-connected device with a current browser.</li>
          <li>An active email account with the ability to receive PDFs.</li>
          <li>Sufficient storage to retain copies of Records.</li>
          <li>The Galion mobile app (recommended for the best experience).</li>
        </ul>
      </>
    ),
  },
  {
    id: 'paper-copies',
    heading: '5. Requesting paper copies',
    body: (
      <p>
        You may request a paper copy of any Record by writing to{' '}
        <a href="mailto:support@galion.com">support@galion.com</a>. We may
        charge a reasonable fee for paper delivery as disclosed in our fee
        schedule. Requesting paper copies does not withdraw your consent to
        electronic delivery.
      </p>
    ),
  },
  {
    id: 'withdrawing-consent',
    heading: '6. Withdrawing your consent',
    body: (
      <>
        <p>
          You may withdraw your consent to electronic Records at any time by
          contacting <a href="mailto:support@galion.com">support@galion.com</a>.
          Withdrawing consent may:
        </p>
        <ul>
          <li>Limit access to certain features or products.</li>
          <li>Result in termination of your Galion account.</li>
          <li>Subject you to fees associated with paper delivery.</li>
        </ul>
        <p>
          The withdrawal is effective only after we have a reasonable period
          of time to process it.
        </p>
      </>
    ),
  },
  {
    id: 'updating-info',
    heading: '7. Keeping your information current',
    body: (
      <p>
        It is your responsibility to maintain a valid email address and
        contact information in the Galion app. You can update your details
        from <strong>Settings &rarr; Contact information</strong> at any
        time.
      </p>
    ),
  },
  {
    id: 'questions',
    heading: '8. Questions',
    body: (
      <p>
        Questions about this E-Sign Consent? Reach out to{' '}
        <a href="mailto:support@galion.com">support@galion.com</a> or visit
        our <a href="/help">Help Center</a>.
      </p>
    ),
  },
]

export default function ESignConsent() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="E-Sign Consent"
      lede="Your consent to receive Galion communications, agreements, and disclosures electronically under the U.S. E-SIGN Act."
      lastUpdated="April 30, 2026"
      sections={sections}
    />
  )
}
