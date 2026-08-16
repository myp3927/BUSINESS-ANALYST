# CLAUDE.md

Hướng dẫn cho Claude Code khi làm việc trong repo này.

## Repo này là gì

**Portfolio Business Analyst** — kho **tài liệu nghiệp vụ** (không có mã nguồn) cho sản phẩm **AnalyzeCV**: web đánh giá độ phù hợp **CV ↔ JD** bằng AI, phục vụ 2 nhóm người dùng (Ứng viên và Nhà tuyển dụng/HR). Repo dùng để trình bày **tư duy sản phẩm của một BA**, nên nội dung viết cho người đọc là nhà tuyển dụng, không đi sâu kỹ thuật.

Toàn bộ tài liệu viết bằng **tiếng Việt**. Mọi nội dung mới cũng viết tiếng Việt, giữ nguyên giọng văn và ký hiệu emoji đang dùng.

## Bốn tài liệu & phân vai (đừng lẫn)

| File | Trả lời câu hỏi | Nội dung |
|---|---|---|
| [BACKLOG-TINH-NANG.md](BACKLOG-TINH-NANG.md) | **CÁI GÌ** | Bản kê khai tính năng theo cấu trúc **Module → Màn hình (MH) → Tính năng**, kèm trạng thái. Là nguồn sự thật về "web đang có gì". |
| [CAU-CHUYEN-SAN-PHAM.md](CAU-CHUYEN-SAN-PHAM.md) | **TẠI SAO** | Hành trình sản phẩm: nỗi đau gốc, lý do chọn/không chọn từng tính năng, ranh giới scope. |
| [Product_Roadmap.md](Product_Roadmap.md) | **SẮP LÀM GÌ** | Kho ý tưởng **chưa làm**, xếp theo Cụm A–F, có cột Công sức + Độ ưu tiên. |
| [PHAN-TICH-THI-TRUONG-CANH-TRANH.md](PHAN-TICH-THI-TRUONG-CANH-TRANH.md) | **THỊ TRƯỜNG THẾ NÀO** | Phân tích nhu cầu, 3 nhóm đối thủ (nền tảng VN, công cụ AI toàn cầu, ATS), khoảng trống cơ hội. |

Hai tài liệu phụ trợ cho phần trình bày (site trong [site/](site/)):

| File | Vai trò |
|---|---|
| [KHUNG-PORTFOLIO-BA.md](KHUNG-PORTFOLIO-BA.md) | **Khung chuẩn** một portfolio BA cần có (4 phần case study, output theo Product/Outsource, kỹ năng con người) + bảng đối chiếu xem site còn thiếu mục nào. Khi thêm/bớt section trên site, cập nhật lại bảng đối chiếu ở cuối file. |
| [PHAN-TICH-GIAO-DIEN-FLUENCE.md](PHAN-TICH-GIAO-DIEN-FLUENCE.md) | **Hệ thống thiết kế** của site: token màu, thang chữ, thông số chuyển động, bố cục từng section — đo từ template tham chiếu. Đọc trước khi sửa giao diện. |

**Quy tắc đặt nội dung:** lý do/bối cảnh → CAU-CHUYEN; mô tả tính năng đã có → BACKLOG; ý tưởng chưa làm → Roadmap. Không nhét lý do dài vào BACKLOG.

## Định hướng sản phẩm (North Star)

- Điểm khác biệt = **minh bạch + trung thực**. Roadmap NOW = **trợ lý cải thiện CV** (không chỉ chấm điểm mà giúp cải thiện và chứng minh đã tốt hơn).
- **Không bịa dữ liệu**: chỉ hiển thị thông tin công ty/ứng viên nếu JD hoặc CV có sẵn; AI dọn layout CV nhưng giữ nguyên thông tin.
- Kết quả đánh giá chuẩn hóa theo **6 nhóm cố định** (kỹ năng cốt lõi, công cụ, phương pháp, domain, kỹ năng mềm, kinh nghiệm) + % tổng, để so sánh được giữa các lượt.
- Nội dung phải hướng đúng người đọc: cùng dữ liệu nhưng khu Ứng viên và khu HR trình bày khác nhau.

## Quy ước khi chỉnh sửa tài liệu

- **Ký hiệu trạng thái (BACKLOG):** `✅` đã có & đang chạy · `⬜` chưa làm · `🔧` muốn nâng cấp (đã pick) · `🧪` đang làm/đang test.
- **Ký hiệu công sức (Roadmap):** 🟢 nhỏ · 🟡 vừa · 🔴 lớn (ghép 🟢🟡 = nhỏ→vừa). Độ ưu tiên: `Cao` / `Trung bình` / `Thấp`.
- **Ngày tháng:** ghi tuyệt đối. BACKLOG dùng `YYYY-MM-DD`, các file khác thường dùng `DD/MM/YYYY` — theo đúng định dạng đang có trong file đó.
- **Ghi nhật ký cập nhật:** khi sửa BACKLOG, thêm một dòng `_YYYY-MM-DD — mô tả ngắn._` ở khối cập nhật đầu file, giữ dòng mới nhất trên cùng.
- **Làm xong một mục Roadmap:** đánh dấu `**✅ ĐÃ XONG DD/MM/YYYY**` ngay trong ô Ghi chú, kèm tóm tắt cái đã làm — không xóa dòng khỏi bảng.
- **Thuật ngữ:** dùng đúng từ đã chuẩn hóa, ví dụ **"Lượt đánh giá"** (KHÔNG dùng "Lần đánh giá"), **"Từ khóa ATS"**, **"Hồ sơ mẫu"**. Tài liệu tham chiếu tới `CONTEXT.md`, `docs/adr/`, `docs/grill/`, `docs/user-stories/` — các file này nằm ở **repo mã nguồn khác** (`matching-web`), không có trong repo này; đừng cố đọc hay tạo chúng ở đây.
- Giữ nguyên cấu trúc bảng Markdown và emoji tiêu đề; không "dọn dẹp" định dạng khi không được yêu cầu.

## Lưu ý về mức độ nhạy cảm

- Số liệu thị trường trong PHAN-TICH-THI-TRUONG có mục "Độ tin cậy" ở cuối file — khi trích dẫn hoặc thêm số mới, ghi rõ nguồn và mức tin cậy, không thêm số không có nguồn.
- Các tính năng đụng quyền riêng tư (chia sẻ link công khai, nhận CV người khác, gợi ý việc từ nguồn ngoài) phải nêu rõ rủi ro RLS/riêng tư khi bàn tới.
