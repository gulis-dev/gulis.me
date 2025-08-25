export function Footer() {
  return (
    <footer className="mt-16 border-t py-8 text-sm text-neutral-500">
      <div className="mx-auto max-w-3xl px-4 flex items-center justify-between">
        <p>© {new Date().getFullYear()} gulis — Oskar Andrukiewicz</p>
        <nav className="flex gap-4">
          <a href="/privacy/">Privacy policy</a>
          <a href="mailto:andrukiewicz.oskar@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}