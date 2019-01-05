# Todo-app: création d'un todo

## Fonction createTodo
- Ajouter la fonction `createTodo(todo: Todo): Observable<Todo>` à `WebApi`:
  - Dans le mock, faire simplement `throw new Error('Not implemented')`
  - Dans le service utilisant http, utiliser la fonction `post` de HttpClient

## Composant todo-form

- Générer un composant `todo-form`
- Dans la classe du composant, ajouter une variable membre `form` qui est de type `FormGroup`
  et qui est initialisée avec 2 `FormControl`: title et completed
- Dans le template du composant, créer un formulaire (balise `<form>`) qui contient:
  - un input texte pour le titre,
  - un input checkbox pour l'état completed
  - un bouton pour déclencher la création du todo
- Les deux inputs doivent être liés au `FormGroup` grâce à l'attribut `formControlName`
- Lier l'événement `submit` du `<form>` à une méthode `onSubmit` de votre composant.
  Cette méthode doit construire un objet de type Todo et utiliser la WebApi pour le créer
- Quand la création du todo a effectuée avec succès par le serveur, envoyer dans le composant
  un événement `created` de type Todo (`EventEmitter<Todo>`)
  - Attraper l'événement dans le composant pages des todos pour mettre à jour la liste des todos.
    Utiliser la fonction `unshift` de Array pour le todo apparaisse en haut de la liste.

## Bonus: validation

- Empêcher que l'utilisateur puisse créer un todo avec un titre vide:
  - le bouton doit être "disabled"
  - un warning doit s'affiche si le titre est vide