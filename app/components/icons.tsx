type IconProps = {
  className?: string;
};

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.94 4.06a1.5 1.5 0 0 0-1.6-.28L2.7 11.03c-.9.36-.88 1.66.04 1.98l4.6 1.6 1.73 5.48c.27.85 1.36 1.05 1.92.36l2.42-2.98 4.66 3.43c.72.53 1.75.14 1.93-.74l2.4-14.42a1.5 1.5 0 0 0-.46-1.68zM9.1 13.7l8.5-5.9c.33-.23.68.2.4.48l-6.8 6.7-.27 3.02z" />
    </svg>
  );
}

export function DexscreenerIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 4v3" />
      <rect x="4" y="7" width="4" height="7" rx="1" />
      <path d="M6 14v4" />
      <path d="M13 8v2" />
      <rect x="11" y="10" width="4" height="6" rx="1" />
      <path d="M13 16v2" />
      <path d="M19 3v3" />
      <rect x="17" y="6" width="4" height="6" rx="1" />
      <path d="M19 12v4" />
    </svg>
  );
}

export function PumpFunIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.5 3.2 20.8 9.5a3 3 0 0 1 0 4.2l-7.1 7.1a3 3 0 0 1-4.2 0L3.2 14.5a3 3 0 0 1 0-4.2l7.1-7.1a3 3 0 0 1 4.2 0Z" />
      <path d="M7.4 10.7 13.3 16.6" />
    </svg>
  );
}
