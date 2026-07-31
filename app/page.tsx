import Image from "next/image";
import Starfield from "./components/Starfield";
import CopyCA from "./components/CopyCA";
import {
  DexscreenerIcon,
  JupiterIcon,
  TelegramIcon,
  XIcon,
} from "./components/icons";

import { DEXSCREENER, JUPITER } from "./token";

const SOCIALS = [
  { name: "Dexscreener", href: DEXSCREENER, Icon: DexscreenerIcon },
  { name: "X Community", href: "https://x.com", Icon: XIcon },
  { name: "Telegram", href: "https://t.me", Icon: TelegramIcon },
  { name: "Jupiter", href: JUPITER, Icon: JupiterIcon },
];

export default function Home() {
  return (
    <>
      <Starfield />

      {/* Aurora glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 [background:radial-gradient(ellipse_70%_45%_at_78%_-8%,rgba(153,69,255,0.22),transparent_60%),radial-gradient(ellipse_55%_40%_at_12%_108%,rgba(20,241,149,0.10),transparent_60%)]"
      />

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-10 border-b border-line bg-void/55 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-10">
          <a
            href="#"
            className="bg-gradient-to-r from-dream to-nebula bg-clip-text text-xl font-black tracking-tight text-transparent"
          >
            $WEN
          </a>
          <a
            href={JUPITER}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-dream via-[#37d2c0] to-nebula px-5 py-2 text-sm font-bold text-[#04120b] shadow-[0_0_28px_rgba(20,241,149,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(20,241,149,0.4)]"
          >
            Buy $WEN
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-[2] mx-auto grid min-h-svh max-w-6xl items-end px-5 pt-24 sm:px-10 max-[860px]:items-start">
        <div className="grid grid-cols-[minmax(0,460px)_1fr] items-end gap-6 max-[860px]:grid-cols-1">
          <div className="pb-12 md:pb-20 max-[860px]:order-2 max-[860px]:pb-8">
            <span className="mb-7 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-dream">
              <span className="h-[7px] w-[7px] rounded-full bg-dream shadow-[0_0_12px_var(--dream)]" />
              $WEN &nbsp;·&nbsp; live on Solana
            </span>

            <h1 className="-ml-[0.04em] bg-gradient-to-b from-starlight from-30% to-starlight/30 bg-clip-text text-[clamp(88px,17vw,240px)] font-black leading-[0.82] tracking-[-0.055em] text-transparent">
              WEN
              <span className="bg-gradient-to-br from-dream to-nebula bg-clip-text">
                ?
              </span>
            </h1>

            <div className="mb-9 mt-8 font-serif text-[clamp(24px,3vw,36px)] italic leading-[1.32]">
              {["moon", "love", "millions"].map((wish) => (
                <p key={wish} className="text-starlight/85">
                  <span className="text-dream">Wen</span> {wish}
                </p>
              ))}
              <p className="mt-4 border-t border-line pt-4 text-starlight">
                It&apos;s not <em className="text-muted">if</em>, it&apos;s{" "}
                <span className="bg-gradient-to-r from-dream to-nebula bg-clip-text text-transparent">
                  wen
                </span>
                .
              </p>
            </div>

            <div className="mb-9 flex flex-wrap items-center gap-3.5">
              <a
                href={JUPITER}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-dream via-[#37d2c0] to-nebula px-6 py-3 text-sm font-bold text-[#04120b] shadow-[0_0_28px_rgba(20,241,149,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(20,241,149,0.4)]"
              >
                Buy on Jupiter ↗
              </a>
              <a
                href={DEXSCREENER}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[rgba(153,132,200,0.4)] bg-nebula/5 px-6 py-3 text-sm font-bold text-starlight transition-all hover:-translate-y-0.5 hover:bg-nebula/15"
              >
                See the chart
              </a>
              <div className="flex items-center gap-1.5">
                {SOCIALS.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={name}
                    aria-label={name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-dream/50 hover:text-dream"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <CopyCA />
          </div>

          <figure className="relative flex justify-end self-end leading-none max-[860px]:order-1 max-[860px]:justify-center">
            {/* Glow behind the mascot, so he reads as lit by the sky he's watching */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[12%] left-1/2 h-[62%] w-[80%] -translate-x-1/2 rounded-full bg-nebula/25 blur-[80px]"
            />
            <Image
              src="/wen-pepe.png"
              alt="The $WEN mascot — a Pepe in Solana green and purple, gazing up at the stars in longing."
              width={1035}
              height={1187}
              priority
              className="pepe-fade relative h-[min(62svh,620px)] w-auto max-w-full drop-shadow-[0_0_60px_rgba(20,241,149,0.12)] max-[860px]:h-[min(38svh,320px)]"
            />
          </figure>
        </div>

        <p className="pb-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70 max-[860px]:hidden">
          click the sky to make a wish ✦
        </p>
      </main>

      {/* Footer */}
      <footer className="relative z-[2] border-t border-line bg-void/60">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-10">
          <p className="text-[13px] leading-relaxed text-muted/75">
            $WEN is a meme coin with no intrinsic value and no promises beyond
            the sky itself.{" "}
            <em className="font-serif text-muted">
              Dreams are not financial advice.
            </em>{" "}
            © 2026 the sky-watchers.
          </p>
        </div>
      </footer>
    </>
  );
}
