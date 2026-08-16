"use client";

import { motion } from "framer-motion";

const ACS = [
  "Ô nhập link + nút “Lấy nội dung” hiển thị ngay trên ô JD.",
  "Hệ thống tải trang và đổ text vào đúng ô JD để xem/sửa — không tự động chấm điểm.",
  "Hiện dòng nhắc “nội dung do hệ thống tự đọc từ [trang]” + cảnh báo khi text ngắn bất thường.",
  "Từ chối tải với LinkedIn/Indeed/Facebook, báo lỗi rõ ràng thay vì treo.",
];

export function UserStoryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mt-7 overflow-hidden rounded-[10px] border border-line bg-paper-sunken"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-paper-raised px-6 py-3">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-ink-faint">
          User Story mẫu — MH 2.1, đã ship 28/07
        </span>
        <span className="rounded-full bg-teal-tint px-2.5 py-1 font-mono text-[0.68rem] font-semibold text-teal-deep">
          DONE
        </span>
      </div>
      <div className="px-6 py-6">
        <p className="font-display text-[1.15rem] font-semibold leading-snug text-ink">
          Là một <span className="text-teal-deep">ứng viên</span>, tôi muốn{" "}
          <span className="text-teal-deep">
            dán link tin tuyển dụng để tự động lấy nội dung JD
          </span>
          , để tôi{" "}
          <span className="text-teal-deep">
            không phải copy-paste thủ công
          </span>
          .
        </p>
        <p className="mt-4 mb-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-faint">
          Acceptance Criteria
        </p>
        <ul className="flex flex-col gap-2.5">
          {ACS.map((ac) => (
            <li key={ac} className="flex items-start gap-2.5 text-[0.92rem]">
              <span className="mt-1 h-[7px] w-[7px] flex-none rounded-full bg-teal-deep" />
              {ac}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
