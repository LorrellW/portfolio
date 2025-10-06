"use client";

// app/aboutMe/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "About | Lorrell Winfield",
  description: "Software developer focused on React/Next.js, TypeScript, and polished UX.",
};

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="rounded-md bg-foreground/10 px-3 py-1 text-sm font-medium text-foreground/80">
    {skill}
  </span>
);

export default function AboutMe() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5"],
    backend: ["Node.js", "Express", "Python"],
    tools: ["Git", "GitHub", "Vercel", "Docker", "VS Code"],
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-foreground">
      {/* 2-col layout on md+, stack on mobile */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside>
          <div className="relative h-36 w-36 overflow-hidden rounded-full ring-1 ring-foreground/15">
            <Image
              src="/logo5.png"
              alt="Lorrell Winfield headshot"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Link
              href="https://Github.com/LorrellW"
              className="rounded-lg border border-foreground/20 px-3 py-1 text-sm hover:bg-foreground/10 transition"
            >
              GitHub
            </Link>
            <Link
              href="https://Linkedin.com/in/lorrell-winfield-lw000/"
              className="rounded-lg border border-foreground/20 px-3 py-1 text-sm hover:bg-foreground/10 transition"
            >
              LinkedIn
            </Link>
            <Link
              href="/L.Winfield Resume 25.pdf"
              className="rounded-lg bg-foreground px-3 py-1 text-sm text-background hover:opacity-90 transition"
            >
              Resume
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <section className="space-y-8">
          {/* Hero */}
          <header>
            <h1 className="text-4xl font-semibold tracking-tight">Lorrell Winfield</h1>
            <p className="mt-1 text-lg text-foreground/80">
              Software Developer — React • Next.js • TypeScript
            </p>
            <p className="mt-4 leading-relaxed">
              I’m a Computer Science student at UMKC and former Air Force Special Operator
              (7 years). I build fast, accessible, maintainable web apps with a calm,
              mission-driven approach: clear scope, clean code, reliable delivery.
            </p>
          </header>

          {/* Highlights */}
          <div>
            <h2 className="text-xl font-semibold">Highlights & Impact</h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground/90 list-disc pl-5">
              <li>Refactored chat UI for a React Native app → render cost ~−35%, TTI −400ms.</li>
              <li>Built Next.js banking dashboards (Postgres, typed APIs); Lighthouse 95+.</li>
              <li>Security coursework: threat intel dashboard, risk scoring, PDF/CSV reports.</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-foreground/70">Frontend</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.frontend.map((s) => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground/70">Backend</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.backend.map((s) => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>
            <div className="sm:col-span-2">
              <h3 className="text-sm font-medium text-foreground/70">Tools</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.tools.map((s) => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>
          </div>

          {/* Target */}
          <div>
            <h2 className="text-xl font-semibold">What I’m Looking For</h2>
            <p className="mt-2 text-sm text-foreground/90">
              Front-end or full-stack roles with React/Next.js, TypeScript, and strong UX.
              Comfortable owning features end-to-end, collaborating in PRs, and instrumenting
              for performance & accessibility.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-background/60 px-4 py-2 text-sm hover:bg-foreground/10 transition"
            >
              View Projects <FiArrowRight />
            </Link>
            <Link
              href="mailto:lorrell@example.com"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-sm text-background hover:opacity-90 transition"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
