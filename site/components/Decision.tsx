"use client";

import { Section } from "./Section";
import { RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

export function Decision() {
  return (
    <Section
      id="quyet-dinh"
      eyebrow="Nguyên tắc"
      title="Quyết định định hình tất cả"
      lede="Một công cụ tuyển dụng mà nói dối thì vô giá trị. Nên trung thực được đặt thành luật cứng, không phải một tuỳ chọn."
    >
      <RevealGroup className="my-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <motion.div
          variants={revealItem}
          className="rounded-[10px] border border-line bg-paper-sunken px-6 py-6"
        >
          <p className="mb-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-bad">
            Phương án loại
          </p>
          <p className="text-[0.98rem]">
            Để AI &ldquo;đánh bóng&rdquo; mọi thứ — suy ra một kỹ năng còn
            thiếu, làm tròn số lên, điền chi tiết công ty mà mô tả chưa hề
            nói. Đầu ra ấn tượng hơn, ngay tức thì.
          </p>
        </motion.div>
        <motion.div
          variants={revealItem}
          className="rounded-[10px] border border-teal-deep bg-teal-tint px-6 py-6"
        >
          <p className="mb-2.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-teal-deep">
            Phương án chọn
          </p>
          <p className="text-[0.98rem]">
            Thà thiếu còn hơn sai. Mọi dữ kiện chỉ đến từ CV hoặc mô tả công
            việc; không bịa gì; mô hình để trống một trường thay vì đoán.
          </p>
        </motion.div>
      </RevealGroup>

      <p className="max-w-[68ch]">
        <strong>Vì sao:</strong> một chi tiết bịa là mất niềm tin cả sản
        phẩm — cả ứng viên lẫn nhà tuyển dụng đều ra quyết định thật dựa
        trên kết quả này.
      </p>
      <p className="max-w-[68ch]">
        Một bài kiểm thử độc lập cho thấy <em>mọi</em> công cụ viết CV bằng
        AI được thử đều bịa số liệu khi được yêu cầu &ldquo;làm CV cho ấn
        tượng&rdquo;. Từ chối làm thế không phải hạn chế — đó là điểm khác
        biệt.
      </p>
      <p className="max-w-[68ch]">
        Năm 2026, &ldquo;có AI&rdquo; không còn là điểm khác biệt — gần như
        mọi sản phẩm đều gắn AI. Giá trị nằm ở chỗ chọn đúng nơi AI thật sự
        cần thiết: khớp một CV với một mô tả công việc là bài toán về{" "}
        <em>ý nghĩa</em> (từ đồng nghĩa, kinh nghiệm tương đương, cấp độ,
        văn phong song ngữ) — không phải so khớp từ khoá — rồi đưa nó vào
        một sản phẩm chạy thật, có rào chắn rõ ràng.
      </p>
    </Section>
  );
}
