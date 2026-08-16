"use client";

import { motion } from "framer-motion";
import { Container, Reveal, RevealGroup, Section, SectionHeader } from "./Section";
import { CountUp } from "./CountUp";
import { CompareTable } from "./CompareTable";
import { Insight } from "./Insight";
import { Cross } from "./Primitives";
import { fadeUp } from "./motion";

const HONEST_TAKE = [
  {
    title: "Không phải đại dương xanh",
    body: "Điểm phù hợp AI giữa CV và JD là thứ ai cũng có — TopCV, VietnamWorks, CareerViet, Jobscan, Rezi, Teal đều đã làm.",
  },
  {
    title: "Không có data moat",
    body: "Không dữ liệu lương, không kho JD & CV thật mà nền tảng lớn sở hữu — nên không đánh ở đó.",
  },
];

const STATS = [
  {
    value: <CountUp to={70} prefix=">" suffix="%" />,
    label: "doanh nghiệp lớn VN đã dùng AI trong tuyển dụng",
  },
  {
    value: <CountUp to={10} suffix="×" />,
    label: "số CV AI giúp một nhà tuyển dụng xử lý nhiều hơn",
  },
  {
    value: (
      <>
        ~<CountUp to={25} suffix="%" />
      </>
    ),
    label: "giảm thời gian tuyển nhờ AI sàng lọc",
  },
];

export function Market() {
  return (
    <Section id="thi-truong">
      <Container>
        <SectionHeader
          eyebrow="Nghiên cứu thị trường"
          title="Tự làm nghiên cứu thị trường & đối thủ"
          lede="Trước khi khẳng định sản phẩm có ý nghĩa, người viết tự chạy một bản phân tích thị trường & cạnh tranh đầy đủ cho Việt Nam — khoảng 100 nguồn, mỗi luận điểm kiểm chứng theo lối phản biện."
        />

        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3"
          stagger={0.09}
        >
          {STATS.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-card px-6 py-8">
              <div className="font-display text-[2.5rem] font-medium leading-none text-accent">{s.value}</div>
              <div className="mt-3 text-[0.88rem] text-ink-soft">{s.label}</div>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mt-6">
          <p className="text-[0.78rem] text-ink-faint">
            Nguồn: ITviec Vietnam IT Salary &amp; Recruitment Market 2024–25; Reeracoen Vietnam. Bảng so sánh đối
            thủ tính tới giữa 2026 — nguồn đầy đủ trong báo cáo thị trường riêng.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <p className="max-w-prose text-[0.78rem] font-medium uppercase tracking-[0.06em] text-ink-faint">
            Kết luận trung thực đến trước
          </p>
        </Reveal>

        <RevealGroup className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.09}>
          {HONEST_TAKE.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              className="card-shadow rounded-card border border-line bg-card p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-frame border border-line bg-paper-sunken text-ink-faint">
                <Cross />
              </span>
              <h3 className="mt-4 font-display text-[1.05rem] font-medium text-ink">{it.title}</h3>
              <p className="mt-2 text-[0.88rem] text-ink-soft">{it.body}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mt-8">
          <Insight>
            Khoảng trống thắng được là khâu thực thi: chấm minh bạch, không bịa, đánh giá theo lô (batch), cả
            luồng ở một nơi, bản địa hoá tiếng Việt sâu. Định vị: một <strong>cố vấn</strong>, không phải một{" "}
            <strong>chợ việc làm</strong>.
          </Insight>
        </Reveal>

        <Reveal className="mt-8">
          <CompareTable />
          <p className="mt-6 max-w-prose text-[0.9rem] text-ink-soft">
            Đọc cho thẳng: ngang bằng ở các dòng thứ-ai-cũng-có, dẫn trước về minh bạch / trung thực / trọn luồng,
            và đứng sau về data moat — đó chính là lý do chiến lược được chọn là “cố vấn, không phải chợ việc
            làm”.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
