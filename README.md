# exo_MongoDB
création d'une API de gestion des taches avec une base de données
Node.js : Plateforme JavaScript côté serveur.

Express : Framework web pour construire l'API.

MongoDB : Base de données NoSQL pour stocker les tâches.

Mongoose : ODM pour interagir avec MongoDB.

👥 Auteur:
Tinongbe Frank

app : C'est une instance de l'application Express, qui nous permet de configurer les routes, middlewares
port : Définition du port sur lequel le serveur écoutera les requêtes (ici, 5000).

Voici un exemple de code Node.js avec Express pour un API CRUD de gestion de tâches, incluant une base de données MongoDB (nommée taskBD) :

Installation des dépendances : installation des modules nécessaires via npm :
dans le terminal avec bash on exécute:
npm install express mongoose body-parser
Connexion à MongoDB : Créez un fichier server.js :
 
Démarrer le serveur : Exécutez le serveur avec :

bash
nodemon avec la synthase "npm start"
Avec ce code, toutes les tâches seront enregistrées dans la base de données MongoDB taskBD. 

comment lié mongodb à vs code
Pour connecter MongoDB à Visual Studio Code, vous pouvez utiliser l'extension officielle MongoDB pour VS Code. Voici les étapes à suivre :

Installer l'extension MongoDB :

Ouvrez Visual Studio Code.

Accédez à l'onglet des extensions (icône de carré sur la barre latérale ou Ctrl+Shift+X).

Recherchez "MongoDB for VS Code" et installez l'extension.

Configurer la connexion à MongoDB :

Une fois l'extension installée, vous verrez une nouvelle vue "MongoDB" dans la barre d'activité.

Cliquez sur "Add Connection" pour ajouter une connexion.

Entrez votre chaîne de connexion MongoDB. Par exemple, pour une instance locale : mongodb://localhost/taskDB.

Explorer vos bases de données :

Une fois connecté, vous pouvez naviguer dans vos bases de données et collections directement depuis VS Code.

Vous pouvez également exécuter des requêtes et des agrégations dans un environnement interactif appelé "Playgrounds".

Utiliser MongoDB Shell (optionnel) :

Si vous avez besoin d'exécuter des commandes MongoDB Shell, vous pouvez le lancer directement depuis l'extension.

🛠️ Endpoints
Méthode	Endpoint	Description
POST	/tasks	Ajouter une nouvelle tâche
GET	/tasks	Récupérer toutes les tâches
GET	/tasks/:id	Récupérer une tâche par ID
PUT	/tasks/:id	Mettre à jour une tâche
DELETE	/tasks/:id	Supprimer une tâche
