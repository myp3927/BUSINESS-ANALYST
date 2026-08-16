import { Section } from "./Section";

const ROWS = [
  ["Kỹ năng chuyên môn cốt lõi", "25%", "Năng lực trung tâm của vị trí — tín hiệu đơn lẻ lớn nhất."],
  ["Kinh nghiệm & cấp độ", "20%", "Bề dày thực tế đứng thứ hai."],
  ["Công cụ & công nghệ", "15%", "Quan trọng, nhưng học được khi vào việc."],
  ["Phương pháp & quy trình", "15%", "Cách ứng viên làm việc."],
  ["Kiến thức lĩnh vực", "15%", "Bối cảnh ngành."],
  ["Kỹ năng mềm & giao tiếp", "10%", "Cần thiết, nhưng khó đánh giá từ CV — trọng số nhẹ nhất."],
];

export function ScoreModel() {
  return (
    <Section
      id="mo-hinh-cham-diem"
      eyebrow="Mô hình nghiệp vụ"
      title="Cách chấm điểm hoạt động — và vì sao"
    >
      <p className="mt-6 max-w-[68ch]">
        Mỗi CV được chấm trên cùng sáu tiêu chí cố định — vì đó phản ánh
        đúng cách một mô tả công việc IT được viết ra. Một lăng kính cố định
        giúp kết quả so sánh được giữa các vị trí và theo thời gian; hỏi lại
        một AI chat thông thường thì mỗi lần lại ra một định dạng khác.
        Tổng điểm không phải trung bình cộng phẳng — đó là điểm có trọng số
        cộng lại bằng 100%, nên luôn trả lời được câu &ldquo;vì sao cái này
        được 82 điểm?&rdquo;
      </p>

      <div className="mt-6 overflow-x-auto rounded-[10px] border border-line">
        <table className="w-full min-w-[560px] border-collapse bg-paper-sunken">
          <thead>
            <tr className="bg-paper-raised">
              {["Tiêu chí", "Trọng số", "Vì sao"].map((h) => (
                <th
                  key={h}
                  className="border-b border-line px-4 py-3.5 text-left font-mono text-[0.72rem] font-medium uppercase tracking-[0.06em] text-ink-faint"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={i}>
                <td className="whitespace-nowrap border-b border-line px-4 py-3.5 text-[0.94rem] font-semibold last:border-none">
                  {r[0]}
                </td>
                <td className="tnum whitespace-nowrap border-b border-line px-4 py-3.5 font-mono text-[0.94rem] font-medium text-teal-deep">
                  {r[1]}
                </td>
                <td className="border-b border-line px-4 py-3.5 text-[0.94rem]">
                  {r[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 rounded-[10px] bg-amber-tint px-6 py-5">
        <p className="text-[0.94rem] text-ink">
          <strong>Thang 0–100 có dải rõ ràng</strong> (0–39 yếu · 40–59 một
          phần · 60–79 tốt · 80–100 mạnh, kèm bằng chứng) nên hai CV khác
          nhau rơi vào những con số khác nhau thấy rõ — không có chuyện
          &ldquo;ai cũng 70–80&rdquo;. Và mô hình chấm theo{" "}
          <strong>ý nghĩa, không theo từ khoá</strong>: &ldquo;ReactJS&rdquo;
          bằng &ldquo;React&rdquo;, ba năm Java vẫn tính cho một vị trí
          Spring. Mỗi kết quả tách thành điểm mạnh, điểm thiếu và gợi ý —
          một con số biến thành thứ có thể hành động.
        </p>
      </div>
    </Section>
  );
}
