import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import {
  projects,
  getProject,
  getAdjacentProjects,
  type Project,
} from "@/data/projects";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Saeful Rohman An`,
    description: project.tagline,
  };
}

const accentMap: Record<Project["accent"], string> = {
  acid: "bg-[var(--acid)] text-[var(--ink)]",
  plum: "bg-[var(--plum)] text-[var(--bone)]",
  cobalt: "bg-[var(--cobalt)] text-[var(--bone)]",
  ink: "bg-[var(--ink)] text-[var(--bone)]",
};

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = getProject(params.slug);
  if (!project) return notFound();
  const { prev, next } = getAdjacentProjects(params.slug);
  const accent = accentMap[project.accent];

  return (
    <>
      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--mute)] hover:text-[var(--ink)]"
          >
            ← All work
          </Link>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="label text-[var(--mute)]">
                § {project.kind} · {project.year}
              </p>
              <h1 className="display-1 mt-6 text-[clamp(2.75rem,10vw,8rem)]">
                {project.title}.
              </h1>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="border border-[var(--ink)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <p className="mt-10 max-w-3xl text-balance font-serif text-[clamp(1.3rem,2.4vw,1.9rem)] italic leading-[1.15] text-[var(--ink)]">
            {project.tagline}
          </p>
        </div>
      </section>

      {/* Cover */}
      <section className="mx-auto mt-16 max-w-[1400px] px-5 md:px-10">
        <div
          className={clsx(
            "relative aspect-[16/8] w-full overflow-hidden border border-[var(--ink)]",
            accent
          )}
        >
          <div className="absolute inset-0 hatch opacity-30" aria-hidden />
          <div className="absolute left-4 top-4 font-mono text-[11px] uppercase tracking-[0.22em]">
            {project.kind} / {project.year}
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[11px] uppercase tracking-[0.22em]">
            Cover / Placeholder
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[clamp(3rem,10vw,8rem)] italic">
              {project.title}
            </span>
          </div>
        </div>
      </section>

      {/* Meta grid */}
      <section className="mx-auto mt-14 max-w-[1400px] px-5 md:px-10">
        <dl className="grid grid-cols-2 gap-px border border-[var(--rule)] bg-[var(--rule)] md:grid-cols-4">
          <MetaCell k="Role" v={project.role} />
          <MetaCell k="Year" v={project.year} />
          <MetaCell k="Kind" v={project.kind} />
          <MetaCell k="Status" v="Shipped" />
        </dl>
      </section>

      {/* Case study body */}
      <section className="mx-auto mt-24 grid max-w-[1400px] grid-cols-12 gap-8 px-5 md:px-10">
        <Block title="Problem" className="col-span-12 md:col-span-6">
          <p>{project.problem}</p>
        </Block>

        <Block title="Overview" className="col-span-12 md:col-span-6">
          <p>{project.description}</p>
        </Block>

        <Block title="Approach" className="col-span-12 md:col-span-7">
          <ol className="space-y-4">
            {project.approach.map((a, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-4 border-b border-dashed border-[var(--rule)] pb-4 last:border-0"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--mute)]">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Outcome" className="col-span-12 md:col-span-5">
          <ul className="space-y-3">
            {project.outcome.map((o, i) => (
              <li
                key={i}
                className="flex items-start gap-3 border border-[var(--ink)] bg-[var(--bone)] p-4"
              >
                <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--acid)]" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </Block>

        {project.links && project.links.length > 0 && (
          <Block title="Links" className="col-span-12">
            <div className="flex flex-wrap gap-3">
              {project.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-[var(--ink)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--ink)] hover:text-[var(--bone)]"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          </Block>
        )}
      </section>

      {/* Prev / next nav */}
      <section className="mx-auto mt-24 max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-px border border-[var(--ink)] bg-[var(--ink)] md:grid-cols-2">
          {prev && <AdjCard project={prev} label="Previous" align="left" />}
          {next && <AdjCard project={next} label="Next" align="right" />}
        </div>
      </section>
    </>
  );
}

function MetaCell({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-[var(--bone)] p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mute)]">
        {k}
      </p>
      <p className="mt-2 font-serif text-lg italic">{v}</p>
    </div>
  );
}

function Block({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="label text-[var(--mute)]">{title}</p>
      <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-[var(--ink)]/85 md:text-[17px]">
        {children}
      </div>
    </div>
  );
}

function AdjCard({
  project,
  label,
  align,
}: {
  project: Project;
  label: string;
  align: "left" | "right";
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={clsx(
        "group flex flex-col gap-4 bg-[var(--bone)] p-8 transition-colors hover:bg-[var(--acid)] md:p-12",
        align === "right" && "md:text-right"
      )}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--mute)]">
        {align === "left" ? "←" : "→"} {label}
      </span>
      <h3 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] italic leading-tight">
        {project.title}
      </h3>
      <p className="text-[var(--ink)]/75">{project.tagline}</p>
    </Link>
  );
}
