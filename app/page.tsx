import Image from "next/image";
import Starfield from "./components/Starfield";
import CopyCA from "./components/CopyCA";
import { DexscreenerIcon, XIcon } from "./components/icons";

import { DEXSCREENER, PUMPFUN, X_COMMUNITY } from "./token";

const SOCIALS = [
  { name: "Chart on Dexscreener", href: DEXSCREENER, Icon: DexscreenerIcon },
  { name: "X Community", href: X_COMMUNITY, Icon: XIcon },
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
        <nav className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-5 sm:px-10">
          <a
            href="#"
            className="shrink-0 bg-gradient-to-r from-dream to-nebula bg-clip-text text-xl font-black tracking-tight text-transparent"
          >
            $WEN
          </a>
          <div className="flex min-w-0 flex-1 justify-center">
            <CopyCA />
          </div>
          <a
            href={PUMPFUN}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-gradient-to-r from-dream via-[#37d2c0] to-nebula px-5 py-2 text-sm font-bold text-[#04120b] shadow-[0_0_28px_rgba(20,241,149,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(20,241,149,0.4)]"
          >
            Buy $WEN
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative z-[2] mx-auto grid w-full min-h-svh max-w-6xl items-end px-5 pt-24 sm:px-10 max-[860px]:items-start">
        <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center gap-x-14 gap-y-10 lg:gap-x-20 max-[860px]:grid-cols-1">
          <div className="min-w-0 max-[860px]:order-2">
            <span className="mb-7 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-dream">
              <span className="h-[7px] w-[7px] rounded-full bg-dream shadow-[0_0_12px_var(--dream)]" />
              live on Solana
            </span>

            {/* w-max so the background box grows with the type — bg-clip-text
                would otherwise crop the glyphs at the column edge. */}
            <h1 className="-ml-[0.04em] w-max bg-gradient-to-b from-starlight from-30% to-starlight/30 bg-clip-text text-[clamp(68px,11vw,170px)] font-black leading-[0.82] tracking-[-0.055em] text-transparent">
              $WEN
            </h1>

            <div className="mb-8 mt-6 font-serif text-[clamp(22px,2.7vw,32px)] italic leading-[1.3]">
              {["moon", "love", "millions"].map((wish) => (
                <p key={wish} className="text-starlight/85">
                  <span className="text-dream">Wen</span> {wish}
                </p>
              ))}
              <p className="mt-3.5 border-t border-line pt-3.5 text-starlight">
                It&apos;s not <em className="text-muted">if</em>, it&apos;s{" "}
                <span className="bg-gradient-to-r from-dream to-nebula bg-clip-text text-transparent">
                  wen
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={PUMPFUN}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-dream via-[#37d2c0] to-nebula px-6 py-3 text-sm font-bold text-[#04120b] shadow-[0_0_28px_rgba(20,241,149,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_44px_rgba(20,241,149,0.4)]"
              >
                Buy on pump.fun ↗
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
          </div>

          <figure className="relative flex min-w-0 justify-center leading-none max-[860px]:order-1">
            <Image
              src="/wen-pepe.png"
              alt="The $WEN mascot — a Pepe in Solana green and purple, gazing up at the stars in longing."
              width={1035}
              height={1187}
              priority
              className="pepe-fade h-[min(58svh,540px)] w-auto max-w-full max-[860px]:h-[min(36svh,300px)]"
            />
          </figure>
        </div>

        <p className="pb-5 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted/70 max-[860px]:hidden">
          click the sky to make a wish ✦
        </p>
      </main>
    </>
  );
}
