import { Container, Reveal, Section, SectionHeader } from "./Section";
import { Marquee } from "./Marquee";

const ROW_1 = [
  { name: "AI code assistant", role: "Đội build — thực thi theo yêu cầu & rào chắn" },
  { name: "Markdown-as-source-of-truth", role: "Backlog, câu chuyện sản phẩm, roadmap versioned trong repo" },
  { name: "ADR", role: "Ghi lại quyết định lớn kèm lý do" },
];

const ROW_2 = [
  { name: "Nhật ký chốt thiết kế", role: "Ghi từng quyết định UI/UX ngay lúc chốt" },
  { name: "HTML mockup tự dựng", role: "Chốt UI trước khi đưa vào code thật" },
  { name: "Bảng đối chiếu tính năng", role: "So sánh có hệ thống với đối thủ, không cảm tính" },
];

function Chip({ name, role }: { name: string; role: string }) {
  return (
    <span className="card-shadow flex w-[280px] flex-none flex-col gap-1 rounded-card border border-line bg-card px-5 py-4 sm:w-[340px]">
      <span className="font-mono text-[0.82rem] font-medium text-ink">{name}</span>
      <span className="text-[0.78rem] text-ink-faint">{role}</span>
    </span>
  );
}

export function Tools() {
  return (
    <Section id="cong-cu">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Công cụ & phương pháp"
          title="Công cụ thực tế đã dùng"
          lede="Không phải danh sách lý thuyết — đây là những gì thật sự chạy trong dự án."
        />
      </Container>

      <Reveal className="mt-12">
        <Container>
          <div className="flex flex-col gap-3 overflow-hidden rounded-panel bg-paper-sunken px-4 py-8 sm:px-6 sm:py-10">
            <Marquee duration={42} fadeColor="var(--paper-sunken)">
              {[...ROW_1, ...ROW_2].map((t) => (
                <Chip key={t.name} {...t} />
              ))}
            </Marquee>
            <Marquee duration={48} direction="right" fadeColor="var(--paper-sunken)">
              {[...ROW_2, ...ROW_1].map((t) => (
                <Chip key={t.name} {...t} />
              ))}
            </Marquee>
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}
