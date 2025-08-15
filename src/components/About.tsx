"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import LinkedIn from "./icons/LinkedIn";
import GitHub from "./icons/GitHub";

// Variants pour l'animation de la grille
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Apparition en cascade
    },
  },
};

// Variants pour chaque carte
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const skillCategories = [
  {
    title: "Front-end",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Redux Toolkit",
      "TanStack Query",
      "MUI",
    ],
  },
  {
    title: "Back-end",
    skills: [
      "Node.js",
      "C# / .NET",
      "Entity Framework",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "SQL Server",
    ],
  },
  {
    title: "DevOps & Outils",
    skills: ["Docker", "Azure DevOps", "Git", "CI/CD"],
  },
  {
    title: "Concepts & Architectures",
    skills: ["Microservices", "REST API", "OAuth2"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-24 sm:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12"
        >
          Un peu <span className="text-primary">plus sur moi</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card className="h-full p-6 flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Bonjour, je suis Nicolas LOPEZ--JOREL !
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">
                  Développeur full-stack passionné avec une expertise dans la
                  création d&apos;applications web robustes et évolutives.
                  J&apos;aime particulièrement travailler avec l&apos;écosystème
                  moderne de JavaScript et je suis toujours à la recherche de
                  nouveaux défis pour affiner mes compétences.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full flex flex-col items-center justify-center p-6">
              <Avatar className="h-32 w-32 mb-4">
                <AvatarImage
                  className="object-cover"
                  src="avatar.png"
                  alt="Nicolas LOPEZ--JOREL"
                />
                <AvatarFallback>NL</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="font-semibold text-lg">Localisation</p>
                <p className="text-muted-foreground">Béziers, France</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card className="h-full p-6">
              <CardHeader>
                <CardTitle>Mes Outils & Compétences</CardTitle>
              </CardHeader>
              <CardContent>
                {skillCategories.map((category) => (
                  <div key={category.title} className="mb-6 last:mb-0">
                    <h4 className="font-semibold text-lg mb-3 text-primary">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-base px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full p-6 text-center flex flex-col justify-center">
              <CardHeader>
                <CardTitle>Retrouvez-moi</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4 justify-center items-center">
                <a
                  href="https://github.com/NicolasLOJO/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <GitHub />
                </a>
                <a
                  href="https://www.linkedin.com/in/nicolas-lopezjorel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <LinkedIn width={24} height={24} />
                </a>
                <a
                  href="#contact"
                  className="p-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Mail />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
