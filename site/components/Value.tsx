"use client";

import { Section } from "./Section";
import { RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const CARDS = [
  { icon: "🎯", title: "Biết độ phù hợp trước", body: "Nộp đơn có chọn lọc — ngừng đổ hàng giờ vào những cửa hẹp." },
  { icon: "🔧", title: "Thấy điểm mạnh & điểm thiếu", body: "Sửa CV và bước vào phỏng vấn với hiểu rõ điểm yếu của mình." },
  { icon: "🗂️", title: "Mọi thứ ở một nơi", body: "CV, điểm số và đơn ứng tuyển được lưu & quản lý cùng nhau — thay cho mớ Notion / Excel rải rác." },
];

export function Value() {
  return (
    <Section id="gia-tri" eyebrow="Giá trị" title="Giá trị cho ứng viên">
      <RevealGroup className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map((c) => (
          <motion.div
            key={c.title}
            variants={revealItem}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="rounded-[10px] border border-line bg-paper-sunken p-6"
          >
            <span className="mb-3 block text-2xl">{c.icon}</span>
            <h3 className="mb-2 text-[1.05rem] font-semibold text-ink">
              {c.title}
            </h3>
            <p className="text-[0.92rem] text-ink-soft">{c.body}</p>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
