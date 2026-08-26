# Job Search Workspace

Thư mục này dùng để chuẩn bị ứng tuyển vị trí Business Analyst: phân tích độ phù hợp JD-CV, research công ty (review, lương, sản phẩm, quy mô văn phòng) trước khi phỏng vấn.

## Người dùng
- Nguyen Thi My Phuong — Business Analyst, ~3 năm kinh nghiệm (ERP greenfield, Retail Execution AI SaaS B2B).
- CV gốc: `job-search/<company>/NguyenThiMyPhuong-Business-Analyst .pdf` — **không tự ý thêm kinh nghiệm/kỹ năng không có trong CV này**, kể cả khi CV có vẻ thiếu so với JD.
- Đang target level **Middle** (không apply Senior dù JD ghi "Senior/Middle").

## Cấu trúc thư mục
```
job-search/
  <ten-cong-ty>/
    <JD gốc>.pdf
    NguyenThiMyPhuong-Business-Analyst .pdf   (copy CV)
    company-reviews.md                         (research tổng hợp)
```

Mỗi công ty ứng tuyển có 1 thư mục con riêng trong `job-search/`.

## Nội dung chuẩn cho `company-reviews.md` mỗi công ty
1. Thông tin công ty: trụ sở, quy mô, sản phẩm/dịch vụ thật (không suy đoán).
2. Review nhân viên theo mốc thời gian (ITviec, 1900.com.vn/Note8.vn, Glassdoor — kiểm tra đúng công ty, tránh nhầm công ty trùng tên ở nước khác).
3. Range lương thị trường cho vị trí + mức neo đề xuất khi thương lượng (không bịa số lương nội bộ công ty nếu không công khai).
4. Điểm mâu thuẫn giữa các review (nếu có) + câu hỏi nên hỏi khi phỏng vấn để tự kiểm chứng.

## Nguyên tắc làm việc
- Không sửa/thêm nội dung vào CV để "khớp" JD hơn — chỉ nêu gap thật, để người dùng tự quyết cách trả lời khi phỏng vấn.
- Khi tìm thông tin lương/review công ty, luôn ghi rõ nguồn (link) và thời gian, vì các trang review VN thường không có mốc thời gian rõ trong kết quả tìm kiếm — cần fetch trực tiếp trang để lấy ngày review.
- Cẩn thận công ty trùng tên (vd. Excel Technologies VN vs. Excel Technologies International ở Mỹ trên Glassdoor) — xác minh đúng entity trước khi dùng số liệu.
