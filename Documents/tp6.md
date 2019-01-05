# Todo-app: ajout d'un service "WebApi"

On va créer un service qui sera injecté dans `app.component`.
Ce service sera responsable des opérations de type CRUD (Create Read Update Delete) sur les todos.
On créera d'abord un "mock" du service et dans un autre TP, un service branché sur une
API REST.
Le service mock nous permettra de:
- développer notre application alors que l'API REST est en cours de développement
- jouer des tests unitaires qui ne nécessitent pas d'être branchés à un serveur.

## Création du service mock

- Générer une classe nommée "WebApi" dans le dossier `webapi` (pas besoin de créer le dossier avant de lancer ng generate).
Cette classe a 2 méthodes abstraites:
  - getTodos qui renvoie un tableau de Todos en fonction d'un userId
  - deleteTodo, fonction d'un id
  - s'assurer que les signatures des fonctions sont typées au maximum (paramètres et retour)
- Générer un service nommé "MockWebApi" dans le dossier `webapi` et étendre la classe WebApi.
  On pourra stocker les todos dans une variable constante déclarée en dehors de la classe.

# Configurer l'injection de dépendance
- Modifier `app.module` pour qu'Angular injecte un MockWebApi quand on lui demande un WebApi.

## Injection dans le composant racine

- À l'initialisation de `app.component`, utiliser WebApi pour initialiser le tableau de todos
- Remplacer le code de suppression dans `app.component` par un appel à WebApi pour supprimer,
  suivi d'un appel pour récupérer la liste des todos rafraichie.