"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Index" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={clsx(
        "fixed left-0 right-0 top-0 z-40 transition-[background,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-b border-[var(--rule)] bg-[color:var(--bone)]/85 backdrop-blur"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-6 px-5 py-4 md:px-10">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center border border-[var(--ink)] bg-[var(--ink)] font-serif text-[var(--bone)] italic">
            S
          </span>
          <span className="label hidden md:block">
            Saeful Rohman An / Portfolio ’26
          </span>
        </Link>

        <nav className="hidden justify-center md:flex">
          <ul className="flex items-center gap-1 rounded-full border border-[var(--ink)] bg-[var(--bone)] p-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? path === "/" : path.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx(
                      "relative block rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors",
                      active
                        ? "bg-[var(--ink)] text-[var(--bone)]"
                        : "hover:bg-[var(--ink)] hover:text-[var(--bone)]"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3 justify-self-end">
          <Link
            href="/contact"
            className="group hidden items-center gap-2 border border-[var(--ink)] bg-[var(--acid)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] md:inline-flex"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
            Available for work
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 items-center justify-center border border-[var(--ink)]"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-[1.5px] w-4 bg-[var(--ink)]" />
              <span className="block h-[1.5px] w-4 bg-[var(--ink)]" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[var(--rule)] bg-[var(--bone)]">
          <ul className="flex flex-col divide-y divide-[var(--rule)]">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="flex items-center justify-between px-5 py-4 font-serif italic text-2xl"
                >
                  {l.label}
                  <span className="font-mono text-[10px] tracking-[0.2em]">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
