"use client";

import { Section } from "./Section";
import { RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const ITEMS = [
  { n: "01", title: "Phát hiện vấn đề gốc", body: "Truy ra insight thật từ chính trải nghiệm cá nhân, không phải ý tưởng trên giấy.", href: "#boi-canh", label: "Bối cảnh" },
  { n: "02", title: "Định phạm vi & nói không", body: "Giới hạn rõ ràng, có lý do, để giữ sản phẩm hoàn thành được.", href: "#pham-vi", label: "Phạm vi" },
  { n: "03", title: "Thiết kế mô hình nghiệp vụ", body: "Bộ tiêu chí cố định × trọng số công khai — một business rule giải thích được.", href: "#mo-hinh-cham-diem", label: "Mô hình chấm điểm" },
  { n: "04", title: "Ra quyết định có nguyên tắc", body: "So sánh phương án, chọn có lý do, ghi lại để không lặp lại tranh cãi.", href: "#quyet-dinh", label: "Nguyên tắc" },
  { n: "05", title: "Đặc tả quy trình cho hệ thống", body: "Luồng trạng thái rõ ràng, tách vai trò từng thành phần.", href: "#quy-trinh", label: "Quy trình" },
  { n: "06", title: "Nghiên cứu thị trường & đối thủ", body: "~100 nguồn, kiểm chứng phản biện, dám nói thẳng điểm yếu của chính mình.", href: "#thi-truong", label: "Thị trường" },
  { n: "07", title: "Ưu tiên có chủ đích", body: "Sắp xếp việc tiếp theo theo giá trị / công sức, không làm theo cảm tính.", href: "#roadmap", label: "Roadmap" },
  { n: "08", title: "Viết yêu cầu & đặt rào chắn cho AI", body: "Mô tả đúng việc AI nên làm, giới hạn rõ việc AI không được làm, rồi tự kiểm định đầu ra.", href: "#vai-tro", label: "Vai trò" },
];

export function Skills() {
  return (
    <Section
      id="ky-nang"
      eyebrow="Kỹ năng BA thể hiện"
      title="Case study này chứng minh điều gì"
      lede="Mỗi kỹ năng dưới đây gắn với một phần cụ thể ở trên — không phải một dòng liệt kê suông."
    >
      <RevealGroup className="mt-7 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2">
        {ITEMS.map((it) => (
          <motion.div
            key={it.n}
            variants={revealItem}
            className="bg-paper-sunken px-6 py-5"
          >
            <h3 className="mb-2 flex items-baseline gap-2 text-[0.98rem] font-semibold text-ink">
              <span className="font-mono text-[0.72rem] text-teal-deep">
                {it.n}
              </span>
              {it.title}
            </h3>
            <p className="mb-2 text-[0.88rem] text-ink-soft">{it.body}</p>
            <a
              href={it.href}
              className="font-mono text-[0.78rem] text-teal-deep no-underline hover:underline"
            >
              → {it.label}
            </a>
          </motion.div>
        ))}
      </RevealGroup>
    </Section>
  );
}
