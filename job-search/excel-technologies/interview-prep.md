# Chuẩn bị phỏng vấn — Excel Technologies (Senior/Middle BA)

Phỏng vấn: sáng thứ Sáu (28/08/2026). Target: **Middle** (không gồng Senior).
Đọc file này + `company-reviews.md` trước khi đi phỏng vấn.

## ⚠️ 2 rủi ro cần chuẩn bị câu trả lời sẵn (quan trọng nhất)

### 1. Thời gian ở công ty hiện tại (Vietnix) chỉ ~10 tháng
CV ghi Vietnix: Oct 2025 – Present. Tính đến 28/08/2026 là **~10 tháng**. Nhà tuyển dụng gần như chắc chắn hỏi "vì sao mới vào công ty chưa đầy 1 năm đã muốn chuyển?" — đây là câu hỏi rủi ro cao hơn cả mốc "3 năm kinh nghiệm". Cần chuẩn bị lý do thật, trung thực, không nói xấu công ty cũ (vd: dự án đã đến giai đoạn production-ready/cutover pending — điểm dừng tự nhiên; hoặc lý do cá nhân khác). **Bạn tự quyết định lý do thật — đừng để mình bịa hộ.**

### 2. Mốc "ít nhất 3 năm kinh nghiệm BA" — tính đúng ra chưa đủ
JD yêu cầu "Ít nhất 03 năm kinh nghiệm làm Business Analyst". Cộng dồn từ NDS (Nov 2023) đến nay (08/2026) là **~2 năm 9-10 tháng**, chưa tròn 3 năm. CV ghi "~3 năm" (làm tròn). Nếu bị hỏi xoáy vào số tháng chính xác, nên trả lời tự tin bằng chiều sâu phạm vi công việc (sole BA trên hệ thống 40 module, BA+PO trên nền tảng AI phục vụ 3 khách hàng Tier-1) thay vì né tránh con số.

## Đối chiếu JD ↔ CV — bạn mạnh chỗ nào

| Yêu cầu JD | Bằng chứng từ CV | Đánh giá |
|---|---|---|
| Ưu tiên ERP, CRM, Retail, Inventory, E-commerce | ERP greenfield 40 module (Vietnix); Retail Execution AI SaaS phục vụ Pepsi/BEL/SABECO (NDS); order-to-cash, CRM module, self-service purchase journey | **Rất mạnh** — gần như khớp thẳng, đây là điểm bán hàng số 1 |
| Ưu tiên chứng chỉ BA quốc tế (IIBA) | IIBA Business Analysis Foundations (2024), IIBA BA-PM Collaboration (2024) | ✅ Khớp |
| Tài liệu hóa yêu cầu, Flow Chart, đặc tả chức năng/phi chức năng | BRD/PRD/SRS, User Stories & AC, BPMN 2.0 As-Is/To-Be (Draw.io) | ✅ Mạnh |
| Thiết kế giao diện mẫu (Prototype) | UI design/design review trong Figma | ✅ Khớp, nhưng CV nghiêng về "design review" hơn "tự thiết kế" — nên làm rõ mức độ trực tiếp thiết kế khi được hỏi |
| Giám sát tiến độ dự án | Owned Jira backlog, sprint planning, Estimate vs Actual tracking (vai trò Product Owner ở NDS) | Tương đối — đây là góc PO/backlog, không hẳn là "giám sát tiến độ" kiểu PM truyền thống. Nên chủ động đóng khung theo hướng Agile thay vì né |
| Use Case Specification | Có liệt kê trong Areas of Expertise | ✅ |
| Kỹ năng mềm (giao tiếp, phản biện, thích ứng) | Discovery workshop 5 phòng ban, làm việc 4 nhóm chức năng (Product/Dev/QC/AI-ML) | ✅ Có dẫn chứng cụ thể |

**Điểm khác biệt đáng nói thêm dù JD không hỏi trực tiếp:** quy trình AI-assisted specification (giảm ~30% thời gian chuẩn bị yêu cầu) — đáng chủ động đưa ra vì hiếm ứng viên BA có kỹ năng này, và công ty đang làm sản phẩm công nghệ cao nên khả năng cao được đánh giá cao.

## Dự đoán câu hỏi + hướng trả lời (dùng số liệu thật, đừng bịa thêm)

**1. Giới thiệu bản thân / kinh nghiệm BA**
→ Đi theo 2 công ty: Vietnix (ERP greenfield, sole BA, 40 module, 15,000+ khách hàng) → NDS (Retail Execution AI SaaS, 500K đánh giá AI/tháng, 3 khách hàng Tier-1 FMCG). Chốt bằng: sở hữu toàn bộ vòng đời requirements từ elicitation đến UAT sign-off.

**2. Kinh nghiệm với ERP/CRM/Retail/Inventory/E-commerce cụ thể ra sao?**
→ ERP: một mình đặc tả 26 module ERP nội bộ + 14 module storefront khách hàng, chạy 5 workshop khám phá nghiệp vụ ở 5 phòng ban.
→ Retail: visibilityPRO — chuyển từ chấm điểm trưng bày thủ công sang AI, phục vụ Suntory PepsiCo (60K+ điểm bán), BEL, SABECO.

**3. Quy trình thu thập & phân tích yêu cầu?**
→ Discovery workshop → surface pain points → FIT-GAP (đánh giá platform có sẵn vs xây mới, ví dụ case SABECO/BEL) → dịch thành MVP scope.

**4. Cách tài liệu hóa yêu cầu, công cụ dùng?**
→ User Stories + edge-case-driven AC trên Confluence (125+ ở Vietnix, 250+ ở NDS), SRS, BPMN 2.0 trên Draw.io, UI trên Figma, quản lý bằng Jira.

**5. Ví dụ xử lý yêu cầu mâu thuẫn giữa các stakeholder?**
→ Cần 1 câu chuyện thật (vd. từ 5 phòng ban ở Vietnix có pain points khác nhau, hoặc từ phối hợp 3 bên ở case BEL: client + vendor SFA bên thứ 3 + NDS dev). **Tự chuẩn bị trước 1 tình huống cụ thể theo khung STAR (Situation-Task-Action-Result), đừng ứng biến tại chỗ.**

**6. Theo dõi tiến độ dự án, xử lý rủi ro trễ?**
→ Owned Jira backlog, sprint planning/backlog refinement, track Estimate vs Actual để giữ deadline (vai trò PO ở NDS, 4 team chức năng).

**7. UAT thực hiện thế nào, xử lý khi fail?**
→ Viết test scenario truy vết được tới User Story/AC, tổ chức validation session với các trưởng phòng, đạt ~90% pass rate lần đầu — cần chuẩn bị thêm 1 ví dụ khi UAT **fail** và cách xử lý (10% còn lại), vì CV chỉ nói phần thành công.

**8. Bạn dùng AI trong công việc BA thế nào?** (Điểm mạnh riêng, chủ động nêu ra)
→ Domain research → edge-case mapping → AI draft User Stories/AC/flow/UI → validation gate thủ công trước khi chấp nhận. Giảm ~30% thời gian chuẩn bị yêu cầu. Đây cũng chính là cách xây dựng personal project AnalyzeCV.

**9. Vì sao muốn chuyển việc / rời Vietnix sau ~10 tháng?**
→ **Phải tự trả lời bằng lý do thật của bạn** — mình không bịa hộ. Gợi ý khung: liên hệ tới việc dự án đã "production-ready, cutover pending" (điểm dừng tự nhiên), tránh nói tiêu cực về công ty cũ.

**10. Mong muốn mức lương?**
→ Để công ty ra range trước nếu được hỏi trong vòng đầu. Nếu bị hỏi ngược, đưa khoảng **22–26 triệu VNĐ/tháng** (xem chi tiết lý do trong `company-reviews.md`).

## Câu hỏi nên hỏi ngược lại nhà tuyển dụng

**Xác minh công ty (mới, từ research hôm nay):**
- "Em có đọc được là Excel Technologies có liên kết với Tập đoàn GREENFEED — anh/chị có thể xác nhận và chia sẻ thêm về mối quan hệ này không?" (JD có câu "thành viên của một Tập Đoàn đang phát triển" nhưng chưa xác nhận 100% từ nguồn chính thức)
- "Vị trí BA này sẽ làm chính cho sản phẩm/dự án nào — ERP nội bộ, hay 1 trong các sản phẩm như Wisere/DigiFarm/DigiAqua, hay 1 dự án mới?"

**Về team & quản lý (từ mâu thuẫn review đã tổng hợp):**
- Số lượng BA/PM hiện tại trong team, quản lý trực tiếp là ai và phong cách quản lý?
- Tỷ lệ nghỉ việc (turnover) trong ~1 năm gần đây?
- Hiện đang chạy song song bao nhiêu dự án?
- Vị trí này mở do mở rộng team hay thay thế người cũ?

**Về cách làm việc:**
- Quy trình phát triển là Agile/Scrum hay Waterfall? BA phối hợp với Dev/QC như thế nào trong 1 sprint/giai đoạn?

## Lương — tóm tắt (chi tiết đầy đủ ở company-reviews.md)

- Công ty không công khai số liệu lương nội bộ; JD ghi "Thoả thuận".
- Range thị trường Middle BA tại TP.HCM: 20-30tr (tùy nguồn).
- **Định vị đề xuất: 22–26 triệu VNĐ/tháng** — để công ty ra số trước nếu được, nếu bị hỏi ngược thì đưa khoảng này.
