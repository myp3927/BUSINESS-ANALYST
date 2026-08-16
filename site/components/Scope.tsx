"use client";

import { Section } from "./Section";
import { RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";
import { CheckMark, CrossMark } from "./Marks";

const NO_ITEMS = [
  {
    title: "Không scraping / tự nộp đơn",
    body: "Không phải nỗi đau cốt lõi; dán mô tả công việc là đủ.",
  },
  {
    title: "Không viết lại nội dung CV",
    body: "Giữ dữ liệu trung thực — bố cục gọn, không bịa.",
  },
  {
    title: "Chưa làm SaaS thương mại",
    body: "Giải xong vấn đề cốt lõi rồi mới tính gói cước.",
  },
  {
    title: "Không cho nhà tuyển dụng tự đăng ký",
    body: "Mở ra một bề mặt riêng tư mà người viết chọn không phơi bày.",
  },
];

export function Scope() {
  return (
    <Section
      id="pham-vi"
      eyebrow="Phạm vi & kỷ luật nói không"
      title="Biết những gì không nên xây là một nửa của tư duy sản phẩm"
      lede={
        'Mỗi cái "không" giữ phạm vi đủ gọn để thật sự hoàn thành — và giữ trọng tâm vào điều duy nhất quan trọng: phân tích + lịch sử, ở một nơi.'
      }
    >
      <RevealGroup className="mt-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        {NO_ITEMS.map((it) => (
          <motion.div
            key={it.title}
            variants={revealItem}
            className="rounded-[10px] border border-line bg-paper-sunken px-5 py-5"
          >
            <span className="mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-bad-tint text-bad">
              <CrossMark />
            </span>
            <h3 className="mb-1.5 text-[1.02rem] font-semibold text-ink">
              {it.title}
            </h3>
            <p className="text-[0.94rem] text-ink-soft">{it.body}</p>
          </motion.div>
        ))}
      </RevealGroup>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-3.5 rounded-[10px] border border-teal-deep bg-teal-tint px-5 py-5"
      >
        <span className="mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-teal-deep text-[#F3F5EF]">
          <CheckMark />
        </span>
        <h3 className="mb-1.5 text-[1.02rem] font-semibold text-ink">
          Trọng tâm: phân tích + lịch sử, ở một nơi
        </h3>
        <p className="text-[0.94rem] text-ink-soft">
          Mọi thứ khác đều là thứ làm xao nhãng khỏi điều đó.
        </p>
      </motion.div>
    </Section>
  );
}
