#Todo-app, 1ère version

## Créer le modèle de données

Créer une interface `Todo` dans `apps/model`:
- id: numérique,
- userId: numérique,
- title: chaîne de caractères,
- completed: booléen
Attention à ne pas utiliser les types wrapper : `boolean` plutôt que `Boolean`.

## Créer un composant pour afficher un Todo

- Invoquer `npx ng generate component todo`. 
- Observer les changements effectués au fichier `app.module.ts`.
- Ce composant doit prendre un Todo en entrée et afficher ce Todo.
  Dans un premier temps, on peut seulement afficher le titre.

## Intégrer ce composant dans le composant racine

- Ajouter à la classe du composant `app.component`, une variable qui stocke un tableau de Todo et lui donner une valeur (typer au maximum la déclaration au moyen des Generics).
- Ajouter au template du composant `app.component`, l'affichage des todo créés.
- Compléter le composant todo pour qu'il affiche une checkbox liée en entrée/sortie à la propriété "completed"
- Ajouter ensuite l'affichage du nombre de Todo "completed". Pour cela, rajouter un getter à la classe qui calcule ce nombre sans boucle for. Vérifier que ce nombre se mette bien à jour quand on coche/décoche des todos.

## Bonus : utiliser Material

[Guide de démarrage](https://material.angular.io/guide/getting-started)

- Intégrer le package @anguler/material à votre projet avec CLI: `npx ng add @angular/material`
- Générer un module `material`: Créer un fichier `material.module.ts` à côté de `app.module.ts`:
```typescript
import { NgModule } from '@angular/core';
import {
  MatListModule,
} from '@angular/material';

/**
 * NgModule that includes all the Material modules used by the app.
 */
@NgModule({
  imports: [
    MatListModule
  ],
  exports: [
    MatListModule,
  ]
})
export class MaterialModule {}
```
- Utiliser une List Material dans `app.component` et une Checkbox dans `todo.component`

