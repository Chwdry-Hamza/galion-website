import LegalLayout from './LegalLayout.jsx'

const sections = [
  {
    id: 'introduction',
    heading: '1. Introduction',
    body: (
      <p>
        These Card Terms govern the use of Galion-issued debit, credit, and
        prepaid cards (each a &ldquo;Card&rdquo;). They apply in addition to
        our general <a href="/terms">Terms of Service</a> and any
        cardholder-specific addenda you receive.
      </p>
    ),
  },
  {
    id: 'card-issuer',
    heading: '2. Card issuer and network',
    body: (
      <p>
        Cards are issued by an FDIC-insured partner bank pursuant to a
        license from a major payment network. The issuing bank, not Galion,
        is the legal issuer of the Card and holds your funds.
      </p>
    ),
  },
  {
    id: 'eligibility',
    heading: '3. Eligibility and activation',
    body: (
      <>
        <p>To request a Card, you must:</p>
        <ul>
          <li>Hold a verified Galion account in good standing.</li>
          <li>Be a resident of an eligible jurisdiction.</li>
          <li>Pass identity verification and applicable credit checks.</li>
        </ul>
        <p>
          You must activate your Card before first use following the
          instructions provided in the Galion app or accompanying letter.
        </p>
      </>
    ),
  },
  {
    id: 'using-card',
    heading: '4. Using your Card',
    body: (
      <>
        <p>You may use your Card to:</p>
        <ul>
          <li>Make purchases at merchants that accept the network.</li>
          <li>Withdraw cash at participating ATMs (subject to limits).</li>
          <li>Make recurring payments and online purchases.</li>
        </ul>
        <p>
          Some transactions may be declined if they exceed limits, appear
          high-risk, or are otherwise restricted by law or by us.
        </p>
      </>
    ),
  },
  {
    id: 'fees',
    heading: '5. Fees and limits',
    body: (
      <p>
        A current schedule of fees and limits is available in the Galion app
        and at <a href="/fees">galion.com/fees</a>. We&rsquo;ll always notify
        you in advance of changes, as required by law.
      </p>
    ),
  },
  {
    id: 'lost-or-stolen',
    heading: '6. Lost or stolen Cards',
    body: (
      <p>
        If your Card is lost, stolen, or used without your authorization,
        freeze it instantly in the Galion app and contact{' '}
        <a href="mailto:cards@galion.com">cards@galion.com</a>. Your
        liability for unauthorized transactions is limited under federal law
        (Regulation E for debit, Regulation Z for credit) when reported
        promptly.
      </p>
    ),
  },
  {
    id: 'rewards',
    heading: '7. Rewards and benefits',
    body: (
      <p>
        Some Cards earn rewards or include benefits such as cashback or
        purchase protection. Specific reward terms, redemption rules, and
        benefit guides are provided separately at the time you receive your
        Card.
      </p>
    ),
  },
  {
    id: 'closing',
    heading: '8. Closing your Card',
    body: (
      <p>
        You may close your Card at any time. We may close, suspend, or
        replace your Card if we suspect fraud, in response to a regulatory
        request, or if your underlying Galion account is closed.
      </p>
    ),
  },
  {
    id: 'changes',
    heading: '9. Changes to these terms',
    body: (
      <p>
        We may update these Card Terms from time to time. Material changes
        will be communicated to you in advance through the Galion app or by
        email.
      </p>
    ),
  },
]

export default function CardTerms() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Card Terms"
      lede="The terms that apply to Galion-issued debit, credit, and prepaid cards."
      lastUpdated="April 30, 2026"
      sections={sections}
    />
  )
}
