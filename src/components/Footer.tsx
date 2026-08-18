import Link from "next/link";
import { navItems } from "@/content/site";
export function Footer() { return <footer className="site-footer"><div className="container footer-grid">
  <div><Link className="brand footer-brand" href="/">cloud<span>vation</span></Link><p>Cloud migration, made practical.</p></div>
  <div><h3>Sitemap</h3>{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
  <div><h3>Get in touch</h3><a href="mailto:hello@cloudvation.com">hello@cloudvation.com</a><p>India · Global delivery</p></div>
  <div><h3>Legal</h3><Link href="/contact">Privacy</Link><p>© {new Date().getFullYear()} Cloudvation</p></div>
</div></footer>; }
