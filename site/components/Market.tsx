"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { Insight } from "./Insight";
import { CountUp } from "./CountUp";
import { CompareTable } from "./CompareTable";
import { motion } from "framer-motion";

const STATS = [
  { render: () => <><CountUp to={70} prefix=">" suffix="%" /></>, label: "doanh nghiệp lớn VN đã dùng AI trong tuyển dụng" },
  { render: () => <><CountUp to={10} suffix="×" /></>, label: "số CV AI giúp một nhà tuyển dụng xử lý nhiều hơn" },
  { render: () => <>~<CountUp to={25} suffix="%" /></>, label: "giảm thời gian tuyển nhờ AI sàng lọc" },
];

export function Market() {
  return (
    <section id="thi-truong" className="border-t border-line py-14 sm:py-20 md:py-24">
      <div className="mx-auto max-w-[1080px] px-6">
        <Reveal>
          <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.14em] text-teal-deep before:block before:h-px before:w-[22px] before:bg-teal-deep">
            Nghiên cứu thị trường
          </p>
          <h2 className="text-balance font-display text-[clamp(1.6rem,1.1rem+2vw,2.35rem)] font-semibold leading-[1.12] text-ink">
            Tự làm nghiên cứu thị trường & đối thủ
          </h2>
          <p className="mt-5 max-w-[64ch] text-[1.12rem] text-ink-soft">
            Trước khi khẳng định sản phẩm có ý nghĩa, người viết tự chạy một
            bản phân tích thị trường & cạnh tranh đầy đủ cho Việt Nam —
            khoảng 100 nguồn, mỗi luận điểm kiểm chứng theo lối phản biện.
          </p>
          <p className="mt-4 max-w-[64ch]">
            <strong>
              Kết luận trung thực đến trước: đây không phải đại dương xanh.
            </strong>{" "}
            Một điểm phù hợp AI giữa CV và công việc là thứ ai cũng có —
            TopCV, VietnamWorks, CareerViet, và các công cụ toàn cầu như
            Jobscan, Rezi, Teal đều đã có.
          </p>
          <p className="mt-4 max-w-[64ch]">
            Người viết cũng gọi tên điểm yếu cấu trúc của chính sản phẩm một
            cách thẳng thắn: là sản phẩm độc lập, không có{" "}
            <em>data moat</em> — không dữ liệu lương, không kho mô tả công
            việc &amp; CV thật mà các nền tảng lớn sở hữu. Nên không đánh ở
            đó.
          </p>
        </Reveal>

        <Insight>
          Khoảng trống thắng được là khâu thực thi: chấm minh bạch, không
          bịa, đánh giá theo lô (batch), cả luồng ở một nơi, bản địa hoá
          tiếng Việt sâu. Định vị: một <strong>cố vấn</strong>, không phải
          một <strong>chợ việc làm</strong>.
        </Insight>

        <RevealGroup className="my-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              variants={revealItem}
              className="rounded-[10px] bg-paper-raised p-6"
            >
              <div className="font-display text-[2.1rem] font-bold leading-none text-teal-deep">
                {s.render()}
              </div>
              <div className="mt-2 text-[0.86rem] text-ink-soft">
                {s.label}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
        <p className="text-[0.8rem] text-ink-faint">
          Nguồn: ITviec Vietnam IT Salary &amp; Recruitment Market 2024–25;
          Reeracoen Vietnam. Bảng so sánh đối thủ tính tới giữa 2026 — nguồn
          đầy đủ trong báo cáo thị trường riêng.
        </p>

        <Reveal>
          <CompareTable />
          <p className="mt-5 max-w-[70ch] text-[0.9rem] text-ink-soft">
            Đọc cho thẳng: ngang bằng ở các dòng thứ-ai-cũng-có, dẫn trước về
            minh bạch / trung thực / trọn luồng, và đứng sau về data moat —
            đó chính là lý do chiến lược được chọn là &ldquo;cố vấn, không
            phải chợ việc làm&rdquo;.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
