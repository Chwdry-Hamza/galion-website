const services = [
  { title: 'Web Development', desc: 'Custom websites built with modern stacks.' },
  { title: 'UI/UX Design', desc: 'Clean, intuitive interfaces users love.' },
  { title: 'SEO & Performance', desc: 'Fast pages that rank and convert.' },
]

export default function Services() {
  return (
    <section className="page-section">
      <div className="container">
        <h1>Our Services</h1>
        <div className="cards">
          {services.map((s) => (
            <article key={s.title} className="card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
