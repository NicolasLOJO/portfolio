"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const generateRandomPath = (points = 5) => {
  const path: { top: string[]; left: string[] } = { top: [], left: [] };
  for (let i = 0; i < points; i++) {
    path.top.push(`${Math.random() * 100}%`);
    path.left.push(`${Math.random() * 100}%`);
  }
  path.top.push(path.top[0]);
  path.left.push(path.left[0]);
  return path;
};

const orangePath = generateRandomPath(6);
const bluePath = generateRandomPath(8);
const tealPath = generateRandomPath(15);

const AnimatedSphere = ({
  animate,
  transition,
  colorClass,
}: {
  animate: {
    top: string[];
    left: string[];
  };
  transition: object;
  colorClass: string;
}) => {
  return (
    <motion.div
      className={`absolute w-72 h-72 rounded-full ${colorClass} opacity-50 blur-3xl`}
      animate={animate}
      transition={transition}
    />
  );
};

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedSphere
          colorClass="bg-orange-500"
          animate={orangePath}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <AnimatedSphere
          colorClass="bg-sky-400"
          animate={bluePath}
          transition={{
            duration: 45,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
        <AnimatedSphere
          colorClass="bg-emerald-700"
          animate={tealPath}
          transition={{
            duration: 65,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl"
        >
          <span className="block">Développeur Full-Stack</span>
          <span className="block text-primary mt-2">Créatif & Passionné</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground font-medium"
        >
          Je conçois et développe des expériences web modernes, de l&apos;idée
          au déploiement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <Button asChild size="lg" className="group">
            <Link href="#projects">
              Voir mes projets
              <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
