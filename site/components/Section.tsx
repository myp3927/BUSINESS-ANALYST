"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "./Primitives";
import { EASE, fadeUp, staggerParent, viewportOnce } from "./motion";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-container px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Cụm tiêu đề: eyebrow → H2 → lede. align quyết định nhịp của cả section. */
export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerParent(0.1)}
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      <motion.div variants={fadeUp}>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className={`mt-5 max-w-[20ch] text-balance font-display text-h2 font-medium ${
          tone === "dark" ? "text-white" : "text-ink"
        } ${centered ? "max-w-[24ch]" : ""}`}
      >
        {title}
      </motion.h2>
      {lede && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 max-w-[62ch] text-lede ${tone === "dark" ? "text-night-soft" : "text-ink-soft"}`}
        >
          {lede}
        </motion.p>
      )}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
  tone = "light",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-[100px] ${tone === "dark" ? "text-white" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

/** Khối tối bo góc 8px nằm trong khung 8px của body — mô-típ chủ đạo của Fluence. */
export function NightBlock({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden rounded-frame bg-night py-16 text-white sm:py-20 lg:py-[100px] ${className}`}
    >
      <div
        aria-hidden="true"
        className="dot-pattern pointer-events-none absolute inset-0 text-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="relative">{children}</div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerParent(stagger)}
      className={className}
    >
      {children}
    </motion.div>
  );
}
