import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/content/site';
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link
            className="brand footer-brand"
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
          >
            <Image
              className="brand-logo"
              src="/cloudvation.png"
              alt="Cloudvation"
              width={42}
              height={42}
              priority
            />
            <strong>
              Cloud<span>vation</span>
            </strong>
          </Link>
          <p>Cloud migration, made practical.</p>
        </div>
        <div>
          <h3>Sitemap</h3>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Get in touch</h3>
          <a href="mailto:sales@cloudvation.ca">sales@cloudvation.ca</a>
          <p>Toronto, Canada · Global delivery</p>
        </div>
        <div>
          <h3>Legal</h3>
          <Link href="/contact">Privacy</Link>
          <p>© {new Date().getFullYear()} Cloudvation</p>
        </div>
      </div>
    </footer>
  );
}
