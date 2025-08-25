"use client";
import Script from "next/script";
export function Analytics() {
  const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER;
  const cfToken = process.env.NEXT_PUBLIC_CF_TOKEN;
  if (provider === "cloudflare" && cfToken) {
    return (
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={`{"token": "${cfToken}"}`}
        strategy="afterInteractive"
      />
    );
  }
  return null;
}