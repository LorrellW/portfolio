"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// --------- Types & sample data ----------
type Project = {
    title: string;
    oneLiner: string;
    tags: string[];            // e.g. ["Frontend","Full-stack","UI/UX"]
    img?: string;              // /public path or remote allowed by next.config
    live?: string;             // live URL
    repo?: string;             // GitHub URL
    metrics?: { perf?: string; a11y?: string; };
};

const PROJECTS: Project[] = [
    {
        title: "Fortune400 Dashboard",
        oneLiner: "Banking analytics with typed APIs, charts, DataBase and auth.",
        tags: ["Full-stack", "Next.js", "TypeScript"],
        img: "/fortune400.png",
        live: "https://example.com/app",
        repo: "https://github.com/you/fortune400",
        metrics: { perf: "95", a11y: "100" },
    },
    {
        title: "Real Time Threat Tracker",
        oneLiner: "Kanban-style pipeline, search, and PDF export.",
        tags: ["Backend", "Node.js", "React"],
        img: "/rtti.png",
        live: "#",
        repo: "https://github.com/you/job-tracker",
        metrics: { perf: "98" },
    },
    //   {
    //     title: "A11y Component Kit",
    //     oneLiner: "Headless, accessible React components with tests.",
    //     tags: ["Frontend", "A11y", "Library"],
    //     img: "/project-3.png",
    //     repo: "https://github.com/you/a11y-kit",
    //     metrics: { a11y: "Axe-clean" },
    //   },
];

// derive tag set
const ALL_TAGS = Array.from(
    new Set(PROJECTS.flatMap((p) => p.tags))
).sort();

// --------- UI bits ----------
function Tag({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick?: () => void }) {
    return (
        <button
            onClick={onClick}
            className={[
                "rounded-full border px-3 py-1 text-xs transition",
                active
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background/60 border-foreground/20 hover:bg-foreground/10",
            ].join(" ")}
        >
            {children}
        </button>
    );
}

function Metric({ label, value }: { label: string; value: string }) {
    return (
        <span className="rounded-md border border-foreground/15 bg-background/70 px-2 py-0.5 text-[11px] text-foreground/80">
            {label}: {value}
        </span>
    );
}

function ProjectCard({ p }: { p: Project }) {
    return (
        <article className="group rounded-2xl border border-foreground/10 bg-background/40 p-4 shadow-sm transition hover:bg-foreground/5">
            <div className="overflow-hidden rounded-xl border border-foreground/10">
                {p.img ? (
                    <Image
                        src={p.img}
                        alt={`${p.title} screenshot`}
                        width={1200}
                        height={720}
                        className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.20]"
                    />
                ) : (
                    <div className="h-40 w-full bg-foreground/10" />
                )}
            </div>

            <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-foreground/80">{p.oneLiner}</p>

            <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-foreground/15 bg-background/70 px-2 py-0.5 text-[11px]">
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2">
                {p.metrics?.perf && <Metric label="Perf" value={p.metrics.perf} />}
                {p.metrics?.a11y && <Metric label="A11y" value={p.metrics.a11y} />}
            </div>
{/* 
            <div className="mt-4 flex gap-2">
                {p.live && (
                    <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background transition hover:opacity-90"
                    >
                        Live
                    </a>
                )}
                {p.repo && (
                    <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-foreground/20 px-3 py-1.5 text-xs transition hover:bg-foreground/10"
                    >
                        Code
                    </a>
                )} */}
                {/* Optional: link to a case-study page */}
                {/* <Link href="/projects/fortune400" className="text-xs underline underline-offset-4">Case Study</Link> */}
            {/* </div> */}
        </article>
    );
}

// --------- Page ----------
export default function ProjectsPage() {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState<string | "All">("All");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return PROJECTS.filter((p) => {
            const matchesTag = active === "All" || p.tags.includes(active);
            const matchesText =
                !q ||
                p.title.toLowerCase().includes(q) ||
                p.oneLiner.toLowerCase().includes(q) ||
                p.tags.some((t) => t.toLowerCase().includes(q));
            return matchesTag && matchesText;
        });
    }, [query, active]);

    return (
        <main className="mx-auto max-w-6xl px-6 py-12 text-foreground">
            <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
                    <p className="mt-1 text-foreground/70">
                        A curated set of front-end and full-stack builds with live demos and code.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search projects…"
                        className="w-64 rounded-lg border border-foreground/20 bg-background/60 px-2 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/30"
                    />
                </div>
            </header>

            {/* Filters */}
            <div className="mb-6 flex flex-wrap gap-2">
                <Tag active={active === "All"} onClick={() => setActive("All")}>
                    All
                </Tag>
                {ALL_TAGS.map((t) => (
                    <Tag key={t} active={active === t} onClick={() => setActive(t)}>
                        {t}
                    </Tag>
                ))}
            </div>

            {/* Grid */}
            <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}
            </section>

            {/* Empty state */}
            {filtered.length === 0 && (
                <p className="mt-12 text-center text-sm text-foreground/70">No projects match your filters yet.</p>
            )}
        </main>
    );
}
