"use client";

import { motion } from "framer-motion";
import { Container, NightBlock, Reveal, RevealGroup } from "./Section";
import { ScrollWords } from "./ScrollWords";
import { ScoreGauge, SEGMENTS } from "./ScoreGauge";
import { Eyebrow } from "./Primitives";
import { fadeUp } from "./motion";

const REASONS: Record<string, string> = {
  "Kỹ năng chuyên môn cốt lõi": "Năng lực trung tâm của vị trí — tín hiệu đơn lẻ lớn nhất.",
  "Kinh nghiệm & cấp độ": "Bề dày thực tế đứng thứ hai.",
  "Công cụ & công nghệ": "Quan trọng, nhưng học được khi vào việc.",
  "Phương pháp & quy trình": "Cách ứng viên làm việc.",
  "Kiến thức lĩnh vực": "Bối cảnh ngành.",
  "Kỹ năng mềm & giao tiếp": "Cần thiết, nhưng khó đánh giá từ CV — trọng số nhẹ nhất.",
};

const BANDS = [
  { range: "0–39", label: "Yếu" },
  { range: "40–59", label: "Một phần" },
  { range: "60–79", label: "Tốt" },
  { range: "80–100", label: "Mạnh" },
];

export function ScoreModel() {
  return (
    <NightBlock id="mo-hinh">
      <Container>
        <Reveal>
          <Eyebrow tone="dark">Mô hình nghiệp vụ</Eyebrow>
        </Reveal>
        <ScrollWords
          tone="dark"
          className="mt-6"
          text="Mỗi CV được chấm trên cùng sáu tiêu chí cố định, với trọng số công khai cộng lại đúng 100% — nên luôn trả lời được câu “vì sao cái này được 82 điểm?”"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <Reveal className="flex items-start justify-center">
            <ScoreGauge />
          </Reveal>

          <RevealGroup className="divide-y divide-white/10 border-t border-white/10" stagger={0.07}>
            {SEGMENTS.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="flex items-baseline gap-4 py-4">
                <span className="h-2.5 w-2.5 flex-none translate-y-[-1px] rounded-full" style={{ background: s.color }} />
                <div className="min-w-0 flex-1">
                  <div className="font-display text-[1rem] font-medium text-white">{s.label}</div>
                  <div className="mt-1 text-[0.85rem] text-white/50">{REASONS[s.label]}</div>
                </div>
                <span className="tnum flex-none font-mono text-[1rem] text-accent-light">{s.weight}%</span>
              </motion.div>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-14">
          <p className="max-w-prose text-[0.95rem] leading-relaxed text-white/60">
            Một lăng kính cố định giúp kết quả so sánh được giữa các vị trí và theo thời gian; hỏi lại một AI
            chat thông thường thì mỗi lần lại ra một định dạng khác. Tổng điểm không phải trung bình cộng phẳng
            — đó là điểm có trọng số cộng lại bằng 100%.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-card bg-white/10 sm:grid-cols-4" stagger={0.07}>
          {BANDS.map((b) => (
            <motion.div key={b.range} variants={fadeUp} className="bg-night px-5 py-6">
              <div className="tnum font-display text-[1.5rem] font-medium text-white">{b.range}</div>
              <div className="mt-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/45">{b.label}</div>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mt-8">
          <div className="rounded-card border border-white/10 bg-white/[0.04] p-6 sm:p-7">
            <p className="max-w-[70ch] text-[0.95rem] leading-relaxed text-white/70">
              <strong className="font-medium text-white">Thang 0–100 có dải rõ ràng</strong> nên hai CV khác nhau
              rơi vào những con số khác nhau thấy rõ — không có chuyện “ai cũng 70–80”. Và mô hình chấm theo{" "}
              <strong className="font-medium text-white">ý nghĩa, không theo từ khoá</strong>: “ReactJS” bằng
              “React”, ba năm Java vẫn tính cho một vị trí Spring. Mỗi kết quả tách thành điểm mạnh, điểm thiếu
              và gợi ý — một con số biến thành thứ có thể hành động.
            </p>
          </div>
        </Reveal>
      </Container>
    </NightBlock>
  );
}
