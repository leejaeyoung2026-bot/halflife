"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/simulator", label: "Simulator" },
  { href: "/learn", label: "Learn" },
  { href: "/glossary", label: "Glossary" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link {
          display: inline-block;
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: var(--ink-soft);
          text-decoration: none;
          background-color: transparent;
          transition: color 0.15s ease, background-color 0.15s ease;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: var(--ink);
          background-color: color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .nav-link-active {
          font-weight: 600;
          color: var(--accent);
          background-color: color-mix(in srgb, var(--accent) 10%, transparent);
        }
        .nav-link-active:hover {
          color: var(--accent);
          background-color: color-mix(in srgb, var(--accent) 15%, transparent);
        }
        .nav-cta {
          display: inline-block;
          padding: 0.4rem 1rem;
          border-radius: 6px;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          color: #fff;
          background-color: var(--accent);
          text-decoration: none;
          transition: background-color 0.15s ease;
          white-space: nowrap;
        }
        .nav-cta:hover { background-color: var(--accent-hover); }
        .hamburger-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          color: var(--ink-soft);
          border-radius: 6px;
          transition: color 0.15s ease;
        }
        .hamburger-btn:hover { color: var(--ink); }
        .mobile-menu {
          display: none;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.75rem 1.5rem 1rem;
          border-top: 1px solid var(--rule);
          background-color: color-mix(in srgb, var(--paper) 97%, transparent);
        }
        .mobile-nav-link {
          display: block;
          padding: 0.625rem 0.75rem;
          border-radius: 6px;
          font-family: var(--font-sans), ui-sans-serif, sans-serif;
          font-size: 0.9375rem;
          font-weight: 400;
          color: var(--ink-soft);
          text-decoration: none;
          transition: color 0.15s ease, background-color 0.15s ease;
        }
        .mobile-nav-link:hover {
          color: var(--ink);
          background-color: color-mix(in srgb, var(--ink) 6%, transparent);
        }
        .mobile-nav-link-active {
          font-weight: 600;
          color: var(--accent);
          background-color: color-mix(in srgb, var(--accent) 10%, transparent);
        }
        @media (max-width: 640px) {
          .desktop-links { display: none !important; }
          .hamburger-btn { display: flex; align-items: center; }
        }
        @media (min-width: 641px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: "1px solid var(--rule)",
          backgroundColor: "color-mix(in srgb, var(--paper) 85%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <nav
          style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}
          aria-label="Main navigation"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "56px",
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ textDecoration: "none", lineHeight: 1 }} aria-label="HalfLife home">
              <span
                style={{
                  fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                HalfLife
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                  fontSize: "0.625rem",
                  fontWeight: 500,
                  color: "var(--ink-faint)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginTop: "1px",
                }}
              >
                by Vibed Lab
              </span>
            </Link>

            {/* Desktop links */}
            <div className="desktop-links" style={{ display: "flex", alignItems: "center", gap: "0.125rem" }}>
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.125rem",
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                {navLinks.map(({ href, label }) => {
                  const active = pathname === href || (href !== "/" && pathname.startsWith(href));
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`nav-link${active ? " nav-link-active" : ""}`}
                        aria-current={active ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div style={{ width: "1px", height: "20px", backgroundColor: "var(--rule)", margin: "0 0.5rem" }} />
              <Link href="/simulator" className="nav-cta">
                Try Simulator →
              </Link>
            </div>

            {/* Hamburger (mobile) */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div className="mobile-menu" style={{ display: mobileOpen ? "flex" : "none" }}>
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`mobile-nav-link${active ? " mobile-nav-link-active" : ""}`}
                onClick={() => setMobileOpen(false)}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
          <div style={{ height: "1px", backgroundColor: "var(--rule)", margin: "0.25rem 0" }} />
          <Link
            href="/simulator"
            className="nav-cta"
            style={{ textAlign: "center", marginTop: "0.25rem" }}
            onClick={() => setMobileOpen(false)}
          >
            Try Simulator →
          </Link>
        </div>
      </header>
    </>
  );
}
