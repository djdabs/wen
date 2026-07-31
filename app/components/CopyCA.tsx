"use client";

import { useState } from "react";
import { CA } from "../token";
import { CheckIcon, CopyIcon } from "./icons";

const SHORT = `${CA.slice(0, 4)}…${CA.slice(-4)}`;

export default function CopyCA() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Contract address copied" : "Copy contract address"}
      className="group flex min-w-0 cursor-pointer items-center gap-2.5 rounded-full border border-line bg-nebula/5 py-2 pl-4 pr-3 transition-colors hover:border-dream/50 hover:bg-nebula/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dream"
    >
      <span className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:inline">
        CA
      </span>
      <code className="min-w-0 truncate font-mono text-[13px] text-dream">
        <span className="lg:hidden">{SHORT}</span>
        <span className="hidden lg:inline">{CA}</span>
      </code>
      <span className="grid h-5 w-5 shrink-0 place-items-center text-muted transition-colors group-hover:text-dream">
        {copied ? (
          <CheckIcon className="h-4 w-4 text-dream" />
        ) : (
          <CopyIcon className="h-4 w-4" />
        )}
      </span>
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
