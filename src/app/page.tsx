import Link from "next/link";
import Marquee from "@/components/marquee";
import JourneyMap from "@/components/journey-map";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";
import { marqueeWords, skillGroups } from "@/data/skills";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ——————————————————— HERO ——————————————————— */}
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 mesh" aria-hidden />
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 md:px-10">
          <div className="col-span-12 flex items-center justify-between gap-4 rule-bottom pb-5">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink)]/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--plum)]" />
              Portfolio · 2026 edition
            </div>
            <div className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink)]/70 md:flex">
              Jakarta · ID{" "}
              <span className="text-[var(--mute)]">/ UTC+7</span>
            </div>
          </div>

          <div className="col-span-12 mt-10 md:mt-16">
            <h1 className="display-1 text-[clamp(3.6rem,13vw,12rem)]">
              <span className="block">Saeful</span>
              <span className="block">
                Rohman{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">An.</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.55em] bg-[var(--acid)]"
                  />
                </span>
              </span>
            </h1>
          </div>

          <div className="col-span-12 mt-8 grid grid-cols-12 gap-6 md:mt-14">
            <p className="col-span-12 max-w-2xl text-balance font-sans text-lg leading-relaxed text-[var(--ink)]/80 md:col-span-7 md:text-2xl">
              Computer Science student building at the intersection of{" "}
              <em className="font-serif italic">mobile</em>,{" "}
              <em className="font-serif italic">fullstack web</em>,{" "}
              <em className="font-serif italic">games</em>, and{" "}
              <em className="font-serif italic">AI engineering</em> — from
              autonomous agents to automations that quietly replace entire
              workflows.
            </p>

            <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:items-end md:justify-end md:text-right">
              <p className="label text-[var(--mute)]">Now</p>
              <p className="font-serif text-xl italic md:text-2xl">
                Shipping AI agents & fullstack platforms.
              </p>
              <div className="mt-2 flex gap-2 md:justify-end">
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 border border-[var(--ink)] bg-[var(--ink)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--bone)]"
                >
                  See the work →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[var(--ink)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.22em]"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——————————————————— MARQUEE ——————————————————— */}
      <div className="mt-20 md:mt-28">
        <Marquee items={marqueeWords} />
      </div>

      {/* ——————————————————— INTRODUCTION ——————————————————— */}
      <section id="intro" className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            {/* Image placeholder */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--ink)] bg-[var(--bone)]">
              <div className="absolute inset-0 hatch opacity-40" aria-hidden />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--ink)]/70">
                    Portrait / Placeholder
                  </p>
                  <p className="mt-2 font-serif text-5xl italic">S.R.A.</p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--mute)]">
                    Drop /public/saeful.jpg
                  </p>
                </div>
              </div>
              <div className="absolute left-3 top-3 chip bg-[var(--bone)]">
                ID · 001
              </div>
              <div className="absolute bottom-3 right-3 chip bg-[var(--acid)]">
                Online
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-10">
            <p className="label text-[var(--mute)]">§ 01 · Introduction</p>
            <h2 className="display-1 mt-4 text-[clamp(2.4rem,6vw,4.5rem)]">
              I build things
              <br />
              <span className="not-italic">that feel alive.</span>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[var(--ink)]/85 md:text-base">
              <p>
                Hi — I’m <strong>Saeful Rohman An</strong>, a Computer Science
                student in Indonesia. I design and engineer products across four
                disciplines: <em>mobile apps</em>, <em>fullstack web platforms</em>,
                <em> games</em>, and <em>AI engineering</em>.
              </p>
              <p>
                Lately I’ve been deep into building <strong>autonomous AI
                agents</strong> — systems that plan, reason, use tools and
                browsers, and quietly do real work. I also glue LLMs into
                production automations (ops, sales, support) so teams can focus
                on what only humans can do.
              </p>
              <p>
                When I’m not shipping code, I’m sketching game loops, obsessing
                over type, or watching interfaces move in slow motion trying to
                figure out why exactly that one felt so good.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-[var(--rule)] py-6 md:grid-cols-4">
              <Stat k="4+" v="Disciplines" />
              <Stat k="15+" v="Shipped projects" />
              <Stat k="∞" v="Curiosity" />
              <Stat k="ID" v="Based in Indonesia" />
            </dl>
          </div>
        </div>
      </section>

      {/* ——————————————————— JOURNEY ——————————————————— */}
      <JourneyMap />

      {/* ——————————————————— SKILLS ——————————————————— */}
      <section className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          tag="§ 04 · Disciplines"
          title={
            <>
              A stack for{" "}
              <span className="not-italic">every problem.</span>
            </>
          }
        >
          Four disciplines, one brain. I pick the boring right tool for the job
          — and then make it feel unreasonably good.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-px bg-[var(--rule)] md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className="group relative flex flex-col gap-4 bg-[var(--bone)] p-8 transition-colors hover:bg-[var(--ink)] hover:text-[var(--bone)]"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--mute)] group-hover:text-[var(--acid)]">
                / {g.tag}
              </span>
              <h3 className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] italic leading-tight">
                {g.label}
              </h3>
              <ul className="mt-2 flex flex-col gap-2 font-mono text-[13px] text-[var(--ink)]/80 group-hover:text-[var(--bone)]/80">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="mt-2 block h-[3px] w-3 bg-current" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ——————————————————— FEATURED WORK ——————————————————— */}
      <section className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionHeading
          tag="§ 05 · Selected work"
          title={
            <>
              Recent
              <br />
              <span className="not-italic">shipments.</span>
            </>
          }
          link="/work"
          linkLabel="All projects →"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ——————————————————— BIG CTA ——————————————————— */}
      <section className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="relative overflow-hidden border border-[var(--ink)] bg-[var(--acid)] p-10 md:p-20">
          <div className="pointer-events-none absolute inset-0 hatch opacity-40" aria-hidden />
          <p className="relative label text-[var(--ink)]/70">§ 06 · Open slots</p>
          <h2 className="relative display-1 mt-4 text-[clamp(3rem,10vw,8rem)]">
            Got an idea
            <br />
            <span className="not-italic">worth building?</span>
          </h2>
          <div className="relative mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-lg text-balance text-[17px] leading-relaxed text-[var(--ink)]/80 md:text-lg">
              I take on a small number of build partnerships each quarter —
              MVPs, AI agents, polished mobile apps, or weird experiments that
              shouldn’t work but do.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-[var(--ink)] bg-[var(--ink)] px-6 py-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--bone)]"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-serif text-4xl font-medium italic leading-none md:text-5xl">
        {k}
      </dt>
      <dd className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--mute)]">
        {v}
      </dd>
    </div>
  );
}
