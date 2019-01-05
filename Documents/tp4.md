# Todo-app: suppression d'éléments

## Composant pour la liste des todos

- Reporter le code écrit précédemment dans `app.component` qui affiche la liste des todos et le compte des tâches effectuées, dans un composant nommé `todo-list`
  Ce composant prend un paramètre `todos` en entrée qui est un tableau de Todo.
- Remplacer le code d'affichage des todos dans `app.component` par un appel à ce composant

## Événement de suppression

- Ajouter un bouton de suppression dans le composant todo.
- Ce bouton doit déclencher un événement en sortie du composant. Cet événement est de type Todo.
- Intercepter cet événement dans `todo-list` et le faire remonter (l'émettre à nouveau)
- Intercepter l'événement dans `app.component` et recréer le tableau de todo sans le todo à supprimer.
  Cf. Google "MDN Array filter"
