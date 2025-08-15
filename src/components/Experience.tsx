"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ShieldCheck, UserCheck } from "lucide-react";

const timelineEvents = [
  {
    date: "2019",
    title: "Formation Développeur",
    icon: <GraduationCap />,
    description:
      "Début de mon parcours dans le monde du développement avec une formation intensive.",
    color: "bg-sky-500",
  },
  {
    date: "2019 - 2021",
    title: "Développeur Full-Stack",
    company: "Arcade",
    icon: <Briefcase />,
    description:
      "Première expérience professionnelle où j'ai pu développer des fonctionnalités clés et monter en compétence sur des projets d'envergure.",
    color: "bg-primary",
  },
  {
    date: "2022 - 2024",
    title: "Lead Développeur",
    company: "Arcade",
    icon: <UserCheck />,
    description:
      "Prise de responsabilités techniques, encadrement de l'équipe, définition des architectures et garant de la qualité du code.",
    color: "bg-green-500",
  },
  {
    date: "2024 - Aujourd'hui",
    title: "CTO (Directeur Technique)",
    company: "Arcade",
    icon: <ShieldCheck />,
    description:
      "Définition de la vision technique de l'entreprise, gestion des équipes de développement et prise des décisions stratégiques.",
    color: "bg-purple-500",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Mon Parcours Professionnel
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 h-full w-1 bg-border -translate-x-1/2"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className={`relative flex items-start ${
                index % 2 !== 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="absolute left-4 sm:left-1/2 top-1 z-10 -translate-x-1/2 mt-2">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-white ${event.color}`}
                >
                  {event.icon}
                </div>
              </div>

              <div className="p-6 rounded-lg shadow-md bg-card w-full sm:w-[calc(50%-2rem)] ml-12 sm:ml-0 mt-2">
                <p className="font-semibold text-primary">{event.date}</p>
                <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                {event.company && (
                  <p className="text-sm text-muted-foreground">
                    {event.company}
                  </p>
                )}
                <p className="mt-2 text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
