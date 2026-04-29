import featureSplitImg from '../../assets/images/feature-split.webp'

export default function FeatureSplit() {
  return (
    <section className="feature-split">
      <div className="container feature-split__inner">
        <div className="feature-split__text">
          <h2 className="feature-split__title">
            Shop in<br />stores<br />and online
          </h2>
          <p className="feature-split__desc">
            Tap to pay in stores with the Galion Debit Card<sup>1</sup> and
            earn rewards<sup>2</sup> online with Galion checkout.
          </p>
        </div>
        <div
          className="feature-split__media"
          style={{ backgroundImage: `url(${featureSplitImg})` }}
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
