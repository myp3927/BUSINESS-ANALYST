"use client";

import { motion } from "framer-motion";
import { Button, Eyebrow } from "./Primitives";
import { Container } from "./Section";
import { CountUp } from "./CountUp";
import { EASE } from "./motion";

const CRITERIA = [
  { label: "Kỹ năng chuyên môn cốt lõi", weight: 25, fill: 88 },
  { label: "Kinh nghiệm & cấp độ", weight: 20, fill: 74 },
  { label: "Công cụ & công nghệ", weight: 15, fill: 92 },
];

const FLOATING = [
  "Phương pháp & quy trình · 15%",
  "Kiến thức lĩnh vực · 15%",
  "Kỹ năng mềm & giao tiếp · 10%",
];

function ScorePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
      className="glass-edge mx-auto w-full max-w-[680px] rounded-card border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6"
    >
      <div className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.06em] text-white/55">
        <span className="rounded-frame border border-white/10 bg-white/5 px-2.5 py-1.5 text-white/80">CV.pdf</span>
        <span aria-hidden="true">↔</span>
        <span className="rounded-frame border border-white/10 bg-white/5 px-2.5 py-1.5 text-white/80">
          JD — Business Analyst
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          done
        </span>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <div className="font-display text-[3.25rem] font-semibold leading-none text-white">
            <CountUp to={82} suffix="%" duration={1.6} delay={0.6} />
          </div>
          <div className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/50">
            Độ phù hợp tổng
          </div>
        </div>
        <div className="hidden text-right font-mono text-[0.68rem] uppercase tracking-[0.06em] text-white/40 sm:block">
          6 tiêu chí cố định
          <br />
          trọng số cộng lại = 100%
        </div>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "82%" }}
          transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
          className="h-full rounded-full bg-gradient-to-r from-accent-soft to-accent"
        />
      </div>

      <ul className="mt-6 flex flex-col gap-3">
        {CRITERIA.map((c, i) => (
          <motion.li
            key={c.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.12, ease: EASE }}
            className="flex items-center gap-3 text-[0.82rem] text-white/70"
          >
            <span className="w-[13ch] flex-none truncate sm:w-[24ch]">{c.label}</span>
            <span className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: `${c.fill}%` }}
                transition={{ duration: 1, delay: 0.95 + i * 0.12, ease: EASE }}
                className="block h-full rounded-full bg-white/45"
              />
            </span>
            <span className="tnum w-[3.5ch] flex-none text-right font-mono text-[0.72rem] text-white/45">
              {c.weight}%
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden rounded-frame bg-night">
      <div aria-hidden="true" className="dot-pattern pointer-events-none absolute inset-0 text-white/[0.08]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[280px] left-1/2 h-[720px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-night"
      />

      <Container className="relative pb-24 pt-[132px] text-center sm:pb-28 sm:pt-[168px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <Eyebrow tone="dark">Case study — Business Analyst</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          className="mx-auto mt-6 max-w-[18ch] text-balance font-display text-h1 font-medium text-white"
        >
          Biết mình đứng ở đâu, trước khi nộp đơn.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className="mx-auto mt-6 max-w-[58ch] text-lede text-white/65"
        >
          AnalyzeCV là sản phẩm cá nhân do <strong className="font-medium text-white">My Phương</strong> tự vận
          hành như một đội sản phẩm một người: sở hữu mọi quyết định BA, PM và QA — AI là đội build. Trang này
          kể lại toàn bộ hành trình, từ một nỗi đau thật đến một sản phẩm web đang chạy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38, ease: EASE }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button href="#boi-canh" tone="accent">
            Xem hành trình sản phẩm
          </Button>
          <Button href="#lien-he" tone="white">
            Liên hệ
          </Button>
        </motion.div>

        <div className="mt-14">
          <ScorePanel />
        </div>

        <div className="relative mx-auto mt-4 flex max-w-[540px] flex-col gap-2">
          {FLOATING.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: i === 1 ? 1 : 0.35, y: 0 }}
              transition={{ duration: 2.6, delay: 1 + i * 0.3, ease: EASE }}
              className="flex items-center gap-2.5 rounded-frame border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-left text-[0.82rem] text-white/70"
            >
              <span className="h-5 w-5 flex-none rounded-[5px] bg-gradient-to-b from-accent-soft to-accent" />
              {f}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
