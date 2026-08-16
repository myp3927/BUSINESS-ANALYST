"use client";

import { motion } from "framer-motion";
import { Container, Reveal, RevealGroup, Section, SectionHeader } from "./Section";
import { fadeUp } from "./motion";

const STEPS = [
  { n: "1", title: "Gửi", body: "Tải lên một CV và dán mô tả công việc.", actor: "Bạn" },
  { n: "2", title: "Trích xuất văn bản", body: "PDF được phân tích thành văn bản sạch.", actor: "Web" },
  { n: "3", title: "Xếp hàng đợi", body: "Một dòng job được thêm, đánh dấu pending; trang bắt đầu polling.", actor: "Web → DB" },
  { n: "4", title: "Nhận việc", body: "Worker nhặt job lên và chuyển sang processing.", actor: "Worker" },
  { n: "5", title: "Chấm điểm", body: "AI đọc CV + công việc trong một lượt, trả về kết quả có cấu trúc.", actor: "AI" },
  { n: "6", title: "Hiển thị", body: "Lưu thành done; trang render điểm số & phân tích.", actor: "Web" },
];

export function Pipeline() {
  return (
    <Section id="quy-trinh">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Luồng hệ thống"
          title="Một lượt chạy thật ra diễn ra thế nào"
          lede="Sáu bước, tách rời hoàn toàn — web và AI worker không bao giờ gọi nhau trực tiếp; chúng chuyền việc qua một hàng đợi, nên trang vẫn mượt trong lúc AI đang xử lý."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="card-shadow flex flex-col rounded-card border border-line bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-[6px] bg-gradient-to-b from-accent-soft to-accent font-mono text-[0.75rem] font-medium text-white">
                  {s.n}
                </span>
                <h3 className="font-display text-[1.125rem] font-medium text-ink">{s.title}</h3>
              </div>
              <p className="mt-4 flex-1 text-[0.9rem] text-ink-soft">{s.body}</p>
              <span className="mt-5 w-fit rounded-full bg-paper-sunken px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.06em] text-ink-faint">
                {s.actor}
              </span>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-8">
          <div className="card-shadow flex flex-col gap-5 rounded-card border border-line bg-paper-raised p-6 sm:p-7">
            <div className="flex flex-wrap items-center gap-2.5">
              {["pending", "processing", "done"].map((s, i) => (
                <span key={s} className="flex items-center gap-2.5">
                  {i > 0 && (
                    <span aria-hidden="true" className="font-mono text-ink-faint">
                      →
                    </span>
                  )}
                  <span
                    className={`rounded-full px-3 py-1.5 font-mono text-[0.75rem] ${
                      i === 2 ? "bg-ink text-white" : "border border-line-strong text-ink-soft"
                    }`}
                  >
                    {s}
                  </span>
                </span>
              ))}
            </div>
            <p className="max-w-prose text-[0.9rem] text-ink-soft">
              Trang polling mỗi ~3 giây; AI chạy như một lượt hoàn tất đơn lẻ, không dùng công cụ / vòng lặp
              agent; mỗi kết quả tính một lần và lưu lại, nên mở lại không chạy lại mô hình. Lượt thất bại rơi
              vào trạng thái <span className="font-mono text-ink">error</span>, không phải màn hình treo.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
