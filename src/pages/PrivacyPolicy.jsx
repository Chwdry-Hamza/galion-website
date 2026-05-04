import LegalLayout from './LegalLayout.jsx'

const sections = [
  {
    id: 'overview',
    heading: '1. Overview',
    body: (
      <>
        <p>
          At Galion, your privacy is fundamental to the trust you place in us.
          This Privacy Policy explains how Galion, Inc. and its affiliates
          (&ldquo;Galion,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;) collect, use, share, store, and protect
          information about you when you visit our websites, use our mobile
          apps, or access any of our financial services (collectively, the
          &ldquo;Services&rdquo;).
        </p>
        <p>
          We&rsquo;ve written this policy in plain language so you can
          understand exactly what we do with your information. If you have
          questions about anything you read here, our privacy team is happy
          to help — see the <a href="#contact">Contact us</a> section below.
        </p>
        <p>
          By creating a Galion account or otherwise using the Services, you
          acknowledge that you have read and understood this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: 'who-we-are',
    heading: '2. Who this policy applies to',
    body: (
      <>
        <p>This Privacy Policy applies to:</p>
        <ul>
          <li>Visitors to <a href="/">galion.com</a> and any related Galion websites.</li>
          <li>Customers who hold a Galion personal or business account.</li>
          <li>Recipients of money or payments through Galion.</li>
          <li>Job applicants and people who interact with our support team.</li>
        </ul>
        <p>
          Where Galion partners with banks or other financial institutions to
          provide a service, both Galion and that partner may have separate
          privacy notices that also apply to you. We&rsquo;ll always make
          those clear at the time you sign up for the relevant product.
        </p>
      </>
    ),
  },
  {
    id: 'information-we-collect',
    heading: '3. Information we collect',
    body: (
      <>
        <h3>Information you provide</h3>
        <ul>
          <li>
            <strong>Identity and contact details</strong> — name, date of
            birth, email, phone number, mailing address, and government ID
            details where required for verification.
          </li>
          <li>
            <strong>Financial information</strong> — bank accounts, debit and
            credit cards, transaction history, and tax IDs as needed.
          </li>
          <li>
            <strong>Profile and preferences</strong> — username, photo,
            language, notification choices, and saved beneficiaries.
          </li>
          <li>
            <strong>Communications</strong> — messages, calls, and feedback
            you send to our support team or social channels.
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li>
            <strong>Device data</strong> — device type, operating system,
            browser, language, time zone, and unique identifiers.
          </li>
          <li>
            <strong>Usage data</strong> — pages and features you use, search
            queries, referring URLs, and interaction timestamps.
          </li>
          <li>
            <strong>Network data</strong> — IP address, internet service
            provider, and approximate location derived from the network.
          </li>
          <li>
            <strong>Location</strong> — precise location only when you grant
            permission in your device settings.
          </li>
        </ul>

        <h3>Information from third parties</h3>
        <p>
          We may receive information about you from credit bureaus, identity
          verification providers, fraud-prevention partners, payment networks,
          marketing partners, public databases, and people who send money or
          requests to your Galion account.
        </p>
      </>
    ),
  },
  {
    id: 'how-we-use',
    heading: '4. How we use your information',
    body: (
      <>
        <p>We use information to:</p>
        <ul>
          <li>Open, maintain, and service your Galion account.</li>
          <li>Process payments, transfers, and other transactions you initiate.</li>
          <li>Verify your identity and prevent fraud, abuse, or money laundering.</li>
          <li>Provide customer support and respond to your requests.</li>
          <li>
            Communicate with you about your account, products, and important
            changes to our policies.
          </li>
          <li>
            Personalize your experience, recommend features, and improve the
            Services through analytics.
          </li>
          <li>
            Send marketing messages where permitted — you can opt out of
            these at any time.
          </li>
          <li>
            Comply with applicable laws, regulations, and lawful requests from
            authorities.
          </li>
        </ul>
        <p>
          We process your information only for purposes that are compatible
          with the reason it was collected, or as otherwise permitted or
          required by law.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    heading: '5. How we share information',
    body: (
      <>
        <p>
          We share information only when needed to operate the Services, with
          your consent, or when required by law. Categories of recipients
          include:
        </p>
        <ul>
          <li>
            <strong>Service providers</strong> who help us run our business —
            cloud hosting, customer support, analytics, identity
            verification, and risk management vendors. They&rsquo;re required
            by contract to use your information only on our behalf.
          </li>
          <li>
            <strong>Financial partners</strong> such as banks, card networks,
            and payment processors that enable the products you use.
          </li>
          <li>
            <strong>Other Galion users</strong> involved in a transaction —
            for example, the recipient of a payment will see relevant
            details such as your name and message.
          </li>
          <li>
            <strong>Regulators and authorities</strong> when required by law,
            subpoena, court order, or to protect Galion, our customers, or
            the public.
          </li>
          <li>
            <strong>Business transfers</strong> — if Galion is involved in a
            merger, acquisition, or sale of assets, your information may be
            transferred subject to standard confidentiality protections.
          </li>
        </ul>
        <p>
          <strong>We do not sell your personal information.</strong> We do not
          share your information with third parties for their own marketing
          purposes without your explicit consent.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    heading: '6. Cookies and similar technologies',
    body: (
      <>
        <p>
          We use cookies, pixels, SDKs, and similar technologies to keep you
          signed in, remember your preferences, measure how the Services
          perform, and detect fraud.
        </p>
        <p>
          You can manage cookie preferences from your browser settings or
          through the in-app cookie controls. Some cookies are strictly
          necessary for the Services to work and cannot be turned off.
          Disabling other cookies may affect functionality such as sign-in,
          personalization, and analytics.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    heading: '7. How we protect your information',
    body: (
      <>
        <p>
          We use a layered combination of technical, administrative, and
          physical safeguards designed to protect your information,
          including:
        </p>
        <ul>
          <li>Encryption of data in transit (TLS) and at rest.</li>
          <li>Strict access controls based on the principle of least privilege.</li>
          <li>Continuous monitoring and 24/7 incident response.</li>
          <li>Regular independent audits, penetration tests, and vulnerability assessments.</li>
          <li>Mandatory employee privacy and security training.</li>
        </ul>
        <p>
          No system is perfectly secure. We urge you to protect your
          credentials, use a unique password, enable two-factor
          authentication, and contact us immediately at{' '}
          <a href="mailto:security@galion.com">security@galion.com</a> if
          you suspect unauthorized access.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    heading: '8. How long we keep your information',
    body: (
      <p>
        We keep your information for as long as your account is active and
        for a reasonable period afterward to comply with legal, regulatory,
        accounting, and reporting obligations, to defend or pursue legal
        claims, and to prevent fraud. When information is no longer needed,
        we delete or anonymize it.
      </p>
    ),
  },
  {
    id: 'transfers',
    heading: '9. International data transfers',
    body: (
      <p>
        Galion operates globally. Your information may be processed in
        countries other than your own, including the United States. When we
        transfer information across borders, we use safeguards such as
        Standard Contractual Clauses, adequacy decisions, or other approved
        mechanisms to make sure your information continues to receive a high
        level of protection.
      </p>
    ),
  },
  {
    id: 'your-rights',
    heading: '10. Your privacy rights',
    body: (
      <>
        <p>Depending on where you live, you may have rights to:</p>
        <ul>
          <li>Access the information we hold about you.</li>
          <li>Correct inaccurate or incomplete information.</li>
          <li>Delete your information, subject to legal limits.</li>
          <li>Object to or restrict certain types of processing.</li>
          <li>Receive a copy of your information in a portable format.</li>
          <li>Withdraw consent where processing is based on consent.</li>
          <li>Lodge a complaint with your local data protection authority.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:privacy@galion.com">privacy@galion.com</a>. We may
          need to verify your identity before fulfilling certain requests.
        </p>

        <h3>California residents</h3>
        <p>
          If you are a California resident, you have additional rights under
          the California Consumer Privacy Act (CCPA), including the right to
          know what personal information we collect and the right to opt out
          of the sale or sharing of personal information. Galion does not
          sell personal information.
        </p>

        <h3>European Economic Area, UK, and Switzerland</h3>
        <p>
          If you live in the EEA, UK, or Switzerland, our lawful bases for
          processing your information include performance of a contract,
          compliance with a legal obligation, your consent, and our
          legitimate interests in operating, securing, and improving the
          Services.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    heading: '11. Children&rsquo;s privacy',
    body: (
      <p>
        The Services are not directed to children under 18, and we do not
        knowingly collect personal information from children. If you believe
        a child has provided us with personal information, please contact us
        and we will take appropriate steps to delete it.
      </p>
    ),
  },
  {
    id: 'third-party',
    heading: '12. Third-party links and services',
    body: (
      <p>
        The Services may contain links to third-party websites or services
        that we don&rsquo;t operate. This Privacy Policy does not apply to
        those services. We encourage you to read the privacy policies of any
        third-party service before providing your information.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: '13. Changes to this policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time as we evolve our
        Services and as laws change. When we make material changes, we will
        notify you in advance through the Services, by email, or by other
        means appropriate to the change. The &ldquo;Last updated&rdquo; date
        above always reflects the most recent revision.
      </p>
    ),
  },
  {
    id: 'contact',
    heading: '14. Contact us',
    body: (
      <>
        <p>
          Questions, requests, or concerns about this policy or our privacy
          practices? We&rsquo;d love to hear from you.
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:privacy@galion.com">privacy@galion.com</a>
          </li>
          <li>
            <strong>Mail:</strong> Galion, Inc., Attn: Privacy Office, 2211 N
            1st St., San Jose, CA 95131
          </li>
          <li>
            <strong>Help Center:</strong> <a href="/help">galion.com/help</a>
          </li>
        </ul>
      </>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Legal · Privacy"
      title="Privacy Policy"
      lede="How Galion collects, uses, and safeguards information about you when you use our products, websites, and services. We&rsquo;ve written this in plain language so you can read it cover to cover."
      lastUpdated="April 30, 2026"
      sections={sections}
    />
  )
}
