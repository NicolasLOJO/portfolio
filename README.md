# Portfolio de Nicolas LOPEZ--JOREL

Bienvenue sur le code source de mon portfolio personnel. Ce projet a été conçu pour être une vitrine moderne et interactive de mon parcours, de mes compétences et de mes réalisations en tant que développeur Full-Stack.

![Aperçu du portfolio](public/portfolio.png)

---

## ✨ Fonctionnalités Clés

- **Design Immersif :** Un Hero animé avec des sphères en mouvement créées avec Framer Motion.
- **Présentation Structurée :** Une grille "Bento" pour la section "À propos" et une timeline de carrière animée.
- **Galerie de Projets :** Une galerie pour présenter mes réalisations, avec une modale détaillée pour les études de cas.
- **Formulaire de Contact Fonctionnel :** Intégration de l'API Resend pour un envoi d'emails fiable.
- **Thème Sombre & Clair :** Entièrement thématisé avec `next-themes` et `shadcn/ui`.

---

## 🛠️ Technologies Utilisées

Ce projet a été construit avec les technologies les plus modernes de l'écosystème JavaScript :

- **Framework :** [Next.js](https://nextjs.org/) (App Router)
- **Langage :** [TypeScript](https://www.typescriptlang.org/)
- **Styling :** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Animations :** [Framer Motion](https://www.framer.com/motion/)
- **Envoi d'email :** [Resend](https://resend.com/)
- **Déploiement :** [Vercel](https://vercel.com/)

---

## 🚀 Démarrage en Local

Pour lancer ce projet sur votre machine, suivez ces étapes :

1.  **Clonez le repository :**

    ```bash
    git clone [https://github.com/votre-pseudo/votre-repo.git](https://github.com/votre-pseudo/votre-repo.git)
    cd votre-repo
    ```

2.  **Installez les dépendances :**

    ```bash
    npm install
    ```

3.  **Configurez les variables d'environnement :**
    Créez un fichier `.env.local` à la racine et ajoutez vos clés (pour Resend).

    ```
    RESEND_API_KEY=...
    EMAIL_FROM=...
    EMAIL_TO=...
    ```

4.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    ```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.
