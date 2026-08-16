import { Container, Reveal, Section, SectionHeader } from "./Section";
import { SplitBlock } from "./SplitBlock";
import { UserStoryCard } from "./UserStoryCard";
import { Statement } from "./Insight";

export function Role() {
  return (
    <Section id="vai-tro">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Vai trò"
          title="Một đội sản phẩm một người"
          lede="Làm tất cả trừ code — AI được dùng như một trợ lý lập trình, còn mọi quyết định sản phẩm thì không uỷ quyền."
        />

        <Reveal className="mt-12">
          <Statement>
            “Mình vận hành cái này như một đội sản phẩm một người — AI là cỗ máy build, mình sở hữu mọi quyết
            định sản phẩm, PM và QA.”
          </Statement>
        </Reveal>

        <div className="mt-6">
          <SplitBlock
            title="BA ra đề bài, AI thực thi, BA nghiệm thu"
            body={
              <>
                Mọi quyết định về vấn đề, phạm vi, mô hình chấm điểm và thứ tự ưu tiên đều do người viết ra đề
                bài, xét duyệt và kiểm thử. AI thực thi đúng yêu cầu và rào chắn đã đặt ra — đúng vai trò một BA
                khi làm việc cùng AI.
              </>
            }
            bullets={[
              "Viết yêu cầu đủ rõ để không phải giải thích lại",
              "Đặt rào chắn: cái gì AI không được phép làm",
              "Tự kiểm thử từng tiêu chí chấp nhận trước khi ship",
            ]}
            visual={<UserStoryCard />}
          />
        </div>
      </Container>
    </Section>
  );
}
