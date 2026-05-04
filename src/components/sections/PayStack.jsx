import './PayStack.css'
import payIn4Img from '../../assets/images/pay-in-4.jpg'
import payMonthlyImg from '../../assets/images/pay-monthly.webp'
import payInStoreImg from '../../assets/images/surfer.png'
import creditCardImg from '../../assets/images/Free-Floating-Credit-Cards-Mockup-PSD.webp'
import creditFinancingImg from '../../assets/images/credit-card-financing.png'

export default function PayStack() {
  return (
    <div className="pay-stack">
      <section className="pay-in-4 pay-stack__item">
        <div className="container pay-in-4__inner">
          <div className="pay-in-4__panel">
            <h2 className="pay-in-4__title">
              Pay in 4<br />interest-free<br />payments
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Paid every two weeks.<br className="mobile-br" />
                {' '}No late fees. Won&rsquo;t<br className="mobile-br" />
                {' '}affect your credit score<br className="mobile-br" />
                {' '}to apply.<sup>4</sup>
              </p>
              <button type="button" className="pay-in-4__btn">
                Learn About Pay<br className="mobile-br" />{' '}in 4
              </button>
            </div>
          </div>
          <div
            className="pay-in-4__media"
            style={{ backgroundImage: `url(${payIn4Img})` }}
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="pay-in-4 pay-monthly pay-stack__item">
        <div className="container pay-in-4__inner">
          <div className="pay-in-4__panel pay-in-4__panel--blue">
            <h2 className="pay-in-4__title">
              Pay Monthly in 3,<br />6, 12, or 24<br />payments
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                With $0 down.<br />
                No sign-up fees<br className="mobile-br" />
                {' '}or late fees.<sup>5</sup>
              </p>
              <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                Learn About<br className="mobile-br" />{' '}Pay Monthly
              </button>
            </div>
          </div>
          <div
            className="pay-in-4__media pay-in-4__media--full pay-in-4__media--monthly"
            style={{ backgroundImage: `url(${payMonthlyImg})` }}
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="pay-in-4 pay-in-store pay-stack__item">
        <div className="container pay-in-4__inner">
          <div className="pay-in-4__panel pay-in-4__panel--gray">
            <h2 className="pay-in-4__title">
              Pay Monthly<br />in store<sup>5</sup>
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Buy an item you&rsquo;d like<br className="mobile-br" />
                {' '}to purchase now but would<br className="mobile-br" />
                {' '}prefer to pay for over time.
              </p>
              <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                Learn About Pay<br className="mobile-br" />{' '}Monthly In Store
              </button>
            </div>
          </div>
          <div
            className="pay-in-4__media pay-in-4__media--full pay-in-4__media--surfer"
            style={{ backgroundImage: `url(${payInStoreImg})` }}
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="pay-in-4 pay-cashback pay-stack__item">
        <div className="container pay-in-4__inner">
          <div className="pay-in-4__panel pay-in-4__panel--peach">
            <h2 className="pay-in-4__title">
              Pay with the<br />Galion Cashback<br />Mastercard<sup>&reg;</sup>
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Earn 3% cash back when<br className="mobile-br" />
                {' '}you check out with Galion<br className="mobile-br" />
                {' '}and 1.5% on all other<br className="mobile-br" />
                {' '}Mastercard purchases.<sup>6</sup>
              </p>
              <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                Apply for<br className="mobile-br" />{' '}the Credit Card
              </button>
            </div>
          </div>
          <div
            className="pay-in-4__media pay-in-4__media--full"
            style={{ backgroundImage: `url(${creditCardImg})` }}
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="pay-in-4 pay-financing pay-stack__item">
        <div className="container pay-in-4__inner">
          <div className="pay-in-4__panel pay-in-4__panel--gray">
            <h2 className="pay-in-4__title">
              Special financing<br />with the Galion<br />Credit Card
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Enjoy special financing<br className="mobile-br" />
                {' '}on all purchases of $149+<br className="mobile-br" />
                {' '}everywhere Galion or<br className="mobile-br" />
                {' '}Mastercard is accepted.<sup>7</sup>
              </p>
              <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                Learn More
              </button>
            </div>
          </div>
          <div
            className="pay-in-4__media pay-in-4__media--full pay-in-4__media--financing"
            style={{ backgroundImage: `url(${creditFinancingImg})` }}
            aria-hidden="true"
          />
        </div>
      </section>
    </div>
  )
}
