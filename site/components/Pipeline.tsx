"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Gửi", body: "Tải lên một CV và dán mô tả công việc.", actor: "BẠN", tone: "user" },
  { n: "02", title: "Trích xuất văn bản", body: "PDF được phân tích thành văn bản sạch.", actor: "WEB", tone: "web" },
  { n: "03", title: "Xếp hàng đợi", body: "Một dòng job được thêm, đánh dấu pending; trang bắt đầu polling.", actor: "WEB → DB", tone: "web" },
  { n: "04", title: "Nhận việc", body: "Worker nhặt job lên và chuyển sang processing.", actor: "WORKER", tone: "worker" },
  { n: "05", title: "Chấm điểm", body: "AI đọc CV + công việc trong một lượt, trả về kết quả có cấu trúc.", actor: "AI", tone: "ai" },
  { n: "06", title: "Hiển thị", body: "Lưu thành done; trang render điểm số & phân tích.", actor: "WEB", tone: "web" },
];

const TONE_CLASS: Record<string, string> = {
  user: "bg-amber-tint text-amber",
  web: "bg-teal-tint text-teal-deep",
  worker: "border border-line-strong bg-paper-raised text-ink-soft",
  ai: "bg-good-tint text-good",
};

export function Pipeline() {
  return (
    <section id="quy-trinh" className="border-t border-line py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <Reveal>
          <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.14em] text-teal-deep before:block before:h-px before:w-[22px] before:bg-teal-deep">
            Quy trình kỹ thuật
          </p>
          <h2 className="text-balance font-display text-[clamp(1.6rem,1.1rem+2vw,2.35rem)] font-semibold leading-[1.12] text-ink">
            Một lượt chạy thật ra diễn ra thế nào
          </h2>
          <p className="mt-5 max-w-[62ch] text-[1.12rem] text-ink-soft">
            Sáu bước, tách rời hoàn toàn — web và AI worker không bao giờ gọi
            nhau trực tiếp; chúng chuyền việc qua một hàng đợi, nên trang vẫn
            mượt trong lúc AI đang xử lý.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-6"
          stagger={0.07}
        >
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              variants={revealItem}
              className="bg-paper-sunken px-4 py-5"
            >
              <div className="mb-2.5 font-mono text-[0.72rem] text-ink-faint">
                {s.n}
              </div>
              <h4 className="mb-1.5 font-display text-[1rem] font-semibold text-ink">
                {s.title}
              </h4>
              <p className="mb-3.5 text-[0.82rem] text-ink-soft">{s.body}</p>
              <span
                className={`inline-block rounded-[5px] px-2 py-1 font-mono text-[0.66rem] font-medium tracking-[0.04em] ${TONE_CLASS[s.tone]}`}
              >
                {s.actor}
              </span>
            </motion.div>
          ))}
        </RevealGroup>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 flex flex-wrap items-center gap-2.5"
        >
          {["pending", "processing", "done"].map((s, i) => (
            <span key={s} className="flex items-center gap-2.5">
              {i > 0 && <span className="text-ink-faint">→</span>}
              <span className="rounded-full border border-line-strong px-3.5 py-1.5 font-mono text-[0.78rem] text-ink-soft">
                {s}
              </span>
            </span>
          ))}
        </motion.div>
        <p className="mt-5 max-w-[70ch] text-[0.9rem] text-ink-soft">
          Trang polling mỗi ~3 giây; AI chạy như một lượt hoàn tất đơn lẻ,
          không dùng công cụ / vòng lặp agent; mỗi kết quả tính một lần và
          lưu lại, nên mở lại không chạy lại mô hình. Lượt thất bại rơi vào
          trạng thái <span className="font-mono">error</span>, không phải
          màn hình treo.
        </p>
      </div>
    </section>
  );
}
