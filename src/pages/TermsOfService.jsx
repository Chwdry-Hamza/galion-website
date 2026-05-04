import LegalLayout from './LegalLayout.jsx'

const sections = [
  {
    id: 'introduction',
    heading: '1. Introduction',
    body: (
      <>
        <p>
          Welcome to Galion. These Terms and Conditions (&ldquo;Terms&rdquo;)
          form a binding agreement between you and Galion, Inc. and its
          affiliates (&ldquo;Galion,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) when you access or use our
          websites, mobile apps, and financial services (collectively, the
          &ldquo;Services&rdquo;).
        </p>
        <p>
          Please read these Terms carefully. They explain your rights, our
          obligations, and how we work together. By creating a Galion account
          or otherwise using the Services, you confirm that you have read,
          understood, and agree to be bound by these Terms and our{' '}
          <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <p>
          If you do not agree with any part of these Terms, please do not
          use the Services.
        </p>
      </>
    ),
  },
  {
    id: 'about-these-terms',
    heading: '2. About these Terms',
    body: (
      <>
        <p>
          These Terms apply across the Galion ecosystem. Some products or
          features have additional terms (such as our{' '}
          <a href="/card-terms">Card Terms</a> or{' '}
          <a href="/esign-consent">E-Sign Consent</a>), which form part of
          your agreement with us when you choose those products. If there is
          a conflict between these Terms and a product-specific agreement,
          the product-specific agreement controls for that product.
        </p>
        <p>
          We may translate these Terms into other languages for convenience.
          The English version is the binding version in case of any
          inconsistency.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    heading: '3. Eligibility',
    body: (
      <>
        <p>To use Galion, you must:</p>
        <ul>
          <li>
            Be at least 18 years old, or the age of legal majority in your
            jurisdiction.
          </li>
          <li>
            Provide accurate, complete, and current registration information.
          </li>
          <li>
            Have the legal capacity and authority to enter into these Terms.
          </li>
          <li>
            Not be located in, or a resident of, any country, region, or
            jurisdiction subject to comprehensive sanctions or otherwise
            restricted by applicable law.
          </li>
          <li>
            Not be on any list of prohibited persons maintained by a
            government authority that applies to Galion.
          </li>
        </ul>
        <p>
          We may decline to open or maintain your account if we cannot verify
          the information you provide, or if doing so would violate
          applicable law or our internal policies.
        </p>
      </>
    ),
  },
  {
    id: 'account',
    heading: '4. Your account',
    body: (
      <>
        <h3>Creating an account</h3>
        <p>
          When you create a Galion account, you agree to provide truthful
          information and to keep that information up to date. We may ask
          for additional information at any time to verify your identity, to
          comply with legal requirements, or to assess risk.
        </p>

        <h3>Securing your account</h3>
        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity that occurs under your
          account. We strongly recommend enabling two-factor authentication.
          Notify us immediately at{' '}
          <a href="mailto:security@galion.com">security@galion.com</a> if you
          suspect any unauthorized access or activity.
        </p>

        <h3>Account suspension or closure</h3>
        <p>
          We may suspend, restrict, or close accounts that violate these
          Terms, applicable laws, or our acceptable-use policies, or where
          we suspect fraud, security risk, or harm to other users.
        </p>
      </>
    ),
  },
  {
    id: 'using-services',
    heading: '5. Using the Services',
    body: (
      <>
        <p>You agree to use the Services responsibly. You will not:</p>
        <ul>
          <li>
            Use the Services for any unlawful, fraudulent, deceptive, or
            harmful activity.
          </li>
          <li>
            Send, request, or facilitate prohibited transactions, including
            those involving illegal goods, weapons, or restricted items.
          </li>
          <li>
            Interfere with, disrupt, or damage the Services or our
            infrastructure, including by introducing malware, viruses, or
            similar harmful code.
          </li>
          <li>
            Reverse-engineer, decompile, copy, scrape, or resell any portion
            of the Services without our written consent.
          </li>
          <li>
            Misrepresent your identity, impersonate any person or entity, or
            access the Services using another user&rsquo;s credentials.
          </li>
          <li>
            Use the Services to harass, defame, or otherwise harm other
            users or third parties.
          </li>
          <li>
            Use the Services in a manner that violates any applicable laws,
            including export, sanctions, or anti-money-laundering laws.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'fees',
    heading: '6. Fees and payments',
    body: (
      <>
        <p>
          Many features of the Services are free. Some carry fees, which are
          disclosed before you incur them. A current schedule of fees is
          available at <a href="/fees">galion.com/fees</a> and inside the
          Galion app.
        </p>
        <p>
          You authorize Galion to charge applicable fees, including funding
          and currency-conversion fees, to the payment instrument linked to
          your account. We may retry failed charges. Any taxes, levies, or
          duties are your responsibility unless we are required to collect
          them on your behalf.
        </p>
        <p>
          We may change our fees from time to time. Material changes will be
          announced to you in advance, as required by law.
        </p>
      </>
    ),
  },
  {
    id: 'your-content',
    heading: '7. Your content',
    body: (
      <>
        <p>
          You may submit information, messages, profile details, or other
          materials to the Services (&ldquo;Your Content&rdquo;). You retain
          ownership of Your Content, but you grant Galion a worldwide,
          non-exclusive, royalty-free license to host, store, transmit, and
          display Your Content as needed to provide the Services and as
          permitted by our <a href="/privacy-policy">Privacy Policy</a>.
        </p>
        <p>
          You represent that you have all rights necessary to submit Your
          Content and that it does not violate any law or third-party right.
          We may remove content that violates these Terms or applicable law.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    heading: '8. Intellectual property',
    body: (
      <p>
        Galion and its licensors own all rights, title, and interest in and
        to the Services, including software, designs, trademarks, logos, and
        content we provide. We grant you a limited, non-exclusive,
        non-transferable, revocable license to use the Services for their
        intended purpose. All other rights are reserved.
      </p>
    ),
  },
  {
    id: 'third-party',
    heading: '9. Third-party services',
    body: (
      <p>
        The Services may include integrations, links, or features from
        third-party providers. We don&rsquo;t control those third-party
        services and aren&rsquo;t responsible for their availability,
        content, or practices. Your use of any third-party service is
        governed by that provider&rsquo;s own terms and privacy policy.
      </p>
    ),
  },
  {
    id: 'disclaimers',
    heading: '10. Disclaimers',
    body: (
      <p>
        The Services are provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; without warranties of any kind, whether express,
        implied, statutory, or otherwise. To the maximum extent permitted by
        law, Galion disclaims all warranties, including warranties of
        merchantability, fitness for a particular purpose, non-infringement,
        and any warranty that the Services will be uninterrupted,
        error-free, secure, or free of viruses or other harmful components.
      </p>
    ),
  },
  {
    id: 'limitation',
    heading: '11. Limitation of liability',
    body: (
      <p>
        To the fullest extent permitted by law, Galion will not be liable for
        any indirect, incidental, special, consequential, exemplary, or
        punitive damages, or for any loss of profits, revenue, data,
        goodwill, or other intangible losses, arising out of or related to
        your use of the Services. Galion&rsquo;s aggregate liability for any
        claim arising under these Terms will not exceed the greater of
        (a) the fees you paid Galion in the 12 months before the claim or
        (b) one hundred U.S. dollars (USD $100).
      </p>
    ),
  },
  {
    id: 'indemnification',
    heading: '12. Indemnification',
    body: (
      <p>
        You agree to defend, indemnify, and hold harmless Galion and its
        affiliates, officers, employees, and agents from any claims,
        damages, losses, liabilities, and expenses (including reasonable
        attorneys&rsquo; fees) arising out of your use of the Services, Your
        Content, or your breach of these Terms or applicable law.
      </p>
    ),
  },
  {
    id: 'termination',
    heading: '13. Termination',
    body: (
      <>
        <p>
          You may close your Galion account at any time from the Galion app
          or by contacting our support team. We may suspend or terminate
          your access to the Services if you violate these Terms, if we are
          required to do so by law, or to protect our customers, third
          parties, or Galion.
        </p>
        <p>
          Sections of these Terms that by their nature should survive
          termination — including those concerning your content, fees
          incurred, intellectual property, disclaimers, limitations of
          liability, indemnification, and dispute resolution — will continue
          to apply.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    heading: '14. Changes to these Terms',
    body: (
      <p>
        We may update these Terms from time to time. Material changes will
        be communicated to you in advance through the Services, by email, or
        by other appropriate means at least 30 days before they take effect,
        unless a shorter period is required by law. By continuing to use the
        Services after changes take effect, you agree to be bound by the
        updated Terms.
      </p>
    ),
  },
  {
    id: 'governing-law',
    heading: '15. Governing law and disputes',
    body: (
      <>
        <p>
          These Terms are governed by the laws of the State of California,
          without regard to its conflict-of-law principles. Any dispute
          arising out of or related to these Terms or the Services will be
          resolved by binding individual arbitration administered in San
          Jose, California, except where prohibited by law or for claims
          you may bring in small-claims court.
        </p>
        <p>
          You and Galion agree that disputes will be resolved on an
          individual basis and not as a class action, except where this
          provision is unenforceable. Nothing in these Terms prevents you
          from contacting us first to resolve a dispute informally — we
          encourage that, and it&rsquo;s usually faster for everyone.
        </p>
      </>
    ),
  },
  {
    id: 'contact',
    heading: '16. Contact us',
    body: (
      <>
        <p>Questions about these Terms? We&rsquo;re happy to help.</p>
        <ul>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:legal@galion.com">legal@galion.com</a>
          </li>
          <li>
            <strong>Mail:</strong> Galion, Inc., Attn: Legal, 2211 N 1st St.,
            San Jose, CA 95131
          </li>
          <li>
            <strong>Help Center:</strong> <a href="/help">galion.com/help</a>
          </li>
        </ul>
      </>
    ),
  },
]

export default function TermsOfService() {
  return (
    <LegalLayout
      eyebrow="Legal · Terms"
      title="Terms and Conditions"
      lede="The agreement between you and Galion when you use our products, websites, and services. We&rsquo;ve written this in plain language so you can read it cover to cover."
      lastUpdated="April 30, 2026"
      sections={sections}
    />
  )
}
