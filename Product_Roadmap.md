# 🗺️ Product Roadmap — AnalyzeCV

> **Mục đích:** kho **ý tưởng tính năng tương lai** của AnalyzeCV (chưa làm), để cân nhắc & chọn phát triển. Đây là nơi *brainstorm và xếp ưu tiên*, khác với:
>
> - **`docs/BACKLOG-TINH-NANG.md`** = *web đang CÓ GÌ* (tính năng đã/đang chạy + chỗ muốn nâng cấp).
> - **`docs/user-stories/`** = đặc tả chi tiết (US) cho từng tính năng khi quyết làm.
> - **`CAU-CHUYEN-SAN-PHAM.md`** = *TẠI SAO* — lý do/bối cảnh sản phẩm.
>
> **Định hướng (North Star):** điểm khác biệt = **minh bạch + trung thực**; roadmap NOW = **trợ lý cải thiện CV** (không chỉ chấm điểm, mà giúp người dùng cải thiện và chứng minh đã tốt hơn).

**Chú thích cột:**
- **Công sức:** 🟢 nhỏ · 🟡 vừa · 🔴 lớn (kết hợp 🟢🟡 = nhỏ→vừa…).
- **Độ ưu tiên:** `Cao` (đòn bẩy lớn / đúng North Star, nên làm sớm) · `Trung bình` · `Thấp` (để sau / tham vọng / rủi ro cao).

_Tạo lần đầu: 18/06/2026._

---

## Cụm A — Cải thiện CV (đúng North Star "trợ lý cải thiện CV")

| ID | Tính năng | Lợi ích tính năng mang lại cho người dùng | Công sức | Độ ưu tiên | Ghi chú |
|---|---|---|---|---|---|
| A1 | Trợ lý viết lại CV theo JD | Biến lời khuyên thành hành động: AI gợi ý sửa từng gạch đầu dòng ("câu gốc → câu hay hơn"), người dùng bấm chọn — không phải tự bơi sau khi đọc gap | 🟡🔴 | Cao | Đúng roadmap nhất; cần thêm prompt + màn hình soạn thảo (editor) |
| A2 | Đo tiến bộ Trước/Sau | Sửa CV xong đánh giá lại, thấy ngay "62% → 78%" — biết công sức sửa có hiệu quả | 🟡 | Cao | Tái dùng cơ chế "đánh giá lại" đã có; rất hợp tinh thần trung thực |
| A3 | Từ khóa ATS (Có/Thiếu) | Danh sách rõ "JD nhắc 8 từ khóa, CV bạn thiếu 3" — biết chính xác cần bổ sung gì để qua vòng lọc | 🟡 | Cao | **✅ ĐÃ XONG 22/06/2026** (grill-with-docs). Tên chuẩn: **"Từ khóa ATS"** (glossary). Thực tế là 🟡 (KHÔNG 🟢🟡): dữ liệu keyword **chưa có sẵn** → thêm trường `keywords:{term,inCv}[]` vào prompt + `MatchResult` cả 2 app + card chip ở `ResultBody`. 2 mức Có/Thiếu, synonym-aware. HR: để sau |
| A4 | Khám sức khỏe CV (không cần JD) | Chấm CV đã chuẩn chưa: độ dài, động từ hành động, thành tích có số liệu, lỗi trình bày, khoảng trống thời gian — dùng được cả khi chưa có JD | 🟡 | Trung bình | Prompt mới, độc lập JD; mở rộng tệp người dùng |
| A5 | Bản CV riêng theo từng JD | Lưu nhiều phiên bản CV đã tinh chỉnh cho từng vị trí, không lẫn lộn khi apply nhiều nơi | 🟡 | Trung bình | Mở rộng Thư viện CV |
| A6 | Kiểm tra CV thân thiện máy đọc (ATS-parseable) | Biết file CV có bị hệ thống lọc đọc sai không, để sửa định dạng | 🟡🔴 | Thấp | Cần phân tích cấu trúc PDF |

## Cụm B — Tài liệu & chuẩn bị ứng tuyển (đòn bẩy cao, tái dùng đồ có)

| ID | Tính năng | Lợi ích tính năng mang lại cho người dùng | Công sức | Độ ưu tiên | Ghi chú |
|---|---|---|---|---|---|
| B1 | Tạo thư xin việc theo CV + JD | Có ngay bản nháp cover letter bám đúng JD, chỉ cần chỉnh — khép kín bộ hồ sơ ứng tuyển | 🟡 | Cao | **✅ ĐÃ XONG 22/06/2026** (grill). `kind: "cover_letter"` mới → `runCover` trả `{coverLetter:{greeting,paragraphs[],closing}}`. 2 điểm vào: trang kết quả (`/cover/[id]`) + Đơn ứng tuyển (lưu `cover_letter_text`). Cần schema-v12. Không bịa (dùng jobInfo + placeholder) |
| B2 | Luyện phỏng vấn | Câu hỏi theo JD + chỗ tự trả lời + AI góp ý — chuẩn bị tự tin trước buổi phỏng vấn | 🟡🔴 | Cao | App đã sinh sẵn "tips/câu hỏi phỏng vấn", chỉ nâng cấp |
| B7 | Soạn câu trả lời "Vì sao chọn công ty/vị trí này" | Gợi ý câu trả lời cho câu hỏi phỏng vấn kinh điển, dựa trên JD | 🟢 | Thấp | Prompt nhẹ |

## Cụm C — Quản lý ứng tuyển nâng cao (tận dụng dữ liệu tracker)

| ID | Tính năng | Lợi ích tính năng mang lại cho người dùng | Công sức | Độ ưu tiên | Ghi chú |
|---|---|---|---|---|---|
| C3 | Nhắc lịch phỏng vấn + đơn để lâu (**trong app**) | Thẻ "Sắp tới" + cảnh báo đơn chờ quá lâu — không bỏ lỡ lịch, không quên theo dõi | 🟢🟡 | Cao | Đã có `interview_date` nhưng chưa dùng. **Chỉ nhắc trong app** (web-only). Phần bắn ra Email/Discord tách thành **C7** |
| C4 | Xem dạng Kanban (kéo thả theo phễu) | Nhìn toàn cảnh tiến trình ứng tuyển trực quan, kéo thả đổi trạng thái | 🟡 | Thấp | Trên dữ liệu hiện có |
| C5 | Thống kê cá nhân | Insight từ chính dữ liệu: tỉ lệ được mời phỏng vấn theo nền tảng / theo % phù hợp ("đơn ≥75% được gọi nhiều hơn") | 🟡 | Trung bình | Phân tích đơn đã có; insight độc đáo |
| C6 | Nhật ký mỗi đơn | Xem lại lịch sử đổi trạng thái theo thời gian của từng đơn | 🟢🟡 | Thấp | Cần lưu lịch sử trạng thái |
| C7 | **Bắn thông báo nhắc qua Email/Discord** | Nhận nhắc lịch phỏng vấn sắp tới + đơn để lâu **ngay trên Email/Discord**, không cần mở app mới biết | 🟡🔴 | Trung bình | Xem **Chi tiết C7** bên dưới — cần bộ chạy theo lịch (always-on) + kênh gửi. Khác C3 (C3 chỉ nhắc trong app) |

> **Chi tiết C7 — Bắn thông báo nhắc qua Email/Discord** (ghi 22/06/2026, để làm sau)
>
> **Mong muốn:** không chỉ nhắc trong app (C3) mà **chủ động bắn thông báo ra ngoài** — Email (Gmail) hoặc Discord — khi: (1) sắp tới lịch phỏng vấn (vd trước 1 ngày), (2) đơn đã nộp nhưng để quá lâu chưa cập nhật trạng thái.
>
> **Vì sao KHÔNG còn nhẹ (🟡🔴 chứ không 🟢🟡):** C3 gốc là web-only; C7 cần thêm 2 mảng hạ tầng mới:
> 1. **Bộ chạy theo lịch (always-on)** — web là request-driven, không tự chạy nền; worker hiện chỉ chạy khi mở app trên laptop (không 24/7) nên **không bắn đúng giờ được**. Cần một runner luôn bật. Ứng viên: **Supabase pg_cron + pg_net** (server-side, luôn bật) · **GitHub Actions cron** (mỗi sáng quét + gửi, miễn phí, repo đã có webhook Discord sẵn) · hoặc deploy worker 24/7.
> 2. **Kênh gửi đi** — Discord: tái dùng `scripts/notify.sh` (webhook đã có) nhưng hiện là **1 kênh của maintainer**, không per-user. Email: **chưa có gì**, cần dịch vụ gửi (Resend/SendGrid) + xác minh domain gửi + lo deliverability.
>
> **Quyết định còn treo (cần grill khi làm):**
> - **Ai nhận?** (A) Chỉ maintainer — 1 kênh, tái dùng webhook sẵn, khả thi sớm, hợp MVP-1-người-dùng. (B) Từng user trên kênh riêng — cần lưu cấu hình kênh per-user + email provider, lớn hơn (🔴). *(Đang nghiêng A cho giai đoạn này.)*
> - **Kênh nào trước?** Discord rẻ hơn nhiều (chỉ cần webhook) → nên làm Discord trước, Email sau.
> - **Chạy ở đâu?** pg_cron vs GitHub Actions cron vs worker 24/7.
> - **Chống gửi trùng:** cần cột/bảng đánh dấu "đã gửi nhắc" (vd `reminder_sent_at`) để khỏi spam mỗi lần quét.
> - **Mốc nhắc:** trước phỏng vấn bao lâu (1 ngày? buổi sáng cùng ngày?); đơn "để lâu" là bao nhiêu ngày không đổi trạng thái.
> - **Liên quan F2** ("Email báo khi đánh giá xong") — cùng cần hạ tầng email, nên gộp làm một đợt.

## Cụm D — Khám phá việc / kết nối (bets lớn hơn)

| ID | Tính năng | Lợi ích tính năng mang lại cho người dùng | Công sức | Độ ưu tiên | Ghi chú |
|---|---|---|---|---|---|
| D1 | So nhiều JD cho 1 CV | Dán/lưu vài JD, app xếp hạng "vị trí nào hợp bạn nhất" — chọn nơi đáng đầu tư công sức | 🟡 | Trung bình | Tái dùng máy đánh giá |
| D2 | Gợi ý vị trí phù hợp | Hệ thống gợi ý tin tuyển dụng hợp với CV | 🔴 | Thấp | Cần crawl/API nguồn việc → rủi ro pháp lý |
| D3 | Tiện ích lưu JD từ trang tuyển dụng (extension) | Lưu JD vào app bằng 1 cú click ngay trên trang tuyển dụng, khỏi copy-paste | 🟡🔴 | Thấp | Phải xây extension/bookmarklet |

## Cụm E — Khu HR (ngoài gói "hoàn thiện demo" đã có trong BACKLOG)

| ID | Tính năng | Lợi ích tính năng mang lại cho người dùng | Công sức | Độ ưu tiên | Ghi chú |
|---|---|---|---|---|---|
| E1 | Link công khai nhận CV | Ứng viên tự nộp CV qua link, hồ sơ đổ thẳng vào đợt xếp hạng — HR khỏi nhập tay | 🔴 | Thấp | Đụng RLS / quyền riêng tư — cần cẩn trọng |
| E2 | Ghi chú & tag tay của HR | HR ghi nhận xét riêng đặt cạnh điểm AI — kết hợp AI + đánh giá con người | 🟡 | Trung bình | |
| E3 | Mẫu email mời / loại ứng viên | Soạn nhanh email phản hồi ứng viên, khép kín quy trình tuyển dụng | 🟡 | Thấp | |

## Cụm F — Nền tảng / niềm tin (xuyên suốt, hợp "minh bạch")

| ID | Tính năng | Lợi ích tính năng mang lại cho người dùng | Công sức | Độ ưu tiên | Ghi chú |
|---|---|---|---|---|---|
| F3 | "Vì sao có điểm số này" — trực quan hóa cách tính | Hiểu rõ điểm tổng được tính thế nào (trọng số 6 nhóm) — tin tưởng kết quả, đúng tinh thần minh bạch | 🟢🟡 | Cao | **✅ ĐÃ XONG 22/06/2026**. Nút "Vì sao có điểm số này?" trong Hero → bảng Nhóm·Điểm·Trọng số·Điểm % quy đổi (88% × 25% = 22%) + Tổng ≈ điểm tổng. Chỉ bày dữ liệu đã có |
| F1 | Xuất kết quả đánh giá ra PDF đẹp | Lưu/gửi báo cáo đánh giá dạng file chuyên nghiệp | 🟡 | Trung bình | |
| F2 | Email báo khi đánh giá xong | Worker chạy lâu — được báo qua email khi xong, khỏi ngồi chờ | 🟡 | Trung bình | Cần dịch vụ gửi mail |
| F5 | i18n tiếng Anh | Dùng được bằng tiếng Anh — mở rộng tệp người dùng | 🟡🔴 | Trung bình | Đã định "phase sau" |
| F4 | Chia sẻ kết quả qua link công khai (chỉ xem) | Khoe / nhờ người khác xem kết quả đánh giá không cần đăng nhập | 🟡🔴 | Thấp | Đụng quyền riêng tư |

---

## 🎯 Tóm tắt ưu tiên (gợi ý)

- **Nên làm sớm (Cao):** A1, A2, A3, B1, B2, C3, F3 — đòn bẩy cao, phần lớn tái dùng đồ đã có, đúng North Star.
- **Cân nhắc (Trung bình):** A4, A5, C5, D1, E2, F1, F2, F5.
- **Để sau / tham vọng / rủi ro cao (Thấp):** A6, B7, C4, C6, D2, D3, E1, E3, F4.

> **Cảnh báo quyền riêng tư:** D2, E1, F4 đụng tới chia sẻ dữ liệu / hồ sơ người khác — phải rà RLS & mô hình riêng tư trước khi làm.
