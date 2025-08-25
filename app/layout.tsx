import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://gulis.me";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { template: "%s | gulis", default: "Oskar Andrukiewicz — Portfolio" },
  description:
    "Portfolio of Oskar Andrukiewicz (gulis) — Data Science & AI student focusing on ML and data analysis.",
  openGraph: {
    title: "Oskar Andrukiewicz — Portfolio",
    description:
      "Portfolio of Oskar Andrukiewicz (gulis) — Data Science & AI student focusing on ML and data analysis.",
    url: site,
    siteName: "gulis.me",
    images: [{ url: "/og.png", width: 1200, height: 630 }]
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="mx-auto max-w-3xl px-4 py-10">{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}