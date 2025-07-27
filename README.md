# task-api
Développer une API REST avec Express
Parfait ! Voici ton **fichier README.md complet prêt à copier-coller tel quel dans ton projet `task-api`** :

---

```md
# 📋 Task API – API REST de gestion des tâches avec Express

Ce projet est une API REST simple développée avec **Node.js** et **Express**.  
Elle permet de gérer une liste de tâches avec les opérations **CRUD** :  
Créer, Lire, Mettre à jour et Supprimer.

---

## 🚀 Fonctionnalités

- 🔍 Lire toutes les tâches
- 🧾 Lire une tâche spécifique par ID
- ➕ Créer une nouvelle tâche
- ✏️ Mettre à jour une tâche existante
- 🗑️ Supprimer une tâche

---

## 📦 Technologies utilisées

- Node.js
- Express

---

## 📁 Structure du projet

```

task-api/
│
├── index.js           # Fichier principal contenant le code de l’API
├── package.json       # Fichier de configuration npm

````

---

## 🛠️ Installation

1. **Cloner le projet (ou créer un dossier manuellement)**

```bash
mkdir task-api
cd task-api
````

2. **Initialiser le projet Node.js**

```bash
npm init -y
npm install express
```

3. **Créer le fichier `index.js` et y coller le code de l'API**

4. **Lancer le serveur**

```bash
node index.js
```

> Le serveur démarre sur : `http://localhost:3000`

---

## 📬 Routes de l'API

| Méthode | Endpoint     | Description                    |
| ------- | ------------ | ------------------------------ |
| GET     | `/tasks`     | Liste de toutes les tâches     |
| GET     | `/tasks/:id` | Récupère une tâche par son ID  |
| POST    | `/tasks`     | Crée une nouvelle tâche        |
| PUT     | `/tasks/:id` | Met à jour une tâche existante |
| DELETE  | `/tasks/:id` | Supprime une tâche existante   |

---

## 📥 Exemple de requête POST (Créer une tâche)

```http
POST /tasks
Content-Type: application/json

{
  "title": "Réviser Express.js",
  "description": "Terminer le mini projet d'API",
  "completed": false
}
```

---

## 📤 Exemple de réponse JSON

```json
{
  "id": 3,
  "title": "Réviser Express.js",
  "description": "Terminer le mini projet d'API",
  "completed": false
}
```

---

