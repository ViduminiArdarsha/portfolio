import * as React from "react";

export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return href ? (
    <a
      href={href}
      className="flex items-center justify-center gap-2 px-5 py-2 text-black border border-black text-sm rounded-md"
    >
      {children}
    </a>
  ) : (
    <button className="flex items-center justify-center gap-2 px-5 py-2 bg-black text-white text-sm rounded-md">
      {children}
    </button>
  );
}
