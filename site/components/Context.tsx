"use client";

import { Section } from "./Section";
import { Insight } from "./Insight";
import { AsIsToBe } from "./AsIsToBe";

export function Context() {
  return (
    <Section
      id="boi-canh"
      eyebrow="Bối cảnh"
      title="Vòng lặp lặp lại mỗi lần thấy một vị trí hấp dẫn"
      lede="Ý tưởng không đến từ một bản kế hoạch, mà từ chính quy trình thủ công, rời rạc của người viết khi đi tìm việc — một vòng lặp lại y hệt mỗi lần thấy một vị trí hấp dẫn:"
    >
      <AsIsToBe />

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
