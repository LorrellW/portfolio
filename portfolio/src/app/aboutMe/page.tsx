// app/aboutMe/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

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
    languages: ["Java", "JavaScript", "Kotlin", "HTML5", "CSS3", "TypeScript"],
    frameworks: ["Spring boot", "JUnit", "React", "Next.js", "Node.js", "Tailwind CSS",],
    development: ["UI/UX Design", "State Management", "REST API", "Figma", "Git"],
    toolsAndDevOps: ["Docker", "Maven", "Git", "REST APIs", "Selenium WebDriver"],
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
              Software Developer - JavaScript • React • Next.js • UI/UX
            </p>
          </div>
        </div>
        <p className="text-foreground/70 leading-relaxed">
          Computer Science student out of UMKC. 
          I build engaging, user-centric web applications with a focus on performance and 
          design. I have a Mission-driven approach 
          in software development: clear goals, strong collaboration, and reliable execution.
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
                <span>Developed chat functions and features for Queue dating app</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">▸</span>
                <span>Created responsive web experiences with JavaScript, HTML, CSS, and WordPress at Blue Symphony</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 mt-1">▸</span>
                <span>Led technical teams in high-stakes environments during 7 years as Air Force Special Operations</span>
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
              <h3 className="text-lg font-semibold mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((s) => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>

            {/* Frameworks */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((s) => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>

            {/* Databases */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((s) => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Tools & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {skills.toolsAndDevOps.map((s) => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>

            {/* Development Skills (Full width) */}
            <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm sm:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Development & Design</h3>
              <div className="flex flex-wrap gap-2">
                {skills.development.map((s) => <SkillBadge key={s} skill={s} />)}
              </div>
            </div>
          </div>

          {/* What I'm looking for card */}
          <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
            <h2 className="text-lg font-semibold mb-3">What I&apos;m Looking For</h2>
            <p className="text-sm text-foreground/90 leading-relaxed">
              Backend or DevOps-focused roles where I can leverage Java, Spring Boot, 
              and automation tools like Selenium and Docker to build resilient systems. 
              I am passionate about optimizing the development lifecycle and ensuring 
              software reliability. I thrive in mission-driven environments that value 
              disciplined execution and scalable, clean architecture.
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
            <h2 className="text-lg font-semibold mb-3">Background</h2>
            <p className="text-sm text-foreground/90 leading-relaxed">
              From Air Force Special Operations to software development, I bring discipline, 
              adaptability, and a problem-solving mindset to every project. Based in Kansas City, 
              open to remote, hybrid, or onsite opportunities.
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