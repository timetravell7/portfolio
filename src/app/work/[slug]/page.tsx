import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import MistTitle from "@/components/mist-title";
import PainterlyMoment from "@/components/painterly-moment";
import {
  projects,
  getProject,
  getAdjacentProjects,
  type Project,
} from "@/data/projects";

const variantByAccent: Record<
  Project["accent"],
  "horizon" | "orbit" | "mountain" | "terminal"
> = {
  plum: "horizon",
  cobalt: "orbit",
  acid: "mountain",
  ink: "terminal",
};

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

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = getProject(params.slug);
  if (!project) return notFound();
  const { prev, next } = getAdjacentProjects(params.slug);
  const variant = variantByAccent[project.accent];

  return (
    <>
      {/* Cold-open hero */}
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--mute)] hover:text-[var(--ink)]"
          >
            ← All work
          </Link>
          <p className="label mt-10 text-[var(--mute)]">
            § {project.kind} · {project.year}
          </p>
          <div className="mt-6 md:mt-10">
            <MistTitle reflectHeight={0.5}>
              <h1 className="display-1 text-[clamp(3rem,13vw,12rem)] leading-[0.82]">
                {project.title}.
              </h1>
            </MistTitle>
          </div>
          <div className="mt-20 grid grid-cols-12 gap-6 md:mt-28">
            <p className="col-span-12 max-w-3xl text-balance font-serif text-[clamp(1.3rem,2vw,1.8rem)] italic leading-[1.2] text-[var(--ink)] md:col-span-8">
              {project.tagline}
            </p>
            <div className="col-span-12 flex flex-wrap gap-2 md:col-span-4 md:justify-end">
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
        </div>
      </section>

      {/* Cinematic cover */}
      <section className="mt-24 md:mt-32">
        <PainterlyMoment
          variant={variant}
          kicker={`§ Cutscene · ${project.kind}`}
          caption={project.description}
        />
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
