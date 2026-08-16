"use client";

import { Section } from "./Section";
import { RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const ITEMS = [
  { name: "AI code assistant", role: "Đội build — thực thi theo yêu cầu & rào chắn đã đặt ra" },
  { name: "Markdown-as-source-of-truth", role: "Backlog, câu chuyện sản phẩm, roadmap — versioned trong repo" },
  { name: "ADR (Architecture/Decision Records)", role: "Ghi lại quyết định lớn kèm lý do, tránh tranh cãi lặp lại" },
  { name: "Nhật ký chốt thiết kế", role: "Ghi từng quyết định UI/UX nhỏ ngay lúc chốt" },
  { name: "HTML mockup tự dựng", role: "Chốt UI trước khi đưa vào code thật" },
  { name: "Bảng đối chiếu tính năng", role: "So sánh có hệ thống với đối thủ, không cảm tính" },
];

export function Tools() {
  return (
    <Section
      id="cong-cu"
      eyebrow="Công cụ & phương pháp"
      title="Công cụ thực tế đã dùng"
      lede="Không phải danh sách lý thuyết — đây là những gì thật sự chạy trong dự án."
    >
      <RevealGroup className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {ITEMS.map((it) => (
          <motion.div
            key={it.name}
            variants={revealItem}
            className="rounded-[10px] border border-line bg-paper-sunken px-5 py-4"
          >
            <span className="mb-1.5 block font-mono text-[0.86rem] font-medium text-ink">
              {it.name}
            </span>
            <span className="text-[0.8rem] text-ink-faint">{it.role}</span>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
