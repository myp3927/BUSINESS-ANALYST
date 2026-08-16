"use client";

import { motion } from "framer-motion";

const AS_IS = [
  "Thấy JD hấp dẫn",
  "Tự đoán độ phù hợp",
  "Dán CV + JD vào AI chat",
  "Lưu kết quả rải rác (Notion/Sheet)",
];

const TO_BE = [
  "Thấy JD hấp dẫn",
  "Dán vào AnalyzeCV",
  "Nhận % + phân tích 6 nhóm ngay",
  "Tự lưu lịch sử + quản lý đơn",
];

function Lane({
  tag,
  tagClass,
  boxClass,
  steps,
  delay,
}: {
  tag: string;
  tagClass: string;
  boxClass: string;
  steps: string[];
  delay: number;
}) {
  return (
    <div className="flex items-stretch gap-0">
      <div
        className={`flex w-[86px] flex-none items-center justify-center rounded-l-[10px] font-mono text-[0.68rem] font-semibold tracking-[0.06em] ${tagClass}`}
      >
        <span className="rotate-180 [writing-mode:vertical-rl]">{tag}</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2 rounded-r-[10px] border border-l-0 border-line bg-paper-sunken p-3 sm:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: delay + i * 0.08 }}
            className="relative"
          >
            <div
              className={`flex h-full items-center rounded-[8px] border px-3 py-3 text-[0.82rem] font-medium leading-snug ${boxClass}`}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <span
                className="pointer-events-none absolute -right-[13px] top-1/2 z-10 hidden -translate-y-1/2 font-mono text-[0.9rem] text-ink-faint sm:block"
                aria-hidden="true"
              >
                →
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function AsIsToBe() {
  return (
    <div className="mt-7 flex flex-col gap-3">
      <Lane
        tag="AS-IS"
        tagClass="bg-bad-tint text-bad"
        boxClass="border-line bg-bad-tint text-ink"
        steps={AS_IS}
        delay={0}
      />
      <Lane
        tag="TO-BE"
        tagClass="bg-teal-tint text-teal-deep"
        boxClass="border-teal-deep bg-teal-tint text-ink"
        steps={TO_BE}
        delay={0.25}
      />
      <p className="mt-1 text-[0.85rem] text-ink-soft">
        4 bước rời rạc, tự đoán, lưu rải rác → gộp về{" "}
        <strong>1 luồng duy nhất</strong>: đánh giá xong là tự có lịch sử,
        không phải mở thêm tab nào khác.
      </p>
    </div>
  );
}
