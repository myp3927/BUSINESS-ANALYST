"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container, RevealGroup, Section, SectionHeader } from "./Section";
import { EASE, fadeUp } from "./motion";
import { DocModal, type DocModalTarget } from "./DocModal";

type Output = { label: string; href?: string; doc?: DocModalTarget };

type Action = {
  technique: string;
  how: string;
  outputs: Output[];
};

const PHASES: { n: string; name: string; actions: Action[] }[] = [
  {
    n: "01",
    name: "Khám phá & định nghĩa vấn đề",
    actions: [
      {
        technique: "Phân tích hiện trạng AS-IS → TO-BE",
        how: "Ghi lại đúng vòng lặp thủ công đang diễn ra, tách thành từng bước rời rạc, rồi thiết kế luồng gộp thay thế.",
        outputs: [{ label: "Sơ đồ AS-IS / TO-BE — 4 bước rời → 1 luồng", href: "#boi-canh" }],
      },
      {
        technique: "Truy nỗi đau gốc (root cause)",
        how: "Đi từ triệu chứng “kết quả lưu rải rác” về nguyên nhân “không có một mái nhà chung cho đánh giá → lưu → xem lại”.",
        outputs: [{ label: "Tài liệu Câu chuyện sản phẩm — lý do đằng sau từng quyết định" }],
      },
    ],
  },
  {
    n: "02",
    name: "Định phạm vi & quy tắc nghiệp vụ",
    actions: [
      {
        technique: "Quản trị phạm vi bằng danh sách “không làm”",
        how: "Mỗi ranh giới đều kèm lý do, để phạm vi đủ gọn mà vẫn giữ đúng trọng tâm.",
        outputs: [{ label: "4 ranh giới phạm vi + 1 tuyên bố trọng tâm", href: "#pham-vi" }],
      },
      {
        technique: "Thiết kế business rule chấm điểm",
        how: "Chuẩn hoá 6 tiêu chí cố định × trọng số cộng đúng 100%, thang 0–100 chia thành 4 dải có mô tả.",
        outputs: [{ label: "Bảng trọng số 6 tiêu chí + 4 dải điểm", href: "#mo-hinh" }],
      },
      {
        technique: "Ghi quyết định kèm lý do (ADR)",
        how: "So sánh phương án, chọn có lý do, ghi lại để không phải tranh cãi lại chuyện cũ.",
        outputs: [{ label: "ADR — “thà thiếu còn hơn sai”, không bịa dữ kiện", href: "#quyet-dinh" }],
      },
    ],
  },
  {
    n: "03",
    name: "Đặc tả & bàn giao cho AI",
    actions: [
      {
        technique: "Backlog theo cấu trúc Module → Màn hình → Tính năng",
        how: "Một nguồn sự thật duy nhất về “web đang có gì”, mỗi mục gắn trạng thái đã có / chưa làm / đang làm / muốn nâng cấp.",
        outputs: [{ label: "Backlog tính năng có trạng thái + nhật ký cập nhật" }],
      },
      {
        technique: "User Story + Acceptance Criteria",
        how: "Mô tả đúng việc AI nên làm và giới hạn rõ việc AI không được làm, trước khi bắt đầu build.",
        outputs: [
          {
            label: "US đầy đủ — Tiến trình đánh giá độ phù hợp (AICV-17)",
            doc: {
              title: "US — Tiến trình Đánh giá độ phù hợp bằng AI",
              src: "/docs/user-stories/tien-trinh-danh-gia-do-phu-hop.md",
              githubHref:
                "https://github.com/myp3927/BUSINESS-ANALYST/blob/main/docs/user-stories/tien-trinh-danh-gia-do-phu-hop.md",
            },
          },
        ],
      },
      {
        technique: "Đặc tả luồng trạng thái cho hệ thống",
        how: "Tách vai trò từng thành phần, quy định rõ trạng thái chuyển tiếp và cả trường hợp thất bại.",
        outputs: [{ label: "Luồng 6 bước · pending → processing → done → error", href: "#quy-trinh" }],
      },
      {
        technique: "Mockup HTML + nhật ký chốt thiết kế",
        how: "Chốt giao diện trên bản dựng tay trước khi đưa vào code thật; ghi lại từng quyết định UI/UX ngay lúc chốt.",
        outputs: [{ label: "Bản mockup chốt UI + nhật ký thiết kế", href: "#cong-cu" }],
      },
    ],
  },
  {
    n: "04",
    name: "Kiểm chứng & ưu tiên",
    actions: [
      {
        technique: "Tự nghiệm thu theo từng tiêu chí chấp nhận",
        how: "Một tính năng chỉ được đánh dấu hoàn thành khi qua đủ acceptance criteria đã viết từ đầu.",
        outputs: [{ label: "Vòng kiểm thử trước mỗi lần ship" }],
      },
      {
        technique: "Nghiên cứu thị trường & phân tích cạnh tranh",
        how: "Khoảng 100 nguồn, mỗi luận điểm kiểm chứng theo lối phản biện, dám gọi tên điểm yếu của chính sản phẩm.",
        outputs: [
          { label: "Báo cáo thị trường VN", href: "#thi-truong" },
          { label: "Bảng đối chiếu 7 năng lực × 5 đối thủ", href: "#thi-truong" },
        ],
      },
      {
        technique: "Ưu tiên theo giá trị / công sức",
        how: "Xếp việc tiếp theo theo cụm, gắn mức công sức và độ ưu tiên thay vì làm theo cảm tính.",
        outputs: [{ label: "Product Roadmap — Now / Next / Later", href: "#roadmap" }],
      },
    ],
  },
];

function OutputChip({ label, href, onClick }: { label: string; href?: string; onClick?: () => void }) {
  const inner = (
    <>
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 flex-none" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 2h5l3 3v9H4z" strokeLinejoin="round" />
        <path d="M9 2v3h3" strokeLinejoin="round" />
      </svg>
      {label}
    </>
  );
  const base =
    "inline-flex items-center gap-2 rounded-frame border border-accent/25 bg-accent-tint px-3 py-2 text-[0.8rem] text-ink no-underline";
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`${base} transition-colors hover:border-accent/50`}>
        {inner}
      </button>
    );
  }
  const external = href?.startsWith("http");
  return href ? (
    <a
      href={href}
      className={`${base} transition-colors hover:border-accent/50`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {inner}
    </a>
  ) : (
    <span className={base}>{inner}</span>
  );
}

export function ProcessActions() {
  const [active, setActive] = useState(0);
  const [docTarget, setDocTarget] = useState<DocModalTarget | null>(null);
  const p = PHASES[active];

  return (
    <Section id="quy-trinh-ba">
      <Container>
        <SectionHeader
          eyebrow="Quy trình & Hành động"
          title="Kỹ thuật đã áp dụng — và output tạo ra"
          lede="Bốn giai đoạn, mười hai hành động. Mỗi hành động kết thúc bằng một output có thể mở ra xem."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Giai đoạn quy trình BA">
          {PHASES.map((ph, i) => (
            <button
              key={ph.n}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-left text-[0.82rem] transition-colors ${
                active === i
                  ? "border-accent/40 bg-accent text-white"
                  : "border-line bg-card text-ink-soft hover:border-line-strong"
              }`}
            >
              <span className={`font-mono text-[0.68rem] ${active === i ? "text-white/80" : "text-accent"}`}>
                {ph.n}
              </span>
              {ph.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="card-shadow mt-4 rounded-panel border border-line bg-card p-6 sm:p-8"
          >
            <RevealGroup className="divide-y divide-line" stagger={0.06}>
              {p.actions.map((a) => (
                <motion.div key={a.technique} variants={fadeUp} className="py-5 first:pt-0">
                  <h4 className="font-display text-[1rem] font-medium text-ink">{a.technique}</h4>
                  <p className="mt-1.5 max-w-[62ch] text-[0.9rem] text-ink-soft">{a.how}</p>
                  <div className="mt-3.5 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-faint">
                      Output
                    </span>
                    {a.outputs.map((o) => (
                      <OutputChip
                        key={o.label}
                        label={o.label}
                        href={o.href}
                        onClick={o.doc ? () => setDocTarget(o.doc!) : undefined}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </RevealGroup>
          </motion.div>
        </AnimatePresence>
      </Container>

      <DocModal target={docTarget} onClose={() => setDocTarget(null)} />
    </Section>
  );
}
