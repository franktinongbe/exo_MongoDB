const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost/taskBD', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.error('Erreur de connexion :', err));

const Task = require('./taskModel');

// Créer une tâche
app.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la création de la tâche' });
    }
});

// Récupérer toutes les tâches
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des tâches' });
    }
});

// Récupérer une tâche par ID
app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la tâche' });
    }
});

// Mettre à jour une tâche
app.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: 'Erreur lors de la mise à jour de la tâche' });
    }
});

// Supprimer une tâche
app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ error: 'Tâche non trouvée' });
        res.status(200).json({ message: 'Tâche supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de la tâche' });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`API en cours d'exécution sur http://localhost:${port}`);
});