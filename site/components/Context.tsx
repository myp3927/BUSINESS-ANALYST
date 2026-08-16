"use client";

import { motion } from "framer-motion";
import { Container, Reveal, RevealGroup, Section } from "./Section";
import { ScrollWords } from "./ScrollWords";
import { AsIsToBe } from "./AsIsToBe";
import { Insight } from "./Insight";
import { Eyebrow, IconTile } from "./Primitives";
import { fadeUp } from "./motion";

const PAINS = [
  {
    icon: "01",
    title: "Tự đoán độ phù hợp",
    body: "Thấy một tin tuyển dụng hấp dẫn rồi ước lượng bằng cảm tính — không có gì để đối chiếu.",
  },
  {
    icon: "02",
    title: "Mỗi lượt một định dạng",
    body: "Dán CV + JD vào AI chat, lần nào cũng ra một kiểu trình bày khác, không so sánh được giữa các lượt.",
  },
  {
    icon: "03",
    title: "Kết quả rơi rớt khắp nơi",
    body: "Notion, Google Sheet, ảnh chụp màn hình — vài hôm sau không tìm lại nổi mình đã đánh giá gì.",
  },
];

export function Context() {
  return (
    <Section id="boi-canh">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Eyebrow>Bối cảnh</Eyebrow>
          </Reveal>
          <ScrollWords
            className="mt-6 flex justify-center"
            text="Ý tưởng không đến từ một bản kế hoạch. Nó đến từ một vòng lặp thủ công lặp lại y hệt mỗi lần thấy một vị trí hấp dẫn."
          />
        </div>

        <RevealGroup className="mx-auto mt-14 max-w-[860px] divide-y divide-line" stagger={0.1}>
          {PAINS.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-8"
            >
              <div className="flex items-center gap-4 sm:w-[42%] sm:flex-none">
                <IconTile>
                  <span className="font-mono text-[0.7rem]">{p.icon}</span>
                </IconTile>
                <h3 className="font-display text-[1.05rem] font-medium text-ink">{p.title}</h3>
              </div>
              <p className="text-[0.9rem] text-ink-soft sm:pt-2">{p.body}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal className="mt-14">
          <AsIsToBe />
        </Reveal>

        <Reveal className="mt-10">
          <Insight>
            Mảnh còn thiếu không phải phân tích tốt hơn — AI đã làm tốt — mà là một mái nhà duy nhất nơi đánh
            giá → lưu → xem lại diễn ra trong cùng một luồng.
          </Insight>
        </Reveal>

        <Reveal className="mt-10">
          <p className="max-w-prose text-lede text-ink-soft">
            <strong className="font-medium text-ink">Vì sao chọn xây cái này thay vì thứ hào nhoáng hơn:</strong>{" "}
            đây là vấn đề của chính người viết nên thấm nỗi đau và biết chính xác cần giải gì; tuyển dụng là chủ
            đề dễ đồng cảm và dễ chứng minh giá trị ngay trên bản thân; và mục tiêu là chứng minh một BA có thể
            đưa ý tưởng đi trọn tới một sản phẩm đã ship — không chỉ dừng ở viết spec cho nó.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
