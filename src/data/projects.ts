export type Project = {
  slug: string;
  title: string;
  year: string;
  kind: string;
  stack: string[];
  tagline: string;
  description: string;
  role: string;
  accent: "acid" | "plum" | "cobalt" | "ink";
};

export const projects: Project[] = [
  {
    slug: "atlas-agent",
    title: "Atlas Agent",
    year: "2025",
    kind: "AI Engineering",
    stack: ["TypeScript", "LangGraph", "OpenAI", "Playwright", "Postgres"],
    tagline:
      "An autonomous research agent that browses, reads, and writes reports end-to-end.",
    description:
      "A multi-step AI agent that plans queries, drives a real browser, synthesizes sources and produces cited briefs. Tool-use + self-reflection loop with strict eval harness.",
    role: "Architecture · Agent loop · Tooling",
    accent: "acid",
  },
  {
    slug: "arcade-hoop",
    title: "Arcade Hoop",
    year: "2024",
    kind: "Game Development",
    stack: ["Unity", "C#", "Shader Graph"],
    tagline: "Physics-based arcade basketball with feel-good juice.",
    description:
      "A mobile arcade game built in Unity. Custom trajectory physics, swipe controls, haptics, shaders, and a tight 60fps loop. Released on Play Store.",
    role: "Gameplay · Shaders · Release",
    accent: "plum",
  },
  {
    slug: "warung-pos",
    title: "Warung POS",
    year: "2024",
    kind: "Fullstack Web",
    stack: ["Next.js", "tRPC", "Postgres", "Prisma", "Tailwind"],
    tagline: "A lightning-fast POS for small Indonesian businesses.",
    description:
      "End-to-end point-of-sale platform: inventory, transactions, receipts and offline-first sync. Built for low-bandwidth environments and thumb-friendly usage.",
    role: "Fullstack · DX · Deployment",
    accent: "cobalt",
  },
  {
    slug: "flux-mobile",
    title: "Flux Mobile",
    year: "2024",
    kind: "Mobile Development",
    stack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    tagline: "A social micro-journaling app with soft, tactile motion.",
    description:
      "Cross-platform mobile app with a hand-built motion system, offline drafts, and a friendship-graph feed. Custom bottom sheets and gestures.",
    role: "Mobile engineering · Motion design",
    accent: "ink",
  },
  {
    slug: "lumen-automation",
    title: "Lumen Automation",
    year: "2025",
    kind: "AI Automation",
    stack: ["n8n", "Python", "FastAPI", "OpenAI", "Zapier"],
    tagline:
      "An internal automation layer that replaced 3 ops roles worth of manual work.",
    description:
      "Automation flows that ingest emails, classify intent with an LLM, act on CRM/ERP systems, and keep humans in the loop only for exceptions. Full audit trail & retries.",
    role: "Workflow design · LLM integration",
    accent: "acid",
  },
  {
    slug: "studio-site",
    title: "Studio Site",
    year: "2023",
    kind: "Fullstack Web",
    stack: ["Next.js", "GSAP", "Sanity"],
    tagline:
      "A design studio site with editorial typography and choreographed scroll.",
    description:
      "Content-driven agency site with a headless CMS, interactive case studies, and a reduced-motion mode.",
    role: "Design · Frontend · CMS",
    accent: "plum",
  },
];
