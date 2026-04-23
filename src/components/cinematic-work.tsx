"use client";

import Link from "next/link";
import clsx from "clsx";
import type { Project } from "@/data/projects";

const accentMap: Record<Project["accent"], { bg: string; ink: string }> = {
  acid: { bg: "#d4ff2e", ink: "#0a0a0a" },
  plum: { bg: "#ff3d2e", ink: "#f2ede2" },
  cobalt: { bg: "#2a2afe", ink: "#f2ede2" },
  ink: { bg: "#0a0a0a", ink: "#f2ede2" },
};

/**
 * Full-viewport cinematic project poster. Scroll through a series of these
 * like scenes from a film.
 */
export default function CinematicWork({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const c = accentMap[project.accent];
  const align = index % 2 === 0 ? "left" : "right";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={clsx(
        "group relative block min-h-[85vh] w-full overflow-hidden border-b border-[var(--ink)]/20"
      )}
      style={{ backgroundColor: c.bg, color: c.ink }}
    >
      {/* Background painterly field */}
      <div
        aria-hidden
        className="absolute inset-0 hatch opacity-25"
        style={{ color: c.ink }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 45%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* HUD top */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-8 font-mono text-[11px] uppercase tracking-[0.22em] md:px-10 md:pt-12">
        <span>
          Scene {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span className="hidden md:inline">{project.kind} · {project.year}</span>
      </div>

      {/* Title cluster */}
      <div
        className={clsx(
          "relative z-10 mx-auto flex max-w-[1400px] flex-col px-5 pb-16 pt-[14vh] md:px-10 md:pb-24",
          align === "right" && "md:items-end md:text-right"
        )}
      >
        <p className="label opacity-70">§ {project.kind}</p>
        <h3
          className="display-1 mt-6 text-[clamp(3.25rem,13vw,11rem)]"
          style={{ lineHeight: 0.88 }}
        >
          {project.title}.
        </h3>

        <p
          className={clsx(
            "mt-8 max-w-2xl text-balance font-serif text-[clamp(1.1rem,1.8vw,1.55rem)] italic leading-[1.2]",
            align === "right" && "md:ml-auto"
          )}
          style={{ opacity: 0.9 }}
        >
          {project.tagline}
        </p>

        {/* Stack HUD */}
        <div
          className={clsx(
            "mt-10 flex flex-wrap gap-2",
            align === "right" && "md:justify-end"
          )}
        >
          {project.stack.slice(0, 6).map((s) => (
            <span
              key={s}
              className="border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em]"
              style={{ borderColor: c.ink, opacity: 0.85 }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className={clsx(
            "mt-16 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em]",
            align === "right" && "md:justify-end"
          )}
        >
          <span
            className="relative block h-px w-16 transition-[width] duration-300 group-hover:w-28"
            style={{ background: c.ink }}
          />
          <span>Enter case study</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
