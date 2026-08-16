import { Section } from "./Section";
import { Statement } from "./Insight";

export function Role() {
  return (
    <Section id="vai-tro" eyebrow="Vai trò" title="Một đội sản phẩm một người">
      <Statement>
        &ldquo;Mình vận hành cái này như một đội sản phẩm một người — AI là
        cỗ máy build, mình sở hữu mọi quyết định sản phẩm, PM và QA.&rdquo;
      </Statement>
      <p className="max-w-[68ch]">
        <strong>Làm tất cả trừ code — AI được dùng như một trợ lý lập
        trình.</strong> Mọi quyết định về vấn đề cần giải, phạm vi, mô hình
        chấm điểm, tiêu chí chất lượng và thứ tự ưu tiên đều do người viết ra
        đề bài, xét duyệt và kiểm thử; AI thực thi theo đúng yêu cầu và rào
        chắn đã đặt ra — đúng bản chất công việc của một BA khi làm việc
        cùng AI: mô tả yêu cầu chính xác, đặt giới hạn, và kiểm định chất
        lượng đầu ra.
      </p>
    </Section>
  );
}
