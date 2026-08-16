"use client";

import { motion } from "framer-motion";
import { Container } from "./Section";
import { Button, Eyebrow } from "./Primitives";
import { EASE, viewportOnce } from "./motion";

const LINK_COLUMNS = [
  {
    title: "Case study",
    links: [
      { label: "Bối cảnh", href: "#boi-canh" },
      { label: "Vai trò", href: "#vai-tro" },
      { label: "Quy trình & Hành động", href: "#quy-trinh-ba" },
      { label: "Phạm vi", href: "#pham-vi" },
      { label: "Mô hình chấm điểm", href: "#mo-hinh" },
    ],
  },
  {
    title: "Phân tích",
    links: [
      { label: "Nguyên tắc", href: "#quyet-dinh" },
      { label: "Luồng hệ thống", href: "#quy-trinh" },
      { label: "Thị trường", href: "#thi-truong" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Khác",
    links: [
      { label: "Kỹ năng BA", href: "#ky-nang" },
      { label: "Công cụ", href: "#cong-cu" },
      { label: "Portfolio đầy đủ", href: "https://myphuong-productowner.vercel.app/" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="lien-he" className="relative mt-6 overflow-hidden rounded-frame bg-night text-white">
      <div aria-hidden="true" className="dot-pattern pointer-events-none absolute inset-0 text-white/[0.07]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-accent-light/10 blur-[130px]"
      />

      <div className="relative">
        <Container className="py-24 text-center sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Eyebrow tone="dark">Liên hệ</Eyebrow>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="mx-auto mt-6 max-w-[20ch] text-balance font-display text-h2 font-medium text-white"
          >
            Muốn nói chuyện về vị trí Business Analyst?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
            className="mx-auto mt-5 max-w-[58ch] text-lede text-white/60"
          >
            Toàn bộ tài liệu gốc của case study này — câu chuyện sản phẩm, backlog tính năng, báo cáo thị trường,
            roadmap — có thể gửi thêm nếu cần xem chi tiết đầy đủ.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="mailto:myphuongvlo.2020@gmail.com" tone="accent">
              myphuongvlo.2020@gmail.com
            </Button>
            <Button href="https://myphuong-productowner.vercel.app/" tone="white">
              Xem portfolio đầy đủ
            </Button>
          </motion.div>
        </Container>

        <Container className="pb-8">
          <div className="rounded-panel border border-white/10 bg-white/[0.04] p-7 sm:p-9">
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
              <div className="max-w-[38ch]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-white font-display text-[0.9rem] font-bold text-ink">
                    A
                  </span>
                  <span className="font-display text-[1rem] font-semibold text-white">AnalyzeCV</span>
                </div>
                <p className="mt-4 text-[0.85rem] text-white/55">
                  Case study cá nhân của My Phương — Business Analyst. Dữ liệu &amp; số liệu minh hoạ nằm trong
                  tài liệu gốc của dự án.
                </p>
                <p className="mt-4 font-mono text-[0.72rem] text-white/35">© 2026 · My Phương</p>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
                {LINK_COLUMNS.map((col) => (
                  <div key={col.title}>
                    <div className="font-display text-[0.9rem] font-semibold text-white">{col.title}</div>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <a
                            href={l.href}
                            className="text-[0.85rem] text-white/55 no-underline transition-colors hover:text-white"
                          >
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
