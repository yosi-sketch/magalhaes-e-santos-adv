"use client";

import type { ReactNode } from "react";

interface GlowingButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "gold" | "noir" | "outline" | "white";
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
    sm: "px-5 py-2.5 text-[10px] tracking-[0.13em]",
    md: "px-6 py-3.5 text-xs tracking-[0.14em]",
    lg: "px-7 py-4 text-xs tracking-[0.14em]",
  }[size];

  const variantClasses = {
    gold: "border border-gold-400/80 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-brand-950 font-bold shadow-md shadow-gold-500/20 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-lg hover:shadow-gold-500/35 active:translate-y-0",
    noir: "border border-gold-500/40 bg-brand-900 text-white shadow-sm shadow-brand-950/20 hover:-translate-y-0.5 hover:bg-brand-800 hover:border-gold-400 hover:text-gold-200 hover:shadow-md active:translate-y-0",
    outline: "border border-brand-950/25 bg-transparent text-brand-950 hover:-translate-y-0.5 hover:border-gold-600 hover:bg-gold-500/10 hover:text-brand-950 active:translate-y-0",
    white: "border border-white bg-white text-brand-950 shadow-sm hover:-translate-y-0.5 hover:bg-gold-50 hover:shadow-md active:translate-y-0",
  }[variant];

  const classes =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-gold-500 select-none text-center cursor-pointer " +
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
