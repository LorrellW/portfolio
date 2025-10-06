// src/app/components/ProjectCards.tsx
import Image from "next/image";

export type Project = {
  title: string;
  oneLiner: string;
  tags: string[];
  img?: string;
  live?: string;
  repo?: string;
  metrics?: { perf?: string; a11y?: string };
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group rounded-2xl border border-foreground/10 bg-background/40 p-4 shadow-sm transition hover:bg-foreground/5">
      <div className="overflow-hidden rounded-xl border border-foreground/10">
        {p.img ? (
          <Image
            src={p.img}
            alt={`${p.title} screenshot`}
            width={1200}
            height={720}
            className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.22]"
            priority={false}
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
        )}
      </div>
    </article>
  );
}
