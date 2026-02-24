// app/aboutMe/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

export const metadata: Metadata = {
  title: "About | Lorrell Winfield",
  description: "Software Engineer specializing in Java, React, and Full-Stack Enterprise Development.",
};

const SkillBadge = ({ skill }: { skill: string }) => (
    <span className="rounded-md bg-foreground/10 px-3 py-1 text-sm font-medium text-foreground/80">
    {skill}
  </span>
);

export default function AboutMe() {
  const skills = {
    languages: ["Java", "JavaScript", "Kotlin", "HTML5", "CSS3", "TypeScript"],
    frameworks: ["Spring Boot", "JUnit", "React", "Next.js", "Node.js", "Tailwind CSS"],
    development: ["System Architecture", "State Management", "REST API", "Microservices", "Git"],
    toolsAndDevOps: ["Docker", "Maven", "Git", "Kubernetes", "Selenium WebDriver"],
    databases: ["PostgreSQL", "Redis", "Firebase", "MongoDB"],
  };

  return (
      <main className="mx-auto max-w-5xl px-6 py-12 text-foreground xs:mt-10 sm:mt-10 lg:mt-4 mt-6">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-foreground/15">
              <Image
                  src="/head-shot.jpg"
                  alt="Lorrell Winfield"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  priority
              />
            </div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight">Lorrell Winfield</h1>
              <p className="mt-1 text-lg text-foreground/70">
                Software Engineer - Java • Spring Boot • React • Full-Stack
              </p>
            </div>
          </div>
          <p className="text-foreground/70 leading-relaxed">
            U.S. Air Force Special Ops Veteran and Computer Science graduate from UMKC.
            I build robust, full-stack enterprise applications by bridging the gap between
            responsive front-end interfaces and secure Java backends. My military background
            drives my approach to software engineering: I value clear objectives, disciplined
            collaboration, and highly reliable execution.
          </p>
        </header>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_.9fr]">
          {/* Left: main content */}
          <section className="space-y-6">
            {/* Key Highlights card */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-foreground/90">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">▸</span>
                  <span>Developed real-time communication features and scalable components for Queue dating app</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">▸</span>
                  <span>Engineered Java-based enterprise web applications and resolved UI/UX bottlenecks at Blue Symphony</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">▸</span>
                  <span>Led technical teams in high-stakes environments during 7 years in Air Force Special Operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1">▸</span>
                  <span>Managed $250K+ drone fleet as technician at PG&E, routinely troubleshooting software and hardware issues</span>
                </li>
              </ul>
            </div>

            {/* Skills cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Languages */}
              <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 border-b border-foreground/10 pb-2">Languages</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.languages.map((s) => <SkillBadge key={s} skill={s} />)}
                </div>
              </div>

              {/* Frameworks */}
              <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 border-b border-foreground/10 pb-2">Frameworks</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.frameworks.map((s) => <SkillBadge key={s} skill={s} />)}
                </div>
              </div>

              {/* Databases */}
              <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 border-b border-foreground/10 pb-2">Databases</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.databases.map((s) => <SkillBadge key={s} skill={s} />)}
                </div>
              </div>

              {/* Tools & DevOps */}
              <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 border-b border-foreground/10 pb-2">Tools & DevOps</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.toolsAndDevOps.map((s) => <SkillBadge key={s} skill={s} />)}
                </div>
              </div>

              {/* Development Skills (Full width) */}
              <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm sm:col-span-2">
                <h3 className="text-lg font-semibold mb-4 border-b border-foreground/10 pb-2">Development & Architecture</h3>
                <div className="flex flex-wrap gap-2.5">
                  {skills.development.map((s) => <SkillBadge key={s} skill={s} />)}
                </div>
              </div>
            </div>

            {/* What I'm looking for card */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">What I&apos;m Looking For</h2>
              <p className="text-sm text-foreground/90 leading-relaxed">
                I am currently targeting Junior or Entry-Level Software Engineer roles with a focus
                on Backend or Full-Stack development. I want to leverage my foundation in Java,
                Spring Boot, and robust data architecture, alongside my React experience, to build
                resilient, cloud-scale systems. I thrive in teams that prioritize automated testing,
                clean code practices, and scalable solutions.
              </p>
            </div>
          </section>

          {/* Right: education, links and CTA */}
          <aside className="space-y-6">
            {/* Education card */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Education</h2>
              <div>
                <h3 className="font-semibold text-foreground">Bachelor of Science</h3>
                <p className="text-sm text-foreground/70 mt-1">Computer Science</p>
                <p className="text-sm text-foreground/60 mt-2">University of Missouri-Kansas City</p>
              </div>
            </div>

            {/* Background card */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
              <h2 className="text-lg font-semibold mb-3">Logistics</h2>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Transitioning from military leadership to enterprise engineering, I bring extreme
                ownership and adaptability to software teams. Based in Kansas City, I am open to
                remote, hybrid, or onsite opportunities.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <a
                  href="https://Github.com/LorrellW"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm transition hover:bg-foreground/5"
              >
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <FiGithub /> GitHub
                </div>
                <p className="mt-2 text-sm text-foreground/70">Projects, commits, and pinned repos.</p>
              </a>

              <a
                  href="https://Linkedin.com/in/lorrell-winfield-lw000/"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm transition hover:bg-foreground/5"
              >
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <BsLinkedin /> LinkedIn
                </div>
                <p className="mt-2 text-sm text-foreground/70">Experience and endorsements.</p>
              </a>

              <a
                  href="/Winfield Resume 26.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm transition hover:bg-foreground/5"
              >
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <span>📄</span> Resume
                </div>
                <p className="mt-2 text-sm text-foreground/70">Full resume with detailed experience.</p>
              </a>
            </div>

            {/* CTA card */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Let&apos;s Connect</h2>
              <div className="space-y-3">
                <Link
                    href="/projects"
                    className="flex items-center justify-between w-full rounded-xl border border-foreground/20 bg-background/60 px-4 py-2.5 text-sm hover:bg-foreground/10 transition"
                >
                  <span>View Projects</span>
                  <FiArrowRight />
                </Link>
                <Link
                    href="/contactMe"
                    className="flex items-center justify-center w-full rounded-xl bg-foreground px-4 py-2.5 text-sm text-background hover:opacity-90 transition"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}