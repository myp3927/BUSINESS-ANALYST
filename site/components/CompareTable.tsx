import type { ReactElement } from "react";
import { Check, Cross, Half, Unknown } from "./Primitives";

type Mark = "yes" | "half" | "no" | "unk";

const MARK_CLASS: Record<Mark, string> = {
  yes: "text-yes",
  half: "text-half",
  no: "text-no",
  unk: "text-unknown",
};

const MARK_ICON = {
  yes: () => <Check className="h-4 w-4" />,
  half: () => <Half className="h-4 w-4" />,
  no: () => <Cross className="h-4 w-4" />,
  unk: () => <Unknown className="h-4 w-4" />,
} satisfies Record<Mark, () => ReactElement>;

type Row = { label: string; cells: { mark: Mark; note?: string }[] };

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
    cells: [{ mark: "yes", note: "tới 20" }, { mark: "no" }, { mark: "no" }, { mark: "no" }, { mark: "no" }],
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
    <div className="card-shadow overflow-x-auto rounded-card border border-line bg-card">
      <table className="w-full min-w-[680px] border-collapse">
        <thead>
          <tr>
            <th className="sticky left-0 z-10 border-b border-line bg-paper-sunken px-5 py-4 text-left font-mono text-[0.66rem] uppercase tracking-[0.08em] text-ink-faint">
              Năng lực
            </th>
            {COLS.map((c, i) => (
              <th
                key={c}
                className={`border-b border-line px-4 py-4 text-center font-mono text-[0.66rem] uppercase tracking-[0.08em] ${
                  i === 0 ? "bg-accent-tint text-ink" : "bg-paper-sunken text-ink-faint"
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
              <td className="sticky left-0 z-10 border-b border-line bg-card px-5 py-4 text-[0.9rem] text-ink">
                {r.label}
              </td>
              {r.cells.map((c, i) => (
                <td
                  key={i}
                  className={`border-b border-line px-4 py-4 text-center ${MARK_CLASS[c.mark]} ${
                    i === 0 ? "bg-accent-tint/60" : ""
                  }`}
                >
                  <span className="inline-flex justify-center">{MARK_ICON[c.mark]()}</span>
                  {c.note && (
                    <span className="mt-1 block font-mono text-[0.62rem] text-ink-faint">{c.note}</span>
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
