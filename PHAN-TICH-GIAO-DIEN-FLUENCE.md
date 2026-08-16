# 🎨 Phân tích giao diện Fluence AI → áp dụng cho portfolio AnalyzeCV

Nguồn tham chiếu: <https://fluence.framer.website/> (template Framer "Fluence AI", tác giả Amani).
Đích áp dụng: <https://myphuong-businessanalyst-portfolio.vercel.app/> (thư mục [site/](site/)).

Cách phân tích: mở site bằng Chrome DevTools ở khung nhìn desktop 1440×900, đọc trực tiếp
DOM + computed style + dữ liệu animation mà Framer nhúng trong trang
(`__framer__appearAnimationsContent`), chụp lại từng section, rồi đối chiếu sang các trang phụ.
Mọi con số dưới đây là **đo được**, không phải ước lượng bằng mắt.

_Cập nhật: 16/08/2026._

---

## 1. 🧱 Nền tảng hệ thống thiết kế (design tokens)

### 1.1. Bảng màu

| Vai trò | Mã màu | Ghi chú sử dụng |
|---|---|---|
| Nền trang (paper) | `#F6F4F1` | Nền chủ đạo, be–kem chứ không phải trắng |
| Nền chìm (sunken) | `#EBE7E1` | Khung marquee, thẻ testimonial, vùng "lún" |
| Trắng thẻ | `#FFFFFF` | Feature card, product card, FAQ mở |
| Trắng ngà | `#FBFBF8` | Nền phụ trong thẻ |
| Mực (ink) | `#0B0B09` | Chữ chính + nền các khối tối |
| Mực nhạt | `rgba(11,11,9,.6)` | Chữ mô tả, caption |
| Cam nhấn | `#FC5725` | Nút chính, số liệu, badge, icon |
| Cam nhạt | `#F87C56` | Ô icon bo góc, chấm trạng thái |
| Gradient cam | `linear-gradient(#F59B7F → #FC5725)` | Huy hiệu tròn (SOC 2, GDPR…) |
| Đường kẻ trên nền tối | `rgba(255,255,255,.08–.11)` | Vách ngăn cột số liệu |

**Nguyên tắc quan trọng:** chỉ có **một** màu nhấn duy nhất (cam). Toàn bộ phần còn lại là
thang xám–kem–đen. Cam chỉ xuất hiện ở: nút chính, số liệu lớn, icon nhỏ, badge số thứ tự,
dấu sao trong eyebrow. Không dùng cam cho chữ dài.

### 1.2. Chữ

| Cấp | Font | Cỡ / line-height | Weight |
|---|---|---|---|
| H1 (hero) | General Sans | 56 / 66 px (1.18) | 500 |
| H2 (tiêu đề section) | General Sans | 44 / 52.8 px (1.2) | 500 |
| H3 (tiêu đề thẻ lớn) | General Sans | 32 / 38.4 px (1.2) | 500 |
| H4 (tiêu đề thẻ) | General Sans | 24 / 28.8 px (1.2) | 500 |
| Body | Inter | 16 / 26 px | 400 |
| Body nhỏ | Inter | 14 / 22 px | 400 |
| Eyebrow | IBM Plex Mono | 12 / 16 px, UPPERCASE, giãn chữ ~0.08em | 400 |

Ba điều đáng học:

1. **Tiêu đề không bao giờ bold.** Toàn bộ heading dùng weight 500 (medium) ở cỡ rất lớn —
   đây là thứ tạo cảm giác "cao cấp, bình tĩnh" thay vì "landing page bán hàng".
2. **Ba họ chữ, ba vai trò tách bạch:** sans hình học cho tiêu đề, sans trung tính cho đoạn văn,
   mono cho nhãn/eyebrow/số.
3. **Line-height tiêu đề rất chặt (1.1–1.2)**, còn body rất thoáng (1.6).

### 1.3. Bo góc, bóng, viền

- Bo góc: `8px` (mặc định, nút + khối lớn) · `12px` (thẻ) · `16px` (container lớn) · `999px` (pill).
- Bóng rất nhẹ, chồng nhiều lớp mỏng:
  - thẻ: `0 1px 2px rgba(0,0,0,.08)`
  - nổi: `0 4px 16px rgba(0,0,0,.05)`
  - nav khi cuộn: `0 10px 16px rgba(0,0,0,.15)`
- **Chi tiết "gương" đáng chép:** nút tối và thanh nav có `box-shadow: inset 0 2px 0 rgba(255,255,255,.24)`
  (một vệt sáng mỏng ở mép trên) và `inset -1px -1px 0 rgba(255,255,255,.3), inset 1px 1px 0 rgba(255,255,255,.15)`
  → tạo cảm giác vật liệu kính, không phải hình chữ nhật phẳng.

### 1.4. Khung trang & nhịp khoảng cách

- `body` có **padding 8px quanh toàn trang** → mọi khối tối bên trong bo góc `8px`, tạo hiệu ứng
  "trang giấy nằm trong khung". Đây là chi tiết nhỏ nhưng quyết định phần lớn cảm giác của template.
- Container nội dung: `max-width: 1280px`, padding ngang `16–30px`.
- Padding dọc mỗi section: `100–120px` (desktop) / `50–60px` (tablet).
- Khoảng cách giữa cụm tiêu đề và nội dung: `gap: 60px`.
- Lưới thẻ: `gap` 16–24px.

---

## 2. 🧭 Thanh điều hướng — hai trạng thái biến hình

| | Ở đỉnh trang | Sau khi cuộn |
|---|---|---|
| Chiều rộng | 1240px (full container) | **610px** (co lại, canh giữa) |
| Nền | `rgba(0,0,0,.25)` + `backdrop-blur(8px)` | `rgba(0,0,0,.92)` + `backdrop-blur(4px)` |
| Bóng | chỉ viền kính inset | thêm `0 10px 16px rgba(0,0,0,.15)` |
| Logo | icon + chữ "Fluence AI" | **chỉ còn icon** |

Cả hai đều `position: fixed; top: 0`, cao 56px, bo góc 12px, padding 10px.
Chuyển giữa hai trạng thái là animate width + background + opacity của wordmark.
Trên các trang nền sáng (Pricing/Blog), nav đổi sang nền kem chữ đen — nav **thích ứng theo nền trang**.

---

## 3. 📄 Bóc từng section của trang chủ

Tổng chiều cao trang: **11.525px** ở khung 1440. Thứ tự và kích thước thật:

| # | Section | Top | Cao | Nền |
|---|---|---|---|---|
| 1 | Hero (video nền) | 8 | 1136 | đen |
| 2 | Trust Bar (logo chạy) | 1144 | 192 | kem |
| 3 | Problem Statement | 1336 | 829 | kem |
| 4 | AI Features (4 thẻ) | 2165 | 1391 | kem |
| 5 | Product Overview (3 khối zig-zag) | 3556 | 2127 | kem |
| 6 | Use Cases (danh sách xoay vòng) | 5683 | 784 | kem |
| 7 | Why Fluence (khối tối + số liệu) | 6467 | 1030 | `#0B0B09` |
| 8 | Customer Stories (carousel) | 7496 | 785 | kem |
| 9 | Implementation Steps (3 bước) | 8281 | 924 | kem |
| 10 | Integrations (2 hàng marquee) | 9205 | 645 | kem |
| 11 | FAQ (accordion 2 cột) | 9850 | 754 | kem |
| 12 | CTA + Footer | 10604 | 914 | `#0B0B09` |

### 3.1. Hero
- Nền là **video `.mp4` autoplay/muted/loop, `object-fit: cover`**, bo góc 8px, phủ gradient
  `linear-gradient(transparent → #000)` ở đáy để chữ luôn đọc được.
- Nội dung canh giữa: eyebrow pill tối (icon sao cam + mono in hoa) → H1 56px → mô tả 16/26 →
  **một ô "chat giả"** (khung tối, bo 12, viền mảnh) → dưới đó là 3 dòng gợi ý agent trôi lên
  theo kiểu băng chuyền dọc, dòng ở giữa rõ nhất, trên/dưới mờ dần.
- Padding dọc: `172px 30px 350px` — khoảng trống dưới rất lớn để nhìn thấy tranh nền.

### 3.2. Trust Bar
- Nhãn mono "WE ARE TRUSTED BY" → hàng logo xám chạy ngang vô tận (duration ~10s, `linear`).
- Hai đầu băng có **overlay gradient trùng màu nền** (`linear-gradient(90deg, #EBE7E1 35%, transparent)`
  và bản 270deg) để logo tan dần ở mép — không dùng mask.

### 3.3. Problem Statement — ⭐ hiệu ứng chữ hiện theo cuộn
Đây là hiệu ứng chữ ký của template, xuất hiện 2 lần (mục 3 và mục 7):

- Cả đoạn tiêu đề được cắt thành **từng từ, mỗi từ một `<span style="display:inline-block; margin-right:.25em">`**.
- Container đặt `position: sticky; top: 0` bên trong một khối cao hơn → chữ đứng yên trong khi trang cuộn.
- Theo tiến độ cuộn, `opacity` của từng từ chạy từ **0.2 → 1** (có thể kèm `filter: blur()`),
  mỗi từ có `transition: opacity .2s ease-out, filter .2s ease-out`.
- Kết quả: câu văn "sáng dần theo nhịp đọc" chứ không phải fade cả khối.
- Dưới đoạn đó là 3 dòng: ô icon cam bo góc 8 · nhãn bên trái · mô tả bên phải · kẻ ngang mảnh giữa các dòng.
- Nền section có hoa văn chấm bi (dot pattern) rất mờ.

### 3.4. AI Features — lưới 2×2
- Cụm tiêu đề canh **trái** (eyebrow → H2 44px → lede xám).
- 4 thẻ trắng, bo 12, padding 8, mỗi thẻ = **vùng minh hoạ trên + chữ dưới**.
- Vùng minh hoạ: nền lưới ô vuông mờ + các mảnh UI giả (input, thẻ nhỏ, thanh tiến trình) nổi lên
  với bóng nhẹ; các mảnh này có animation nhỏ lặp lại (trôi/nhấp nháy).
- Chữ: H4 24px + mô tả 14/22 xám.

### 3.5. Product Overview — zig-zag
- Cụm tiêu đề canh **giữa** (H2 44px + lede tối đa ~700px).
- 3 khối lớn xen kẽ trái/phải: một bên là chữ (H3 32px + mô tả + **checklist 3 dòng** với icon tròn ✓),
  bên kia là ảnh minh hoạ nền xanh đậm với panel nghiêng 3D (ảnh dựng sẵn, không phải CSS transform).
- Khối bọc ngoài: nền trắng ngà, viền mảnh, bo 16.

### 3.6. Use Cases — danh sách tự xoay
- Trái: ảnh bo 12 + **pill nổi ở đáy ảnh** chứa dòng chữ gõ dần (typewriter) + nút mũi tên tròn.
- Phải: 4 mục xếp dọc (32px). Mục đang hoạt động = đen đậm, các mục còn lại = xám nhạt.
  Ảnh bên trái đổi theo mục đang hoạt động, tự chạy vòng.
- Dưới cùng: mô tả + nút "Get Started".

### 3.7. Why Fluence — khối tối
- Nền `#0B0B09`, bo góc 8, hoa văn chấm mờ, chiếm gần trọn chiều ngang (trong khung 8px của body).
- Lặp lại hiệu ứng **chữ hiện theo cuộn** (trắng ↔ xám mờ 0.2).
- Hàng 3 số liệu: số cam cỡ ~40px (`3x`, `40%`, `12h`) + nhãn trắng đậm + mô tả xám,
  ngăn nhau bằng vách dọc `rgba(255,255,255,.08)`.
- Dưới cùng: khối "Enterprise-Grade Security" + các **huy hiệu tròn gradient cam chồng mép nhau**.

### 3.8. Customer Stories — carousel
- Tiêu đề trái, **2 nút tròn đen ‹ ›** ở góc phải cùng hàng.
- 3 thẻ nền `#EBE7E1`, bo 12: logo khách hàng ở trên, khoảng trống, rồi số lớn (`90%`) + nhãn ở đáy.
- Số chạy count-up khi thẻ vào tầm nhìn (thấy rõ vì lúc chưa kích hoạt hiển thị `0%`).

### 3.9. Implementation Steps — 3 bước
- Tiêu đề canh giữa. 3 thẻ ngang bằng nhau.
- Mỗi thẻ: vùng minh hoạ nền lưới + mock UI + mảng cam đặc, rồi
  **badge số vuông bo góc màu cam (1, 2, 3)** đứng ngay trước tiêu đề H4.

### 3.10. Integrations
- Tiêu đề canh giữa → khung nền `#EBE7E1` bo 16 chứa **2 hàng icon chạy ngược chiều nhau**;
  icon là ô trắng bo 8–12 có bóng nhẹ; hai mép fade bằng gradient trùng nền.

### 3.11. FAQ
- 2 cột: trái là eyebrow + H2 + "Still have a question?" + nút đen "Contact Us" (cột này dính khi cuộn);
  phải là accordion.
- Mỗi dòng accordion: câu hỏi 16px + icon `+` / `–` bên phải; dòng đang mở có nền sáng hơn,
  nội dung trả lời 14/22 xám, chiều cao mở/đóng có animation.

### 3.12. CTA + Footer
- Một khối tối full-bleed dùng lại ảnh/video nền hero: eyebrow pill → H2 44px canh giữa →
  **2 nút cạnh nhau**: cam đặc "Get Started" + trắng "Book a Demo".
- Footer là **một thẻ tối bo 16 nằm đè lên ảnh nền**, cách mép 30px:
  trái là icon mạng xã hội + tagline + copyright + logo; phải là 3 cột link (Main / Company / Others).

---

## 4. 📑 Các trang phụ

### 4.1. `/about-us`
Hero canh giữa (eyebrow → H1 → lede → **ảnh ngang lớn**) → **thanh 3 số liệu count-up** →
section "Our Mission" dùng lại hiệu ứng chữ hiện theo cuộn → **lưới 4 thẻ nhân sự** (ảnh + tên + chức danh)
→ danh sách tuyển dụng dạng **dòng ngang** (tên vị trí · địa điểm · nhóm · nút mũi tên vuông đen) → CTA + Footer.

### 4.2. `/pricing`
Tiêu đề canh giữa → **switch Monthly/Yearly** dạng pill có badge "Save 20%" → 3 thẻ giá.
Thẻ giữa được làm nổi bằng **viền cam + nền hồng nhạt + badge cam "MOST POPULAR"**.
Mỗi thẻ: tên gói · mô tả · giá cỡ lớn · danh sách ✓ · nút đen full-width ở đáy.
Tái sử dụng lại Trust Bar, Customer Stories, FAQ, CTA.

### 4.3. `/blog`
Lưới 3 thẻ: ảnh phủ **gradient duotone** (hồng/xanh/tím) + hàng meta (pill danh mục viền mảnh +
ngày tháng bằng mono) + tiêu đề 2 dòng.

### 4.4. Nhận xét về kiến trúc thông tin
Toàn site chỉ có ~5 loại section được dùng lại (hero, lưới thẻ, khối tối số liệu, marquee, FAQ/CTA).
Sự phong phú đến từ **nhịp bố cục** (trái → giữa → zig-zag → tối → carousel), không phải từ việc
thêm kiểu trình bày mới. Đây là bài học áp dụng được trực tiếp cho portfolio.

---

## 5. 🎬 Thư viện chuyển động (đo trực tiếp)

| Hiệu ứng | Thông số thật |
|---|---|
| **Xuất hiện khi vào tầm nhìn** | `opacity 0 → 1`, `y: 24px → 0`, `duration .4–.5s`, `ease: cubic-bezier(0.16, 1, 0.3, 1)` |
| **Stagger** | delay 0.1 → 0.2 → 0.3s giữa các phần tử cùng nhóm |
| **Hero (nhiều lớp)** | delay 0.1 / 0.2 / 1.0 / 1.3 / 1.6s, các lớp trang trí kéo dài tới 2.6s |
| **Chữ hiện theo cuộn** | per-word `opacity .2 → 1`, `transition .2s ease-out`, container `sticky top:0` |
| **Marquee** | `duration: 10s`, `linear`, lặp vô tận, 2 hàng ngược chiều |
| **Count-up** | số chạy từ 0 khi vào tầm nhìn |
| **Cuộn mượt** | dùng thư viện **Lenis** (phát hiện node `data-framer-name="Lenis"`) |
| **Giảm chuyển động** | Framer tự tắt appear animation khi `prefers-reduced-motion: reduce` |

**Easing duy nhất cần nhớ:** `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) — bung nhanh, dừng êm.
Trùng đúng easing mà portfolio hiện tại đã dùng trong [Reveal.tsx](site/components/Reveal.tsx) — nghĩa là
phần "chất chuyển động" đã đúng hướng, cái thiếu là **bố cục và vật liệu**.

---

## 6. 🔁 Bảng ánh xạ sang portfolio AnalyzeCV

| Section portfolio | Pattern Fluence áp dụng |
|---|---|
| Hero | Hero tối full-bleed + eyebrow pill mono + H1 56px + 2 nút; thay video bằng **hoa văn lưới/chấm + vòng tròn điểm số** |
| Bối cảnh (AS-IS / TO-BE) | "Problem Statement": chữ hiện theo cuộn + 3 dòng icon–nhãn–mô tả |
| Vai trò (một đội một người) | "Product Overview" zig-zag: chữ một bên, minh hoạ một bên + checklist ✓ |
| Phạm vi & nói không | Lưới 2×2 kiểu "AI Features", thẻ trắng bo 12 |
| Mô hình chấm điểm | Khối tối `#0B0B09` + số liệu cam + bảng trọng số |
| Quy trình 6 bước | "Implementation Steps": badge số cam + thẻ minh hoạ |
| Thị trường & đối thủ | Số liệu count-up + bảng so sánh giữ nguyên cấu trúc, đổi vật liệu |
| Roadmap | Lưới thẻ trạng thái NOW / NEXT / LATER (badge kiểu "MOST POPULAR") |
| Kỹ năng BA | Accordion hoặc lưới 2 cột kiểu FAQ |
| Công cụ | Marquee 2 hàng kiểu Integrations |
| Liên hệ | CTA tối + footer thẻ nổi 3 cột |

### Cần chỉnh cho phù hợp bối cảnh
1. **Font:** General Sans (Fontshare) không đảm bảo đủ dấu tiếng Việt → dùng **Plus Jakarta Sans**
   (có subset `vietnamese`) cho tiêu đề, **Inter** cho đoạn văn, **IBM Plex Mono** cho nhãn.
2. **Màu nhấn:** giữ nguyên công thức "một màu nhấn duy nhất". Cam `#FC5725` hợp với portfolio
   (ấm, khác biệt với biển teal của mọi portfolio khác), nhưng cần thêm 1 màu phụ rất tiết chế cho
   bảng so sánh (đạt / một phần / không) vì đó là dữ liệu chứ không phải trang trí.
3. **Không dùng ảnh stock người thật** như Fluence — portfolio là case study, minh hoạ phải là
   dữ liệu thật của sản phẩm (vòng trọng số, luồng trạng thái, bảng so sánh).
4. **Giữ nội dung tiếng Việt hiện có nguyên vẹn** — đây là bài viết lại giao diện, không phải viết lại nội dung.

---

## 7. ✅ Đã áp dụng — nhật ký dựng lại (16/08/2026)

Toàn bộ [site/](site/) đã được viết lại theo hệ thống trên. Những gì đã dựng:

| Thành phần mới | Vai trò |
|---|---|
| [globals.css](site/app/globals.css) | Token màu, khung 8px quanh body, hoa văn chấm/lưới, marquee keyframes, lớp `gloss` / `glass-edge` / `card-shadow` |
| [fonts.ts](site/app/fonts.ts) | Plus Jakarta Sans (display) + Inter (body) + IBM Plex Mono (nhãn), đều có subset `vietnamese` |
| [motion.ts](site/components/motion.ts) | `EASE = cubic-bezier(.16,1,.3,1)`, `fadeUp` (y 24 → 0, .5s), stagger .08 |
| [Nav.tsx](site/components/Nav.tsx) | Thanh pill nổi, co từ 1240 → 680px khi cuộn, ẩn wordmark, đổi nền + backdrop-blur |
| [Hero.tsx](site/components/Hero.tsx) | Khối tối bo 8px, eyebrow pill, H1, 2 nút, **panel kết quả đánh giá giả lập** (82% + thanh trọng số) + 3 dòng tiêu chí trôi lên |
| [ScrollWords.tsx](site/components/ScrollWords.tsx) | Chữ hiện theo cuộn từng từ (opacity .18 → 1 + blur 4px → 0), dùng ở Bối cảnh và Mô hình chấm điểm |
| [Marquee.tsx](site/components/Marquee.tsx) | Băng chạy 2 chiều + fade mép, dùng ở Trust Bar và Công cụ |
| [SplitBlock.tsx](site/components/SplitBlock.tsx) | Khối zig-zag chữ + checklist ✓ + khối minh hoạ |
| [Section.tsx](site/components/Section.tsx) | `Container` 1280px, `SectionHeader` (trái/giữa), `NightBlock` (khối tối bo góc + hoa văn + quầng sáng cam) |
| [SmoothScroll.tsx](site/components/SmoothScroll.tsx) | Cuộn quán tính Lenis + bắt anchor để cuộn có offset dưới nav |
| [Skills.tsx](site/components/Skills.tsx) | Accordion kiểu FAQ, cột trái dính khi cuộn |

**Ba điểm cố ý làm khác bản gốc:**

1. **Chỉ một chế độ sáng.** Bỏ dark-mode theo hệ điều hành của bản cũ — giống Fluence, các khối tối là
   thành phần thiết kế chứ không phải theme. Nhờ vậy tương phản luôn kiểm soát được.
2. **Không ảnh stock.** Mọi minh hoạ là dữ liệu thật của sản phẩm (panel điểm số, vòng trọng số, luồng
   trạng thái, bảng so sánh) — vì đây là case study, không phải trang bán hàng.
3. **Tôn trọng `prefers-reduced-motion`.** Khi người dùng bật giảm chuyển động: tắt Lenis, tắt marquee,
   và chữ theo cuộn hiển thị đầy đủ ngay (không mờ) thay vì kẹt ở trạng thái tối.
