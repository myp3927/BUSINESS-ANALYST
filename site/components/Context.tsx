"use client";

import { Section } from "./Section";
import { Insight } from "./Insight";
import { RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const STEPS = [
  <>
    Đọc mô tả công việc, <b>tự đoán</b> xem mình có thật sự phù hợp.
  </>,
  <>
    Dán CV + mô tả đó vào <b>một AI chat</b> để phân tích cho kỹ.
  </>,
  <>
    Lưu kết quả <b>ở bất cứ đâu</b> — hôm nay Notion, mai bảng tính.
  </>,
  <>
    Lặp lại cho vị trí tiếp theo — <b>không gì so sánh được</b> giữa các lần.
  </>,
];

export function Context() {
  return (
    <Section
      id="boi-canh"
      eyebrow="Bối cảnh"
      title="Vòng lặp lặp lại mỗi lần thấy một vị trí hấp dẫn"
      lede="Ý tưởng không đến từ một bản kế hoạch, mà từ chính quy trình thủ công, rời rạc của người viết khi đi tìm việc — một vòng lặp lại y hệt mỗi lần thấy một vị trí hấp dẫn:"
    >
      <RevealGroup className="my-6 max-w-[60ch]" stagger={0.1}>
        {STEPS.map((s, i) => (
          <motion.div
            key={i}
            variants={revealItem}
            className={`relative border-b border-line py-3 pl-[42px] text-[1rem] ${
              i === STEPS.length - 1 ? "border-none pb-0" : ""
            } ${i === 0 ? "pt-0" : ""}`}
          >
            <span className="absolute left-0 top-3 font-mono text-[0.8rem] font-medium text-teal-deep">
              {i + 1}
            </span>
            {s}
          </motion.div>
        ))}
      </RevealGroup>
      <p className="max-w-[68ch]">
        Phân tích nằm một nơi, lịch sử nằm nơi khác — không có mái nhà chung.
      </p>

      <Insight>
        Insight: mảnh còn thiếu không phải phân tích tốt hơn — AI đã làm tốt
        — mà là một mái nhà duy nhất nơi đánh giá → lưu → xem lại diễn ra
        trong cùng một luồng.
      </Insight>

      <p className="max-w-[68ch]">
        <strong>Vì sao chọn xây cái này thay vì thứ hào nhoáng hơn:</strong>{" "}
        đây là vấn đề của chính người viết nên thấm nỗi đau và biết chính xác
        cần giải gì; tuyển dụng là chủ đề dễ đồng cảm và dễ chứng minh giá
        trị ngay trên bản thân; và mục tiêu là chứng minh một BA có thể đưa
        ý tưởng đi trọn tới một sản phẩm đã ship — không chỉ dừng ở viết
        spec cho nó.
      </p>
    </Section>
  );
}
