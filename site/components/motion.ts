/**
 * Thông số chuyển động đo trực tiếp từ Fluence:
 * opacity 0 → 1, y 24 → 0, duration .5s, ease expo-out, stagger .08–.1s.
 */
export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
} as const;

export const staggerParent = (stagger = 0.08, delayChildren = 0) =>
  ({
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  }) as const;

export const viewportOnce = { once: true, margin: "-80px" } as const;
