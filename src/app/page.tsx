import Link from 'next/link';
import { Accordion } from '@/components/Accordion';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { services } from '@/content/site';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Cloud migration, made practical</p>
              <h1>Move your business to the cloud with confidence.</h1>
              <p className="lede">
                Cloudvation helps ambitious teams plan, deliver, and optimize
                secure cloud migrations without disrupting what matters.
              </p>
              <div className="actions">
                <Link className="button" href="/contact">
                  Plan your migration <span>→</span>
                </Link>
                <Link className="text-link" href="/services">
                  Explore services <span>→</span>
                </Link>
              </div>
            </div>
            <div className="migration-card">
              <p className="eyebrow">Your migration path</p>
              <Accordion />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <p className="eyebrow">What we do</p>
            <div className="section-heading">
              <h2>Migration expertise, focused on outcomes.</h2>
              <Link className="text-link" href="/services">
                View all services <span>→</span>
              </Link>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <Link
                  className="service-card"
                  href="/services"
                  key={service.title}
                >
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                  <b>
                    Explore <span>→</span>
                  </b>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="trust">
          <div className="container">
            <div className="trust-top">
              <div>
                <p className="eyebrow">Built for confidence</p>
                <h2>
                  Discover. Design.
                  <br />
                  Deliver. Improve.
                </h2>
              </div>
              <p>
                Every engagement combines practical engineering with transparent
                communication, so your team can make decisions with clarity.
              </p>
            </div>
            <div className="timeline">
              {['Discover', 'Design', 'Deliver', 'Improve'].map(
                (step, index) => (
                  <div key={step}>
                    <span>0{index + 1}</span>
                    <strong>{step}</strong>
                    <p>
                      {
                        [
                          'Understand the current state.',
                          'Create a clear route forward.',
                          'Move safely, in manageable waves.',
                          'Keep improving after launch.',
                        ][index]
                      }
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
        <section className="cta-band">
          <div className="container">
            <p className="eyebrow">Start with a conversation</p>
            <h2>Let’s make your next cloud move a confident one.</h2>
            <Link className="button button-light" href="/contact">
              Book a consultation <span>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
