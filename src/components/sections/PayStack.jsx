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
              Spend crypto<br />anywhere in<br />the world
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Tap, swipe, or pay online with the<br className="mobile-br" />
                {' '}Galion card. Your crypto converts<br className="mobile-br" />
                {' '}to fiat the moment you check out.
              </p>
              <button type="button" className="pay-in-4__btn">
                Get the Galion<br className="mobile-br" />{' '}Card
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
              Send and<br />receive crypto<br />in seconds
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Move USDT, USDC, TRX, or ETH<br />
                to anyone, anywhere — no banks,<br className="mobile-br" />
                {' '}no borders, no waiting.
              </p>
              <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                Open Your<br className="mobile-br" />{' '}Wallet
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
              Tap to pay<br />at any store
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Spend your own crypto balance<br className="mobile-br" />
                {' '}at any contactless terminal.<br className="mobile-br" />
                {' '}Crypto converts to fiat at checkout —<br className="mobile-br" />
                {' '}no credit, no borrowing.
              </p>
              <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                See How<br className="mobile-br" />{' '}It Works
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
              Spend in any<br />currency, hold<br />in crypto
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Travel anywhere and spend<br className="mobile-br" />
                {' '}your crypto in local currency —<br className="mobile-br" />
                {' '}USD, EUR, GBP, AED, and more.<br className="mobile-br" />
                {' '}Your wallet, your money.
              </p>
              <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                Supported<br className="mobile-br" />{' '}Currencies
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
              Your crypto,<br />your money,<br />your way
            </h2>
            <div className="pay-in-4__bottom">
              <p className="pay-in-4__desc">
                Hold, send, spend — all from<br className="mobile-br" />
                {' '}one app. Galion is the bridge<br className="mobile-br" />
                {' '}between crypto and the real world.
              </p>
              <button type="button" className="pay-in-4__btn pay-in-4__btn--dark">
                Get Started
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
