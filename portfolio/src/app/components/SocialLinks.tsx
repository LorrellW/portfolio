"use client";

import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle"; // Make sure this path points to your ThemeToggle component

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
      // Added 'items-center' to align the 3xl icons with the toggle switch
      <div className="flex items-center gap-2 md:gap-6">
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

        {/* Theme Toggle Button injected as the last item */}
        <div className="ml-2 pl-4 md:ml-4 md:pl-6 border-l border-foreground/20 flex items-center">
          <ThemeToggle />
        </div>
      </div>
  );
}