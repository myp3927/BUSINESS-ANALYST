"use client";

import { motion } from "framer-motion";
import { ScoreGauge } from "./ScoreGauge";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-9 px-6 pb-16 pt-14 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:pt-[76px]"
    >
      <motion.div initial="hidden" animate="show" variants={container}>
        <motion.p
          variants={item}
          className="mb-5 font-mono text-[0.76rem] uppercase tracking-[0.14em] text-ink-faint"
        >
          CASE STUDY — BUSINESS ANALYST · DỰ ÁN CÁ NHÂN
        </motion.p>
        <motion.h1
          variants={item}
          className="text-balance font-display text-[clamp(2.3rem,1.4rem+3.6vw,3.6rem)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink"
        >
          Biết mình đứng ở đâu,
          <br />
          trước khi nộp đơn.
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-[52ch] text-[1.18rem] text-ink-soft"
        >
          AnalyzeCV là sản phẩm cá nhân do{" "}
          <strong className="text-ink">My Phương</strong> tự vận hành như một
          đội sản phẩm một người: sở hữu mọi quyết định BA, PM và QA — AI là
          đội build. Trang này kể lại toàn bộ hành trình, từ một nỗi đau thật
          của chính người viết đến một sản phẩm web đang chạy.
        </motion.p>
        <motion.div variants={item} className="mt-6 flex flex-wrap gap-2.5">
          {[
            { label: "Business Analyst", strong: true },
            { label: "Product Owner", strong: true },
            { label: "QA", strong: true },
            { label: "AI = trợ lý code", strong: false },
          ].map((t) => (
            <span
              key={t.label}
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.76rem] ${
                t.strong
                  ? "border-teal-deep text-teal-deep"
                  : "border-line-strong text-ink-soft"
              }`}
            >
              {t.label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="order-first mx-auto max-w-[280px] md:order-none md:mx-0 md:max-w-none"
      >
        <ScoreGauge />
      </motion.div>
    </section>
  );
}
