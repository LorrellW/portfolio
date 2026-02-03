"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiPlayCircle } from "react-icons/fi";

// --------- Types & sample data ----------
type Project = {
    title: string;
    oneLiner: string;
    tags: string[];
    img?: string;
    live?: string;
    demo?: string;
    repo?: string;
    metrics?: { perf?: string; a11y?: string; engagement?: string };
    // featured?: boolean; // Removed from usage
};

const PROJECTS: Project[] = [
    {
        title: "Site Sentinel",
        oneLiner: "Real-time availability monitoring with Headless Browser automation.",
        tags: ["Java Spring Boot", "Playwright", "H2 Database", "Next.JS", "TailwindCSS", "TypeScript"],
        img: "/siteSentinelScreenshot.png",
        demo: "/site sentinel demo.gif",
        repo: "https://github.com/LorrellW/site-sentinel",
    },
    {
        title: "Modern Weather Dashboard",
        oneLiner: "Real-time weather app featuring server-side API proxying, glassmorphism UI, and dynamic error handling.",
        tags: ["Next.js", "JavaScript", "React", "API Integration"],
        img: "/weather-app.png",
        live: "https://nextjs-weather-app-kohl.vercel.app/",
        repo: "https://github.com/LorrellW/nextjs-weather-app",
    },
    {
        title: "Queue Dating App",
        oneLiner: "Dating platform with real-time matching, chat features, and interactive user journeys.",
        tags: ["Full-stack", "React", "Figma", "UI/UX"],
        img: "/queue-app.png",
        live: "https://www.queuedatingapp.com/",
    },
    {
        title: "Fortune400 Dashboard",
        oneLiner: "Banking analytics with typed APIs, charts, database and authentication.",
        tags: ["Full-stack", "Next.js", "JavaScript", "React", "TypeScript"],
        img: "/fortune400.png",
        live: "https://commerce-bank-app.vercel.app/",
        repo: "https://github.com/LorrellW/Commerce-Bank-App",
    },
    {
        title: "Real Time Threat Tracker",
        oneLiner: "Security threat intelligence dashboard with Kanban pipeline, search, and PDF export.",
        tags: ["Backend", "Node.js", "React"],
        img: "/rtti.png",
        repo: "https://github.com/LorrellW/real-time-threat-intelligence",
    },
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
                "rounded-full border px-3 py-1 text-xs font-medium transition",
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
        <span className="rounded-md border border-foreground/15 bg-background/70 px-2 py-0.5 text-[11px] text-foreground/80 font-medium">
            {label}: {value}
        </span>
    );
}

function ProjectCard({ p }: { p: Project }) {
    return (
        // REMOVED: Conditional border/ring logic. Now using standard border-foreground/10 for all.
        <article className="group flex flex-col h-full rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm transition hover:bg-foreground/5 hover:shadow-md">

            {/* REMOVED: Featured Badge logic completely */}

            <div className="overflow-hidden rounded-xl border border-foreground/10">
                {p.img ? (
                    <Image
                        src={p.img}
                        alt={`${p.title} screenshot`}
                        width={1200}
                        height={720}
                        className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="h-64 w-full bg-foreground/10 flex items-center justify-center text-foreground/40 text-sm">
                        Preview coming soon
                    </div>
                )}
            </div>

            <div className="flex-1">
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-base text-foreground/80 leading-relaxed">{p.oneLiner}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-foreground/15 bg-background/70 px-2.5 py-1 text-[11px] font-medium">
                            {t}
                        </span>
                    ))}
                </div>

                {(p.metrics?.perf || p.metrics?.a11y || p.metrics?.engagement) && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        {p.metrics.engagement && <Metric label="Engagement" value={p.metrics.engagement} />}
                        {p.metrics.perf && <Metric label="Performance" value={p.metrics.perf} />}
                        {p.metrics.a11y && <Metric label="Accessibility" value={p.metrics.a11y} />}
                    </div>
                )}
            </div>

            <div className="mt-6 flex gap-3">
                {p.live && (
                    <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 justify-center rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition hover:opacity-90"
                    >
                        <FiExternalLink size={14} />
                        View Live
                    </a>
                )}

                {p.demo && (
                    <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 justify-center rounded-lg border border-purple-600/30 bg-purple-600/5 px-4 py-2.5 text-sm font-medium text-purple-600 transition hover:bg-purple-600/10"
                    >
                        <FiPlayCircle size={14} />
                        Watch Demo
                    </a>
                )}

                {p.repo && (
                    <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 justify-center rounded-lg border border-foreground/20 px-4 py-2.5 text-sm font-medium transition hover:bg-foreground/10"
                    >
                        <FiGithub size={14} />
                        Code
                    </a>
                )}
            </div>
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
        <main className="mx-auto max-w-7xl px-6 py-12 text-foreground">
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
                <p className="mt-3 text-lg text-foreground/60 max-w-2xl">
                    A collection of applications, dashboards, and tools built with modern full-stack technologies.
                </p>
            </header>

            {/* Search & Filters */}
            <div className="mb-10 space-y-6">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full max-w-lg rounded-xl border border-foreground/20 bg-background/60 px-5 py-3 text-base outline-none transition focus:ring-2 focus:ring-foreground/30 shadow-sm"
                />

                <div className="flex flex-wrap gap-2">
                    <Tag active={active === "All"} onClick={() => setActive("All")}>
                        All Projects
                    </Tag>
                    {ALL_TAGS.map((t) => (
                        <Tag key={t} active={active === t} onClick={() => setActive(t)}>
                            {t}
                        </Tag>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
                {filtered.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}
            </section>

            {/* Empty state */}
            {filtered.length === 0 && (
                <div className="mt-20 text-center">
                    <p className="text-lg text-foreground/70">No projects match your search.</p>
                    <button
                        onClick={() => {
                            setQuery("");
                            setActive("All");
                        }}
                        className="mt-4 text-base text-purple-600 hover:underline font-medium"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </main>
    );
}