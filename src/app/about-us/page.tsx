import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { services } from '@/content/site';
export const metadata = { title: 'About Us' };

const principles = [
  {
    number: '01',
    title: 'One cloud, deeply understood',
    text: 'We work exclusively in AWS, bringing focused expertise to every decision from foundation to production.',
  },
  {
    number: '02',
    title: 'Clarity before complexity',
    text: 'We map dependencies, risks, and choices early so everyone can move forward with confidence.',
  },
  {
    number: '03',
    title: 'Knowledge that stays',
    text: 'We build alongside your team, leaving practical patterns and the confidence to run them well.',
  },
];

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="about-hero">
          <div className="container about-hero-grid">
            <div>
              <p className="eyebrow">About Cloudvation</p>
              <h1>Precision without surprises.</h1>
              <p className="lede">
                Cloudvations Technologies Inc. is a cloud engineering firm
                specializing exclusively in Amazon Web Services. We design,
                migrate, modernize, secure, and operate AWS environments for
                organizations that need the work done correctly the first time.
              </p>
              <Link className="button" href="/contact">
                Start a conversation <span>→</span>
              </Link>
            </div>
            <aside className="about-focus-card" aria-label="Our focus">
              <p className="eyebrow">Our focus</p>
              <strong>AWS, end to end.</strong>
              <p>
                A deliberately narrow focus gives you deeper expertise,
                repeatable delivery, and a clearer path from strategy to
                steady-state operations.
              </p>
              <div className="about-focus-list">
                <span>Strategy</span>
                <span>Engineering</span>
                <span>Operations</span>
              </div>
            </aside>
          </div>
        </section>
        <section className="section about-intro">
          <div className="container about-intro-grid">
            <p className="eyebrow">Built for meaningful change</p>
            <div>
              <h2>Specialists who make cloud progress practical.</h2>
              <p>
                Every engineer on our team has built their career inside the AWS
                environment, with experience across healthcare, utilities,
                financial services, and public sector organizations.
              </p>
              <p>
                That depth is deliberate. It lets us apply proven playbooks,
                make better estimates, and create seamless handoffs from
                planning through production—while keeping your team informed and
                capable at every step.
              </p>
            </div>
          </div>
        </section>
        <section className="about-capabilities">
          <div className="container">
            <p className="eyebrow">Where we help</p>
            <div className="section-heading">
              <h2>Expertise across the AWS journey.</h2>
              <Link className="text-link" href="/services">
                Explore services <span>→</span>
              </Link>
            </div>
            <div className="about-capability-grid">
              {services.map((service) => (
                <article className="about-capability" key={service.title}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="trust about-principles">
          <div className="container">
            <div className="trust-top">
              <div>
                <p className="eyebrow">How we work</p>
                <h2>
                  Thoughtful by design.
                  <br />
                  Reliable in delivery.
                </h2>
              </div>
              <p>
                We combine deep technical work with direct communication, so
                your team always understands what is changing, why it matters,
                and what comes next.
              </p>
            </div>
            <div className="about-principle-grid">
              {principles.map((principle) => (
                <article key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="cta-band about-cta">
          <div className="container">
            <p className="eyebrow">A better way forward</p>
            <h2>Bring us the cloud challenge that matters most.</h2>
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
