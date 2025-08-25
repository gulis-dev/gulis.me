"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Github, Linkedin } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur dark:bg-black/50">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold">gulis</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/about/">About</Link>
          <Link href="/projects/">Projects</Link>
          <Link href="/experience/">Experience</Link>
          <Link href="/contact/">Contact</Link>
          <Link
            href="#"
            className="px-3 py-1 rounded-md shadow-inset-3d border border-neutral-200 dark:border-neutral-800 no-underline"
          >
            CV
          </Link>
          <a href="https://github.com/gulis-dev" aria-label="GitHub"><Github size={18} /></a>
          <a href="https://www.linkedin.com/in/oskar-andrukiewicz" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-md border px-2 py-1"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </nav>
      </div>
    </header>
  );
}