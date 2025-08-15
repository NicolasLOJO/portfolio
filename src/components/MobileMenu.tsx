"use client";

import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import { X, Mail } from "lucide-react";
import GitHub from "./icons/GitHub";
import LinkedIn from "./icons/LinkedIn";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Parcours" },
  { href: "#projects", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  exit: { opacity: 0, y: 20 },
};

export const MobileMenu = ({
  isOpen,
  setIsOpenAction,
}: {
  isOpen: boolean;
  setIsOpenAction: (isOpen: boolean) => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex flex-col p-4"
        >
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpenAction(false)}
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center flex-grow">
            <motion.nav
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-6 text-center"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={navItemVariants}>
                  <Link
                    href={link.href}
                    className="text-3xl font-medium text-muted-foreground hover:text-primary"
                    onClick={() => setIsOpenAction(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div variants={navItemVariants} className="mt-12">
              <Button size="lg" asChild onClick={() => setIsOpenAction(false)}>
                <Link href="#contact">Me Contacter</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex justify-center items-center gap-6 pb-8"
          >
            <motion.a variants={navItemVariants} href="#">
              <GitHub />
            </motion.a>
            <motion.a variants={navItemVariants} href="#">
              <LinkedIn />
            </motion.a>
            <motion.a variants={navItemVariants} href="#">
              <Mail />
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
