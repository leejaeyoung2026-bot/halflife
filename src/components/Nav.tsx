"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/simulator", label: "Simulator" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
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
          <Link
            href="/"
            style={{ textDecoration: "none", lineHeight: 1 }}
            aria-label="HalfLife home"
          >
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

          {/* Links */}
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      display: "inline-block",
                      padding: "0.375rem 0.75rem",
                      borderRadius: "6px",
                      fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: active ? 600 : 400,
                      color: active ? "var(--accent)" : "var(--ink-soft)",
                      textDecoration: "none",
                      backgroundColor: active
                        ? "color-mix(in srgb, var(--accent) 10%, transparent)"
                        : "transparent",
                      transition: "color 0.15s ease, background-color 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--ink)";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.backgroundColor =
                          "color-mix(in srgb, var(--ink) 6%, transparent)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--ink-soft)";
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.backgroundColor = "transparent";
                      }
                    }}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
