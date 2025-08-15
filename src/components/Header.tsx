"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "À propos" },
    { href: "#experience", label: "Parcours" },
    { href: "#projects", label: "Réalisations" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-primary">Mon Portfolio</span>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Ouvrir le menu</span>
            </Button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} setIsOpenAction={setIsMenuOpen} />
    </>
  );
};

export default Header;
