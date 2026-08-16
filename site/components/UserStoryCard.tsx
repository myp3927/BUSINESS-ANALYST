"use client";

import { motion } from "framer-motion";
import { EASE, viewportOnce } from "./motion";

const ACS = [
  "Ô nhập link + nút “Lấy nội dung” trên ô JD",
  "Tự đổ text vào ô JD để xem/sửa — không tự chấm điểm",
  "Cảnh báo khi nội dung lấy về ngắn bất thường",
  "Từ chối LinkedIn/Indeed/Facebook, báo lỗi rõ ràng",
];

export function UserStoryCard() {
  return (
    <div className="card-shadow h-full overflow-hidden rounded-card border border-line bg-card">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-paper-sunken px-5 py-3">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ink-faint">
          User Story mẫu — MH 2.1
        </span>
        <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-white">
          Done · 28/07
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <p className="font-display text-[1.05rem] font-medium leading-snug text-ink">
          Là một <span className="text-accent">ứng viên</span>, tôi muốn{" "}
          <span className="text-accent">dán link tin tuyển dụng để tự động lấy nội dung JD</span>, để tôi{" "}
          <span className="text-accent">không phải copy-paste thủ công</span>.
        </p>
        <p className="mb-3 mt-6 font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-faint">
          Acceptance Criteria
        </p>
        <ul className="flex flex-col gap-2.5">
          {ACS.map((ac, i) => (
            <motion.li
              key={ac}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: EASE }}
              className="flex items-start gap-2.5 text-[0.85rem] text-ink-soft"
            >
              <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              {ac}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
