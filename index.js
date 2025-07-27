const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Base de données simulée pour les tâches
let tasks = [
  { id: 1, title: "Apprendre Node.js", description: "Suivre le cours de Node", completed: false },
  { id: 2, title: "Faire les courses", description: "Acheter du lait et du pain", completed: true },
];

// Route d’accueil
app.get("/", (req, res) => {
  res.send("Bienvenue sur l'API de gestion des tâches !");
});

// 🔹 Lire toutes les tâches (READ ALL)
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// 🔹 Lire une tâche par ID (READ ONE)
app.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

// 🔹 Créer une tâche (CREATE)
app.post("/tasks", (req, res) => {
  const { title, description, completed = false } = req.body;
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
    completed,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 🔹 Modifier une tâche (UPDATE)
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description, completed } = req.body;
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    res.json(task);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

// 🔹 Supprimer une tâche (DELETE)
app.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex((t) => t.id === taskId);
  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask[0]);
  } else {
    res.status(404).json({ message: "Tâche non trouvée" });
  }
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
