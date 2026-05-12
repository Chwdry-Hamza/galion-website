import './SavingsAccount.css'

const SAVINGS_BARS = [
  { label: 'Jan', fills: [16, 22] },
  { label: 'Mar', fills: [28, 34] },
  { label: 'May', fills: [42, 50] },
  { label: 'Jul', fills: [54, 62] },
  { label: '$284', fills: [76, 88], highlight: true },
]

export default function SavingsAccount() {
  return (
    <section className="savings-account">
      <div className="container savings-account__inner">
        <h2 className="savings-account__title">
          Earn up to 2% back<br />
          every time you<br />
          tap your Galion card
        </h2>
        <div className="savings-account__right">
          <p className="savings-account__desc">
            Every purchase earns crypto cashback &mdash; paid directly to
            your wallet. Spend on groceries, fuel, travel, or online, and
            watch your rewards stack up automatically.
          </p>
          <button type="button" className="savings-account__btn">Get the Card</button>
          <p className="savings-account__fine">
            Cashback is paid in USDC and credited to your Galion wallet
            within 24 hours of each settled transaction. Rewards rate may
            vary by merchant category. Cryptocurrency values fluctuate
            and may lose value.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="savings-chart">
          <h3 className="savings-chart__title">Total Cashback Earned</h3>
          <div className="savings-chart__bars">
            {SAVINGS_BARS.map((b) => (
              <div key={b.label} className="savings-bar">
                <div className="savings-bar__label">
                  {b.highlight ? (
                    <>
                      <span className="savings-bar__amount">{b.label}</span>
                      <span className="savings-bar__caret" aria-hidden="true">▾</span>
                    </>
                  ) : (
                    b.label
                  )}
                </div>
                <div className="savings-bar__pair">
                  {b.fills.map((fill, i) => (
                    <div key={i} className="savings-bar__track">
                      <div
                        className="savings-bar__fill"
                        style={{ height: `${fill}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="savings-chart__fine">
            Example based on $14,000 in annual card spend.
          </p>
        </div>
      </div>
    </section>
  )
}
