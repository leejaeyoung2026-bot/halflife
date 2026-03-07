"use client";

import { type CSSProperties, type ReactNode, useState } from "react";

interface HoverCardProps {
  children: ReactNode;
  baseStyle: CSSProperties;
  hoverStyle: CSSProperties;
  tag?: "div" | "a";
  href?: string;
}

export function HoverCard({
  children,
  baseStyle,
  hoverStyle,
  tag = "div",
}: HoverCardProps) {
  const [hovered, setHovered] = useState(false);
  const style = hovered ? { ...baseStyle, ...hoverStyle } : baseStyle;

  if (tag === "div") {
    return (
      <div
        style={style}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
    );
  }
  return null;
}

interface HoverLinkProps {
  children: ReactNode;
  href: string;
  baseStyle: CSSProperties;
  hoverStyle: CSSProperties;
  external?: boolean;
}

export function HoverLink({
  children,
  href,
  baseStyle,
  hoverStyle,
  external = false,
}: HoverLinkProps) {
  const [hovered, setHovered] = useState(false);
  const style = hovered ? { ...baseStyle, ...hoverStyle } : baseStyle;
  return (
    <a
      href={href}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
