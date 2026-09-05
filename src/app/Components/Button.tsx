import * as React from "react";

export default function Button({
  children,
  href,
  target,
  rel,
  variant = "secondary",
}: {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary";
}) {
  const primaryClass = "flex items-center justify-center gap-2 px-5 py-2 bg-black text-white text-sm rounded-md";
  const secondaryClass = "flex items-center justify-center gap-2 px-5 py-2 text-black border border-black text-sm rounded-md";
  const className = variant === "primary" ? primaryClass : secondaryClass;

  return href ? (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
    >
      {children}
    </a>
  ) : (
    <button className={primaryClass}>
      {children}
    </button>
  );
}
