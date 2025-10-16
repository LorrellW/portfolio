"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
});

interface LinksProps {
    isMobileMenu?: boolean;
}

export default function Links({ isMobileMenu = false }: LinksProps) {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Home" }, // Added Home link
        { href: "/aboutMe", label: "About Me" },
        { href: "/projects", label: "Projects" },
        { href: "/contactMe", label: "Contact" },
        { href: "/settings", label: "Settings" },
    ];

    const containerClasses = isMobileMenu 
        ? 'flex flex-col items-center gap-8 text-xl' 
        : `flex items-center gap-6 text-base font-medium ${exo.className}`;

  return (
    <div className={containerClasses}>
        {links.map((link) => (
            <Link 
                key={link.href} 
                href={link.href}
                className={`
                    px-3 py-1 rounded-md transition-all duration-200 
                    ${pathname === link.href 
                        ? 'text-blue-500 font-semibold bg-blue-500/10' // Active link style
                        : 'text-foreground/70 hover:text-blue-500 hover:bg-foreground/5' // Inactive/Hover style
                    }
                `}
            >
                {link.label}
            </Link>
        ))}
    </div>
  );
}
