"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  base: number;
  speed: number;
  phase: number;
  hue: string;
};

type Meteor = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
};

const WISHES = [
  "soon.",
  "it's coming, anon.",
  "the sky heard you.",
  "wen? wen you least expect it.",
  "already on its way.",
  "hold on a little longer.",
  "granted. pending confirmation.",
  "the stars are aligning.",
];

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let W = 0;
    let H = 0;
    let stars: Star[] = [];
    const meteors: Meteor[] = [];
    let raf = 0;
    let t = 0;

    function makeStars() {
      stars = [];
      const count = Math.floor((W * H) / 3800);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.3 + 0.25,
          base: Math.random() * 0.55 + 0.25,
          speed: Math.random() * 1.6 + 0.4,
          phase: Math.random() * Math.PI * 2,
          hue:
            Math.random() < 0.12
              ? Math.random() < 0.5
                ? "154,120,255"
                : "120,255,190"
              : "235,230,255",
        });
      }
    }

    function resize() {
      if (!canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      makeStars();
    }

    function spawnMeteor(x?: number, y?: number) {
      meteors.push({
        x: x !== undefined ? x : Math.random() * W * 0.9 + W * 0.1,
        y: y !== undefined ? y : Math.random() * H * 0.35,
        vx: -(Math.random() * 5 + 6),
        vy: Math.random() * 2.4 + 2.2,
        life: 1,
      });
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      t += 0.016;

      for (const s of stars) {
        const tw = reduceMotion
          ? 1
          : 0.65 + 0.35 * Math.sin(t * s.speed + s.phase);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.hue},${(s.base * tw).toFixed(3)})`;
        ctx.fill();
      }

      for (let m = meteors.length - 1; m >= 0; m--) {
        const mt = meteors[m];
        mt.x += mt.vx;
        mt.y += mt.vy;
        mt.life -= 0.016;
        if (mt.life <= 0 || mt.x < -80 || mt.y > H + 80) {
          meteors.splice(m, 1);
          continue;
        }
        const grad = ctx.createLinearGradient(
          mt.x,
          mt.y,
          mt.x - mt.vx * 12,
          mt.y - mt.vy * 12
        );
        grad.addColorStop(0, `rgba(255,244,220,${(mt.life * 0.95).toFixed(3)})`);
        grad.addColorStop(1, "rgba(153,69,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(mt.x, mt.y);
        ctx.lineTo(mt.x - mt.vx * 12, mt.y - mt.vy * 12);
        ctx.stroke();
      }

      if (!reduceMotion && Math.random() < 0.004) spawnMeteor();
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    let wishIdx = 0;
    function onWish(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, input, textarea, nav")) return;
      if (!reduceMotion) {
        spawnMeteor(Math.min(e.clientX + 120, W), Math.max(e.clientY - 80, 10));
      }
      const toast = document.createElement("div");
      toast.className =
        "wish-toast fixed z-20 pointer-events-none font-serif italic text-[15px] text-moon whitespace-nowrap [text-shadow:0_0_18px_rgba(255,217,138,0.6)]";
      toast.textContent = WISHES[wishIdx++ % WISHES.length];
      toast.style.left = `${e.clientX}px`;
      toast.style.top = `${e.clientY - 18}px`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1900);
    }

    window.addEventListener("resize", resize);
    document.addEventListener("click", onWish);
    resize();
    if (reduceMotion) {
      draw();
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("click", onWish);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 block"
    />
  );
}
