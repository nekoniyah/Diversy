# Diversy - Backend Core

![Status](https://img.shields.io/badge/status-in%20development-gold) ![Runtime](https://img.shields.io/badge/runtime-Bun-black) ![License](https://img.shields.io/badge/license-Proprietary-blue)

> **La plateforme sociale pour les communautés et créateurs.** > _Sécurité. Liberté. Customisation._

## 📖 À propos

Diversy est une plateforme sociale de nouvelle génération conçue pour offrir un "refuge créatif" loin du bruit et de la toxicité des réseaux traditionnels.

Ce dépôt contient le **Backend Core** de l'application. Il gère l'authentification, la logique métier, et l'architecture unique de serveurs distribués.

### La Philosophie Technique : "Single Client, Forkable Server"

1.  **Unified Client :** Tous les utilisateurs accèdent à la plateforme via une interface frontend unique.
2.  **Forkable Logic :** Chaque communauté ("Serveur") est une instance gérée via des configurations stockées en BDD, permettant une customisation profonde (modding) tout en restant sur la même infrastructure.

## 🛠 Tech Stack

- **Runtime & Package Manager :** [Bun](https://bun.sh/) (Performance & TS support natif)
- **Framework Web :** Express.js
- **Language :** TypeScript
- **ORM :** Sequelize
- **Database :** SQLite

## 🚀 Installation (Dev)

### Prérequis

- [Bun](https://bun.sh/) v1.0+ installé

### Lancer le projet

1.  **Cloner le repo :**

    ```bash
    git clone [https://github.com/nekoniyah/diversy-core.git](https://github.com/nekoniyah/diversy-core.git)
    cd diversy-core
    ```

2.  **Installer les dépendances (via Bun) :**

    ```bash
    bun install
    ```

3.  **Configuration :**

    ```bash
    cp .env.example .env
    # Configurer DB_HOST, DB_USER, DB_PASS, etc. dans le .env
    ```

4.  **Lancer en mode développement (Hot Reload) :**

    ```bash
    bun run dev
    ```

    _(Note : Le script `dev` doit pointer vers `bun --watch src/index.ts`)_

© 2025 Diversy. Tous droits réservés.
