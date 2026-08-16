# 📋 Backlog tính năng — Đánh giá độ phù hợp CV ↔ JD

> **Mục đích:** bản kê khai tính năng của sản phẩm, tổ chức theo **Module → Màn hình → Tính năng**. Đây là **nguồn sự thật về "web có những gì"** để sau này viết tài liệu **US / BRD / SRS**.
>
> **Phân vai tài liệu (đừng lẫn):**
>
> - **File này (BACKLOG)** = *CÁI GÌ* — liệt kê tính năng, trạng thái làm xong, chỗ muốn nâng cấp.
> - **`CAU-CHUYEN-SAN-PHAM.md`** = *TẠI SAO* — lý do/bối cảnh ra đời mỗi tính năng (đưa lý do vào đó, không đưa vào đây).
> - **`CONTEXT.md`** = *GỌI LÀ GÌ* — từ điển thuật ngữ chuẩn.
> - **`docs/adr/`** = *quyết định kiến trúc lớn*; **`docs/grill/`** = *nhật ký chốt thiết kế từng tính năng*.
>
> **Chú thích trạng thái:**
> `✅` đã có & đang chạy · `⬜` chưa làm · `🔧` muốn nâng cấp (đã pick) · `🧪` đang làm/đang test
>
> **Quy ước cập nhật:** làm xong tính năng nào thì đổi sang `✅`; muốn nâng cấp thì đổi sang `🔧` và mô tả mong muốn ở mục "Ý tưởng nâng cấp" cuối file.

_Cập nhật lần cuối: 2026-07-30 — rà UX/UI màn Tổng quan: sửa 2 lỗi (rò style vào thẻ chỉ số, màu Pipeline viết cứng), thêm 4 việc vào "Ý tưởng nâng cấp" (tương phản badge bản sáng, `--muted-2`, thang 4px, chạy nốt test case)._

_2026-07-28 — thêm ✅ "Dán LINK tin tuyển dụng → tự bóc nội dung vào ô JD" (MH 2.1, đã code); [Góp ý] dời migration sang `schema-v17.sql`._

_2026-06-22 — thêm A3 (Từ khóa ATS), F3 (Vì sao có điểm số này), B1 (Tạo thư xin việc — MH 2.4), rule mật khẩu màn đăng nhập._

---

## Module 1 — Xác thực & Tài khoản (Auth)

### MH 1.1 — Đăng nhập / Đăng ký (`/login`)

- ✅ Đăng nhập bằng Email + Mật khẩu
- ✅ Đăng ký tài khoản mới (gửi email xác nhận)
- ✅ Quên mật khẩu (gửi email đặt lại)
- ✅ Đăng nhập với Google (OAuth)
- ✅ Chuyển qua lại giữa 3 chế độ: đăng nhập / đăng ký / quên mật khẩu
- ✅ **Rule nhập + báo lỗi tại trường (2026-06-22)** — tắt tooltip mặc định tiếng Anh của trình duyệt (`noValidate`), thay bằng **lỗi đỏ đậm ngay dưới ô** (tiếng Việt, tự ẩn khi gõ lại). Email: bắt buộc + đúng định dạng. Mật khẩu: bắt buộc + tối thiểu 6 ký tự; **khi ĐĂNG KÝ** thêm: ≥1 chữ hoa + ≥1 số + ≥1 ký tự đặc biệt + không khoảng trắng (đăng nhập KHÔNG ép rule mạnh để khỏi khóa tài khoản cũ). Tự **xóa khoảng trắng đầu/cuối**. **Nút con mắt 👁️** hiện/ẩn mật khẩu. Đăng nhập sai → thông báo thân thiện + **gợi ý Google** ("email này có thể đăng nhập bằng Google / dùng Quên mật khẩu để tạo mật khẩu riêng"). Song ngữ vi/en.
- ✅ **Hiệu ứng "lung linh" cột trái (ambient liên tục)** — đốm sáng trôi chậm + gradient breathing + lưới sao lấp láy (chấm CSS nhấp nháy lệch nhịp) + glow khẽ ở headline/icon + 3 điểm giá trị (icon morph emoji→vòng xoay→✓) + headline "Trợ lý ứng tuyển bằng AI"; nền sáng giảm tông; tôn trọng `prefers-reduced-motion`. **ĐÃ CODE vào app thật 2026-06-18 (Phase 0 — FLOW 14)**: `matching-web/app/login/page.tsx` + `globals.css`, logo vào `public/`, build PASS. *(Chốt qua grill 2026-06-18; mockup gốc `mockup/login.html`.)*

### MH 1.2 — Phiên đăng nhập (xuyên suốt mọi trang)

- ✅ Đăng xuất (nút ở góc trên)
- ✅ Tự chặn người chưa đăng nhập vào `/dashboard`, `/match`, `/hr` (middleware)
- ✅ Phân quyền admin (đọc `profiles.is_admin`) — quyết định hiện "Khu HR"
- ✅ **Menu điều hướng mobile (2026-06-22)** — dưới 880px sidebar ẩn nên thêm **nút ☰** ở header mở **drawer trượt từ trái** chứa đúng các mục điều hướng (Tổng quan/Đánh giá/Lịch sử/Quản lý ứng tuyển + Khu HR nếu admin). Đóng khi: bấm 1 mục, bấm nền mờ, nhấn Esc, hoặc đổi trang. Tái dùng list `NAV` + class `nav-item` sẵn có (`AppShell.tsx`). *(Trước đó mobile mất hẳn menu — chỉ điều hướng được bằng gõ URL.)*

---

## Module 2 — Đánh giá độ phù hợp CV ↔ JD (ứng viên tự đánh giá)

### MH 2.1 — Trang chính / Dashboard (`/dashboard`)

**🔄 Cập nhật 2026-06-19 (ĐÃ CODE + push + build PASS) — phần này ĐÈ mô tả 2026-06-18 bên dưới:**
- ✅ **Thông điệp 4 trường hợp** (`docs/grill/2026-06-19-thong-diep-cta-tong-quan.md`): Mới · đã đánh giá-chưa-đơn · có đơn ít · có đơn nhiều. H1 mọi mode "Chào [tên], hôm nay bạn muốn chinh phục vị trí nào?", riêng **người mới = "Chào mừng [tên], đã đến với AnalyzeCV!"**. **Cặp CTA cố định** (Đánh giá CV ngay + Thêm đơn ứng tuyển) ở MỌI mode; bỏ nút Thêm đơn trùng ở thanh Bảng điều khiển/thẻ đơn.
- ✅ **5 thẻ chỉ số** (thêm "% phù hợp thấp nhất"); hint bỏ "CV ↔ JD" → "đánh giá độ phù hợp". Trần **Thư viện CV 5→10**.
- ✅ **"Tổng quan ứng tuyển" (Pipeline Kanban)** cho người có đơn (ít & nhiều dùng CHUNG layout): 4 cột trạng thái, mỗi cột ≤3 đơn + "+N đơn khác"; **% badge pill** góc phải (cột bằng nhau `minmax(0,1fr)`, tên dài "…", tooltip khi bị cắt); chưa đánh giá → "Chưa đánh giá", cột rỗng → "Chưa có đơn"; tiêu đề nằm TRONG card (giống "Lượt đánh giá gần đây").
- ✅ **Hiệu ứng người mới** (kỷ luật, tắt khi `prefers-reduced-motion`): câu chào **gõ chữ** (gradient + con trỏ phát sáng + ✨), thẻ onboarding/5 thẻ/recent **trượt vào lần lượt**, ô (1) **pulse**, nút hồ sơ mẫu **thở + nam châm + ⚡**, empty-state **radar quét**. Người có-đơn: 5 thẻ hover nhấc + các khối trượt vào.
- ✅ **Card pipeline → Quản lý ứng tuyển + quét sáng dòng (AI Scanline Fade)** — `docs/grill/2026-06-19-highlight-dong-don-tu-dashboard.md`.
- 🔤 Thuật ngữ chuẩn: **"Lượt đánh giá"** (KHÔNG dùng "Lần đánh giá") — `CONTEXT.md`. Chi tiết hiệu ứng: 2 grill doc 2026-06-19.

**Định hướng UI & thông điệp (chốt grill 2026-06-18 — mockup-chưa-code):**

- ✅ **Tổng quan = bàn làm việc + tóm tắt số liệu.** Thứ tự khối: tiêu đề+CTA → thẻ chào mừng (nếu mới) → **4 thẻ số liệu** → Lần đánh giá gần đây.
- ✅ **4 thẻ số liệu:** Số lần đánh giá · Đơn đang theo dõi · % phù hợp cao nhất · CV trong Thư viện (trạng thái rỗng vẫn hiện, số 0/— + câu dẫn dắt).
- ✅ **Thông điệp cá nhân hóa:** luôn gọi tên ("Chào Phương,") + luôn kèm CTA. Cặp **Chính "Đánh giá CV ngay" (đậm) + Phụ "Thêm đơn ứng tuyển" (nhạt)** giữ ở **mọi trạng thái** (kể cả người mới — vì 2 trụ phân tích + quản lý đơn ngang nhau), chỉ headline/sub đổi theo dữ liệu. *Bác chữ "Tối ưu CV / chấm điểm / quét độ khớp" do nói quá + lệch glossary (ADR-0006).* nguyên tắc giọng: `docs/NOI-DUNG-TRANG-CHU.md` §0.
- ✅ **Thông điệp đầu màn — bản gọn** *(ĐÃ CODE 2026-06-18, tsc pass, đã push):* Headline luôn là **"Chào [họ tên],"** + cặp CTA cố định (Chính "Đánh giá CV ngay" + Phụ "Thêm đơn ứng tuyển"). **Người mới** (chưa Hoàn tất lần đánh giá nào) có thêm **dòng phụ onboarding** + **Thẻ chào mừng 3 bước**. **Người đã có dữ liệu: CHỈ chào theo họ tên**, KHÔNG kèm dòng phụ đếm số liệu. *(Đã từng thiết kế "máy trạng thái 4 bước" đếm đơn/lần đánh giá nhưng **BỎ**: đếm theo "đơn" hay "lần đánh giá" đều dễ gây hiểu nhầm khi điểm của đơn có thể chưa cập nhật — thiếu đường "đánh giá lại bằng CV mới trên đơn". Lý do đầy đủ + gap còn mở: `docs/grill/2026-06-18-trang-thai-thong-diep-tong-quan.md`.)* Tag trên đơn + pipeline board KHÔNG thuộc Tổng quan. Code: `matching-web/app/dashboard/page.tsx`.

**Onboarding (chào mừng người dùng mới):**

- ✅ **Thẻ chào mừng "3 bước"** ở đầu dashboard (① tải/dán CV → ② dán JD → ③ Đánh giá) — **chỉ hiện khi chưa có lần đánh giá nào**, tự ẩn khi đã bắt đầu; không lưu trạng thái/không đụng DB (component tự-chứa `WelcomeCard`, xem `docs/grill/2026-06-14-onboarding-ung-vien-hr.md`)
- ⬜ **"Welcome Kit" — thẻ dẫn-lối sau lần đánh giá THẬT đầu tiên (ý tưởng, làm sau — cần grill):** sau confetti (giữ confetti auto, KHÔNG bắt click), hiện một thẻ "hộp quà trợ lý" *giao giá trị* — quick-start dẫn việc tiếp theo (vd: ① Lưu CV ② Đọc 6 nhóm ③ Đánh giá JD thật) để user mới không bị "thả vào màn đầy số liệu mà không biết làm gì". KHÔNG phải reskin confetti. Nhánh cần chốt khi grill: trong thẻ có gì · auto hiện hay click mở · bắn ở lần-thật (đề xuất) hay cả mẫu · quan hệ với CTA "Đánh giá CV thật" + confetti đang có. (Bắt nguồn từ phiên 2026-06-18; xem `docs/grill/2026-06-18-trai-nghiem-danh-gia-lan-dau.md`.)
- ✅ **Trải nghiệm lần đánh giá đầu — "Thử với hồ sơ mẫu" (chốt grill 2026-06-18, chưa code):** giảm ma sát cho user mới (tay không có CV/JD). Tự điền **CV+JD mẫu ngành IT (2-3 vai trò)** → bấm là **hiện kết quả mẫu dựng sẵn tức thì** (không worker, không tốn lượt, **không** tạo Lần đánh giá thật). Điểm chạm: thẻ chào mừng + banner màn Đánh giá. Trang kết quả mẫu: nhãn "MẪU" + tooltip dẫn đọc 6 nhóm + CTA "Đánh giá CV thật" + confetti (riêng, KHÔNG tiêu cờ confetti lần-thật). Thuật ngữ [Hồ sơ mẫu] đã vào CONTEXT.md. Chi tiết: `docs/grill/2026-06-18-trai-nghiem-danh-gia-lan-dau.md`.

**Form "Đánh giá mới":**

- ✅ Nhập "Vai trò nhắm tới" (tùy chọn)
- ✅ **Thư viện CV** (tối đa 5): lưu nhiều CV (file + text), chọn 1 làm **mặc định** (radio) → tự nạp khi mở màn hình; [Xem]/[Xóa]; tải CV mới + tùy chọn "Lưu vào thư viện" (không lưu = đánh giá một lần) — cần `schema-v6.sql` (xem `docs/grill/2026-06-13-cv-mac-dinh.md`)
- ✅ Tải CV (PDF) lên → tự động **Bóc chữ** đổ vào ô Text CV
- ❌ ~~**Dọn CV** thủ công bằng AI~~ — **ĐÃ GỠ HẲN (2026-06-18)** theo yêu cầu user: bỏ nút + worker `runCleanup`/prompt + kind `cleanup` + thuật ngữ glossary. CV text thô đưa thẳng vào đánh giá (vẫn chính xác).
- ✅ Sửa Text CV trực tiếp / dán text tay (không bắt buộc dùng PDF)
- ✅ Dán JD (nội dung tin tuyển dụng)
- ✅ **Dán LINK tin tuyển dụng → tự bóc nội dung vào ô JD (chốt grill + ĐÃ CODE + KIỂM TAY XONG 2026-07-28; `schema-v16.sql` đã chạy)** — ô link + nút "Lấy nội dung" ngay trên ô JD; hệ thống tải trang và đổ text vào **chính ô JD** để user xem/sửa rồi mới Đánh giá (**không** tự chấm — mắt user là chốt kiểm cuối, giữ luật không bịa), kèm dòng nhắc "nội dung do hệ thống tự đọc từ [trang]" + cảnh báo khi text ngắn bất thường. Chạy trên **web (`/api/fetch-jd`, Vercel)** — **không đụng worker**, không cần bật laptop; làm sạch HTML bằng thư viện tách nội dung chính, **không gọi Claude**. Thử mọi link nhưng **LinkedIn/Indeed/Facebook báo ngay, không tải**. **Tôn trọng `robots.txt`** (đọc lúc chạy, khai danh tính thật) — khảo sát 2026-07-28: TopCV/ITviec/VietnamWorks **đều cho phép** đọc trang tin, chỉ LinkedIn cấm bằng điều khoản. Lỗi chia **3 nhóm theo việc user cần làm** (sửa link / dán tay / thử lại), có gọi tên trang. Lưu `match_jobs.jd_url` → khi "Lưu vào Quản lý ứng tuyển" thì **tự điền `jd_link` + đoán `platform`** từ tên miền, trang kết quả thêm "Xem tin gốc". Ngoài phạm vi: form Đơn ứng tuyển · nhiều link cùng lúc · Khu HR. Bóc chủ yếu qua khối **JSON-LD `JobPosting`** trang tự nhúng cho Google for Jobs (sạch, không cần thư viện) — đo thật: ITviec 7.976 ký tự, TopCV 3.268 ký tự. Chi tiết + phương án bị loại: `docs/grill/2026-07-28-dan-link-jd.md`.
- ✅ Bấm "Đánh giá" ngay được trên text thô, không phải đợi dọn → tạo lần đánh giá → sang trang kết quả

**Danh sách "Lần đánh giá gần đây":**

- ✅ **Redesign thành thẻ trực quan (chốt grill 2026-06-18 — mockup-chưa-code):** bỏ bảng → **5 thẻ** hàng ngang (vòng tròn % donut màu đèn tín hiệu + nhãn độ phù hợp + công ty/vị trí + CV đã dùng + vai trò nhắm tới + trạng thái + ngày), chỉ-xem, có link "Xem tất cả lịch sử →". Thẻ "Đang đánh giá" hiện donut xám "…". Glossary cập nhật 20→5. Chi tiết: `docs/grill/2026-06-18-lan-danh-gia-gan-day.md`.
- ✅ Hiện 20 lần đánh giá gần nhất (vai trò, ngày giờ, % độ phù hợp, trạng thái) *(bản bảng cũ — sẽ thay khi áp redesign thẻ ở trên)*
- ✅ Link mở chi tiết từng lần đánh giá
- ✅ Điều hướng: sang Quản lý ứng tuyển / Khu HR (nếu admin)

### MH 2.3 — Lịch sử đánh giá (`/history`)

- ✅ Liệt kê toàn bộ lần đánh giá (`kind=match`) của user, mới nhất lên đầu; **ID số thứ tự 3 chữ số** (tính ở giao diện)
- ✅ Cột: ID · Trạng thái · % Độ phù hợp · Công ty · Vị trí · **File CV (bấm mở PDF gốc)** · Ngày đánh giá (dd/mm/yyyy hh:mm) · Thao tác
- ✅ Lưu **file CV mỗi lần đánh giá** (`match_jobs.cv_file_*`, bucket `cvs`/`applications`) — cần `schema-v7.sql`
- ✅ Tìm (công ty/vị trí); lọc **Trạng thái / Vị trí / Tên file / Ngày đánh giá (chặn tương lai) / % độ phù hợp (≥ = ≤ + số nguyên, ràng [0–100]: chặn âm/thập phân/chữ, >100 báo lỗi đỏ)**; kết hợp VÀ
- ✅ Phân trang (≥20; 20/50/75/100); Xem chi tiết; ~~Xóa~~ *(app thật hiện còn nút Xóa — sẽ GỠ theo quyết định mới bên dưới)*
- ✅ Link "Xem tất cả lịch sử" + "Lịch sử đánh giá" trên Dashboard
- (xem `docs/grill/2026-06-13-quan-ly-lich-su-cham.md`)
- 🧪 **Đồng bộ style theo Quản lý ứng tuyển** *(mockup `history.html` xong 2026-06-17 — CHƯA code app; xem `docs/grill/2026-06-17-lich-su-dong-bo-style-quan-ly-ung-tuyen.md`)*:
  - Gói **bộ lọc + bảng + phân trang trong 1 thẻ `module-card`**; thanh lọc gọn (`fdrop` 30px + ô tìm 40px + **spacer đẩy "Xóa lọc" sang phải**); **bảng header dính + cuộn riêng**; **phân trang** kiểu "trang trái · *Hiển thị [N▾] / tổng* phải" (cỡ **20/30/50/100**).
  - **Thẻ thống kê theo dải [Mức độ phù hợp]**: Tổng · Phù hợp tốt (75–100) · Khá phù hợp (50–74) · Phù hợp thấp (0–49); 3 dải chỉ đếm lần đã có điểm.
  - **Subtitle in nghiêng** ở đầu trang; **không** cụm nút (Lịch sử chỉ-đọc).
  - **GỠ nút Xóa** — Lịch sử là **sổ ghi, không cho xóa**. Cột Thao tác chỉ còn "Xem kết quả ›" / nhãn xử lý / "Đánh giá lại".
  - Đổi CONTEXT.md: **màu dải [Mức độ phù hợp] áp cho cột "Độ phù hợp" trong bảng + thẻ thống kê** (trước chỉ ở trang kết quả).

### MH 2.2 — Kết quả đánh giá (`/match/[id]`)

- ✅ Tự cập nhật khi worker đánh giá xong (đang đánh giá thì hiện trạng thái) + **đếm số giây đã chờ**
- ✅ **Cảnh báo khi worker chưa nhận job sau 20 giây** (nghi worker chưa chạy) — vẫn tự tiếp tục khi worker bật lại, không treo vô tận
- ✅ Điểm tổng **% độ phù hợp** + thanh tiến trình
- ✅ Phân tích theo **6 nhóm tiêu chí** (điểm + ghi chú mỗi nhóm)
- ✅ Liệt kê **Điểm mạnh** và **Điểm còn thiếu (gap)**
- ✅ **Gợi ý cải thiện** độ phù hợp
- ✅ **Tips phỏng vấn**
- ✅ **Card "🔑 Từ khóa ATS" (A3 — chốt grill-with-docs 2026-06-22)** — AI trích 6–12 token kỹ năng/công nghệ CÓ THẬT trong JD (`keywords:{term,inCv}[]`, không bịa), gắn cờ **Có/Thiếu** (nhận diện theo nghĩa: React=ReactJS). Card chip ❌ Thiếu (đỏ, lên trước) + ✅ Có (xanh) + dòng đếm "JD có 8 · CV có 5 · thiếu 3". Sau khối Mạnh/Thiếu, trước Gợi ý cải thiện. **Chỉ ứng viên** (HR pending); ẩn ở lượt đánh giá cũ (không có trường). Hồ sơ mẫu đã gài sẵn để test. Thuật ngữ trong CONTEXT.md.
- ✅ **Nút "Vì sao có điểm số này?" (F3 — 2026-06-22)** — trong Hero, mặc định thu gọn; mở ra bảng *Nhóm · Điểm · Trọng số · Điểm % quy đổi* (88% × 25% = 22%) + dòng Tổng ≈ điểm tổng. Biến "tổng có trọng số" thành phép tính kiểm chứng được; chỉ bày dữ liệu sẵn có, không đụng AI/worker. Chạy cả lượt thật lẫn hồ sơ mẫu.
- ✅ **Nút "✍️ Tạo thư xin việc" (B1 — 2026-06-22)** — chỉ ứng viên; tạo job `cover_letter` từ CV+JD lượt này → trang `/cover/[id]` (xem MH 2.4).
- ✅ **Nút "⬇ Xuất PDF" (2026-07-09)** — xuất kết quả đánh giá ra PDF bằng **in trình duyệt** (`window.print()` + `@media print` trong `globals.css`), không thêm thư viện. In ẩn khung app (header/sidebar/thanh nổi/nút bấm/confetti/khối CV-JD gốc), ép nền SÁNG chữ ĐEN dù đang xem mode Tối, tránh cắt thẻ giữa 2 trang. Có ở **cả ứng viên lẫn HR**; nội dung PDF = toàn bộ kết quả (donut+radar SVG, 6 nhóm, mạnh/thiếu, từ khóa ATS, gợi ý, tips, thông tin công việc). Đã kiểm layout in bằng Playwright trên `/sample/frontend`.
- ✅ **Thẻ "Thông tin công việc (từ JD)"** — AI trích **Công ty / Vị trí / Mức lương / Yêu cầu chính** từ JD (gộp trong lần đánh giá, không tốn lần gọi thêm; không bịa — xem `docs/grill/2026-06-13-ai-trich-xuat-jobinfo.md`). *(Card "Thông tin công ty" riêng đã bỏ 2026-06-14 — thông tin công ty giờ nằm trong card này; `companyInfo` vẫn được dùng ngầm để auto-fill ô Công ty khi lưu đơn.)*
- ✅ Nút "💾 Lưu vào Quản lý ứng tuyển" — popup "Thêm job" **tự điền**: Vị trí/Công ty/Mức lương/Yêu cầu chính (ưu tiên `jobInfo` từ JD, dự phòng vai trò đã gõ), **JD nội dung đầy đủ** (nguyên văn), Trạng thái mặc định "Sắp ứng tuyển", gắn link lần đánh giá (xem `docs/grill/2026-06-13-autofill-them-job.md`)
- ✅ Hiển thị lỗi rõ ràng nếu đánh giá thất bại + **nút "↻ Đánh giá lại"** (tạo lại lần đánh giá từ chính CV + JD cũ, giữ file CV + `batch_id` cho job HR — khỏi nhập lại)
- ✅ **Hiệu ứng pháo hoa giấy (confetti) nhiều màu nổi bật** (thương hiệu tím–xanh + vàng/hồng/xanh lá/cam tương phản để không chìm trên nền tối) — bắn MỘT LẦN khi người dùng đánh giá xong **lần đầu tiên** (chế độ ứng viên), không lặp lại (chặn bằng cờ localStorage **gắn theo từng tài khoản** `..._<user_id>` + kiểm "đúng là lần done đầu"). Thư viện `canvas-confetti`. *(Cờ theo tài khoản: mỗi user mới đều được ăn mừng, kể cả trên trình duyệt đã từng bắn cho user khác.)*

#### Điều hướng màn kết quả (chốt 2026-06-17 — xem `docs/grill/2026-06-17-dieu-huong-man-ket-qua-danh-gia.md`)

- ✅ Một màn dùng chung `/match/[id]` cho cả processing + kết quả, mọi luồng — **không tách màn** (1 *Lần đánh giá* = 1 thực thể).
- ✅ **Nút "back" theo ngữ cảnh `?from`** *(ĐÃ CODE 2026-06-17, tsc pass)* — `dashboard`→Trang chính · `applications`→Đơn ứng tuyển · `history`→Lịch sử · (thiếu)→Trang chính (mặc định). Bảng `BACK` + đọc `searchParams.from` ở `match/[id]/page.tsx`. *(Khu HR tạm chưa gắn `?from` — đang pending; back từ chi tiết ứng viên về mặc định.)*
- ✅ **Chip "Thuộc đơn: Vị trí — Công ty"** *(ĐÃ CODE 2026-06-17)* — **suy từ dữ liệu** (query `applications` có `match_job_id` = job hiện tại, server-side, RLS own-rows); bấm chip → `/applications`. **Ẩn chip khi `?from=applications`** (đến từ Quản lý ứng tuyển đã biết thuộc đơn + có nút back "‹ Đơn ứng tuyển" → thừa); chip chỉ hiện khi gắn đơn VÀ mở từ nơi khác (vd Lịch sử). Class `.apply-chip` trong `globals.css`.
- ✅ **Ẩn nút "Lưu vào Quản lý ứng tuyển" khi đã thuộc đơn** *(ĐÃ CODE 2026-06-17)* — gắn theo **dữ liệu** (`linkedToApplication` truyền vào `ResultView`), tránh tạo đơn trùng, kể cả mở từ Lịch sử.
- 🧪 **Ngữ cảnh `assess` — back về màn "AI đánh giá độ phù hợp" (stepper)** *(mockup xong 2026-06-17 — CHƯA nối app)* — đánh giá từ màn stepper thì back về **chính màn đó**, không về Tổng quan. Mockup: `cham-diem.html` đẩy `?from=assess`, `match-result.html` map `assess → cham-diem.html`. App thật chưa nối vì form đánh giá còn nằm trong `/dashboard`; **sẽ nối khi redesign #1 tách màn đánh giá thành route riêng** (push `?from=assess` + thêm `assess` vào bảng `BACK`).
- 🧪 **Lướt nhanh Lịch sử trên màn Kết quả** *(mockup `match-result.html` xong 2026-06-17 — CHƯA code app)* — khi mở từ Lịch sử (`?from=history`): hiện **ID + Ngày đánh giá** + cụm **‹ Trước / Sau › + chỉ số "3/10"** để lướt giữa các lần đánh giá **không cần back ra danh sách**. Trước/Sau theo **đúng danh sách đang xem** (giữ lọc + sắp xếp); **khóa nút ở 2 đầu**; **chỉ hiện khi `?from=history`**. KHÔNG tạo route mới (giữ "1 màn dùng chung"). App thật cần mang danh sách ID đã lọc+sắp xếp sang màn Kết quả. Đồng thời đồng bộ **style số % cột Độ phù hợp** ở Lịch sử cho giống màn Quản lý ứng tuyển (đậm cỡ thường + tô màu dải).
- 🧪 **Mục "Nội dung đã đánh giá" (CV ¦ JD) ở cuối màn Kết quả** *(mockup xong 2026-06-17 — CHƯA code app; xem `docs/grill/2026-06-17-xem-lai-cv-jd-tren-man-ket-qua.md`)* — để xem lại từ Lịch sử (hay đâu cũng được) là biết "kết quả này so giữa CV nào ↔ JD nào", không phải mở tab khác. **2 cột cạnh nhau, mỗi cột cuộn riêng**: trái = **CV** (`cv_text` đúng chữ AI đọc + link "Mở CV gốc (PDF)" khi có file), phải = **JD** (`jd_text` toàn văn). Chỉ hiện khi **Hoàn tất**; **chế độ ứng viên** (`kind=match`) — **Khu HR PENDING**. Dữ liệu có sẵn trong `match_jobs`, chỉ bày ra (không đụng DB/worker).
- 🧪 **Trạng thái stepper khi back về màn "AI đánh giá"** *(mockup xong 2026-06-17)* — back về thì stepper hiện **đủ 4 bước "Đã xong"** (lần đánh giá đã hoàn tất); **TRỪ KHI** user **xóa/sửa CV hoặc JD** → các bước **tự lùi** về "Chưa bắt đầu"/"Đang thực hiện" cho đúng (thiếu CV → tất cả "Chưa bắt đầu"; thiếu JD → "Kết nối JD" Đang thực hiện; đủ CV+JD nhưng đã sửa → "AI đánh giá" Đang thực hiện). Mockup: lưu **ảnh chụp CV+JD lúc đánh giá** qua `sessionStorage`, back về khôi phục + so khớp. App thật: suy từ dữ liệu (CV/JD đã lưu + đã có Lần đánh giá `done`).

### 🎯 Cách AI đánh giá — phương pháp & thang điểm (câu nhà tuyển dụng hay hỏi)

> *Giải thích "AI đánh giá dựa trên điều kiện gì, chia thang điểm ra sao". Cấu hình thực tế nằm trong prompt `matching-worker/src/prompt.ts`; lý do nghiệp vụ ở Câu chuyện sản phẩm §6.*

- ✅ **Đánh giá dựa trên đâu:** CHỈ dựa trên nội dung **CV + JD được cung cấp** — không dùng kiến thức ngoài, **không bịa**. Đánh giá theo **ý nghĩa** (hiểu ngữ nghĩa) chứ không so khớp từ khóa máy móc; **công nhận kỹ năng đồng nghĩa/tương đương** (vd "ReactJS"="React"; 3 năm Java có giá trị cho vị trí "Spring") — nhưng "tương đương" được ghi nhận **một phần** và nêu rõ khoảng cách.
- ✅ **Đánh giá theo đúng 6 nhóm cố định:** ① Kỹ năng chuyên môn cốt lõi (co giãn theo vai trò) · ② Công cụ & Công nghệ · ③ Phương pháp & Quy trình · ④ Kiến thức Domain · ⑤ Kỹ năng mềm & Giao tiếp · ⑥ Kinh nghiệm & Vai trò. **Cố định** để so sánh được giữa các lần đánh giá và giữa các ứng viên.
- ✅ **Thang điểm 0–100 có mốc rõ (dùng hết dải):** `0–39` thiếu/không khớp rõ rệt · `40–59` khớp một phần · `60–79` khá khớp · `80–100` rất khớp (có bằng chứng trong CV). Mỗi nhóm có **ghi chú bám bằng chứng**: "JD yêu cầu X — CV thể hiện Y".
- ✅ **Điểm tổng (overallMatch) = tổng CÓ TRỌNG SỐ của 6 nhóm theo % cố định** (không phải trung bình cộng), tính theo công thức rồi làm tròn:
  - ① Chuyên môn cốt lõi **25%** · ⑥ Kinh nghiệm & Vai trò **20%** · ② Công cụ & Công nghệ **15%** · ③ Phương pháp & Quy trình **15%** · ④ Kiến thức Domain **15%** · ⑤ Kỹ năng mềm & Giao tiếp **10%** (tổng 100%).
  - Vì ① và ⑥ nặng nhất → CV mạnh kỹ năng mềm nhưng yếu chuyên môn lõi & kinh nghiệm thì điểm tổng vẫn thấp.
- ✅ **Triết lý: nghiêm khắc & trung thực** — đánh giá đúng thực lực, không thổi điểm; nêu gap thẳng thắn; CV lệch ngành / JD thiếu thông tin thì cho điểm **thấp một cách trung thực**. (Đúng điểm khác biệt "minh bạch + trung thực" so với incumbent.)
- ✅ Con số luôn kèm lưu ý **"mang tính tham khảo, không tuyệt đối"**.

> Áp dụng cho cả chế độ ứng viên tự đánh giá và Khu HR (xếp hạng). Worker chạy local nên **đổi prompt có hiệu lực khi mở lại worker**.

### MH 2.4 — Thư xin việc (`/cover/[id]`) — B1, chốt grill 2026-06-22

- ✅ **Tạo thư xin việc bằng AI** — `kind: "cover_letter"` mới trong `match_jobs` (tái dùng hàng đợi/poll/worker); `runCover` trả `{ coverLetter: {greeting, paragraphs[], closing} }` (KHÁC `MatchResult`, không tính là Lượt đánh giá). Cần `schema-v12.sql` nới CHECK `kind`.
- ✅ **2 điểm vào:** (1) trang kết quả đánh giá (nút "✍️ Tạo thư xin việc") → `/cover/[id]`; (2) một Đơn ứng tuyển (nút ✍️, đọc CV đính kèm + `jd_text`) → `/cover/[id]?app=` để lưu vào `cover_letter_text`.
- ✅ **Trang `/cover/[id]`:** poll tới khi xong → hiển thị thư theo **đoạn** (read) ↔ **textarea** (sửa) → **Sao chép / Tải .txt** → (nếu có `?app=`) **Lưu vào đơn**. Thư viết theo `result_locale` (VI/EN).
- ✅ **Trung thực:** chỉ dùng dữ kiện CV/JD (công ty/vị trí từ `jobInfo`) + câu xã giao trung tính + **placeholder** `[Tên của bạn]`… cho chỗ thiếu, KHÔNG bịa.
- ⬜ HR: chưa làm (cover letter là tính năng ứng viên).
- ⬜ Lưu thư từ điểm vào (1) khi chưa thuộc đơn: hiện chỉ copy/tải; gắn vào đơn cần đi qua "Lưu vào Quản lý ứng tuyển" — có thể nâng cấp sau.

---

## Module 3 — Khu HR (nhà tuyển dụng — chỉ admin)

### MH 3.1 — Tạo đợt xếp hạng (`/hr`)

- ✅ Dán **1 JD** dùng chung cho cả đợt
- ✅ Thêm / xóa **nhiều ứng viên**, mỗi người dán text CV + đặt nhãn tên
- ✅ Bấm "Đánh giá & xếp hạng" → tạo đợt (mỗi ứng viên 1 lần đánh giá, chung `batch_id`)

### MH 3.2 — Kết quả xếp hạng (`/hr/[batchId]`)

- ✅ Tự cập nhật + hiện tiến độ "đang đánh giá x/y ứng viên"
- ✅ **Bảng xếp hạng** theo % giảm dần (#1, #2…), kèm điểm mạnh nổi bật
- ✅ Link xem chi tiết từng ứng viên
- ✅ Hiển thị ứng viên bị lỗi

### MH 3.3 — Chi tiết ứng viên (dùng chung `/match/[id]`)

- ✅ Đổi nhãn 2 mục theo góc nhìn nhà tuyển dụng ("Lưu ý khi đánh giá", "Câu hỏi gợi ý phỏng vấn")
- ✅ Mục "Thông tin chung ứng viên" (họ tên, chức danh, số năm KN, học vấn, kỹ năng, liên hệ)

---

## Module 4 — Quản lý ứng tuyển (Application Tracker)

### MH 4.1 — Danh sách đơn ứng tuyển (`/applications`)

> **Tiêu đề & phụ đề màn (copy thật):**
> **"Quản lý ứng tuyển thông minh"** — _"Nâng tầm hành trình tìm việc! Quản lý mọi hồ sơ tập trung tại một nơi và để AnalyzeCV phân tích và "chỉ đường" cho bạn đến với công việc phù hợp nhất!"_

- ✅ Thẻ thống kê tổng quan (**Tổng số đơn** = tất cả đơn trong danh sách gồm cả "sắp ứng tuyển"; sắp ứng tuyển, đã ứng tuyển, phỏng vấn, chờ kết quả, offer, từ chối) — *trước là "Tổng đã apply" (đếm ≠ sắp ứng tuyển), gây trùng nghĩa với "Đã ứng tuyển" → đổi 2026-06-14*
- ✅ Tìm kiếm theo công ty / vị trí / ghi chú
- ✅ **Lọc theo trạng thái — chọn nhiều giá trị** (dropdown checkbox; rỗng = tất cả)
- ✅ **Lọc theo nền tảng — chọn nhiều giá trị** (LinkedIn, TopCV, ITviec…; dropdown checkbox)
- ✅ **Lọc theo Ngày ứng tuyển** — **date-range picker** (chip mở popover: cột preset *Hôm nay / 7 / 14 / 30 / 90 ngày qua* + lịch 1 tháng; chọn **1 ngày HOẶC 1 khoảng**; **chặn ngày tương lai**; nhập tay **dd/mm/yyyy**). Chọn trong popover là **nháp**, chỉ áp dụng khi bấm **"Áp dụng"** hoặc **click ra ngoài** (Esc = đóng không áp dụng). Thay 2 ô `<input type=date>` cũ; vẫn dùng cột `date_applied` (đơn chưa có ngày bị loại khi bật lọc). Component `DateRangeFilter.tsx`; thiết kế Figma `47-2`/`142-84` (+ trạng thái mở `186-2`/`193-2`).
- ✅ **Lọc theo % độ phù hợp** (≥ / = / ≤ + số nguyên; **ô nhập % chỉ hiện sau khi chọn toán tử** — không để ô trống lủng lẳng; ràng **[0–100]**: chặn âm/thập phân/chữ ngay khi gõ, >100 hiện **lỗi đỏ "Chỉ từ 0 đến 100"** + tạm bỏ qua lọc %; lấy % từ lần đánh giá gắn vào đơn — đơn chưa đánh giá bị loại khi bật lọc) + nút **Xóa lọc** (xóa toàn bộ bộ lọc). Dùng component chung `PctFilter` với `/history` (xem `docs/grill/2026-06-14-loc-do-phu-hop.md`)
- ✅ Bảng danh sách đơn (công ty/vị trí, nền tảng, ngày ứng tuyển, trạng thái, độ phù hợp, lương) — *cột "Yêu cầu" đã bỏ khỏi bảng 2026-06-14 (vẫn lưu/sửa qua form); "Ngày apply" đổi nhãn → "Ngày ứng tuyển"*
- ✅ Đổi trạng thái nhanh ngay trên dòng (dropdown)
- ✅ **Đánh giá trực tiếp từ đơn** (đọc CV đính kèm + JD của đơn → tạo lần đánh giá → gắn lại vào đơn)
- ✅ **Tạo thư xin việc từ đơn (B1 — 2026-06-22)** — nút **✍️** ở cột hành động (cần CV đính kèm + JD): đọc CV → tạo job `cover_letter` → mở `/cover/[id]?app=` → sinh thư → **Lưu vào đơn** (`cover_letter_text`). Xem MH 2.4.
- ✅ **AI đánh giá đơn đã chọn** (chọn nhiều đơn qua checkbox, tối đa 20/lượt): CV của đơn nếu có, thiếu CV thì dùng CV mặc định, bỏ qua đơn thiếu JD / đã đánh giá; tiến trình hiện tại chỗ ("⏳ Đang đánh giá…", dải "Đang đánh giá X/N"), xong → % + Xem chi tiết (xem `docs/grill/2026-06-13-cham-hang-loat-don.md`)
  - ✅ Đơn **đã đánh giá** → checkbox **vô hiệu hóa** + **tooltip tự làm (CSS)** "Đơn ứng tuyển này đã được đánh giá" khi rê chuột (đặt bên phải, hiện ngay; class `.tip`/`.tip-bubble` trong globals.css). Xem `docs/grill/2026-06-14-tooltip-checkbox-da-cham.md`
- ✅ Hộp thoại "Chưa đủ thông tin để đánh giá" khi thiếu CV/JD: nếu thiếu CV (có JD) → **chọn CV trong Thư viện để đánh giá ngay** (mặc định chọn sẵn, gắn kết quả vào đơn, không đổi CV mặc định); thiếu JD / thư viện rỗng → Sửa đơn (xem `docs/grill/2026-06-13-cham-diem-tu-don-chon-cv.md`)
- ✅ Xem phân tích (link sang trang kết quả đánh giá)
- ✅ Mở JD link (tab mới)
- ✅ Sửa / Xóa đơn (có xác nhận khi xóa)
- ✅ **Export CSV** (xuất toàn bộ danh sách đã lọc, không cắt theo trang) — **tên cột + giá trị `status` localize** theo ngôn ngữ (VI hiện tại; EN khi có i18n); import hiểu cả nhãn Việt/Anh/khóa máy nên round-trip vẫn chạy (xem `docs/adr/0004`)
- ✅ **Import CSV (popup nâng cao)**: tải file mẫu, chọn file (kiểm ≤5MB + .csv), **preview tất cả cột + validate từng dòng** (✓/⚠ + lý do), import dòng hợp lệ + báo cáo lỗi chi tiết; thiếu company/position → bỏ qua dòng; status rỗng/sai → "Sắp ứng tuyển"; ngày nhận dd/mm/yyyy & yyyy-mm-dd (xem `docs/grill/2026-06-14-import-nang-cao.md`)
- ✅ **Phân trang**: hiện khi danh sách sau lọc ≥ 20 đơn; droplist 20/50/75/100 mỗi trang; mới nhất lên trên; reset về trang 1 khi đổi lọc (xem `docs/grill/2026-06-13-phan-trang-danh-sach.md`)
- ✅ Trạng thái rỗng (gợi ý thêm đơn đầu tiên)

### MH 4.2 — Thêm / Sửa đơn (modal)

- ✅ Trường: Công ty*, Vị trí*, Nền tảng, Trạng thái* (**tạo mới mặc định "Sắp ứng tuyển"**; chọn 1 giá trị), Ngày apply, Ngày phỏng vấn
- ✅ JD Link + JD nội dung đầy đủ (để đánh giá trực tiếp được)
- ✅ Mức lương, Yêu cầu chính, Ghi chú, Kết quả
- ✅ Đính kèm **file CV** (≤5MB · PDF/DOC/DOCX/TXT/MD)
- ✅ Cover letter (đính kèm file **hoặc** dán nội dung) — nội dung có thể **sinh bằng AI** (B1, xem MH 2.4) rồi lưu vào `cover_letter_text`

> **Phễu trạng thái đơn (7 trạng thái hiển thị):** Sắp ứng tuyển → Đã ứng tuyển → Phỏng vấn → Chờ kết quả → Offer → Đã nhận → Từ chối.
> _("Sàng lọc" và "Đã rút" đã gỡ khỏi giao diện nhưng vẫn hợp lệ trong DB để không vỡ dữ liệu cũ; "Chờ kết quả" là trạng thái mới — cần `schema-v8.sql`.)_

---

## Module 5 — Hạ tầng & Backend dùng chung (không phải màn hình)

- ✅ **Worker** xử lý hàng đợi `match_jobs` (**2 loại việc: `match` / `hr`** — `cleanup` đã gỡ 2026-06-18) bằng Claude
- ✅ **API Bóc chữ PDF** (`/api/extract-pdf`)
- ✅ **Quyền riêng tư (RLS)**: mỗi người chỉ thấy kho riêng của mình; admin không đọc kho người dùng thường
- ✅ **Giao diện nền tối (dark theme)** xuyên suốt
- ✅ Giao tiếp Web ↔ Worker **chỉ qua bảng Supabase** (xem `docs/adr/0002`)
- ✅ **Chặn bot/agent AI đọc app (2026-07-28)** — maintainer không muốn đối thủ dùng agent AI vào ngó UI/UX rồi bắt chước. Hai lớp: (1) **`app/robots.ts`** khai báo lịch sự — cấm nhóm bot AI (GPTBot · ClaudeBot · PerplexityBot · Google-Extended · Bytespider · CCBot…) toàn site, cấm khu riêng tư với mọi bot; (2) **`middleware.ts`** trả **403** theo user-agent (danh sách ở `lib/botBlock.ts`), đặt **trên cùng** để request bị từ chối không tốn 2 lượt gọi Supabase; chặn cả request **không khai user-agent** và công cụ dòng lệnh (curl · wget · python-requests · node-fetch · HeadlessChrome). **CỐ Ý KHÔNG chặn Googlebot/Bingbot** — chặn là app biến mất khỏi tìm kiếm. **Giới hạn đã biết:** chỉ chặn được bot TỰ KHAI TÊN; agent điều khiển Chrome thật + có tài khoản thì không phân biệt được với người dùng thật. **Trang [Hồ sơ mẫu] `/sample/[role]` CỐ Ý để công khai** dù nó lộ trọn màn kết quả — đóng lại là mất công cụ thuyết phục người dùng mới mạnh nhất, để phòng một rủi ro không chặn nổi.

### Góp ý (Feedback) — ✅ đã code (2026-07-28), chờ chạy `schema-v17.sql`

Chốt thiết kế: `docs/grill/2026-07-28-nut-gop-y-trong-app.md` · Quyết định kiến trúc: `docs/adr/0012` · Mockup: `mockup/gop-y.html`

- ✅ **[Nút góp ý]** — **viên thuốc nằm ngang** (icon + chữ "Góp ý") nổi **góc phải phía dưới**, neo theo đáy `bottom: 88px` để nằm ngay trên footer ghim mà không đè (và né `.rv-actionbar` vốn ở đáy **giữa**), `z-index: 40`; **< 880px thu về nút tròn 46px chỉ-icon** (`bottom: 76px`). Chỉ hiện khi **đã đăng nhập**.
- ✅ **Hộp thoại gửi góp ý** — **căn giữa màn hình**; gồm 4 chip loại (Lỗi · Đề xuất · Thắc mắc · Khác) + ô nội dung (10–2000 ký tự) + màn hình cảm ơn (**không hứa trả lời** — kênh một chiều). **Không** phụ đề, **không** dòng "Gửi kèm…". **Không dùng emoji** — chỉ chữ + icon Lucide nét mảnh.
- ✅ **Ngữ cảnh tự đính kèm** — trang đang đứng, ngôn ngữ, theme, trình duyệt, thời điểm (người dùng không phải gõ thêm).
- ✅ **[Ảnh đính kèm]** — tối đa **3 ảnh**, mỗi ảnh **≤ 5MB** (trùng trần file CV), PNG/JPG/WebP, không bắt buộc; có ô xem trước + nút gỡ, nút Chọn tệp tự khoá khi đủ 3. Tải **thẳng lên Storage từ trình duyệt** (bucket private `feedback`), KHÔNG qua route (Vercel giới hạn body ~4.5MB).
- ✅ **Ba đường đưa ảnh vào** — (1) **dán `Ctrl+V`** vào ô nội dung (đường chính) · (2) **kéo thả** vào ô · (3) nút **Chọn tệp ảnh**. Bắt buộc giữ 3 tín hiệu nhận biết: ô **viền nét đứt** · **dòng nhắc `Ctrl+V`** ngay dưới ô · kéo qua thì ô **sáng tím + "Thả ảnh vào đây"**. Màn hẹp đổi dòng nhắc sang "bấm Chọn tệp ảnh".
- ✅ **`POST /api/feedback`** — xác thực phiên → chặn spam (độ dài + ~5 góp ý/giờ/user) → kiểm đường dẫn ảnh đúng thư mục người gửi → **INSERT bảng trước** → ping Discord sau (chỉ ghi "kèm N ảnh", không nhúng ảnh).
- ✅ **Bảng `feedback`** (`schema-v17.sql`, có `attachments text[]`) + RLS own-rows + bucket private `feedback` — nguồn sự thật.
- ✅ **Màn "Góp ý" trong [Khu quản trị]** — bảng liệt kê (ngày · loại · email · trang · nội dung · số ảnh), lọc theo loại, badge đếm "Mới"; xem ảnh qua `/api/admin/file` sẵn có; đổi **[Trạng thái góp ý]** (Mới · Đã xử lý · Bỏ qua) bằng server action **service role** + `requireAdmin()` (pattern ADR-0011).
- ✅ Chuỗi **song ngữ vi/en**.
- ⬜ *Để sau:* cho khách chưa đăng nhập gửi (cần chặn spam theo IP); dọn **ảnh mồ côi** (chọn ảnh rồi đóng hộp thoại không gửi); giới hạn dung lượng Storage theo user.

### Chi phí AI (Token & tiền mỗi lượt chấm) — ✅ đã code (2026-07-30), chờ chạy `schema-v20.sql`

Mục đích: biết mỗi lượt đánh giá tốn bao nhiêu → có căn cứ **định giá khi phát hành**.

- ✅ **Bảng `ai_usage`** (`schema-v20.sql`) — mỗi lần gọi Claude ghi 1 dòng: người dùng · loại việc · model thật · token (vào / ra / cache tạo / cache đọc / tổng) · `cost_usd` · thời gian chạy · trạng thái. **Tách bảng chứ không thêm cột vào `match_jobs`** vì nút [Đánh giá lại] dùng lại đúng dòng job cũ — ghi đè vào đó là mất chi phí lần trước, cộng dồn sẽ thiếu tiền. RLS bật nhưng **cố tình không có policy nào** → anon key không đọc được; worker ghi và khu quản trị đọc đều bằng service role.
- ✅ **Worker lấy số liệu từ Claude Agent SDK** — message `result` có `total_cost_usd` · `usage` · `modelUsage`; lấy tên model từ `modelUsage` vì `CLAUDE_MODEL` chỉ là bí danh `sonnet`. **Lượt LỖI vẫn ghi** (`UsageError` mang theo usage): Claude trả về rồi mới parse hỏng thì token đã tốn thật. Ghi nhật ký **không bao giờ làm hỏng job** — lỗi ghi chỉ cảnh báo ra console.
- ✅ **Màn "Chi phí AI" trong [Khu quản trị]** (`/admin/usage`) — 3 thẻ tổng (chi phí USD + quy đổi VND · tổng token · tổng lượt + trung bình/lượt), bộ lọc (người dùng · model · loại việc · khoảng ngày, hiểu theo **giờ VN**), 3 tab: **Lịch sử sử dụng** (200 lượt gần nhất) · **Theo người dùng** · **Theo model** (lượt · token · USD · VND · TB/lượt · tỷ trọng). Con số tổng luôn tính trên **toàn bộ** dòng khớp lọc (lấy theo trang 1000 dòng/lượt vì Supabase chặn 1000).
- ✅ **Tỷ giá USD→VND** đổi bằng biến môi trường `USD_VND_RATE` (mặc định 26.300), không cần sửa code.
- ✅ **Đo tốc độ AI (2026-07-30, `schema-v21.sql`)** — cột **"Thời gian AI"**: dòng chính là `duration_api_ms` (**thuần gọi API**), dòng phụ mờ là `duration_ms` (**tổng máy chạy**, gồm cả ~1–3s SDK khởi động tiến trình con `cli.js`). Thẻ tổng thứ 4 **"Thời gian AI TB"** + chậm nhất; 2 tab thống kê thêm cột **AI TB / AI chậm nhất** để so tốc độ giữa các model. **TB/chậm nhất chỉ tính trên lượt có số đo hợp lệ** (lượt hỏng trước khi Claude kịp trả về ghi thời gian trống — gộp vào sẽ kéo TB xuống sai), số lượt bị loại có ghi rõ ở dòng phụ. *Chốt qua grill 2026-07-30: đã cân nhắc rồi **loại** phương án đo "tổng thời gian người dùng chờ" (bấm nút → thấy kết quả) vì con số đó chủ yếu phản ánh worker có bật hay không / có mấy job xếp trước, không phản ánh tốc độ AI.*
- ⚠️ **Lưu ý đọc số:** worker chạy bằng **token gói subscription** nên chưa bị trừ tiền thật — `cost_usd` là **giá quy đổi theo bảng giá API**, tức chi phí sẽ phải trả nếu chuyển sang API key. Đúng con số cần để tính giá bán.
- ✅ **Ba biểu đồ (2026-07-30)** — theo bộ luật dataviz, dựng bằng HTML/CSS thuần (không thêm thư viện biểu đồ nào vào dự án): **(1) Chi phí theo ngày** (cột, điền cả ngày 0 lượt để trục thời gian không bị bóp) · **(2) Giá vốn trung bình mỗi lượt theo loại việc** (thanh ngang, gắn số thẳng vào đầu thanh) · **(3) Phân bố thời gian AI** (dải chấm + vạch TB). Bộ lọc dời lên **trên cùng** vì nó chi phối mọi thứ bên dưới. Thêm 2 tab bảng **Theo ngày** / **Theo loại việc** — mỗi biểu đồ đều có bảng sinh đôi để tra số, không có con số nào chỉ sống trong tooltip.
  - **Quyết định màu:** cả 3 biểu đồ chỉ có **một chuỗi dữ liệu** → dùng đúng **một màu tím `#7c5cff`**, không tô mỗi cột một màu (màu sẽ lặp lại đúng thứ độ dài cột đã nói, lại đốt kênh màu và sinh rủi ro mù màu). Đã **chạy validator**, đạt cả 5 tiêu chí trên nền trắng (bản sáng) lẫn `#161b27` (bản tối). Một chuỗi nên **không có chú giải** — tiêu đề đã nói đang vẽ gì.
  - **Không ghép tiền và token lên cùng một biểu đồ 2 trục dọc** — hai thang khác nhau ghép chung sẽ bịa ra tương quan không có thật; token nằm ở tooltip.
  - **Ba lỗi đã phát hiện khi chụp ảnh kiểm và đã sửa:** (a) dải chấm lệch dọc theo dãy đều `(i*37)%42` vẽ ra một **vệt chéo đi lên trông như xu hướng** trong khi trục dọc vô nghĩa → đổi sang hàm băm; (b) tooltip neo vào đỉnh **ô** nên bay lên che tiêu đề → neo vào đỉnh **vệt**, kẹp trần 62%; (c) dưới 2 ngày dữ liệu thì **không vẽ** biểu đồ cột (một cột không so với gì được, số đã có ở thẻ tổng).
- 🔎 **Phát hiện đầu tiên nhờ màn này (2026-07-30): model chạy thật khác model khai.** `.env` khai `CLAUDE_MODEL=sonnet` nhưng 2 lượt chấm thật ghi `claude-opus-4-5-20251101`, giá vốn **$0,30** và **$0,17**/lượt. **Vì sao thì chưa biết** — đã loại trừ mọi nơi có thể set model trên máy. Chi tiết: `memory/worker-chay-opus-du-cau-hinh-sonnet.md`.
- ⚠️ **Ảnh hưởng thẳng tới định giá:** giá vốn phải lấy từ **số thật** của màn này, KHÔNG tính từ bảng giá của model mình tưởng đang chạy — chênh lệch Opus ↔ Sonnet là nhiều lần.
- ⬜ **Cảnh báo khi model chạy khác model khai** — worker so `modelUsage` với `CLAUDE_MODEL`, lệch thì `console.warn`; để lần sau lộ ra ngay tại console chứ không phải chờ đọc bảng.
- ⚠️ **Một lượt chấm dùng NHIỀU model (2026-07-30)** — lượt 13:46 ghi `claude-haiku-4-5` nhưng tốn **$0,1786**, gấp ~3 lần giá Haiku cho cùng lượng token → có model đắt hơn chạy kèm. Code cũ lấy `Object.keys(modelUsage)[0]` nên **ghi nhầm sang model rẻ**, làm sai lệch tab [Theo model] và cả số định giá. Đã sửa: `pickModel()` lấy model **tốn tiền nhất** + cảnh báo console khi có >1 model. **3 dòng `ai_usage` cũ (trước 13:46) có thể đang ghi sai tên model** — đừng dùng làm căn cứ.
- ⬜ **Chấm thật vài lượt rồi xem tab [Theo model]** — cách duy nhất để biết model thật của đường chạy worker (probe rời không suy sang được vì khác bối cảnh xác thực).
- ⬜ *Để sau:* xuất CSV; hạn mức (quota) chặn user vượt ngưỡng; hiện chi phí ngay trong màn chi tiết một job.

---

## 🔧 Ý tưởng nâng cấp / tính năng tương lai (pick ở đây)

> Khi muốn nâng cấp một tính năng đã có, đổi nó thành `🔧` ở trên và mô tả mong muốn tại đây. Khi muốn thêm tính năng mới, thêm dòng `⬜` vào đây rồi chuyển lên module phù hợp khi bắt đầu làm.

- ✅ ~~**Chip hồ sơ mẫu vẫn dùng emoji (💻 🛠️ 📊), lệch hệ icon Lucide**~~ → **ĐÃ LÀM 2026-07-30**: đổi sang Lucide theo **nghĩa** chứ không dịch nguyên emoji — Frontend → `Monitor` (màn hình = giao diện), Backend → `Server` (máy chủ), Data → `BarChart3` (biểu đồ). Map icon để trong `SampleChips.tsx`, **không** nhét vào `sampleData.ts` (file đó là dữ liệu CV/JD, không phải hình thức trình bày); **gỡ luôn** trường `icon` khỏi type `Sample` + bản VI/EN để không thành dữ liệu chết. Xác nhận trên production (phải tạo tài khoản trắng vì chip chỉ hiện khi 0 lượt + 0 đơn): lệch trục dọc icon↔chữ **0px** ở cả 3 chip và cả 2 chỗ hiện, tương phản 16.73:1 (sáng) / 14.88:1 (tối), không còn emoji nào trên màn.
- ⬜ **Thẻ Pipeline (Tổng quan) — nhãn "Chưa đánh giá" ăn 1/3 bề rộng, cắt gần hết tên công ty** *(phát hiện 2026-07-30, đo trên production)*: thẻ rộng 230px ở desktop 1440 nhưng vùng tên bị chặn còn **117px (51%)** vì nhãn chiếm **77px (33%)** → **3/4 tên công ty bị cắt**, kể cả tên ngắn. Tên công ty Việt Nam hay mở đầu bằng "Công ty TNHH…/Công ty Cổ phần…/Ngân hàng TMCP…" nên phần bị cắt lại đúng là phần phân biệt được. **Nghịch lý:** ở 390px vùng tên được **177px** — desktop cắt tên tệ hơn điện thoại, dù trang có 1113px chiều ngang (lưới 4 cột cứng chia nhỏ thẻ). Đề xuất: đổi nhãn thành `—` (giữ tooltip) để trả lại ~40px, vì thẻ đã đánh giá chỉ tốn ~40px cho badge `%`. Số đo: `docs/grill/2026-07-30-ra-soat-ux-ui-dashboard.md` §4b N1.
- ✅ ~~**Tổng quan trên điện thoại — phải cuộn 1,3 màn hình mới tới nội dung hành động được**~~ → **ĐÃ LÀM 2026-07-30**: dưới 520px giữ **2 cột** + `padding: 12px` + ẩn icon thẻ → hàng thẻ cao **646px → 336px**, Pipeline từ y=1109 lên **y=800** (vừa 1 màn 844px), nhãn vẫn 1 dòng. Đã thử 2 biến thể trên trình duyệt thật ở 390px: để icon thì 4/5 nhãn rớt 2 dòng nên phải ẩn (desktop không đổi). Số đo: `docs/grill/2026-07-30-ra-soat-ux-ui-dashboard.md` §5.
- ⬜ **Footer ghim cứng — khoảng đệm thiếu 44px** *(phát hiện 2026-07-30)*: `.site-footer` là `position: fixed` cao **84px** (10% màn 844px, chữ rớt 4 dòng ở 390px) nhưng `main` chỉ có `padding-bottom: 40px`. Màn Tổng quan hiện chưa bị che, nhưng `40 < 84` là **bẫy còn treo** — đúng loại lỗi đã từng xảy ra ở màn Kết quả đánh giá. Nguyên tắc: `padding-bottom ≥ chiều cao footer`. Kèm: nút "Góp ý" nổi che số đếm cột Pipeline ở 390px (chồng 8px).
- ⬜ **`ClampTip` — tên bị cắt chỉ đọc được bằng chuột** *(phát hiện 2026-07-30)*: component hiện tooltip ở `onMouseEnter` nhưng **không có `onFocus`**, nên người dùng bàn phím Tab tới thẻ không có cách nào đọc phần tên bị cắt. Dùng chung nhiều màn. Kèm một việc nhỏ cùng nhóm: link ở chân card ("Xem tất cả lịch sử") rơi về viền tiêu điểm mặc định của trình duyệt (xanh 1px) thay vì viền tím 2px của app.
- 🔧 **Tương phản màu bản SÁNG — badge trạng thái trượt chuẩn AA** — *đã sửa 1/4 cặp màu (2026-07-30):* `--st-offer` `#059669` → `#047857` (badge "Hoàn tất"/"Offer" 3.32 → **4.84:1**; đồng thời chữa luôn chữ trắng trên nền xanh đặc ở tick stepper/toast, trước đó cũng trượt ở 3.77 → **5.48:1**). **Còn 3 cặp chưa sửa** *(số đo lấy từ token, chưa xác nhận từng chỗ trên trang)*: cặp `--st-X` trên `--st-X-bg` ở giao diện sáng đo được **to_apply 4.20 · applied 4.47 · interview 2.88 · waiting 3.29** (chuẩn AA cần **4.5:1** cho chữ thường). Vì **sáng là giao diện mặc định** (`ThemeScript`) nên đây là bản đa số người dùng thấy. Badge dùng ở **nhiều màn** (Quản lý ứng tuyển, Lịch sử, Tổng quan) → sửa là đổi màu badge toàn app, cần chốt thiết kế riêng chứ không vá lẻ. Số đo + cách tính: `docs/grill/2026-07-30-ra-soat-ux-ui-dashboard.md` §6.
- ⬜ **`--muted-2` trượt AA cả hai giao diện** *(phát hiện 2026-07-30)*: `#6b7280` tối = **3.56:1**, `#8b92a6` sáng = **3.11:1**. Chỗ dùng: nhãn nhóm ở sidebar (`.nav-section`), chữ mờ trong ô nhập (`placeholder`), icon tìm kiếm, đếm ký tự, ô ngày ngoài tháng trong lịch. Thuộc khung chung nên phiên rà Tổng quan chỉ báo, không sửa.
- ⬜ **Nắn thang 4px trong ruột màn Tổng quan** *(phát hiện 2026-07-30)*: còn **10 chỗ** lệch (gap 10px/14px, `.m-item` gap 5px, `.pipeline-cards` gap 6px, `.donut::before` inset 5px…). Nắn cả mớ sẽ **đổi rõ độ thoáng của màn** nên phải xem ảnh trước/sau mới chốt; hoặc chấp nhận hiện trạng và ghi ngoại lệ vào luật. Bảng đầy đủ: `docs/grill/2026-07-30-ra-soat-ux-ui-dashboard.md` §3b P5.
- 🧪 **Chạy nốt bảng test case UX/UI màn Tổng quan** — 68 hạng mục / 11 nhóm ở `docs/grill/2026-07-30-ra-soat-ux-ui-dashboard.md`. Đã xong vòng đọc code (đo tương phản, thang 4px, icon, tiêu điểm, glossary) và đã sửa 2 lỗi; **phần cần trình duyệt còn nguyên** vì kết nối DevTools treo giữa phiên 30/07. Ưu tiên **bản sáng**, 3 bố cục (`new` / `evaluated_no_apps` / `few`+`many` dùng chung) × 2 khổ màn (1440/390).
- ✅ ~~AI trích xuất khi "Lưu vào Quản lý ứng tuyển"~~ → **ĐÃ LÀM** (gộp vào lần đánh giá; xem `docs/grill/2026-06-13-ai-trich-xuat-jobinfo.md`).
- ⬜ **Lịch sử import** (tab "Lịch sử" trong popup Import): lưu vĩnh viễn các lần import (thời gian, tên file, số dòng OK/lỗi, báo cáo lỗi) — cần bảng mới. Hoãn 2026-06-14, có thể đặt ở khu HR (xem `docs/grill/2026-06-14-import-nang-cao.md` Câu 2).
- ⬜ Import hỗ trợ **.xlsx** (cần thư viện đọc Excel) — hiện chỉ .csv.
- ✅ **Trạng thái đánh giá — dịch VI + watchdog + đánh giá lại tại chỗ** *(ĐÃ CODE 2026-06-14, tsc pass)*: 4 trạng thái hiện **Đang chờ / Đang đánh giá / Hoàn tất / Lỗi** (helper chung `lib/jobStatus.ts`, giữ màu badge); **watchdog phía web** đặt `Lỗi` khi pending >2′ hoặc processing >5′ (màn kết quả + quét khi mở Dashboard/Lịch sử) vì worker hay tắt; **"Đánh giá lại" hồi sinh chính row** (`error→pending`) thay vì tạo row mới. Tài liệu: `docs/CHAM-DIEM-TRANG-THAI.md` + `docs/adr/0005` + `docs/grill/2026-06-14-trang-thai-cham-diem.md` + `CONTEXT.md`.
- ⬜ **Trang "CV của tôi" (`/cvs`)** — đưa **Thư viện CV** thành trang riêng (list / tải+lưu / đổi tên / xóa / xem PDF / đặt mặc định); chỉ-CV, dùng lại bảng `cvs` (không DB mới); **giữ nguyên màn đánh giá** (cùng đọc/ghi `cvs` → ảnh hưởng ~0); lối vào = **menu thả avatar** (phải dựng mới ở header Dashboard — có thể làm lại khi redesign header); tách `lib/cvs.ts` dùng chung chống lệch. **Hoãn 2026-06-14** ("làm sau"). Thiết kế đã chốt: `docs/grill/2026-06-14-trang-cv-cua-toi.md`. *(Lưu ý: "CV mặc định" đã chạy sẵn trong màn đánh giá — trang này chủ yếu gom lại cho dễ thấy.)*
- ✅ ~~**Export CSV — localize tên cột + giá trị `status`**~~ → **ĐÃ LÀM 2026-06-14**: header + ô `status` ra theo ngôn ngữ ("Công ty"/"Sắp ứng tuyển") thay vì khóa máy; round-trip giữ bằng **bảng alias 2 chiều** ở import (Việt/Anh/khóa máy → 1 field/giá trị); gộp định nghĩa cột về `lib/applications.ts` (gỡ bộ cột lặp ở `ImportModal.tsx`); file mẫu chuyển sang nhãn Việt. VI hiện tại, EN forward-compatible (truyền `locale` vào `toCsv` khi có i18n). Xem `docs/adr/0004` + `docs/grill/2026-06-14-export-csv-localize.md`.
- ⬜ **Đăng ký theo vai trò (Ứng viên / Nhà tuyển dụng)** — màn đăng ký có radio chọn vai trò như app tuyển dụng; nhà tuyển dụng **tự phục vụ** (tự đăng ký → vào Khu HR). Kỹ thuật: tách `profiles.role` khỏi `is_admin`, mở Khu HR theo vai trò, giữ riêng tư bằng RLS own-rows. **Hoãn 2026-06-14** (chốt ứng viên-trước, Khu HR vẫn cấp quyền tay — mục tiêu là demo + tránh mở bề mặt quyền riêng tư khi nhà tuyển dụng tự dán CV người khác). Gắn lộ trình **LATER — mở SaaS phía HR** (xem `docs/grill/2026-06-14-onboarding-ung-vien-hr.md` + Câu chuyện SP §4, §9).
- ✅ ~~**Onboarding ứng viên — bản nhẹ (A2)**~~ → **ĐÃ LÀM 2026-06-14**: thẻ chào mừng 3 bước ở dashboard (xem MH 2.1).
- ⬜ **Onboarding ứng viên — bản đầy đủ (A3)** *(tùy chọn, chưa cần)*: luồng riêng nhiều bước, thu thập tên/CV đầu tiên. Đã cân nhắc & **chưa làm** (A2 đủ cho mục tiêu demo — xem `docs/grill/2026-06-14-onboarding-ung-vien-hr.md`).

### 🚧 Khu HR — hoàn thiện để demo (đề xuất 2026-06-14)

> **Bối cảnh:** Khu HR (Module 3) đã là MVP **chạy được** (đánh giá → xếp hạng % → câu hỏi phỏng vấn), nhưng còn "thô" để đem demo năng lực phát triển sản phẩm đa-bên. Lý do/định hướng: xem phân tích cạnh tranh `docs/PHAN-TICH-THI-TRUONG-CANH-TRANH.md` (khu HR là sân của incumbent → làm "đủ tốt để demo + kể chuyện ưu tiên", đừng đua tính năng). Công sức: 🟢 nhỏ · 🟡 vừa · 🔴 lớn.
>
> **Nhóm 1 — bắt buộc để demo "ra dáng công cụ HR thật":**
>
> - 🚧 **Tải CV bằng PDF cho mỗi ứng viên** (tái dùng `/api/extract-pdf`) — *KHUNG SƯỜN đã code 2026-06-16* (mỗi ứng viên có nút tải PDF → bóc chữ → đổ vào ô; chưa lưu file). 🟡
> - ⬜ **Tải nhiều PDF cùng lúc** (kéo-thả 5–20 file → tự tạo từng ứng viên) — minh hoạ value "xử lý 10× hồ sơ". 🟡→🔴
> - 🚧 **Bảng so sánh ứng viên** (ma trận: ứng viên × 6 nhóm + số năm KN) — *KHUNG SƯỜN đã code 2026-06-16* (bảng `.tbl` ở `/hr/[batchId]`, in đậm điểm cao nhất mỗi cột; chưa có top-gap/ẩn cột). 🟡
>
> **Nhóm 2 — tăng điểm rõ rệt:**
>
> - ⬜ **Xuất/chia sẻ shortlist** (CSV hoặc link xem) — hoàn tất luồng tìm → so sánh → gửi sếp. 🟡
> - 🚧 **Đặt tên đợt + gắn vị trí tuyển** (vd "Tuyển BA Q2") — *KHUNG SƯỜN đã code 2026-06-16* (cột `batch_name`/`batch_position` ở `schema-v9.sql`; vị trí ghi vào `role` để gợi ý prompt; hiện tên đợt ở list + tiêu đề). 🟢
> - ⬜ **Hiện thông tin ứng viên trong bảng xếp hạng** (chức danh, số năm KN — `candidateInfo` đã trích sẵn, chỉ chưa hiện). 🟢
>
> **Nhóm 3 — đánh bóng cho demo trơn tru:**
>
> - ⬜ **Nút "Dùng dữ liệu mẫu"** (1 JD + 3 CV mẫu) — demo tức thì không cần chuẩn bị. 🟢
> - ⬜ **Xoá / quản lý đợt xếp hạng**. 🟢
> - ⬜ Trạng thái rỗng + nhãn hướng dẫn rõ hơn. 🟢
>
> **Gói tối thiểu nếu hạn chế thời gian:** #1 (PDF) + Bảng so sánh + Đặt tên đợt + Dữ liệu mẫu.

---

## 📝 Nhật ký thay đổi backlog

- **2026-06-13:** Tạo backlog lần đầu (kê khai toàn bộ tính năng hiện có). Bổ sung tính năng "Tự động Dọn CV sau khi tải PDF".
- **2026-06-13 (cùng ngày):** Gỡ tự-động-dọn → chuyển sang **Dọn CV thủ công (tùy chọn)**; cho **Đánh giá ngay trên text thô**, không phải đợi dọn. (Lý do: dọn không cần thiết để đánh giá — xem `docs/grill/2026-06-13-cham-diem-khong-doi-don.md`.)
- **2026-06-13 (cùng ngày):** Thêm **phân trang** cho màn hình Quản lý ứng tuyển (≥20 đơn; droplist 20/50/75/100 — xem `docs/grill/2026-06-13-phan-trang-danh-sach.md`).
- **2026-06-13 (cùng ngày):** Popup "Thêm job" từ kết quả đánh giá **tự điền JD nguyên văn** + mặc định trạng thái "Sắp ứng tuyển" (xem `docs/grill/2026-06-13-autofill-them-job.md`).
- **2026-06-13 (cùng ngày):** **AI trích `jobInfo`** (Công ty/Vị trí/Lương/Yêu cầu) từ JD — gộp trong lần đánh giá (0 lần gọi thêm); hiện thẻ "Thông tin công việc" + auto-fill popup (xem `docs/grill/2026-06-13-ai-trich-xuat-jobinfo.md`).
- **2026-06-13 (cùng ngày):** **Thư viện CV** (tối đa 5, chọn mặc định) ở "Đánh giá mới" — cần chạy `schema-v6.sql` (xem `docs/grill/2026-06-13-cv-mac-dinh.md`).
- **2026-06-13 (cùng ngày):** Đánh giá từ đơn thiếu CV → **chọn CV trong Thư viện để đánh giá inline + gắn vào đơn** (bỏ nhánh "Sang trang đánh giá" gây mất liên kết — xem `docs/grill/2026-06-13-cham-diem-tu-don-chon-cv.md`).
- **2026-06-13 (cùng ngày):** Màn hình **Lịch sử đánh giá** (`/history`): liệt kê/tìm/lọc (vị trí, file, ngày, %)/phân trang/xóa + **lưu & mở lại file CV gốc** mỗi lần đánh giá — cần `schema-v7.sql` (xem `docs/grill/2026-06-13-quan-ly-lich-su-cham.md`).
- **2026-06-13 (cùng ngày):** **AI đánh giá đơn đã chọn** ở Quản lý ứng tuyển (chọn nhiều đơn, tối đa 20, tiến trình tại chỗ — xem `docs/grill/2026-06-13-cham-hang-loat-don.md`).
- **2026-06-14:** **Import CSV nâng cao** (popup: tải mẫu, preview + validate từng dòng, báo cáo lỗi chi tiết, ≤5MB) — xem `docs/grill/2026-06-14-import-nang-cao.md`. Tab "Lịch sử import" hoãn → mục nâng cấp.
- **2026-06-14:** Rà khu HR (Module 3) → xác nhận đã là MVP chạy được; thêm **gói đề xuất "Khu HR — hoàn thiện để demo"** vào mục nâng cấp (PDF upload, multi-file, bảng so sánh, export shortlist, đặt tên đợt, dữ liệu mẫu…). Lý do/định hướng: `docs/PHAN-TICH-THI-TRUONG-CANH-TRANH.md`.
- **2026-06-16:** **Khu HR — code KHUNG SƯỜN 3 tính năng** (flow "khung sườn trước", chủ dự án grill chi tiết + vẽ mockup sau): ① tải CV PDF cho mỗi ứng viên (bóc chữ qua `/api/extract-pdf`), ② bảng so sánh ứng viên ở `/hr/[batchId]` (ma trận 6 nhóm + tổng % + số năm KN, in đậm điểm cao nhất cột), ③ đặt tên đợt + vị trí tuyển (`schema-v9.sql`, vị trí ghi vào `role`). Quyết định: `docs/grill/2026-06-16-khu-hr-khung-suon.md`. **Cần chạy `schema-v9.sql` trên Supabase.**
- **2026-06-14:** Màn **Kết quả đánh giá** (`/match/[id]`): thêm **cảnh báo worker tắt sau 20s + đếm thời gian chờ + nút "↻ Đánh giá lại"** ở màn lỗi (tạo lại từ CV+JD cũ). Verify E2E bằng trình duyệt thật.
- **2026-06-14:** Màn **Kết quả đánh giá**: thêm **confetti tông tím–xanh** bắn 1 lần khi đánh giá xong lần đầu (`canvas-confetti`; chặn lặp bằng localStorage + đếm lần done==1). Verify E2E: lần đầu bắn, không-phải-lần-đầu không bắn.
- **2026-06-14:** Confetti: **sửa cờ chặn-lặp gắn theo TÀI KHOẢN** (`..._<user_id>`) thay vì toàn trình duyệt — trước đây đổi email mới trên cùng trình duyệt không bắn (cờ cũ đã set). Verify E2E tái hiện đúng bug + xác nhận fix.
- **2026-06-14:** Confetti màn Kết quả đánh giá: **đa dạng màu cho nổi bật** (thêm vàng/hồng/xanh lá/cam bên cạnh tím–xanh thương hiệu) — vì confetti cùng tông nền tối thì bị chìm.
- **2026-06-14:** Màn **Kết quả đánh giá**: **bỏ card "Thông tin công ty"**; thông tin công ty gộp vào card "Thông tin công việc (từ JD)" (Công ty / Vị trí / Mức lương / Yêu cầu chính). `companyInfo` vẫn dùng ngầm cho auto-fill khi lưu đơn. Verify E2E.
- **2026-06-14:** Grill **luồng onboarding ứng viên/HR** → chốt **ứng viên-trước, chưa làm đăng ký theo vai trò** (Khu HR vẫn cấp quyền tay); lưu ý tưởng "Đăng ký theo vai trò" + "Onboarding ứng viên" vào mục nâng cấp, và vào Câu chuyện sản phẩm §4/§9 (xem `docs/grill/2026-06-14-onboarding-ung-vien-hr.md`).
- **2026-06-14:** **Onboarding ứng viên bản nhẹ (A2) — ĐÃ LÀM**: thẻ chào mừng 3 bước ở đầu dashboard, tự ẩn khi đã có lần đánh giá (component `WelcomeCard`, verify E2E bằng Playwright). Bản đầy đủ (A3) để ngỏ.
- **2026-06-14:** Grill **export CSV theo ngôn ngữ** → chốt **localize header + giá trị `status`** (vì export là để mở Excel đọc), **giữ round-trip** bằng bảng alias 2 chiều ở import (Việt/Anh/khóa máy); **VI ngay, EN forward-compatible** (chưa có i18n). **ĐÃ CODE** (`lib/applications.ts` + `ImportModal.tsx`; tsc pass; file mẫu chuyển nhãn Việt). Xem `docs/adr/0004` + `docs/grill/2026-06-14-export-csv-localize.md`. Cùng phiên: grill **đăng ký** → chốt **giữ nguyên hiện trạng** (vẫn có đăng nhập + đăng ký), không sửa gì.
- **2026-06-14:** Grill **trạng thái đánh giá** → chốt + **ĐÃ CODE**: dịch VI (Đang chờ/Đang đánh giá/Hoàn tất/Lỗi), **watchdog phía web** (pending 2′ / processing 5′ → Lỗi, vì worker hay tắt), **đánh giá lại hồi sinh row**. Helper `lib/jobStatus.ts`; sửa ResultView/Dashboard/HistoryClient; thêm `updated_at` vào type MatchJob; tsc pass. Tài liệu: `docs/CHAM-DIEM-TRANG-THAI.md` (kỹ thuật: luồng + worker + rule), `docs/adr/0005`, `CONTEXT.md` (thuật ngữ), `docs/grill/2026-06-14-trang-thai-cham-diem.md`.
- **2026-06-14:** Grill **trang "CV của tôi" (`/cvs`)** → chốt thiết kế (đưa Thư viện CV thành trang riêng, chỉ-CV, dùng lại `cvs`, giữ nguyên màn đánh giá, lối vào menu avatar) nhưng **HOÃN — làm sau** (user quyết). Phát hiện: "CV mặc định" đã có sẵn trong màn đánh giá. Lưu vào mục nâng cấp + `docs/grill/2026-06-14-trang-cv-cua-toi.md`. **Chưa code gì.**
- **2026-06-14:** **Lọc Độ phù hợp** (component chung `PctFilter`, cả `/history` + `/applications`): **ẩn ô nhập %** cho tới khi chọn toán tử (≥/=/≤) — bỏ ô "%" trống lủng lẳng; chọn "—" xóa luôn số (tắt lọc); ô hiện thì auto-focus. tsc pass.
- **2026-06-14:** **Quản lý ứng tuyển** — bảng đơn: **tooltip CSS** "Đơn ứng tuyển này đã được đánh giá" khi rê vào checkbox **mờ** của đơn đã đánh giá (thay `title` mặc định cũ "Đơn này đã đánh giá" — chậm & không style). Class `.tip`/`.tip-bubble` đặt bên phải để khung bảng overflow không cắt. tsc pass (xem `docs/grill/2026-06-14-tooltip-checkbox-da-cham.md`).
- **2026-06-14:** **Quản lý ứng tuyển** — bảng đơn: **bỏ cột "Yêu cầu"** (vẫn lưu/sửa qua form) + đổi nhãn cột **"Ngày apply" → "Ngày ứng tuyển"**.
- **2026-06-14:** **Quản lý ứng tuyển** — đổi thẻ thống kê **"Tổng đã apply" → "Tổng số đơn"** + đổi công thức `apps.filter(≠to_apply)` → **`apps.length`** (đếm tất cả đơn, gồm "sắp ứng tuyển"). Lý do: nhãn cũ đếm sai mục đích & **trùng nghĩa "Đã ứng tuyển"**; ô này để biết tổng số đơn đang có. Đổi key nội bộ `total_applied`→`total`. tsc pass.
- **2026-06-14:** Grill **lọc theo độ phù hợp** → chốt ràng buộc input **[0–100] (gồm 0), số nguyên**: giữ chặn âm/thập phân/chữ (regex), **>100 cho gõ nhưng báo lỗi đỏ "Chỉ từ 0 đến 100" + tạm bỏ qua lọc %**, ô trống = tắt lọc không lỗi. **Tách component dùng chung `app/components/PctFilter.tsx`** (+ helper `parsePct` để báo lỗi & lọc dùng chung 1 logic), áp cho **cả `/history` lẫn `/applications`** (gỡ 2 bản lặp). **ĐÃ CODE**, tsc pass (xem `docs/grill/2026-06-14-loc-do-phu-hop.md`).
- **2026-06-14:** **Nâng chất lượng prompt đánh giá** (nghiêm & trung thực): rubric dùng hết dải điểm, overallMatch có trọng số, ghi chú bám bằng chứng, công nhận kỹ năng tương đương. Ghi lại **phương pháp đánh giá + thang điểm** vào Module 2 (mục "Cách AI đánh giá") để trả lời câu nhà tuyển dụng hay hỏi. Verify 2 mẫu qua Claude SDK.
- **2026-06-14:** **Quản lý ứng tuyển**: thêm **lọc theo Ngày apply (khoảng)** + **lọc % độ phù hợp (≥/=/≤)** + nút Xóa lọc (giống màn Lịch sử) — verify E2E bằng Playwright.
- **2026-06-14:** **Quản lý ứng tuyển**: filter **trạng thái** và **nền tảng** cho **chọn nhiều giá trị** (component MultiSelect — dropdown checkbox, Esc/click-ngoài để đóng). Đồng bộ **bộ trạng thái còn 7 giá trị** (đổi "Đã nộp"→"Đã ứng tuyển"; bỏ "Sàng lọc"/"Đã rút" khỏi UI; thêm **"Chờ kết quả"** — cần `schema-v8.sql`). Form tạo đơn mặc định trạng thái **"Sắp ứng tuyển"**.
- **2026-06-14:** **Quản lý ứng tuyển**: nâng cấp **lọc Ngày ứng tuyển** từ 2 ô `<input type=date>` thô → **date-range picker** đẹp (chip mở popover: preset *Hôm nay/7/14/30/90 ngày qua* + lịch 1 tháng; chọn **1 ngày hoặc 1 khoảng**; **chặn ngày tương lai**; nhập tay **dd/mm/yyyy**; đóng khi click-ngoài/Esc). Component `DateRangeFilter.tsx` + CSS `.drp-*` (dùng biến theme). **Thiết kế Figma trước** rồi code (nguồn: `docs/NGUON-THIET-KE-FIGMA.md` — `47-2`/`186-2` Tối, `142-84`/`193-2` Sáng). ✅ Đã test localhost OK, push Vercel.
- **2026-06-15:** **Redesign UI bằng mockup HTML** (`mockup/` — 8 màn, **chưa code**; quy trình mockup-first xem `WORKFLOWS.md` FLOW 12). Các tính năng/thay đổi mới chốt trên mockup:
  - **App Shell**: header toàn cục (logo · ngôn ngữ VI/EN · nút Tối/Sáng · menu tài khoản) + **sidebar điều hướng**; **tách màn "Đánh giá độ phù hợp" thành màn riêng** khỏi Tổng quan.
  - **Mode Sáng (Light)** đầy đủ + **nút chuyển Tối/Sáng** (nhớ `localStorage`) — đồng bộ Figma Variables 2 mode.
  - **Màu "Mức độ phù hợp"** (đèn tín hiệu: Đỏ 0–49 · Vàng 50–74 · Xanh 75–100) ở số tổng + badge nhãn trang Kết quả đánh giá (xem `CONTEXT.md` "Mức độ phù hợp").
  - **Quản lý ứng tuyển**: mở rộng **Nền tảng 10 → 17 giá trị** (thêm CareerViet, TopDev, Vieclam24h, CareerLink, JobsGO, JobOKO, Glints; sắp **A–Z**, "Other" cuối; `CONTEXT.md` "Nền tảng" = nhãn trung tính, **không tô màu ngữ nghĩa** — chip xám); **sửa Nền tảng ngay trên bảng** (dropdown inline, như cột Trạng thái); cột **Thao tác gọn còn Sửa + Xóa** (gỡ nút Đánh giá/Xem vì trùng cột Độ phù hợp); thẻ thống kê có viền+bóng, số tô màu trạng thái ("Sắp ứng tuyển" = xám); **UI phân trang** kiểu "Hiển thị [20 ▾] / tổng N", mức **20/30/50/100** (khác bản code 20/50/75/100 — đồng bộ khi code); popup xác nhận xóa theo theme; bảng cuộn dọc + header dính.
  - **Design system nút** tinh chỉnh (bo mềm + bóng nhẹ + hover viền tím); **chevron dropdown vẽ bằng CSS** dùng chung mọi nơi.
    ⚠️ Tất cả ở **mockup** (`mockup/`), **chưa áp vào code**; khi code lấy markup từ `mockup/<màn>.html`, token màu theo `globals.css`. Điểm cần sửa Figma khi sync ngược: ghi trong `docs/NGUON-THIET-KE-FIGMA.md`.
- **2026-06-16:** **Quản lý ứng tuyển — tinh chỉnh popup Thêm/Sửa đơn** (mockup `applications.html`, **chưa code**):
  - **Popup canh chuẩn**: neo dưới App Shell header (không đụng header), giới hạn chiều cao + **cuộn nội dung riêng** (tiêu đề & nút Hủy/Lưu cố định); popup **Nhập CSV** cũng canh giữa + cuộn tương tự. Bỏ dòng "Công ty và vị trí là bắt buộc" (đã có dấu `*`).
  - **Form dùng chung Thêm & Sửa**: bấm ✏️ → tiêu đề "Sửa đơn ứng tuyển" + **đổ sẵn mọi giá trị** dòng, Lưu **cập nhật đúng dòng** (không tạo mới); "+ Thêm đơn" → form trống.
  - **Hồ sơ ứng viên** (đổi tên từ "Hồ sơ đã gửi", dời lên trước "Tin tuyển dụng (JD)"): upload CV/Cover letter **trạng thái đầu là nút**, chọn xong mới hiện **tên file** (cắt ngắn `…` + ✕ xoá); **bấm tên file → mở tab xem trước** (blob); label + nút cùng dòng, 2 dòng xếp trên–dưới.
  - **JD Link**: nút **"Mở ↗"** (nhỏ gọn, hover viền tím) mở JD ở tab mới — **chỉ hiện khi ô có link**.
    ⚠️ Vẫn ở **mockup**, chưa áp vào code.
- **2026-06-16:** **Đồng bộ wording + icon + headline màn đánh giá** (mockup, **chưa code**): "chấm điểm" → **"AI đánh giá độ phù hợp"** trên toàn bộ mockup (sidebar 9 màn + nội dung); **✨** = chữ ký AI cho hành động đánh giá (sidebar/nút), **chổi SVG** cho nút Dọn ("Dọn và sắp xếp" + thông báo 3 trạng thái, chốt qua grill); headline cham-diem → *"Mở khóa cơ hội trúng tuyển của bạn"*; spacing đầu trang đồng bộ chuẩn Quản lý ứng tuyển (h1 +8px, subtitle in nghiêng).
- **2026-06-16:** **Stepper 4 bước + popup chờ AI** màn AI đánh giá (mockup `cham-diem.html`, **chưa code** — chốt qua `/grill-with-docs`):
  - **Stepper 4 bước** (bản đồ hành trình): Cung cấp CV → Kết nối JD → AI đánh giá & phân tích → Xem kết quả. Mỗi bước có chấm tròn + BƯỚC N + tiêu đề + mô tả + **chip trạng thái** (viền + nền): **Đã xong** (xanh lá + ✓) · **Đang thực hiện** (gradient tím→xanh + glow nhấp nháy) · **Chưa bắt đầu** (mờ). Trạng thái 3 từ **cố ý né** 4 trạng thái [Lần đánh giá] (Đang chờ/Đang đánh giá/Hoàn tất/Lỗi). Tự cập nhật theo nội dung CV/JD.
  - **Popup chờ AI**: vòng glow xoay (gradient tím→xanh) + ✨ nhịp, **KHÔNG số %** (tránh nhầm với % độ phù hợp của kết quả), thay bằng dòng trạng thái xoay vòng ("Đang đọc CV… → Đối chiếu JD… → Đánh giá 6 nhóm… → Tổng hợp gợi ý…"); hiện khi bấm đánh giá → ~2.6s → sang trang kết quả.
  - Spacing stepper nắn về **thang 4px** (line-spacing chữ dùng bước phụ 2px: 6px).
- **2026-06-16:** **Bố cục lại màn AI đánh giá theo 3 khối + dropdown Thư viện CV** (mockup `cham-diem.html`, **chưa code**): hàng Vai trò (nhãn + ô cùng dòng) → thẻ **Thư viện CV** (toàn ngang) → **2 thẻ cạnh nhau** "CV của bạn" / "JD" (mỗi ô có **bộ đếm ký tự**) → nút **✨ Đánh giá** + **🗑 Xóa hết** căn giữa. **Thư viện CV = dropdown tùy biến** (kho 10 CV gần nhất, chọn 1): nút chọn gọn (420px) viền tím + glow + chevron; panel options 2 dòng (tên + cập nhật/size), hover sáng, ✓ ở mục chọn; mỗi dòng có **👁 Xem / 🗑 Xóa** (hiện khi hover, tooltip CSS, xác nhận khi xóa, tự chọn lại CV còn lại); **>5 CV → thanh cuộn**. *(Giới hạn 10 CV FIFO là logic dữ liệu khi code, không thể hiện ở mockup.)*
  - Tinh chỉnh thêm: **dropdown + tab Tải PDF gộp cùng 1 hàng** với tiêu đề "Thư viện CV" (swap tại chỗ); điểm bắt đầu dropdown thẳng ô nhập Vai trò, **mép phải dropdown khớp mép phải card "CV của bạn"**; **empty state** khi chưa có CV ("Chưa có CV nào" + link "Tải PDF"); **uploader Tải PDF gọn 1 dòng**, bấm "Chọn tệp PDF" mở hộp chọn tệp → hiện chip "📄 tên tệp" + ✕ + tự nạp text vào ô CV; spacing chữ↔chữ = **8px cố định**.
  - Tinh chỉnh đợt 2: **bỏ hẳn field "Vai trò nhắm tới"** (AI tự suy vai trò từ JD — prompt chỉ coi role là "tham khảo"; cột DB `role` giữ nguyên khi code, chỉ bỏ ô nhập); **2 ô "CV của bạn" / "JD" cao bằng nhau + to hơn** (stretch + textarea giãn đầy, min-height 340px); dòng nhắc nút Dọn đổi thành *"Nút này chỉ sắp xếp lại chữ trong ô cho dễ đọc…"* + **nằm cùng hàng với nút**; thông báo sau khi dọn bỏ chữ "gọn" → *"Đã trình bày lại cho dễ đọc, giữ nguyên nội dung"* (tránh hiểu nhầm bị xoá nội dung); **nút Dọn tự khóa (disabled) sau khi dọn xong**, mở lại khi chọn CV khác / tải CV mới.
  - Tinh chỉnh đợt 3: **CV mặc định** trong dropdown — nút **☆ "Đặt làm CV mặc định"** (hiện khi hover) + badge tím **"Mặc định"** trên dòng; **mở màn tự chọn CV mặc định + fill sẵn ô "CV của bạn"** (đúng `is_default` trong CONTEXT.md). Chọn CV trong dropdown → nạp text CV đó vào ô; xóa CV đang chọn → nạp CV còn lại (hết → ô trống). Bước 1 stepper = **"Chưa bắt đầu"** khi chưa có CV (trước đó hiện "Đang thực hiện"). Tooltip nút tải tệp "Chỉ được phép chọn file PDF và tối đa 5MB" (đồng bộ cả form Thêm/Sửa đơn ở `applications.html`); bỏ dòng "Chỉ PDF · tối đa 5MB".
- **2026-06-18:** **PORT MOCKUP → APP (matching-web) — gần như xong toàn bộ.** Đưa redesign từ `mockup/` vào code thật theo `docs/PORT-PLAN.md` (FLOW 14): App Shell (header+sidebar+Sáng/Tối), Dashboard tổng quan (4 thẻ số liệu thật + thẻ donut "Lần đánh giá gần đây" + chào theo tên + cặp CTA + người-mới tự bật theo dữ liệu), tách màn `/match` (1 cột: stepper trạng thái + tab Thư viện CV/Tải PDF + dropdown CV mặc-định/xem/xóa + đếm ký tự, KHÔNG còn Text-CV editable/Vai trò/Dọn), màu Mức độ phù hợp + hero + card CV¦JD ở Kết quả, Lịch sử (thẻ thống kê accent + filterbar + sort + date-picker popover + bỏ Xóa), Quản lý ứng tuyển (màu % + thanh chọn tím + nút icon + form 4 nhóm + Nền tảng/Trạng thái sửa-tại-chỗ + date-picker), First-run "Thử hồ sơ mẫu" (`/sample/[role]` 3 vai trò IT + máy quét + confetti, không worker/DB), **processing UI** đánh giá thật khớp mockup `#aiWait`. **Gỡ hẳn "Dọn CV"**. **Khu HR: cố ý BỎ QUA** (app đang hơn mockup về chức năng). Tất cả build PASS, đã trên `main` + auto-deploy Vercel. Quy trình+nhật ký: `docs/PORT-PLAN.md`; báo tiến độ qua Discord (`scripts/notify.sh`, WORKFLOWS FLOW 15).
- **2026-06-21:** **Màn Đánh giá độ phù hợp (`/match`) — cụm "⚡ Thử ngay với hồ sơ mẫu" chỉ hiện cho NGƯỜI MỚI** (đã code + build PASS). Trước đây hiện cho mọi user; nay dùng đúng định nghĩa mode `new` của Dashboard (chưa đánh giá lần nào VÀ chưa có đơn nào) → 3 nhóm còn lại (evaluated_no_apps / few / many) bỏ cụm này cho gọn, nhất quán với thẻ chào mừng Dashboard (vốn cũng chỉ hiện cho người mới). `match/page.tsx` chuyển sang server component async, query 2 count (match_jobs/applications). Mockup `cham-diem.html` ghi chú điều kiện hiển thị.
- **2026-06-21:** **Card "📄 CV (Đơn ứng tuyển)" màn Đánh giá — đại tu (đã code + build PASS + đồng bộ mockup).** (1) **Bố cục**: ô chọn CV + 2 tab lên cùng hàng tiêu đề (`.cv-head`), dropdown rộng 520px. (2) **Dropdown**: nhãn nút CHỈ tên file (bỏ "· mặc định"); dòng con thêm **dung lượng file** (vd "· 145 KB", lấy từ Storage — không thêm cột DB); **icon ☆/👁/🗑 LUÔN hiện** (không cần hover); **bỏ dấu ✓**, dòng đang chọn **tô nền + viền tím**; **tooltip** ☆/👁/🗑 style viền tím (giống tooltip PDF). (3) **Tab Tải PDF**: nút "📎 Chọn tệp PDF" + chip file + ✕; **tải lên TỰ lưu vào Thư viện** (không tự mặc định) — bỏ nút lưu thủ công; giữ nút "☆ Đặt làm CV mặc định"; Thư viện đủ 10 → dùng một lần. (4) **Mặc định**: chỉ đổi khi bấm ☆ (chọn CV / tải PDF KHÔNG tự mặc định). (5) **Hiệu ứng "AI đang đọc CV"** ~800ms (spinner + "Đang đọc {tên}…") khi chọn CV; tab Tải PDF dùng cùng spinner (bỏ dòng "Đang bóc text…"); tắt khi reduced-motion — `docs/grill/2026-06-21-hieu-ung-doc-cv-khi-chon.md`. (6) **Chuyển tab** = không giữ lựa chọn cũ; quay lại "Thư viện" tự chọn lại CV mặc định.
- **2026-06-21:** **Màn Tổng quan + Hồ sơ mẫu — đồng bộ mockup & nâng dữ liệu mẫu (đã code + build PASS).** (1) **Thẻ chào mừng người mới** (`WelcomeCard`): thêm **nền + viền tím** (class `welcome`) + **nút đóng ✕** (đóng tạm trong phiên) + **3 bước bấm được → /match** (đồng bộ mockup `dashboard.html`). (2) Thẻ "Số lượt đánh giá" khi 0 lượt: đổi gợi ý **"Bắt đầu lần đầu nhé" → "Đánh giá CV ngay"**. (3) **Hồ sơ mẫu** (`/sample/[role]`): nâng dữ liệu 3 vai trò (VI `sampleData.ts` + EN `sampleData.en.ts`) từ định dạng cũ (chỉ `note`) lên **cấu trúc luồng thật**: mỗi nhóm có **2 cột (JD yêu cầu / CV thể hiện) + hộp "💡 Đánh giá từ AnalyzeCV AI"** (`jdRequires`/`cvShows`/`minus`). Trước đó kết quả mẫu thiếu các phần này. Popup processing (`AiWaitOverlay`) + thân kết quả (`ResultBody`) vốn đã dùng chung với luồng thật nên không cần sửa.
- **2026-06-21:** **Hiệu ứng card đồng bộ Tổng quan + sửa chữ trạng thái trống (đã code + build PASS).** (1) **Hiệu ứng "trượt vào"** (class chung `.fx-in`, dùng lại keyframe `statIn`): card các màn **Đánh giá** (hồ sơ mẫu → stepper → CV → JD), **Lịch sử** (4 thẻ chỉ số → card bảng), **Quản lý ứng tuyển** (thẻ chỉ số → card bảng) trồi lên lần lượt khi tải; **hover-nhấc thẻ chỉ số** (`.stat-grid .stat`) giống Tổng quan; tắt khi reduced-motion. (2) **Sửa chữ trạng thái trống**: Lịch sử bỏ "Trang chính" → "màn Đánh giá độ phù hợp"; Quản lý ứng tuyển "job" → "đơn" ("Chưa có đơn nào", "+ Thêm đơn đầu tiên"); thêm 3 chỗ phụ dùng "Trang chính" → "màn Đánh giá độ phù hợp"/"Tổng quan" (niNoLib, errOnlyPdfTxt, nút back). (3) **Nút CTA "✨ Đánh giá CV ngay"** ở empty-state màn Lịch sử (người mới) dẫn sang `/match`. (4) **Bỏ ký hiệu "CV ↔ JD"** ở mọi chỗ hiển thị (empty-state Lịch sử + tiêu đề tab `layout.tsx`) → "CV và JD" / "độ phù hợp giữa CV và JD" (comment code giữ nguyên). Tất cả song ngữ VI + EN.
- **2026-06-21:** **Tinh chỉnh bộ lọc + nút CTA màn Lịch sử / Quản lý ứng tuyển (đã code + build PASS).** (1) **Nút CTA dùng chung**: gỡ `.btn`/`.btn.primary` khỏi giới hạn `.dash-cta` → nút "Đánh giá CV ngay" (empty-state Lịch sử) cùng style nút Tổng quan. (2) **Bỏ filter "Tất cả vị trí"** màn Lịch sử (tìm kiếm + cột vẫn còn vị trí). (3) **Sắp thứ tự bộ lọc khớp thứ tự cột** (search luôn đầu): Lịch sử = %→File→Trạng thái→Ngày; Quản lý ứng tuyển = Nền tảng→Ngày→Trạng thái→%. (4) **Lịch sử lọc "Ngày đánh giá"** (không phải "Ngày ứng tuyển") — `DateRangeFilter` nhận prop `labelText`/`titleText`. (5) **Filter file CV → chọn-nhiều** (đổi native select → component `MultiSelect`, UI giống filter Trạng thái). (6) **Filter trạng thái AI đánh giá → badge có màu** (thêm `badgeFromValue`, giống filter trạng thái Ứng tuyển). Tất cả song ngữ VI + EN.
- **2026-06-21:** **Thanh điều hướng màn chi tiết + sửa nút Import (đã code + build PASS).** (1) **Làm lại nút "quay lại"** màn chi tiết (Kết quả đánh giá / Lịch sử `/match/[id]`): từ link chữ trơn "‹ Tên" → **nút pill** (icon mũi tên SVG + nơi đến, nền `panel-2`, hover viền/chữ tím + trượt nhẹ trái); gom nút back + chip "Thuộc đơn" vào thanh `.detail-nav`. Bỏ tiền tố "‹ " khỏi 6 nhãn back (VI + EN). (2) **Sửa lỗi nút Import** màn Quản lý ứng tuyển: `{t("import")}` trỏ vào OBJECT (cụm text popup) nên render lỗi → thêm nhãn chuỗi riêng **`importLabel` = "⬆ Import"** (đối xứng "⬇ Export"). Song ngữ VI + EN.
- **2026-07-09:** **Xuất PDF kết quả đánh giá (đã code + build PASS).** Thêm nút **"⬇ Xuất PDF"** ở màn Kết quả (`/match/[id]`, cả ứng viên lẫn HR) — dùng **in trình duyệt** (`window.print()`) thay vì thư viện, kèm khối `@media print` trong `globals.css`: ẩn khung app + nút bấm + confetti + khối CV/JD gốc, ép bảng màu SÁNG (nền trắng chữ đen), chống cắt thẻ giữa 2 trang. Nội dung PDF = toàn bộ kết quả. Chốt hướng qua 2 câu hỏi (in trình duyệt / toàn bộ nội dung) — `docs/grill/2026-07-09-xuat-pdf-ket-qua.md`. Kiểm layout in bằng Playwright + Chrome hệ thống trên trang mẫu `/sample/frontend`. Cũng tối ưu tốc độ Dashboard cùng buổi (commit riêng trước đó).
- **2026-06-19:** **Tinh chỉnh Dashboard + Quản lý ứng tuyển (nhiều lượt, đã code + push + build PASS).** (1) **Quy trình**: chốt 2 luồng rà soát mockup↔web (WORKFLOWS FLOW 16) + bỏ Figma khỏi vòng review. (2) **Thông điệp Tổng quan 4 trường hợp** + cặp CTA cố định + H1 người mới "Chào mừng…". (3) **Hiệu ứng**: câu chào gõ chữ, trượt-vào lần lượt, pulse ô (1), nút mẫu thở+nam châm, empty-state radar, hover thẻ — tắt khi reduced-motion. (4) **Tổng quan ứng tuyển (Pipeline Kanban)** dùng chung cho ít/nhiều đơn; thêm thẻ **% phù hợp thấp nhất** (5 thẻ); **bấm card pipeline → Quản lý ứng tuyển + quét sáng dòng** (AI Scanline Fade). (5) **Rule chữ dài → "…" + tooltip khi bị cắt** (Dashboard + bảng Lịch sử + cột Công ty/Vị trí Quản lý ứng tuyển; tooltip fixed thoát khung cuộn); nới rộng cột bảng đơn. (6) **Thuật ngữ**: chốt **"Lượt đánh giá"** (bỏ "Lần đánh giá") toàn hệ thống. (7) Trần **Thư viện CV 5→10**. (8) Login Google luôn hỏi chọn tài khoản (`prompt=select_account`). Chi tiết: `docs/grill/2026-06-19-*.md`; bộ nhớ: review-mockup-web-two-flows, no-auto-open-app-mockup, ui-long-text-ellipsis.
