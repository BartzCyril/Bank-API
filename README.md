# Argent Bank — application bancaire React / Redux

> Application web d'une banque en ligne : authentification, espace client et modification du profil avec React et Redux Toolkit, puis conception de l'API des transactions documentée avec Swagger.

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black)

## Sujet

Projet de formation OpenClassrooms, en deux phases :

1. **Authentification des utilisateurs** : développer le front-end React de l'application et le brancher sur l'API back-end fournie (Node.js, Express, MongoDB)
2. **Transactions** : proposer les endpoints de l'API pour consulter et gérer les transactions, sous forme de spécification Swagger

## Fonctionnalités

- Page d'accueil
- **Connexion** avec token JWT, case « Se souvenir de moi »
- **Page profil** affichant les comptes de l'utilisateur
- **Modification du prénom et du nom**, enregistrée via l'API
- Déconnexion et protection des pages réservées aux utilisateurs connectés

## Phase 2 : API des transactions

La spécification [swagger2.yaml](swagger2.yaml) décrit les endpoints proposés :

| Méthode | Endpoint | Action |
| --- | --- | --- |
| `GET` | `/transactions` | Lister les transactions du mois en cours, groupées par compte |
| `GET` | `/transactions/{transactionId}` | Détail d'une transaction |
| `POST` | `/transactions/{transactionId}` | Ajouter des informations à une transaction (catégorie, note) |
| `PUT` | `/transactions/{transactionId}` | Modifier une information |
| `DELETE` | `/transactions/{transactionId}` | Supprimer une information |

## Compétences acquises

- **Redux Toolkit** : store global, slice utilisateur, actions et reducers
- **React + TypeScript** avec React Router (routes protégées)
- **Appels API authentifiés** avec un token JWT
- **Conception d'API REST** : choix des routes, des méthodes HTTP, des paramètres et des codes de réponse
- **Documentation d'API** avec Swagger / OpenAPI
- Suivi du travail à partir d'issues GitHub (modèles dans `.github/ISSUE_TEMPLATE`)

## Lancer le projet en local

Prérequis : Node.js et une instance MongoDB locale.

### API

```bash
npm install
npm run dev:server      # http://localhost:3001
npm run populate-db     # crée les utilisateurs de test
```

Documentation de l'API : http://localhost:3001/api-docs

### Front

```bash
cd front
npm install
npm run dev
```

Utilisateurs de test : `tony@stark.com` / `password123` et `steve@rogers.com` / `password456`.
