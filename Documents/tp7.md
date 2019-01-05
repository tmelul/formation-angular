# Todo-app: routage

## Créer les pages

- Déplacer tout le code de gestion des todos de `app.component` dans un composant `todos`.
- Déplacer tout le code du 1er TP dans un composant `playground`.

## Créer le module de routage

- Utiliser Angular CLI pour générer un module nommé `app`, avec l'option `--routing`
- Déplacer le fichier généré `app/app-routing.ts` à côté de `app.module.ts` puis supprimer le dossier généré `app/app`
- Dans `app-routing`, remplacer l'instruction `RouterModule.forChild` par `RouterModule.forRoot`
- Ajouter `AppRoutingModule` aux imports de `AppModule`

## Configurer les routes

- Configurer les routes définies dans `app-routing.module` :
  - 'playground' → page Playground
  - 'todos' → page Todos
  - pour tout autre chemin, on redirigera vers Playground (utiliser `redirectTo`)

## Créer la navigation

- Ajouter au composant racine les liens permettant la navigation (cf. `routerLink`)
  - Si vous aviez intégré Material précédemment, utiliser un `mat-sidenav` qui contiendra une `mat-nav-list` qui contiendra
  des les liens. Les liens devront avoir l'attribut `mat-list-item` pour être stylé correctement.
- Faire en sorte que le router crée les composants déclarés dans les routes, dans le composant racine (cf. `router-outlet`)
- Faire en sorte que le lien de la page active soit décoré, en gras par ex. (cf. `routerLinkActive`).

## Tester en production

- Lancer le build de l'application (menu Terminal > Run task)
- Installer `http-server` en tant que dépendance de développement (`--save-dev`)
- Ajouter une entrée nommé "http" dans les scripts de `package.json` pour lancer http-server. Faire en sorte qu'il serve les fichiers du dossier généré dans `dist/`.
- Lancer la tâche "http" (menu Terminal > Run task)
- Tester l'application générée
- Rafraîchir la page

## Bonus: créer un resolver de Todo

- Générer un service nommé TodoResolver qui implémente l'interface `Resolve<Todo[]>`
- Brancher ce resolver sur la route de '/todos'
- Dans le composant page de Todo, au lieu d'utiliser le service WebApi, récupérer les
  todos depuis les `data` de l'`ActivatedRoute`