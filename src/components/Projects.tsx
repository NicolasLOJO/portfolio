"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GitMerge, Rocket, Zap, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Project {
  type: string;
  project: string;
  icon: React.ReactElement;
  challenge: string;
  impact?: string;
  details?: {
    description: string;
    features: string[];
    images: string[];
    liveUrl?: string;
    githubUrl?: string;
  };
  tags: string[];
}

const userExperiences: Project[] = [
  {
    type: "Projet Complet (Personnel)",
    project: "Ce Portfolio",
    icon: <Zap className="w-6 h-6" />,
    challenge:
      "Créer un portfolio de développeur qui soit moderne, unique et qui mette en valeur mes compétences au-delà des projets classiques.",
    details: {
      description:
        "J'ai conçu et développé l'ensemble de ce portfolio avec Next.js et TypeScript, en utilisant shadcn/ui pour les composants. J'ai mis un accent particulier sur le design et l'interactivité avec Framer Motion pour créer une expérience utilisateur mémorable et engageante, reflétant ma sensibilité au design et ma maîtrise technique.",
      features: [
        "Animation de fond dynamique",
        "Galerie de projets en scroll horizontal",
        "Architecture de composants modernes",
        "Design responsive et accessible",
      ],
      images: ["/portfolio.png"],
      githubUrl: "https://github.com/NicolasLOJO/portfolio",
    },
    tags: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    type: "Projet Complet (Stage)",
    project: "Roxanne - App Mobile",
    icon: <Zap className="w-6 h-6" />,
    challenge:
      "En 2 mois de stage, concevoir et développer une application mobile complète et géolocalisée pour aider les personnes atteintes de cancer à rompre l'isolement et à centraliser leurs démarches.",
    details: {
      description:
        "Roxane est une application conçue pour recréer un lien social et fournir un support logistique aux patients. L'enjeu technique principal reposait sur la géolocalisation, qui est au cœur de toutes les fonctionnalités : événements, covoiturage, et recherche de pharmacies. J'ai développé l'application de A à Z avec Ionic et Firebase, en gérant deux types de rôles (membres et associations) avec des fonctionnalités distinctes.",
      features: [
        "Système social géolocalisé (événements, covoiturage)",
        "Messagerie instantanée (privée et groupes)",
        "Outils personnels (agenda, journal intime)",
        "Gestion de rôles (Membres / Associations)",
        "Utilisation de Firebase pour le back-end (Auth & Firestore)",
      ],
      images: ["/roxanne.png"],
    },
    tags: ["Ionic", "Angular", "Firebase", "TypeScript", "Géolocalisation"],
  },
  {
    type: "Projet Complet (Personnel)",
    project: "AxionHub - Écosystème Gaming",
    icon: <Zap className="w-6 h-6" />,
    challenge:
      "Créer un écosystème complet pour lutter contre la toxicité dans le jeu en ligne, en développant un bot Discord et un hub web interconnectés autour d'un système de réputation innovant.",
    details: {
      description:
        "Axion est un projet ambitieux qui vise à créer des communautés de jeu plus saines. J'ai conçu et développé l'ensemble de l'écosystème : le bot Discord pour les interactions quotidiennes (LFG, profils) et le Hub Web Next.js pour une gestion avancée (recherche de joueurs, dashboard). L'architecture est moderne et scalable, basée sur des micro-services en TypeScript, le tout conteneurisé avec Docker et orchestré via un reverse proxy Nginx.",
      features: [
        "Architecture micro-services (Node.js/Express)",
        "Système de réputation basé sur les 'soft skills'",
        "Authentification sécurisée via Discord OAuth2 (JWT)",
        "Infrastructure complète conteneurisée avec Docker Compose",
        "Bot Discord riche en fonctionnalités (/lfg, profils, ...)",
        "Internationalisation (i18n) et conformité RGPD",
      ],
      images: ["/axionhub.png"],
      liveUrl: "https://axion-hub.duckdns.org",
    },
    tags: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Docker",
      "PostgreSQL",
      "Prisma",
      "Microservices",
    ],
  },

  {
    type: "Process & Automatisation (DevOps)",
    project: "Modernisation des outils de dev",
    icon: <Rocket className="w-6 h-6" />,
    challenge:
      "Le processus de développement était vieillissant (TFS, déploiements manuels), ce qui ralentissait l'innovation et la qualité.",
    impact:
      "J'ai mené l'adoption d'Azure DevOps : migration vers Git, mise en place de GitFlow et création de pipelines CI/CD. Cela a modernisé les pratiques, réduit drastiquement les temps de déploiement et amélioré la traçabilité.",
    tags: ["Azure DevOps", "Git", "GitFlow", "CI/CD", "Automatisation"],
  },
  {
    type: "Architecture & Dév. Full-Stack",
    project: "Application Qualib",
    icon: <Zap className="w-6 h-6" />,
    challenge:
      "Construire une nouvelle application interne ('Qualib') de A à Z, en définissant une architecture moderne et maintenable.",
    impact:
      "J'ai mis en place l'architecture complète (React/Redux en front, .NET Core en back) et développé l'application, qui est devenue un outil central et robuste pour l'entreprise.",
    tags: [
      "Azure DevOps",
      "React",
      "ReduxToolkit",
      "C#",
      ".NET Core",
      "MUI",
      "SQL Server",
      "Architecture",
    ],
  },
  {
    type: "Architecture & Dév. Full-Stack",
    project: "Portail Client Massia",
    icon: <Zap className="w-6 h-6" />,
    challenge:
      "Développer un nouveau portail client performant et réactif pour améliorer l'expérience utilisateur.",
    impact:
      "J'ai architecturé et développé le portail avec une stack moderne (React, TanStack Query, .NET Core), livrant une application rapide qui a positivement impacté la satisfaction des clients.",
    tags: [
      "Azure DevOps",
      "React",
      "TanStack Query",
      "C#",
      ".NET Core",
      "MUI",
      "SQL Server",
      "Architecture",
    ],
  },
  {
    type: "Développement Back-end",
    project: "Moteur de template Word/Excel",
    icon: <GitMerge className="w-6 h-6" />,
    challenge:
      "Automatiser la génération de documents complexes (Word/Excel) pour éliminer les tâches manuelles longues et sources d'erreurs.",
    impact:
      "J'ai conçu et développé un moteur de templating en C# capable de gérer des logiques complexes (boucles, conditions), réduisant le temps de traitement de plusieurs heures à quelques secondes.",
    tags: ["C#", ".NET", "Word", "Excel", "Templating"],
  },
  {
    type: "Développement Back-end",
    project: "Moteur de synthèse de données SQL",
    icon: <GitMerge className="w-6 h-6" />,
    challenge:
      "Simplifier l'extraction de données pour des rapports, qui nécessitait des requêtes SQL complexes et répétitives.",
    impact:
      "J'ai créé un moteur en C# utilisant la réflexion sur les entités NHibernate pour mapper dynamiquement les objets aux champs SQL, ce qui a drastiquement simplifié et accéléré la création de synthèses.",
    tags: ["C#", ".NET", "SQL", "NHibernate", "Reflection"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section
      id="projects"
      className="py-24 sm:py-32 bg-white dark:bg-slate-950"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Mes Réalisations Clés
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Un aperçu de mes contributions, des projets complets aux optimisations
          d&apos;infrastructure.
        </p>
      </div>

      <Dialog>
        <div className="relative">
          <div
            className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory px-[calc((100vw-80vw)/2)] md:px-12 lg:px-24 md:flex-wrap md:justify-center"
            style={{ scrollbarWidth: "none" }}
          >
            {userExperiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-[80vw] md:w-[450px]"
              >
                <Card className="h-full flex flex-col border-primary/20">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="p-2 bg-primary/10 text-primary rounded-lg">
                        {exp.icon}
                      </span>
                      <div>
                        <CardTitle className="text-lg text-primary">
                          {exp.type}
                        </CardTitle>
                        <CardDescription>{exp.project}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground text-sm">
                      {exp.challenge || exp.impact}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center pt-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {exp.details && (
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedProject(exp)}
                        >
                          Voir plus
                        </Button>
                      </DialogTrigger>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
            <div className="flex-shrink-0 w-1"></div>
          </div>
        </div>

        {selectedProject?.details && (
          <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedProject.project}
              </DialogTitle>
              <DialogDescription>{selectedProject.type}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <Image
                src={selectedProject.details.images[0]}
                alt={selectedProject.project}
                className="rounded-lg w-auto max-h-[80vh] object-contain mx-auto"
                width={800}
                height={400}
              />
              <h3 className="text-xl font-semibold mt-6 mb-2">
                À propos de ce projet
              </h3>
              <p className="text-muted-foreground">
                {selectedProject.details.description}
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-2">
                Fonctionnalités Clés
              </h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {selectedProject.details.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="flex gap-4 mt-8">
                {selectedProject.details.liveUrl && (
                  <Button asChild>
                    <a href={selectedProject.details.liveUrl} target="_blank">
                      Voir le site <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
                {selectedProject.details.githubUrl && (
                  <Button asChild variant="secondary">
                    <a href={selectedProject.details.githubUrl} target="_blank">
                      Code Source
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
