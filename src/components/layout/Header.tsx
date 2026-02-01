"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Início", href: "/" },
  { name: "Law Audition", href: "/law-audition" },
  { name: "Integridade Pública", href: "/public-integrity" },
  { name: "EBI", href: "/ebi", highlight: true }
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-ekd-charcoal border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        
        {/* MARCA */}
        <Link href="/" className="text-ekd-gold font-bold text-xl">
          EdenKingDom Law
        </Link>

        {/* MENU */}
        <nav className="flex gap-6">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-sm font-medium transition px-3 py-1 rounded
                  ${
                    item.highlight
                      ? "bg-ekd-gold text-black hover:opacity-90"
                      : active
                      ? "text-ekd-gold"
                      : "text-ekd-gray hover:text-ekd-pearl"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
