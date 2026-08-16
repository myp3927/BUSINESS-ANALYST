"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SEGMENTS = [
  { color: "var(--c1)", label: "Chuyên môn cốt lõi", weight: 25 },
  { color: "var(--c2)", label: "Kinh nghiệm & cấp độ", weight: 20 },
  { color: "var(--c3)", label: "Công cụ & công nghệ", weight: 15 },
  { color: "var(--c4)", label: "Phương pháp & quy trình", weight: 15 },
  { color: "var(--c5)", label: "Kiến thức lĩnh vực", weight: 15 },
  { color: "var(--c6)", label: "Kỹ năng mềm", weight: 10 },
];

const R = 96;
const CIRC = 2 * Math.PI * R;

function buildOffsets() {
  let acc = 0;
  return SEGMENTS.map((s) => {
    const len = (s.weight / 100) * CIRC;
    const offset = -acc;
    acc += len;
    return { ...s, len, offset };
  });
}

export function ScoreGauge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const arcs = buildOffsets();

  return (
    <div ref={ref} className="flex flex-col items-center gap-4">
      <svg
        width="240"
        height="240"
        viewBox="0 0 240 240"
        role="img"
        aria-label="Mô hình chấm điểm 6 tiêu chí có trọng số, tổng 100 phần trăm"
      >
        <g transform="translate(120,120) rotate(-90)">
          <circle r={R} fill="none" stroke="var(--line)" strokeWidth="22" />
          {arcs.map((a, i) => (
            <motion.circle
              key={i}
              r={R}
              fill="none"
              stroke={a.color}
              strokeWidth="22"
              strokeLinecap="butt"
              strokeDasharray={`${a.len} ${CIRC}`}
              initial={{ strokeDashoffset: 0, opacity: 0 }}
              animate={
                inView
                  ? { strokeDashoffset: a.offset, opacity: 1 }
                  : { strokeDashoffset: 0, opacity: 0 }
              }
              transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </g>
        <motion.text
          x="120"
          y="112"
          textAnchor="middle"
          fontFamily="var(--font-fraunces)"
          fontWeight={700}
          fontSize="40"
          fill="var(--ink)"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          82%
        </motion.text>
        <text
          x="120"
          y="136"
          textAnchor="middle"
          fontFamily="var(--font-plexmono)"
          fontSize="11"
          letterSpacing="1"
          fill="var(--ink-faint)"
        >
          ĐỘ PHÙ HỢP
        </text>
      </svg>
      <ul className="grid w-full max-w-[340px] grid-cols-2 gap-x-4 gap-y-2">
        {SEGMENTS.map((s) => (
          <li
            key={s.label}
            className="flex items-center gap-1.5 text-[0.74rem] text-ink-soft"
          >
            <span
              className="h-2 w-2 flex-none rounded-full"
              style={{ background: s.color }}
            />
            {s.label}
            <b className="tnum ml-auto font-mono font-medium text-ink">
              {s.weight}%
            </b>
          </li>
        ))}
      </ul>
      <p className="text-center font-mono text-[0.72rem] tracking-[0.04em] text-ink-faint">
        MÔ HÌNH CHẤM ĐIỂM CỦA ANALYZECV
      </p>
    </div>
  );
}
