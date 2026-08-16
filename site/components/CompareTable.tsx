import type { ReactElement } from "react";
import { CheckMark, CrossMark, HalfMark, UnknownMark } from "./Marks";

type Mark = "yes" | "half" | "no" | "unk";

const MARK_CLASS: Record<Mark, string> = {
  yes: "text-good",
  half: "text-amber",
  no: "text-bad",
  unk: "text-neutral-mark",
};

const MARK_ICON = {
  yes: (cls: string) => <CheckMark className={cls} />,
  half: (cls: string) => <HalfMark className={cls} />,
  no: (cls: string) => <CrossMark className={cls} />,
  unk: (cls: string) => <UnknownMark className={cls} />,
} satisfies Record<Mark, (cls: string) => ReactElement>;

type Row = {
  label: string;
  cells: { mark: Mark; note?: string }[];
};

const COLS = ["AnalyzeCV", "TopCV", "VietnamWorks", "CareerViet", "Jobscan"];

const ROWS: Row[] = [
  {
    label: "Điểm phù hợp AI (CV vs công việc)",
    cells: [{ mark: "yes" }, { mark: "yes" }, { mark: "yes" }, { mark: "yes" }, { mark: "yes" }],
  },
  {
    label: "Giải thích đa tiêu chí minh bạch",
    cells: [
      { mark: "yes", note: "6 cố định" },
      { mark: "half" },
      { mark: "half" },
      { mark: "yes", note: "9 yếu tố" },
      { mark: "yes" },
    ],
  },
  {
    label: "Quản lý ứng tuyển trên mọi nền tảng",
    cells: [{ mark: "yes" }, { mark: "half" }, { mark: "half" }, { mark: "no" }, { mark: "no" }],
  },
  {
    label: "Chấm nhiều CV trong một lượt (batch)",
    cells: [
      { mark: "yes", note: "tới 20" },
      { mark: "no" },
      { mark: "no" },
      { mark: "no" },
      { mark: "no" },
    ],
  },
  {
    label: "Thư viện CV trung tâm, lịch sử một nơi",
    cells: [{ mark: "yes" }, { mark: "half" }, { mark: "half" }, { mark: "no" }, { mark: "no" }],
  },
  {
    label: "Cam kết không bịa dữ kiện",
    cells: [{ mark: "yes" }, { mark: "unk" }, { mark: "unk" }, { mark: "unk" }, { mark: "no" }],
  },
  {
    label: "Dữ liệu lương / kho việc & CV (data moat)",
    cells: [{ mark: "no" }, { mark: "yes" }, { mark: "yes" }, { mark: "yes" }, { mark: "no" }],
  },
];

export function CompareTable() {
  return (
    <div className="mt-9 overflow-x-auto rounded-[10px] border border-line">
      <table className="w-full min-w-[640px] border-collapse bg-paper-sunken">
        <thead>
          <tr className="bg-paper-raised">
            <th className="sticky left-0 z-10 border-b border-line bg-paper-raised px-4 py-3.5 text-left font-mono text-[0.72rem] font-medium uppercase tracking-[0.06em] text-ink-faint">
              Năng lực
            </th>
            {COLS.map((c, i) => (
              <th
                key={c}
                className={`border-b border-line px-4 py-3.5 text-center font-mono text-[0.72rem] font-medium uppercase tracking-[0.06em] text-ink-faint ${
                  i === 0 ? "bg-teal-tint" : ""
                }`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.label}>
              <td className="sticky left-0 z-10 border-b border-line bg-paper-sunken px-4 py-3.5 text-[0.94rem] last:border-none">
                {r.label}
              </td>
              {r.cells.map((c, i) => (
                <td
                  key={i}
                  className={`border-b border-line px-4 py-3.5 text-center font-semibold last:border-none ${MARK_CLASS[c.mark]} ${
                    i === 0 ? "bg-teal-tint" : ""
                  }`}
                >
                  {MARK_ICON[c.mark]("")}
                  {c.note && (
                    <span className="mt-0.5 block font-mono text-[0.68rem] font-normal text-ink-faint">
                      {c.note}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
