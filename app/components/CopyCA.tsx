"use client";

import { useState } from "react";
import { CA } from "../token";

export default function CopyCA() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded border border-dashed border-[rgba(153,132,200,0.35)] bg-void/50 px-5 py-4">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        Contract
      </span>
      <code className="min-w-0 flex-1 basis-52 break-all font-mono text-sm text-dream">
        {CA}
      </code>
      <button
        type="button"
        onClick={copy}
        className="cursor-pointer rounded-full border border-[rgba(153,132,200,0.4)] px-4 py-2 font-mono text-xs tracking-[0.1em] text-starlight transition-colors hover:border-dream hover:text-dream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dream"
      >
        {copied ? "copied ✦" : "copy"}
      </button>
    </div>
  );
}
