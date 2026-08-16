import { Container } from "./Section";
import { Marquee } from "./Marquee";

const ARTIFACTS = [
  "Backlog tính năng",
  "Câu chuyện sản phẩm",
  "Phân tích thị trường & cạnh tranh",
  "Product Roadmap",
  "ADR — nhật ký quyết định",
  "User Story & Acceptance Criteria",
  "Nhật ký chốt thiết kế",
  "Bảng đối chiếu đối thủ",
];

export function TrustBar() {
  return (
    <div className="py-12 sm:py-16">
      <Container>
        <p className="text-center font-mono text-eyebrow uppercase text-ink-faint">
          Case study này được viết từ tài liệu thật
        </p>
        <Marquee className="mt-6" duration={38}>
          {ARTIFACTS.map((a) => (
            <span
              key={a}
              className="card-shadow whitespace-nowrap rounded-frame border border-line bg-card px-4 py-2.5 text-[0.85rem] text-ink-soft"
            >
              {a}
            </span>
          ))}
        </Marquee>
      </Container>
    </div>
  );
}
