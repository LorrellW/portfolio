"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";

// Define the social links in an array of objects for easy mapping
const socialLinks = [
  {
    name: "GitHub",
    icon: <SiGithub />,
    url: "https://github.com/LorrellW",
  },
  {
    name: "LinkedIn",
    icon: <SiLinkedin />,
    url: "https://www.linkedin.com/in/lorrell-winfield-lw000/",
  },
  {
    name: "Email",
    icon: <FiMail />,
    url: "mailto:LorrellWinfieldii@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((link) => (
        <a
          href={link.url}
          key={link.name}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Security best practice for external links
          aria-label={link.name} // Accessibility for screen readers
          className="text-foreground/80 hover:text-blue-500 transition-colors duration-300"
        >
          <div className="text-3xl">{link.icon}</div>
        </a>
      ))}
    </div>
  );
}
