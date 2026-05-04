import './SavingsAccount.css'

const SAVINGS_BARS = [
  { label: 'Jan', fills: [16, 22] },
  { label: 'Mar', fills: [28, 34] },
  { label: 'May', fills: [42, 50] },
  { label: 'Jul', fills: [54, 62] },
  { label: '$959', fills: [76, 88], highlight: true },
]

export default function SavingsAccount() {
  return (
    <section className="savings-account">
      <div className="container savings-account__inner">
        <h2 className="savings-account__title">
          Get 3.40% APY<sup>11</sup><br />
          with your Galion<br />
          Savings account
        </h2>
        <div className="savings-account__right">
          <p className="savings-account__desc">
            It&rsquo;s free to set up, FDIC insured with and held at
            Synchrony Bank&ndash;and you can roll in all the rewards you
            earn with Galion so you earn even more.
          </p>
          <button type="button" className="savings-account__btn">Start Saving</button>
          <p className="savings-account__fine">
            Galion is a financial technology company, not a bank, and is
            not FDIC-insured. FDIC insurance protects against the failure
            of Synchrony Bank, Member FDIC, not the failure of Galion. Any
            cryptocurrencies you hold in your Galion account are not
            deposits, are not eligible for pass-through FDIC insurance and
            may lose value.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="savings-chart">
          <h3 className="savings-chart__title">Total Galion Savings</h3>
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
            Average savings account value reflected as of 07/18/2023.
          </p>
        </div>
      </div>
    </section>
  )
}
