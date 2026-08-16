# 📖 Câu chuyện sản phẩm — AnalyzeCV

> Tài liệu kể lại hành trình dự án **từ sơ khai đến hoàn thiện**: nỗi đau gốc, ý tưởng, định hình sản phẩm, từng tính năng và *lý do nghiệp vụ* đằng sau mỗi lựa chọn. Viết cho mục đích trình bày với nhà tuyển dụng — tập trung vào **tư duy sản phẩm**, không đi vào kỹ thuật.
>
> *Cập nhật: 13/06/2026 · Tác giả: một Business Analyst tự dựng sản phẩm thật.*

---

## 0. Một câu tóm tắt (tagline)

> **AnalyzeCV — Biết mình đứng ở đâu, trước khi nộp đơn.** Gộp việc "phân tích độ phù hợp CV với JD" và "lưu trữ" về MỘT nơi — thay cho quy trình rời rạc: phân tích ở ChatGPT/Gemini, rồi lưu rải rác ở Notion/Google Sheets.

---

## 1. Nỗi đau gốc — xuất phát từ chính tôi

Ý tưởng không đến từ một bản kế hoạch, mà từ **chính quy trình thủ công, rời rạc** của tôi khi đi tìm việc.

**Quy trình cũ (as-is) của tôi:**
1. Thấy một tin tuyển dụng đang mở.
2. Bấm vào đọc JD để **tự đoán** xem mình có phù hợp không.
3. Mang **CV + JD lên các công cụ AI** (ChatGPT, Gemini) nhờ phân tích mức độ matching.
4. AI phân tích **rất tốt** — nhưng sau đó…
5. Khi apply xong, tôi chỉ **lưu tạm lên Notion hoặc Google Sheets**.

**Vấn đề lộ ra:** phân tích nằm một nơi (chat AI), lưu trữ nằm một nơi khác (Notion/Sheets), lịch sử các lần đánh giá thì **rải rác**, không tra cứu lại được mạch lạc. *Phân tích chỗ này — lưu trữ chỗ khác.*

→ **Insight quan trọng:** thứ còn thiếu **không phải** khả năng phân tích (AI đã làm tốt rồi), mà là **một nơi gom tất cả lại**: phân tích → lưu → xem lại lịch sử, liền mạch trong cùng một sản phẩm.

**Và nỗi đau này có ở cả hai phía:**
- **Ứng viên** (như tôi): nộp CV mà mơ hồ không biết mình hợp tới đâu, thiếu gì, lưu trữ lộn xộn.
- **Nhà tuyển dụng (HR):** phải đọc tay hàng loạt CV cho một vị trí, mất thời gian, dễ bỏ sót người giỏi, dễ đánh giá cảm tính.

Cả hai đầu **đau cùng một bài toán: khớp CV ↔ JD.**

---

## 2. Vì sao chọn làm sản phẩm này (chứ không phải cái khác)

- Đây là **bài toán của chính tôi** — tôi hiểu nỗi đau nhất, nên biết phải giải gì.
- Chủ đề tuyển dụng **gần gũi, dễ kiểm chứng giá trị** ngay trên bản thân.
- Tôi muốn **tự học và dựng một sản phẩm thật** — đi trọn vẹn từ một ý tưởng nhỏ đến một web công nghệ hoàn thiện, như **minh chứng cho năng lực của một Business Analyst**: không chỉ viết tài liệu, mà thật sự đưa sản phẩm ra đời.

---

## 3. Hành trình ý tưởng — từ nhỏ đến lớn dần

Câu chuyện thú vị nằm ở chỗ **scope tự lớn lên trong lúc làm**:

1. **Ban đầu:** tôi chỉ định làm một **web tĩnh/HTML đơn giản** để tự giải quyết bài toán cá nhân — gom phân tích + lưu trữ cho riêng mình.
2. **Khi bắt tay vào làm:** ý tưởng phát triển. Tôi nhận ra cùng một bộ máy phân tích này **có thể giúp cả HR** xếp hạng ứng viên — mở ra phía người dùng thứ hai.
3. **Định hướng lại:** thay vì web tĩnh, tôi quyết định dựng một **sản phẩm web thực thụ** (có đăng nhập, lưu trữ, AI xử lý nền) để vừa giải bài toán thật, vừa rèn tư duy đưa sản phẩm từ 0 → 1.

> Đây chính là tinh thần của tài liệu này: **từ sơ khai (một ý tưởng nhỏ cho bản thân) đến hoàn thiện (một nền tảng phục vụ cả ứng viên lẫn HR).**

---

## 4. Định hình sản phẩm (Scope)

**Phục vụ ai:**
- **Ứng viên** (người dùng đầu tiên — chính là tôi): tự đánh giá CV của mình với JD trước khi nộp.
- **Nhà tuyển dụng / HR** (mở rộng sau): dán nhiều CV ứng viên cho một JD và xếp hạng.

**Giá trị cốt lõi:** gộp **phân tích + lưu trữ + lịch sử** về một nơi.

**Ranh giới — những thứ tôi CỐ Ý chưa làm** (để giữ scope gọn, kịp hoàn thiện, đúng trọng tâm):
| Không làm | Vì sao |
|---|---|
| Tự cào tin tuyển dụng / tự động nộp đơn | Không phải nỗi đau cốt lõi; người dùng tự dán JD là đủ cho MVP. |
| Tự viết / sửa nội dung CV hộ | Giữ **trung thực dữ liệu thật** — chỉ phân tích & dọn layout, không bịa nội dung. |
| SaaS thương mại nhiều người dùng | Ưu tiên giải đúng bài toán cốt lõi trước khi nghĩ tới gói dịch vụ. |
| Tích hợp ATS / gửi email tự động | Nằm ngoài trọng tâm phiên bản đầu. |
| Đăng ký tự phục vụ cho nhà tuyển dụng (radio chọn vai trò lúc đăng ký) | Cân nhắc kỹ: app tuyển dụng thị trường thường cho chọn "Ứng viên / Nhà tuyển dụng" ngay khi đăng ký. Nhưng mục tiêu hiện tại là **demo + ưu tiên ứng viên**, và mở cho nhà tuyển dụng tự đăng ký rồi dán CV người khác là **bề mặt quyền riêng tư lớn** — nên giữ Khu HR ở dạng cấp quyền thủ công, để dành phần tự phục vụ cho lúc mở SaaS phía HR (§9). *Cố ý chưa làm, không phải bỏ sót.* |

> Biết **nói "không"** với tính năng là một phần quan trọng của tư duy sản phẩm: tập trung nguồn lực vào thứ tạo ra giá trị cốt lõi.

---

## 5. Các tính năng & lý do đằng sau (vì sao làm, giúp ích gì)

### 5.1. Đánh giá độ phù hợp CV ↔ JD (cho ứng viên)
- **Giải nỗi đau:** ứng viên không còn phải tự đoán mò "mình có hợp không".
- **Cách thể hiện:** một **% tổng** + phân tích theo **6 nhóm cố định** (kỹ năng cốt lõi, công cụ, phương pháp, domain, kỹ năng mềm, kinh nghiệm) + **điểm mạnh / điểm thiếu / gợi ý cải thiện**.
- **Lý do chọn 6 nhóm cố định:** để kết quả **chuẩn hóa, so sánh được** giữa các lần — thay vì mỗi lần hỏi ChatGPT lại ra một kiểu trình bày khác nhau.

### 5.2. Lưu trữ & lịch sử ("Lần đánh giá gần đây") — **trái tim của sản phẩm**
- **Giải nỗi đau gốc:** đánh giá xong là **tự lưu lại ngay trong app**, xem lại lịch sử bất cứ lúc nào — chấm dứt cảnh "phân tích một nơi, lưu một nơi".
- Đây là điểm khác biệt cốt lõi so với việc dùng ChatGPT + Notion rời rạc.

### 5.3. Dọn & sắp xếp CV bằng AI
- **Giải nỗi đau:** CV tải từ PDF thường bị lộn xộn thứ tự, dính dòng, sai cột.
- **Cách làm:** AI sắp xếp lại gọn gàng nhưng **giữ nguyên thông tin, không bịa thêm** — tôn trọng dữ liệu thật của ứng viên.

### 5.4. Không bịa "thông tin công ty"
- **Nguyên tắc:** chỉ hiển thị thông tin công ty **nếu JD có sẵn**; không có thì để trống.
- **Lý do:** giữ **độ tin cậy** — một sản phẩm tuyển dụng mà "chém gió" thông tin là mất uy tín ngay.

### 5.5. Khu HR — xếp hạng nhiều ứng viên theo %
- **Giải nỗi đau của HR:** thay vì đọc tay hàng loạt CV, HR dán 1 JD + nhiều CV → hệ thống **đánh giá & xếp hạng theo %**, nhìn phát thấy ai nổi bật.
- **Riêng tư:** dữ liệu khu HR **tách biệt** với kho cá nhân của ứng viên thường.

### 5.6. Nội dung hướng đúng người đọc (một bài học sản phẩm thực tế)
- **Phát hiện khi rà soát:** ban đầu khu HR **dùng lại** nội dung vốn viết cho ứng viên — phần "Tips phỏng vấn" lại là *lời khuyên cho ứng viên chuẩn bị*, vô lý với HR.
- **Quyết định:** khi đánh giá ở khu HR, đổi thành nội dung **dành cho nhà tuyển dụng**:
  - "Tips phỏng vấn" → **Câu hỏi gợi ý để HR hỏi ứng viên này**.
  - "Gợi ý cải thiện" → **Lưu ý khi đánh giá** (điểm cần kiểm chứng, đào sâu).
- **Bài học:** *cùng một dữ liệu nhưng người đọc khác nhau thì cách trình bày phải khác nhau* — tư duy lấy người dùng làm trung tâm.

### 5.7. "Thông tin chung ứng viên" trong trang chi tiết khu HR
- **Quyết định:** ở khu HR, **bỏ mục "Thông tin công ty"** (HR đã biết công ty của mình — thông tin đó thừa), **thay bằng "Thông tin chung ứng viên"**: Tên, chức danh gần nhất, số năm kinh nghiệm, học vấn, kỹ năng nổi bật, thông tin liên hệ.
- **Vì sao hiển thị dạng có cấu trúc (từng dòng) thay vì đoạn văn:** HR thường **quét nhanh nhiều ứng viên**, nên dạng cấu trúc từng dòng **dễ đọc, dễ so sánh** hơn một đoạn văn dài.
- **Vì sao có thông tin liên hệ:** để HR **liên hệ ứng viên ngay** — nhưng vẫn theo nguyên tắc *chỉ lấy từ CV, không bịa*.

### 5.8. "Quản lý ứng tuyển" — lưu cả job đã nộp LẪN job sắp nộp
- **Quay lại nỗi đau gốc:** trước đây tôi lưu các job đã apply **rải rác** trên Google Sheets/Notion, tách rời khỏi phần phân tích. Tính năng này gom **lưu trữ + theo dõi** về cùng một web với phân tích — đúng giá trị cốt lõi.
- **Mở rộng quan trọng — không chỉ job ĐÃ apply, mà cả job SẮP apply.** Ngữ cảnh thật từ chính tôi: nhiều khi tìm việc **lúc nửa đêm (12h đêm)**, tôi thấy một job phù hợp nhưng **chưa kịp/chưa muốn nộp ngay** (cần sửa CV, viết cover letter, hoặc đơn giản là buồn ngủ). Nếu chỉ để tab mở hoặc copy tạm vào đâu đó thì **rất dễ quên mất job hay**. Giải pháp: lưu ngay vào web với trạng thái **"Sắp ứng tuyển"** → hôm sau quay lại nộp, không bỏ sót.
- **Vì vậy trang quản lý TRỌN vòng đời ứng tuyển:** *Sắp ứng tuyển → Đã nộp → Sàng lọc → Phỏng vấn → Offer → Đã nhận / Từ chối / Đã rút.* Kèm thẻ thống kê, tìm kiếm, lọc, xuất/nhập (CSV), và mỗi job nối được tới kết quả đánh giá (% độ phù hợp + phân tích).
- **Giá trị:** một nơi duy nhất cho cả *"việc định làm"* lẫn *"việc đã làm"* → không bỏ sót cơ hội (nhất là job thấy lúc nửa đêm), không còn cảnh rải rác mỗi nơi một ít.

### 5.9. "Đánh giá độ phù hợp" ngay từ đơn ứng tuyển
- **Ý tưởng:** sau khi lưu một job vào "Quản lý ứng tuyển", ứng viên muốn đánh giá độ phù hợp **ngay tại màn quản lý** mà **không phải upload CV lại** từ đầu.
- **Luồng:** đơn chưa đánh giá → bấm **"Đánh giá"** (ngay hàng thao tác) → hệ thống **đọc file CV đã đính kèm** (lấy nội dung) + **JD đầy đủ** đã lưu trong đơn → tạo một lần đánh giá → **tự gắn % độ phù hợp ngược vào đơn** → mở trang kết quả. Đơn đã đánh giá thì cột "Độ phù hợp" đã sẵn link **"Xem phân tích"**.
- **Vì sao lấy CV từ file đã đính kèm:** tận dụng CV ứng viên đã gắn vào đơn → khỏi tải lên lại, giảm thao tác lặp.
- **Nguồn JD — vì sao thêm ô "JD (nội dung đầy đủ)":** lúc lưu job (kể cả nửa đêm), ứng viên thường đã copy sẵn nội dung JD. Có sẵn một ô để dán JD → khi bấm đánh giá dùng luôn, khỏi dán lại. *(Dùng "tóm tắt yêu cầu" thay cho JD thì kém chính xác vì chỉ là tóm lược.)*
- **Vì sao nút hiện theo ngữ cảnh:** nếu đơn đã từng đánh giá (đã có %), không cần đánh giá lại — chỉ cần **"Xem phân tích"**; đơn chưa đánh giá mới hiện **"Đánh giá"**. Tránh thao tác thừa.
- **Vì sao đặt nút ở hàng thao tác:** để **1 chạm** là đánh giá được ngay — tiện nhất; còn job đã đánh giá thì cột "Độ phù hợp" đã có sẵn link xem.
- **Giá trị:** khép kín vòng **"lưu job → đánh giá → theo dõi"** trong cùng một chỗ — đúng tinh thần gộp phân tích + lưu trữ.

---

## 6. Vì sao thiết kế đánh giá như vậy — lý giải từng quyết định

Phần này trả lời những câu nhà tuyển dụng hay hỏi: *"Tại sao lại làm thế này, sao không làm cách khác?"*

### a) Vì sao đánh giá theo ĐÚNG 6 nhóm này (mà không phải bộ tiêu chí khác)?
6 nhóm **phản chiếu đúng cách một JD ngành IT thường được viết**: gần như JD nào cũng nêu (1) kỹ năng chuyên môn chính, (2) công cụ/công nghệ, (3) phương pháp làm việc, (4) lĩnh vực/domain, (5) kỹ năng mềm, (6) yêu cầu kinh nghiệm/cấp bậc. Đánh giá theo đúng 6 trục đó nghĩa là **so khớp cùng một hệ quy chiếu với JD** — không lệch, không bỏ sót khía cạnh quan trọng nào.

### b) Vì sao CỐ ĐỊNH 6 nhóm, không để linh hoạt mỗi lần?
- **So sánh được & nhất quán:** cố định khung mới so sánh được ứng viên với nhau và theo dõi qua các lần đánh giá — đúng giá trị lưu trữ/xếp hạng. Nếu mỗi lần ra một bộ tiêu chí khác thì không thể xếp hạng.
- **Quen mắt, dễ đọc:** luôn cùng 6 mục → người dùng quen bố cục, đọc nhanh, không bị rối.
- **Điểm tinh tế:** nhóm #1 (Kỹ năng chuyên môn cốt lõi) **vẫn co giãn nội dung theo vai trò** — dev đánh giá khả năng lập trình, BA đánh giá elicitation/BPMN/SQL, QC đánh giá kiểm thử… → vừa nhất quán khung, vừa sát từng nghề.

### c) Vì sao dùng thang % (0–100)?
- **Trực quan** ai cũng hiểu, **xếp hạng được** (sort nhiều ứng viên — cốt lõi khu HR), **đủ mịn** để phân biệt hai hồ sơ gần nhau.
- Kèm ghi chú rõ *"con số mang tính tham khảo, không tuyệt đối"* — dùng số vì tiện và xếp hạng được, nhưng không tuyệt đối hóa máy móc.
- **Thang điểm có mốc rõ (không đánh giá cảm tính):** `0–39` thiếu/không khớp rõ rệt · `40–59` khớp một phần · `60–79` khá khớp · `80–100` rất khớp (có bằng chứng trong CV). Buộc dùng hết dải điểm để hai hồ sơ khác nhau ra điểm khác nhau rõ — tránh kiểu "ai cũng 70–80".

### d) Vì sao tách riêng Điểm mạnh / Điểm thiếu / Gợi ý / Tips?
Để **biến con số thành hành động**, trả lời đúng nỗi đau gốc: *thiếu gì, sửa gì, chuẩn bị gì*. Con số để quyết định nhanh; các khối này để người dùng biết **làm gì tiếp theo**.

### e) Vì sao có bước "Dọn CV bằng AI" riêng?
**Đảm bảo đầu vào sạch → đánh giá chính xác.** Text bóc từ PDF hay lộn xộn (sai thứ tự, dính dòng); nếu đưa thẳng vào đánh giá thì kết quả sai lệch ("rác vào → rác ra"). Dọn trước cho kết quả đáng tin hơn; để nút bấm thủ công để người dùng chủ động kiểm tra trước khi đánh giá.

### f) Vì sao đặt luật "không bịa — thà thiếu còn hơn sai"?
- **Giữ độ tin cậy:** HR và ứng viên dùng kết quả để ra quyết định thật; bịa một chi tiết là mất sạch niềm tin vào cả sản phẩm.
- **Tránh rủi ro đạo đức/pháp lý:** thông tin sai về ứng viên/công ty có thể gây đánh giá oan.
- Vì vậy thông tin công ty và thông tin ứng viên **chỉ lấy từ nguồn (JD/CV), không có thì để trống**.

### g) Điểm tổng được quy ra thế nào — trọng số 6 nhóm
Điểm tổng (% độ phù hợp) **không phải trung bình cộng** 6 nhóm, mà là **tổng có trọng số** theo tỉ lệ cố định (cộng đúng 100%):

| Nhóm | Trọng số | Vì sao |
|---|---|---|
| ① Kỹ năng chuyên môn cốt lõi | 25% | Năng lực lõi của vai trò — yếu tố quyết định nhất. |
| ⑥ Kinh nghiệm & Vai trò | 20% | Kinh nghiệm thực chiến đứng thứ hai. |
| ② Công cụ & Công nghệ | 15% | Quan trọng nhưng học/bù được. |
| ③ Phương pháp & Quy trình | 15% | — |
| ④ Kiến thức Domain | 15% | — |
| ⑤ Kỹ năng mềm & Giao tiếp | 10% | Cần thiết nhưng khó đánh giá từ CV, nên trọng số nhẹ nhất. |

→ Một CV mạnh kỹ năng mềm nhưng yếu chuyên môn lõi & kinh nghiệm thì điểm tổng **vẫn thấp** — đúng với cách một HR thật cân nhắc. Trọng số cố định giúp con số **nhất quán và giải thích được** (trả lời thẳng câu "vì sao điểm tổng là X").

### h) Triết lý đánh giá: nghiêm khắc & trung thực
Cố ý đánh giá **đúng thực lực, không thổi điểm, không khen chung chung**: nêu điểm thiếu thẳng thắn, CV lệch ngành thì điểm thấp một cách trung thực. Đồng thời đánh giá **theo ý nghĩa** (công nhận kỹ năng đồng nghĩa/tương đương như "ReactJS"="React", 3 năm Java có giá trị cho vị trí "Spring"), không so khớp từ khóa máy móc. Đây chính là điểm khác biệt **"minh bạch + trung thực"** — một công cụ tuyển dụng mà thổi điểm hay chém gió là mất sạch niềm tin của cả ứng viên lẫn HR.

---

## 7. Tại sao là AI?

Thẳng thắn trước: **chỉ "có tích hợp AI" thì chưa phải là điểm khác biệt** — năm 2026 gần như sản phẩm mới nào cũng gắn AI. Giá trị thật nằm ở hai điều: **chọn đúng chỗ AI thực sự cần thiết**, và **triển khai được AI vào một sản phẩm chạy thật**.

### a) Vì sao bài toán này *bản chất* cần AI (không phải gắn cho hợp thời)
Khớp CV ↔ JD là bài toán **hiểu ý nghĩa**, không phải so chữ. Cách cũ — so khớp từ khóa cứng (kiểu ATS đời đầu) — máy móc và bỏ sót:
- Không hiểu **từ đồng nghĩa**: "ReactJS" / "React.js" / "lập trình giao diện" thực ra là một.
- Không nhận ra **kỹ năng tương đương/chuyển đổi**: 3 năm Java vẫn có giá trị cho vị trí backend dù JD ghi "Spring".
- Không hiểu **ngữ cảnh & cấp bậc**, không nối được "từng dẫn dắt nhóm" với năng lực ngầm bên dưới.
- Không xử lý tốt **văn bản tự do, đa ngôn ngữ**: CV tiếng Việt lẫn thuật ngữ tiếng Anh, mỗi người viết một kiểu.

AI/LLM **hiểu ý nghĩa** → đánh giá gần với cách một HR thật đọc CV. Đó là lý do AI ở đây là *công cụ đúng cho bài toán*, không phải trang trí cho hợp thời.

### b) Điểm cộng thật với nhà tuyển dụng: năng lực BA thời AI
Điều đáng giá không phải "tôi biết bấm ChatGPT", mà là tôi đã đi trọn vòng của một BA trong kỷ nguyên AI:
- **Nhận diện** chỗ AI tạo giá trị trong quy trình (thay vì tự động hóa bừa cho có).
- **Mô tả yêu cầu cho AI**: định ra 6 nhóm tiêu chí, định dạng kết quả, và giọng điệu phù hợp từng người đọc (ứng viên vs HR).
- **Tích hợp** AI vào một sản phẩm web chạy thật — không dừng ở thử nghiệm trong khung chat.
- **Đặt rào chắn**: nguyên tắc "không bịa", kết quả có cấu trúc nhất quán để thật sự dùng được.

→ Đây chính là **cầu nối giữa nhu cầu nghiệp vụ và năng lực AI** — kỹ năng nhà tuyển dụng đang rất cần, và là minh chứng tôi *áp dụng được AI vào việc thật*, chứ không chỉ biết về AI trên lý thuyết.

---

## 8. Giá trị mang lại

**Cho ứng viên:**
- Biết **độ phù hợp trước khi nộp** → tiết kiệm thời gian, nộp có chọn lọc.
- Biết **điểm mạnh / điểm thiếu** để cải thiện CV và chuẩn bị phỏng vấn.
- **Lưu lại toàn bộ lịch sử** đánh giá ở một nơi — hết cảnh rải rác.

**Cho HR:**
- **Xếp hạng nhanh** nhiều ứng viên theo % → sàng lọc hiệu quả, đỡ cảm tính.
- **Nắm nhanh thông tin chung** từng ứng viên + liên hệ được ngay.
- Có sẵn **câu hỏi phỏng vấn gợi ý** và **lưu ý khi đánh giá** cho từng người.

---

## 9. Vị trí trên thị trường — tại sao sản phẩm này tồn tại được?

> *Cập nhật: 16/06/2026 · Dựa trên phân tích thị trường chi tiết tại `docs/PHAN-TICH-THI-TRUONG-CANH-TRANH.md`.*

Thị trường AI tuyển dụng toàn cầu đang tăng mạnh (~$2.8 tỷ USD năm 2025, dự báo $12.4 tỷ năm 2033, CAGR ~18.7%). Tại Việt Nam, 68–73% doanh nghiệp đã dùng AI trong HR. Câu hỏi không phải *"có thị trường không"* mà là *"đứng ở đâu trong thị trường đó"*.

### a) Khác LOẠI, không khác mức độ

Sản phẩm **không phải một sàn tuyển dụng** (job marketplace) — và điều đó có chủ ý.

- **Sàn tuyển dụng** (TopCV, VietnamWorks, CareerViet, ViecLam24h): là *chợ việc làm* — nơi HR đăng tin, ứng viên nộp đơn. AI là tính năng phụ trợ, gắn vào tin tuyển *trên chính sàn đó*.
- **AnalyzeCV**: là *cố vấn* — phân tích bất kỳ JD nào từ bất kỳ nguồn nào, lưu trữ lịch sử, quản lý ứng tuyển xuyên mọi nền tảng.

→ Hai sản phẩm **bổ trợ** nhau: ứng viên tìm việc trên sàn, dùng AnalyzeCV để đánh giá trước khi nộp & quản lý sau khi nộp.

### b) 3 tầng lợi thế cạnh tranh

**Tầng 1 — Lợi thế cấu trúc** (sàn tuyển dụng *không thể* làm):
- **Đánh giá với JD bất kỳ** — sàn chỉ đánh giá với tin trên chính họ; sản phẩm cho *dán JD từ bất cứ đâu* (Facebook, web công ty, đối thủ...).
- **Quản lý ứng tuyển đa nền tảng** — sàn chỉ theo dõi đơn qua sàn của họ (giữ chân user); sản phẩm theo dõi *mọi đơn ở mọi nơi*.
- **Import/Export CSV** — ứng viên *mang dữ liệu của mình* ra/vào. Sàn không bao giờ cho (đi ngược mô hình giữ chân).

> Đây là thứ sàn tuyển dụng **về cấu trúc sẽ không làm** — vì nó đi ngược mô hình kinh doanh marketplace. Đây là "hào nước" bền, không phải bản thân việc đánh giá.

**Tầng 2 — Lợi thế chất lượng** (đối thủ *chưa* làm tốt):
- **Giải thích minh bạch** — 6 nhóm cố định × trọng số công khai × phân tích điểm mạnh/thiếu cụ thể. Đối thủ cho điểm "hộp đen", không giải thích *vì sao*.
- **Nội dung hướng đúng người đọc** — cùng dữ liệu nhưng ứng viên nhận tips cải thiện, HR nhận câu hỏi phỏng vấn gợi ý. Không đối thủ VN nào phân biệt.
- **Khu HR đánh giá CV dán tùy ý** — HR dán CV nhận qua email/nguồn ngoài, không cần ứng viên nằm trong CSDL nền tảng nào.

**Tầng 3 — Lợi thế triết lý** (khác biệt *bản sắc*):
- **"Thà thiếu còn hơn sai"** — thông tin chỉ lấy từ CV/JD, không bịa; đánh giá trung thực, không thổi điểm. Trong khi các công cụ AI toàn cầu được kiểm chứng đều bịa số liệu khi "làm đẹp" CV.
- **Trao quyền cho ứng viên** — sàn tuyển dụng dùng AI như "người gác cổng" ẩn (ứng viên không thấy điểm matching); sản phẩm *cho ứng viên tự biết, tự quyết*.

### c) Sự thật phũ phàng cần ghi nhớ

- **Đánh giá % CV↔JD = vé vào cửa, không phải lợi thế.** TopCV, VietnamWorks, CareerViet đều đã có → đừng marketing quanh "chúng tôi đánh giá CV".
- **Đối thủ nội địa mạnh nhờ dữ liệu, không hẳn nhờ AI.** Họ có JD thật, hồ sơ thật, dữ liệu lương → không đấu trực diện ở sân này.
- **Incumbent đi rất nhanh** — cửa sổ khác biệt bằng "có AI" đã đóng; phải khác biệt bằng *cách làm*.

---

## 10. Tầm nhìn tương lai (lộ trình ưu tiên)

Trình bày theo 3 tầng để thể hiện **tư duy ưu tiên** (theo giá trị/công sức và mức tận dụng cái đã có):

- **NOW — Trợ lý cải thiện CV theo từng JD:** tận dụng ngay phần "điểm thiếu" đã có → bước tự nhiên là giúp ứng viên lấp điểm thiếu. Cùng người dùng, cùng luồng, giá trị tăng rõ.
- **NOW — Nhắc nhở ứng tuyển:** dựng tiếp trên trạng thái **"Sắp ứng tuyển"** vừa làm — cho ứng viên đặt **hạn nộp / khung giờ nhắc**, rồi hệ thống **nhắc apply đúng lúc**. Đúng với ngữ cảnh "thấy job hay lúc nửa đêm, lưu lại rồi được nhắc nộp vào sáng hôm sau" → biến nơi lưu trữ thụ động thành **trợ lý chủ động**, tăng tần suất quay lại.
- **NEXT — Gợi ý job phù hợp với CV:** biến công cụ "đánh giá 1 job tôi tự tìm" thành nền tảng "tìm job cho tôi" → khép kín vòng giá trị phía ứng viên.
- **LATER — Mở thành SaaS cho doanh nghiệp:** phía HR là nơi có ngân sách → đây là con đường doanh thu. Cửa ngõ là **đăng ký theo vai trò (Ứng viên / Nhà tuyển dụng)** để nhà tuyển dụng **tự phục vụ** — hiện cố ý chưa làm (§4), mở khi thật sự đi tới SaaS để không tạo ngõ cụt và không vội mở bề mặt quyền riêng tư.
- **HORIZON — Mở rộng ngoài ngành IT:** đòn bẩy mở rộng thị trường (tầm nhìn xa).

> **Nguyên tắc ưu tiên:** chọn việc có *giá trị cao / công sức thấp* và *tận dụng được nền đã có*, đồng thời nhìn rõ đường đi tới doanh thu.

---

## 11. Đúc kết — tài liệu này chứng minh điều gì về tôi

- Phát hiện nỗi đau **từ trải nghiệm thật**, không phải ý tưởng trên giấy.
- Biết **định hình & giới hạn scope** (nói "không" đúng chỗ).
- Tư duy **lấy người dùng làm trung tâm** (cùng dữ liệu, khác người đọc → khác cách trình bày).
- Hiểu **bối cảnh cạnh tranh** — biết mình đứng ở đâu, đối thủ mạnh/yếu gì, và *tại sao* sản phẩm tồn tại được (lợi thế cấu trúc, không chỉ tính năng).
- Biết **ưu tiên lộ trình** theo giá trị và nhìn được đường tới doanh thu.
- Và quan trọng nhất: **đưa được sản phẩm từ 0 → 1**, từ một ý tưởng nhỏ cho bản thân đến một web hoàn thiện phục vụ cả ứng viên lẫn HR — như kết quả thực tế của một Business Analyst.

