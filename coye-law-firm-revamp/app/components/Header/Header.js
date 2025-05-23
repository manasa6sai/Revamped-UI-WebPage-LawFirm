'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { Scale } from 'lucide-react';

const NavLink = ({ href, children, onClick }) => (
  <li className={styles.navItem}>
    <Link href={href} onClick={onClick} className={styles.navLink}>
      {children}
    </Link>
  </li>
);

const DropdownLink = ({ title, items, baseHref }) => (
  <li className={styles.navItem}>
    <div className={styles.navLink}>
      {title}
    </div>
    <div className={styles.popupMenu}>
      {items.map((item) => (
        <Link key={item.slug} href={`${baseHref}/${item.slug}`} className={styles.popupItem}>
          {item.label}
        </Link>
      ))}
    </div>
  </li>
);

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    { type: 'link', href: '/', label: 'Home' },
    {
      type: 'dropdown',
      title: 'Practice Areas',
      baseHref: '/practice-areas',
      items: [
        { slug: 'veterans-disability', label: 'Veterans Disability' },
        { slug: 'social-security', label: 'Social Security' },
        { slug: 'workers-compensation', label: "Workers' Compensation" },
      ],
    },
    { type: 'link', href: '/your-team', label: 'Your Team' },
    { type: 'link', href: '/reviews', label: 'Reviews' },
    { type: 'link', href: '/results', label: 'Results' },
    { type: 'link', href: '/faqs', label: 'FAQs' },
    {
      type: 'dropdown',
      title: 'Free Info',
      baseHref: '/free-info',
      items: [
        { slug: 'books', label: 'Books & Guides' },
        { slug: 'articles', label: 'Articles' },
      ],
    },
    { type: 'link', href: '/blog', label: 'Blog' },
    { type: 'link', href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileNavOpen]);

  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <Scale className={styles.logoIcon} size={24} />
            <span>
              <span className={styles.logoCoye}>COYE</span>{' '}
              <span className={styles.logoLawFirm}>LAW FIRM</span>
            </span>
          </Link>
        </div>

        <button
          className={styles.mobileNavToggle}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-expanded={mobileNavOpen}
          aria-label="Toggle navigation"
        >
          {mobileNavOpen ? '✕' : '☰'}
        </button>

        <nav className={`${styles.mainNav} ${mobileNavOpen ? styles.mobileNavActive : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink key={item.href} href={item.href}>
                    {item.label}
                  </NavLink>
                );
              }
              if (item.type === 'dropdown') {
                return (
                  <DropdownLink
                    key={item.title}
                    title={item.title}
                    items={item.items}
                    baseHref={item.baseHref}
                  />
                );
              }
              return null;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}