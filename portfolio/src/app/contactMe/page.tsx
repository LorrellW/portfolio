"use client";

import { useState } from "react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { FiMail,  FiFileText, FiCopy, FiCheck, FiMapPin, FiClock } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { MdOutlineHomeWork } from "react-icons/md";
import Image from "next/image";


const EMAIL = "LorrellWinfieldii@gmail.com";           // ← put your real email
const GITHUB = "https://github.com/your-username";
const LINKEDIN = "https://www.linkedin.com/in/your-handle";
const RESUME_URL = "L.Winfield Resume 25.pdf";             // put a PDF in /public or change this

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 text-foreground">
      <button > <Link
                href={"/"}> <Image
                    src={"/logo5.png"}
                    width={100}
                    height={100}
                    className="absolute top-0 left-0 p-2 h-20 w-20 object-contain"
                    alt="Logo"
                ></Image> </Link> </button>
                
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">Contact Me</h1>
        <p className="mt-2 text-foreground/70">Drop a line, lets connect! </p>
      </header>

      {/* 2-col layout */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_.9fr]">
        {/* Left: primary actions */}
        <section className="space-y-6">
          {/* Email card */}
          <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <FiMail /> Email
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
              >
                <FiMail /> {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 px-3 py-2 text-sm hover:bg-foreground/10 transition"
                aria-label="Copy email to clipboard"
              >
                {copied ? <FiCheck /> : <FiCopy />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm transition hover:bg-foreground/5"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                <SiGithub /> GitHub
              </div>
              <p className="mt-2 text-sm text-foreground/70">Projects, commits, and pinned repos.</p>
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm transition hover:bg-foreground/5"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                <BsLinkedin /> LinkedIn
              </div>
              <p className="mt-2 text-sm text-foreground/70">Experience, certifications, and endorsements.</p>
            </a>

            <a
              href={RESUME_URL}
              className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm transition hover:bg-foreground/5 sm:col-span-2"
            >
              <div className="flex items-center gap-2 text-lg font-semibold">
                <FiFileText /> Resume (PDF)
              </div>
              <p className="mt-2 text-sm text-foreground/70">One-page summary of skills, projects, and impact.</p>
            </a>
          </div>
        </section>

        {/* Right: details */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Availability</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <FiMapPin className="mt-0.5" />
                Kansas City, Missouri / Kansas City, Kansas 
              </li>
              <li className="flex items-start gap-2">
                <FiClock className="mt-0.5" />
                Typical response within 48 hours
              </li>
              <li className="flex items-start gap-2">
                <MdOutlineHomeWork className="mt-0.5" />
                Open to all roles: remote, hybrid, or onsite
              </li>
            </ul>
          </div>

          {/* <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">What to include</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/90">
              <li>Role or project scope</li>
              <li>Timeline and collaboration details</li>
              <li>Links (spec, repo, design, or brief)</li>
            </ul>
          </div> */}

          {/* <div className="rounded-2xl border border-foreground/10 bg-background/40 p-5 shadow-sm">
            <h2 className="text-lg font-semibold">Elsewhere</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                className="rounded-md border border-foreground/20 px-3 py-1 text-sm hover:bg-foreground/10 transition"
                href="/#projects"
              >
                View Projects
              </Link>
              <Link
                className="rounded-md border border-foreground/20 px-3 py-1 text-sm hover:bg-foreground/10 transition"
                href="/aboutMe"
              >
                About Me
              </Link>
            </div>
          </div> */}


        </aside>
      </div>
    </main>
  );
}
