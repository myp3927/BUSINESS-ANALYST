import { Container, Reveal, Section, SectionHeader } from "./Section";
import { Check, Cross } from "./Primitives";

export function Decision() {
  return (
    <Section id="quyet-dinh">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Nguyên tắc"
          title="Quyết định định hình tất cả"
          lede="Một công cụ tuyển dụng mà nói dối thì vô giá trị. Nên trung thực được đặt thành luật cứng, không phải một tuỳ chọn."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal>
            <div className="card-shadow h-full rounded-card border border-line bg-paper-raised p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-frame border border-line bg-paper-sunken text-ink-faint">
                  <Cross />
                </span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ink-faint">
                  Phương án loại
                </span>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft">
                Để AI “đánh bóng” mọi thứ — suy ra một kỹ năng còn thiếu, làm tròn số lên, điền chi tiết công ty
                mà mô tả chưa hề nói. Đầu ra ấn tượng hơn, ngay tức thì.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card-shadow relative h-full rounded-card border border-accent/40 bg-card p-6 sm:p-8">
              <span className="absolute right-5 top-5 rounded-full bg-accent px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-white">
                Đã chọn
              </span>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-frame bg-gradient-to-b from-accent-soft to-accent text-white">
                  <Check />
                </span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ink-faint">
                  Phương án chọn
                </span>
              </div>
              <p className="mt-5 text-[0.95rem] leading-relaxed text-ink">
                Thà thiếu còn hơn sai. Mọi dữ kiện chỉ đến từ CV hoặc mô tả công việc; không bịa gì; mô hình để
                trống một trường thay vì đoán.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="mx-auto flex max-w-prose flex-col gap-5 text-[0.98rem] leading-relaxed text-ink-soft">
            <p>
              <strong className="font-medium text-ink">Vì sao:</strong> một chi tiết bịa là mất niềm tin cả sản
              phẩm — cả ứng viên lẫn nhà tuyển dụng đều ra quyết định thật dựa trên kết quả này.
            </p>
            <p>
              Một bài kiểm thử độc lập cho thấy <em>mọi</em> công cụ viết CV bằng AI được thử đều bịa số liệu khi
              được yêu cầu “làm CV cho ấn tượng”. Từ chối làm thế không phải hạn chế — đó là điểm khác biệt.
            </p>
            <p>
              Năm 2026, “có AI” không còn là điểm khác biệt — gần như mọi sản phẩm đều gắn AI. Giá trị nằm ở chỗ
              chọn đúng nơi AI thật sự cần thiết: khớp một CV với một mô tả công việc là bài toán về{" "}
              <em>ý nghĩa</em> (từ đồng nghĩa, kinh nghiệm tương đương, cấp độ, văn phong song ngữ) — không phải
              so khớp từ khoá — rồi đưa nó vào một sản phẩm chạy thật, có rào chắn rõ ràng.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
