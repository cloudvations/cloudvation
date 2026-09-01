'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navItems } from '@/content/site';
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          href="/"
          onClick={() => setOpen(false)}
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
          <strong>Cloud<span>vation</span></strong>
        </Link>
        <button
          className="menu-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <nav
          id="site-nav"
          className={open ? 'nav-open' : ''}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="button button-small"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Book a consultation <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
