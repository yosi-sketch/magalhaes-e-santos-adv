"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "petrol" | "outline" | "white";
}

export default function GlowingButton({
  children,
  href,
  target,
  onClick,
  className = "",
  size = "md",
  variant = "gold",
}: GlowingButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-3 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  const variantClasses = {
    gold: "border border-gold-400/80 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brand-950 font-bold shadow-sm shadow-gold-500/20 hover:-translate-y-0.5 hover:shadow-md hover:shadow-gold-500/35 active:translate-y-0",
    petrol: "border border-brand-600 bg-brand-700 text-white shadow-sm shadow-brand-950/20 hover:-translate-y-0.5 hover:bg-brand-800 hover:shadow-md hover:shadow-brand-800/25 active:translate-y-0",
    outline: "border border-brand-700/40 bg-transparent text-brand-800 hover:-translate-y-0.5 hover:border-brand-700 hover:bg-brand-50 hover:text-brand-900 active:translate-y-0",
    white: "border border-white bg-white text-brand-950 shadow-sm hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-900 hover:shadow-md active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-700 select-none text-center cursor-pointer " +
    sizeClasses +
    " " +
    variantClasses +
    " " +
    className;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
