import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="lien-he" className="border-t border-line bg-paper-raised py-16 sm:py-20">
      <div className="mx-auto max-w-[840px] px-6">
        <Reveal>
          <p className="mb-3.5 flex items-center gap-2.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.14em] text-teal-deep before:block before:h-px before:w-[22px] before:bg-teal-deep">
            Liên hệ
          </p>
          <h2 className="text-balance font-display text-[1.9rem] font-semibold leading-[1.12] text-ink">
            Muốn nói chuyện về vị trí Business Analyst?
          </h2>
          <p className="mt-5 max-w-[68ch]">
            Toàn bộ tài liệu gốc của case study này — câu chuyện sản phẩm,
            backlog tính năng, báo cáo thị trường, roadmap — có thể gửi
            thêm nếu cần xem chi tiết đầy đủ.
          </p>
          <ul className="mt-6 flex flex-col gap-2.5">
            <li>
              <a
                href="mailto:myphuongvlo.2020@gmail.com"
                className="inline-block border-b border-line-strong pb-0.5 font-mono text-[0.95rem] text-ink no-underline hover:border-teal-deep hover:text-teal-deep"
              >
                ✉ myphuongvlo.2020@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://myphuong-productowner.vercel.app/"
                className="inline-block border-b border-line-strong pb-0.5 font-mono text-[0.95rem] text-ink no-underline hover:border-teal-deep hover:text-teal-deep"
              >
                → Xem portfolio đầy đủ
              </a>
            </li>
          </ul>
          <p className="mt-11 text-[0.8rem] text-ink-faint">
            AnalyzeCV — case study cá nhân, dữ liệu &amp; số liệu minh hoạ
            trong tài liệu gốc của dự án.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
