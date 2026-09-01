import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { services } from '@/content/site';
export const metadata = { title: 'Services' };
export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h1>A practical path through cloud change.</h1>
            <p>
              From initial readiness assessment to a modern, efficient cloud
              operating model. We eliminate downtime, remove execution risks,
              and drive continuous progress.
            </p>
            <Link className="button" href="/contact">
              Discuss your migration <span>→</span>
            </Link>
          </div>
        </section>
        <section className="section">
          <div className="container detail-list">
            {services.map((service) => (
              <article className="service-detail" key={service.title}>
                <span className="service-number">{service.number}</span>
                <div>
                  <h2>{service.title}</h2>
                  <p>{service.detail}</p>
                </div>
                <div>
                  <h3>What’s included</h3>
                  <ul>
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="trust">
          <div className="container">
            <p className="eyebrow">How we work</p>
            <h2>Clear decisions. Deliberate delivery.</h2>
            <p className="narrow">
              We fit our work to your team’s readiness and pace, bringing
              structure where it helps while keeping the focus on measurable
              progress.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
