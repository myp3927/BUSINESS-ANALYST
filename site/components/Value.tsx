"use client";

import { motion } from "framer-motion";
import { Container, RevealGroup, Section, SectionHeader } from "./Section";
import { fadeUp } from "./motion";

const CARDS = [
  {
    kicker: "Trước khi nộp",
    title: "Biết độ phù hợp trước",
    body: "Nộp đơn có chọn lọc — ngừng đổ hàng giờ vào những cửa hẹp.",
  },
  {
    kicker: "Trước khi phỏng vấn",
    title: "Thấy điểm mạnh & điểm thiếu",
    body: "Sửa CV và bước vào phỏng vấn với hiểu rõ điểm yếu của mình.",
  },
  {
    kicker: "Sau mỗi lượt",
    title: "Mọi thứ ở một nơi",
    body: "CV, điểm số và đơn ứng tuyển được lưu & quản lý cùng nhau — thay cho mớ Notion / Excel rải rác.",
  },
];

export function Value() {
  return (
    <Section id="gia-tri">
      <Container>
        <SectionHeader eyebrow="Giá trị" title="Ứng viên nhận được gì" />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3" stagger={0.09}>
          {CARDS.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="flex min-h-[260px] flex-col rounded-card border border-line bg-paper-sunken p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-faint">
                {c.kicker}
              </span>
              <h3 className="mt-auto font-display text-h4 font-medium text-ink">{c.title}</h3>
              <p className="mt-3 text-[0.9rem] text-ink-soft">{c.body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
