"use client";

import { Section } from "./Section";
import { RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const TAG_CLASS: Record<string, string> = {
  now: "bg-teal-deep text-[#F3F5EF]",
  next: "bg-amber-tint text-amber",
  later: "border border-line-strong bg-paper-raised text-ink-faint",
};

const ITEMS = [
  { tag: "now", title: "Trợ lý cải thiện CV", body: "Dựa trên phần “điểm thiếu” đã hiện — giúp khoả lấp theo từng vị trí. Cùng người dùng, cùng luồng, giá trị tăng rõ." },
  { tag: "now", title: "Nhắc nộp đơn", body: "Lưu một việc lúc nửa đêm, sáng hôm sau được nhắc nộp. Kho lưu thụ động → trợ lý chủ động." },
  { tag: "next", title: "Gợi ý việc làm", body: "Biến “đánh giá một việc mình tìm thấy” thành “tìm việc giúp mình” — khép vòng phía ứng viên." },
  { tag: "later", title: "B2B SaaS cho nhà tuyển dụng", body: "Phía nhà tuyển dụng là nơi có ngân sách — con đường tới doanh thu, chỉ mở khi thật sự đến lúc." },
];

export function Roadmap() {
  return (
    <Section id="roadmap" eyebrow="Lộ trình" title="Roadmap — ưu tiên có chủ đích">
      <RevealGroup className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((it, i) => (
          <motion.div
            key={i}
            variants={revealItem}
            className="rounded-[10px] border border-line bg-paper-sunken px-5 py-5"
          >
            <span
              className={`mb-3.5 inline-block rounded-full px-2.5 py-1 font-mono text-[0.68rem] font-semibold tracking-[0.08em] ${TAG_CLASS[it.tag]}`}
            >
              {it.tag.toUpperCase()}
            </span>
            <h3 className="mb-2 text-[1rem] font-semibold text-ink">
              {it.title}
            </h3>
            <p className="text-[0.88rem] text-ink-soft">{it.body}</p>
          </motion.div>
        ))}
      </RevealGroup>
      <p className="mt-6 text-[0.92rem] italic text-ink-soft">
        Nguyên tắc chọn việc: giá trị cao / công sức thấp, tận dụng những gì
        đã xây, và luôn giữ tầm nhìn rõ tới doanh thu.
      </p>
    </Section>
  );
}
