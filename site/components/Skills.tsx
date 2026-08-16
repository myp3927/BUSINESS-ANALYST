"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, Reveal, Section } from "./Section";
import { Button, Eyebrow } from "./Primitives";
import { EASE } from "./motion";

const ITEMS = [
  {
    n: "01",
    title: "Phát hiện vấn đề gốc",
    body: "Truy ra insight thật từ chính trải nghiệm cá nhân, không phải ý tưởng trên giấy.",
    href: "#boi-canh",
    label: "Bối cảnh",
  },
  {
    n: "02",
    title: "Định phạm vi & nói không",
    body: "Giới hạn rõ ràng, có lý do, để giữ sản phẩm hoàn thành được.",
    href: "#pham-vi",
    label: "Phạm vi",
  },
  {
    n: "03",
    title: "Thiết kế mô hình nghiệp vụ",
    body: "Bộ tiêu chí cố định × trọng số công khai — một business rule giải thích được.",
    href: "#mo-hinh",
    label: "Mô hình chấm điểm",
  },
  {
    n: "04",
    title: "Ra quyết định có nguyên tắc",
    body: "So sánh phương án, chọn có lý do, ghi lại để không lặp lại tranh cãi.",
    href: "#quyet-dinh",
    label: "Nguyên tắc",
  },
  {
    n: "05",
    title: "Đặc tả quy trình cho hệ thống",
    body: "Luồng trạng thái rõ ràng, tách vai trò từng thành phần.",
    href: "#quy-trinh",
    label: "Luồng hệ thống",
  },
  {
    n: "06",
    title: "Nghiên cứu thị trường & đối thủ",
    body: "~100 nguồn, kiểm chứng phản biện, dám nói thẳng điểm yếu của chính mình.",
    href: "#thi-truong",
    label: "Thị trường",
  },
  {
    n: "07",
    title: "Ưu tiên có chủ đích",
    body: "Sắp xếp việc tiếp theo theo giá trị / công sức, không làm theo cảm tính.",
    href: "#roadmap",
    label: "Roadmap",
  },
  {
    n: "08",
    title: "Viết yêu cầu & đặt rào chắn cho AI",
    body: "Mô tả đúng việc AI nên làm, giới hạn rõ việc AI không được làm, rồi tự kiểm định đầu ra.",
    href: "#vai-tro",
    label: "Vai trò",
  },
];

export function Skills() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="ky-nang">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Kỹ năng BA thể hiện</Eyebrow>
            <h2 className="mt-5 max-w-[16ch] text-balance font-display text-h2 font-medium text-ink">
              Case study này chứng minh điều gì
            </h2>
            <p className="mt-5 max-w-[42ch] text-[0.95rem] text-ink-soft">
              Mỗi kỹ năng gắn với một phần cụ thể ở trên — không phải một dòng liệt kê suông.
            </p>
            <Button href="#lien-he" tone="dark" className="mt-6">
              Trao đổi thêm
            </Button>
          </Reveal>

          <div className="card-shadow overflow-hidden rounded-panel border border-line bg-card">
            {ITEMS.map((it, i) => {
              const isOpen = open === i;
              return (
                <div key={it.n} className={i > 0 ? "border-t border-line" : ""}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center gap-4 px-5 py-5 text-left transition-colors sm:px-6 ${
                      isOpen ? "bg-paper-raised" : "hover:bg-paper-raised"
                    }`}
                  >
                    <span className="font-mono text-[0.72rem] text-accent">{it.n}</span>
                    <span className="flex-1 font-display text-[1rem] font-medium text-ink">{it.title}</span>
                    <span className="flex h-6 w-6 flex-none items-center justify-center text-ink-faint">
                      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M3 8h10" strokeLinecap="round" />
                        {!isOpen && <path d="M8 3v10" strokeLinecap="round" />}
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden bg-paper-raised"
                      >
                        <div className="px-5 pb-6 pl-[3.4rem] sm:px-6 sm:pl-[3.9rem]">
                          <p className="max-w-[58ch] text-[0.92rem] text-ink-soft">{it.body}</p>
                          <a
                            href={it.href}
                            className="mt-3 inline-block font-mono text-[0.75rem] text-accent no-underline hover:underline"
                          >
                            → {it.label}
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
