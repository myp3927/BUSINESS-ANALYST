"use client";

import { motion } from "framer-motion";
import { Container, Reveal, RevealGroup, Section, SectionHeader } from "./Section";
import { fadeUp } from "./motion";

const ITEMS = [
  {
    tag: "Now",
    featured: true,
    title: "Trợ lý cải thiện CV",
    body: "Dựa trên phần “điểm thiếu” đã hiện — giúp khoả lấp theo từng vị trí. Cùng người dùng, cùng luồng, giá trị tăng rõ.",
  },
  {
    tag: "Now",
    featured: true,
    title: "Nhắc nộp đơn",
    body: "Lưu một việc lúc nửa đêm, sáng hôm sau được nhắc nộp. Kho lưu thụ động → trợ lý chủ động.",
  },
  {
    tag: "Next",
    featured: false,
    title: "Gợi ý việc làm",
    body: "Biến “đánh giá một việc mình tìm thấy” thành “tìm việc giúp mình” — khép vòng phía ứng viên.",
  },
  {
    tag: "Later",
    featured: false,
    title: "B2B SaaS cho nhà tuyển dụng",
    body: "Phía nhà tuyển dụng là nơi có ngân sách — con đường tới doanh thu, chỉ mở khi thật sự đến lúc.",
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Lộ trình"
          title="Roadmap — ưu tiên có chủ đích"
          lede="Nguyên tắc chọn việc: giá trị cao / công sức thấp, tận dụng những gì đã xây, và luôn giữ tầm nhìn rõ tới doanh thu."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {ITEMS.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              className={`card-shadow relative flex flex-col rounded-card border p-6 transition-transform duration-300 hover:-translate-y-1 ${
                it.featured ? "border-accent/40 bg-card" : "border-line bg-paper-raised"
              }`}
            >
              <span
                className={`w-fit rounded-full px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.1em] ${
                  it.tag === "Now"
                    ? "bg-accent text-white"
                    : it.tag === "Next"
                      ? "bg-ink text-white"
                      : "border border-line-strong text-ink-faint"
                }`}
              >
                {it.tag}
              </span>
              <h3 className="mt-5 font-display text-[1.125rem] font-medium text-ink">{it.title}</h3>
              <p className="mt-2.5 text-[0.88rem] text-ink-soft">{it.body}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-8">
          <p className="text-center font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-faint">
            Now = đang làm · Next = kế tiếp · Later = có chủ đích để sau
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
