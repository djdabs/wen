// The apex 308-redirects to www, and X's image fetcher won't follow redirects
// for og:image — so metadata must name the host that serves a direct 200.
// If Vercel is ever switched to serve the apex, change this back to wen.so.
export const SITE_URL = "https://www.wen.so";

export const CA = "DKDjfsrv2bhBQVuT7ePDZDup2KJbQwNvNPBWtNjVpump";

export const PUMPFUN = `https://pump.fun/coin/${CA}`;
export const DEXSCREENER = `https://dexscreener.com/solana/${CA}`;
export const X_HANDLE = "@wenonsol_";
export const X_COMMUNITY = `https://x.com/${X_HANDLE.slice(1)}`;
