"use client";

import { motion } from "framer-motion";
import { Container, Reveal, RevealGroup, Section, SectionHeader } from "./Section";
import { Check, Cross } from "./Primitives";
import { fadeUp } from "./motion";

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
    <Section id="pham-vi">
      <Container>
        <SectionHeader
          eyebrow="Phạm vi & kỷ luật nói không"
          title="Biết những gì không nên xây là một nửa của tư duy sản phẩm"
          lede='Mỗi cái "không" giữ phạm vi đủ gọn để thật sự hoàn thành — và giữ trọng tâm vào điều duy nhất quan trọng: phân tích + lịch sử, ở một nơi.'
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.09}>
          {NO_ITEMS.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              className="card-shadow group rounded-card border border-line bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-frame border border-line bg-paper-sunken text-ink-faint">
                <Cross />
              </span>
              <h3 className="mt-5 font-display text-[1.125rem] font-medium text-ink">{it.title}</h3>
              <p className="mt-2 text-[0.9rem] text-ink-soft">{it.body}</p>
            </motion.div>
          ))}
        </RevealGroup>

        <Reveal delay={0.15} className="mt-4">
          <div className="card-shadow flex flex-col gap-4 rounded-card border border-accent/35 bg-accent-tint p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-frame bg-gradient-to-b from-accent-soft to-accent text-white">
              <Check />
            </span>
            <div>
              <h3 className="font-display text-[1.125rem] font-medium text-ink">
                Trọng tâm: phân tích + lịch sử, ở một nơi
              </h3>
              <p className="mt-1.5 text-[0.9rem] text-ink-soft">
                Mọi thứ khác đều là thứ làm xao nhãng khỏi điều đó.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
