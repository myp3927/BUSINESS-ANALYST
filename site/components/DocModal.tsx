"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { AnimatePresence, motion } from "framer-motion";
import { Cross } from "./Primitives";
import { EASE } from "./motion";

function MermaidBlock({ code }: { code: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const id = `mermaid-${Math.random().toString(36).slice(2)}`;
    import("mermaid").then(({ default: mermaid }) => {
      mermaid.initialize({ startOnLoad: false, theme: "neutral", fontFamily: "var(--font-sans)" });
      mermaid.render(id, code).then(({ svg }) => {
        if (!cancelled && ref.current) ref.current.innerHTML = svg;
      });
    });
    return () => {
      cancelled = true;
    };
  }, [code]);

  return <div ref={ref} className="my-4 flex justify-center overflow-x-auto" />;
}

export type DocModalTarget = {
  title: string;
  src: string;
  githubHref?: string;
};

export function DocModal({ target, onClose }: { target: DocModalTarget | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!target) return;
    setContent(null);
    fetch(target.src)
      .then((r) => r.text())
      .then(setContent)
      .catch(() => setContent("Không tải được nội dung tài liệu."));
  }, [target]);

  useEffect(() => {
    if (!target) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [target, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {target && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={target.title}
        >
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="card-shadow relative flex h-[88vh] w-full max-w-[820px] flex-col overflow-hidden rounded-t-panel border border-line bg-paper sm:h-[85vh] sm:rounded-panel"
          >
            <div className="flex flex-none items-center justify-between gap-3 border-b border-line bg-paper px-5 py-4 sm:px-7">
              <h2 className="font-display text-[1.05rem] font-medium text-ink">{target.title}</h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Đóng"
                className="flex h-8 w-8 flex-none items-center justify-center rounded-frame border border-line text-ink-soft transition-colors hover:border-line-strong hover:text-ink"
              >
                <Cross />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              {content === null ? (
                <p className="text-[0.9rem] text-ink-faint">Đang tải…</p>
              ) : (
                <article className="doc-prose max-w-none text-[0.92rem] leading-relaxed text-ink-soft">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      table: ({ children }) => (
                        <div className="my-4 overflow-x-auto rounded-frame border border-line">
                          <table className="w-full border-collapse text-[0.85rem]">{children}</table>
                        </div>
                      ),
                      th: ({ children }) => (
                        <th className="border-b border-line bg-paper-sunken px-3 py-2 text-left font-medium text-ink">
                          {children}
                        </th>
                      ),
                      td: ({ children }) => (
                        <td className="border-b border-line px-3 py-2 align-top">{children}</td>
                      ),
                      code({ className, children }) {
                        const isMermaid = /language-mermaid/.test(className || "");
                        if (isMermaid) return <MermaidBlock code={String(children).trim()} />;
                        const isBlock = /language-/.test(className || "");
                        if (isBlock) {
                          return (
                            <pre className="my-4 overflow-x-auto rounded-frame border border-line bg-paper-sunken p-3 text-[0.8rem]">
                              <code>{children}</code>
                            </pre>
                          );
                        }
                        return <code className="rounded-[4px] bg-paper-sunken px-1.5 py-0.5 text-[0.85em] text-ink">{children}</code>;
                      },
                      h1: ({ children }) => (
                        <h1 className="mt-8 font-display text-[1.3rem] font-medium text-ink first:mt-0">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="mt-7 font-display text-[1.15rem] font-medium text-ink">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="mt-6 font-display text-[1.02rem] font-medium text-ink">{children}</h3>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="my-4 rounded-frame border-l-2 border-accent bg-accent-tint px-4 py-3 text-ink">
                          {children}
                        </blockquote>
                      ),
                      a: ({ children, href }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline">
                          {children}
                        </a>
                      ),
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </article>
              )}
            </div>

            {target.githubHref && (
              <div className="flex flex-none items-center justify-end border-t border-line bg-paper px-5 py-3 sm:px-7">
                <a
                  href={target.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.72rem] text-ink-faint underline-offset-2 hover:text-ink hover:underline"
                >
                  Xem bản gốc trên GitHub ↗
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
