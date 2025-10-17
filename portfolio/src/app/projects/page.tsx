"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// --------- Types & sample data ----------
type Project = {
    title: string;
    oneLiner: string;
    tags: string[];
    img?: string;
    live?: string;
    repo?: string;
    metrics?: { perf?: string; a11y?: string; engagement?: string };
    featured?: boolean;
};

const PROJECTS: Project[] = [
    {
        title: "Queue Dating App",
        oneLiner: "Dating platform with real-time matching, chat features, and interactive user journeys.",
        tags: ["Full-stack", "React", "Figma", "UI/UX"],
        img: "/queue-app.png", 
        live: "https://www.queuedatingapp.com/",
        //metrics: { engagement: "+25%" },
    },
    {
        title: "Fortune400 Dashboard",
        oneLiner: "Banking analytics with typed APIs, charts, database and authentication.",
        tags: ["Full-stack", "Next.js", "TypeScript"],
        img: "/fortune400.png",
        //live: "https://example.com/app",
        repo: "https://github.com/LorrellW/Commerce-Bank-App",
        //metrics: { perf: "95", a11y: "100" },
    },
    {
        title: "Real Time Threat Tracker",
        oneLiner: "Security threat intelligence dashboard with Kanban pipeline, search, and PDF export.",
        tags: ["Backend", "Node.js", "React"],
        img: "/rtti.png",
        //live: "#",
        repo: "https://github.com/LorrellW/real-time-threat-intelligence",
        //metrics: { perf: "98" },
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
        <article className={`group rounded-2xl border bg-background/40 p-4 shadow-sm transition hover:shadow-md ${p.featured ? 'border-purple-600/40 ring-1 ring-purple-600/20' : 'border-foreground/10 hover:bg-foreground/5'}`}>
            {p.featured && (
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-purple-600/10 px-2.5 py-1 text-[11px] font-semibold text-purple-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-600"></span>
                    Featured
                </div>
            )}
            
            <div className="overflow-hidden rounded-xl border border-foreground/10">
                {p.img ? (
                    <Image
                        src={p.img}
                        alt={`${p.title} screenshot`}
                        width={1200}
                        height={720}
                        className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="h-48 w-full bg-foreground/10 flex items-center justify-center text-foreground/40 text-sm">
                        Preview coming soon
                    </div>
                )}
            </div>

            <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{p.oneLiner}</p>

            <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-foreground/15 bg-background/70 px-2.5 py-1 text-[11px] font-medium">
                        {t}
                    </span>
                ))}
            </div>

            {(p.metrics?.perf || p.metrics?.a11y || p.metrics?.engagement) && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                    {p.metrics.engagement && <Metric label="Engagement" value={p.metrics.engagement} />}
                    {p.metrics.perf && <Metric label="Performance" value={p.metrics.perf} />}
                    {p.metrics.a11y && <Metric label="Accessibility" value={p.metrics.a11y} />}
                </div>
            )}

            <div className="mt-4 flex gap-2">
                {p.live && (
                    <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 justify-center rounded-lg bg-foreground px-3 py-2 text-xs font-medium text-background transition hover:opacity-90"
                    >
                        <FiExternalLink size={13} />
                        View Live
                    </a>
                )}
                {p.repo && (
                    <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 justify-center rounded-lg border border-foreground/20 px-3 py-2 text-xs font-medium transition hover:bg-foreground/10"
                    >
                        <FiGithub size={13} />
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
        <main className="mx-auto max-w-6xl px-6 py-12 text-foreground">
            <header className="mb-10">
                <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
                <p className="mt-2 text-lg text-foreground/70">
                    A collection of my work building engaging web applications and user experiences.
                </p>
            </header>

            {/* Search & Filters */}
            <div className="mb-8 space-y-4">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full max-w-md rounded-lg border border-foreground/20 bg-background/60 px-4 py-2.5 text-sm outline-none transition focus:ring-2 focus:ring-foreground/30"
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
            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                    <ProjectCard key={p.title} p={p} />
                ))}
            </section>

            {/* Empty state */}
            {filtered.length === 0 && (
                <div className="mt-16 text-center">
                    <p className="text-foreground/70">No projects match your search.</p>
                    <button
                        onClick={() => {
                            setQuery("");
                            setActive("All");
                        }}
                        className="mt-3 text-sm text-purple-600 hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </main>
    );
}