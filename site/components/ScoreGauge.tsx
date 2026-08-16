"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE } from "./motion";

export const SEGMENTS = [
  { color: "#FC5725", label: "Kỹ năng chuyên môn cốt lõi", weight: 25 },
  { color: "#F97A4D", label: "Kinh nghiệm & cấp độ", weight: 20 },
  { color: "#F59B7F", label: "Công cụ & công nghệ", weight: 15 },
  { color: "#E0B5A2", label: "Phương pháp & quy trình", weight: 15 },
  { color: "#C9C3BA", label: "Kiến thức lĩnh vực", weight: 15 },
  { color: "#8A8880", label: "Kỹ năng mềm & giao tiếp", weight: 10 },
];

const R = 92;
const CIRC = 2 * Math.PI * R;

export function ScoreGauge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  let acc = 0;
  const arcs = SEGMENTS.map((s) => {
    const len = (s.weight / 100) * CIRC;
    const offset = -acc;
    acc += len;
    return { ...s, len, offset };
  });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg
        viewBox="0 0 240 240"
        className="h-[220px] w-[220px] sm:h-[240px] sm:w-[240px]"
        role="img"
        aria-label="Mô hình chấm điểm 6 tiêu chí có trọng số, tổng 100 phần trăm"
      >
        <g transform="translate(120,120) rotate(-90)">
          <circle r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="20" />
          {arcs.map((a, i) => (
            <motion.circle
              key={a.label}
              r={R}
              fill="none"
              stroke={a.color}
              strokeWidth="20"
              strokeDasharray={`${a.len - 2} ${CIRC}`}
              initial={{ strokeDashoffset: 0, opacity: 0 }}
              animate={inView ? { strokeDashoffset: a.offset, opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease: EASE }}
            />
          ))}
        </g>
        <motion.text
          x="120"
          y="116"
          textAnchor="middle"
          className="font-display"
          fontWeight={600}
          fontSize="40"
          fill="#ffffff"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          100%
        </motion.text>
        <text
          x="120"
          y="140"
          textAnchor="middle"
          className="font-mono"
          fontSize="10"
          letterSpacing="1.4"
          fill="rgba(255,255,255,0.45)"
        >
          TỔNG TRỌNG SỐ
        </text>
      </svg>
    </div>
  );
}
