import Link from "next/link";

interface AuthorBylineProps {
  date?: string;
}

export default function AuthorByline({ date = "March 8, 2026" }: AuthorBylineProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.875rem 1rem",
        backgroundColor: "var(--cream)",
        borderRadius: "8px",
        border: "1px solid var(--rule)",
        marginBottom: "2.5rem",
      }}
    >
      {/* Avatar placeholder */}
      <div
        aria-hidden="true"
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          fontFamily: "var(--font-serif), ui-serif, Georgia, serif",
          fontSize: "1rem",
          color: "#fff",
          fontWeight: 400,
        }}
      >
        J
      </div>
      <div>
        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-sans), ui-sans-serif, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--ink)",
          }}
        >
          Written by{" "}
          <Link
            href="/about"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
            }}
          >
            Jay
          </Link>
          , Licensed Pharmacist
        </p>
        <p
          style={{
            margin: "0.125rem 0 0",
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: "0.6875rem",
            color: "var(--ink-faint)",
            letterSpacing: "0.04em",
          }}
        >
          {date} · Reviewed for clinical accuracy
        </p>
      </div>
    </div>
  );
}
