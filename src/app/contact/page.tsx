import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
export const metadata = { title: 'Contact' };
export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero compact">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Start with the problem you want to solve.</h1>
            <p>
              Tell us where you are today and what a better cloud future looks
              like. We’ll help you identify a sensible next step.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container contact-layout">
            <aside>
              <p className="eyebrow">Let’s talk</p>
              <h2>Bring us your cloud question.</h2>
              <p>
                For general enquiries, email{' '}
                <a href="mailto:hello@cloudvation.com">hello@cloudvation.com</a>
                .
              </p>
              <p>Toronto, Canada · Global delivery</p>
            </aside>
            <div className="form-panel">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
