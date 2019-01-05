# Todo-app: branchement sur un serveur web

## Créer le service RestWebApi

- Modifier le code de WebApi et MockWebApi pour que les fonctions renvoient des Observable
  - Typer les Observable en utilisant la syntaxe des generics : `Observable<Something>`
  - Vous aurez besoin de la fonction `of` à importer de `rxjs`.
  - Si ce n'est pas déjà fait, faire en sorte que le composant page de todos
    stocke les todos qu'il récupère à l'initialisation.
  - La fonction de suppression du composant page de todos fait actuellement un appel
    au service WebApi afin de récupérer à nouveau les todos après la suppression.
    Modifier ce comportement : les todos doivent être mis à jour sans appel à WebApi.
  - Vérifier que l'application fonctionne toujours
- Générer un service `RestWebApi` dans le dossier `webapi`
- Ce service doit étendre WebApi et implémenter les méthodes abstraites en utilisant un `HttpClient`
  - Vous aurez besoin du module `HttpClientModule`
  - Vous aurez besoin de l'opérateur `map` à importer de `rxjs/operators`
    pour filtrer les todos en fonction d'un userId.

## Bonus: créer un intercepteur

On souhaite afficher un "spinner" pendant qu'une requête HTTP est effectuée.
On créera pour cela un [HttpInterceptor](https://angular.io/guide/http#intercepting-requests-and-responses).
Le but est de gérer ce comportement à un seul endroit, sans avoir à modifier les pages de l'application.

- Ajouter le service `spinner` suivant dans votre projet:
```typescript
import { Injectable } from '@angular/core';
import { Subject, Observable, merge } from 'rxjs';
import { debounceTime, delay, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private countRequest = 0;
  private readonly displaySubject = new Subject<null>();
  private readonly hideSubject = new Subject<null>();
  isLoading: Observable<boolean>;

  constructor() {
      this.isLoading = merge(
          // defer update when requesting display to avoid
          // ExpressionChangedAfterItHasBeenCheckedError
          // when doing an http request in the onNgInit of a component
          this.displaySubject.pipe(delay(0)),
          // debounce update when requesting hiding to avoid
          // the screen to flicker when requesting display right after hiding
          this.hideSubject.pipe(debounceTime(50))
      ).pipe(map(() => this.countRequest > 0));
  }

  displaySpinner() {
      ++this.countRequest;
      this.displaySubject.next();
  }

  hideSpinner() {
      --this.countRequest;
      this.hideSubject.next();
  }
}
```
- Générer un service nommé "LoadingInterceptor" qui implémente HttpInterceptor de `@angular/common/http`. Pour cela, utiliser la [documentation d'Angular](https://angular.io/guide/http#intercepting-requests-and-responses)
- Dans la méthode `intercept`, logger juste un message pour l'instant.
- Brancher l'intercepteur dans `app.module` pour qu'il soit appeler par Angular (cf. doc).
- Dans la méthode `intercept`, déclencher l'affichage du spinner. Puis utiliser le paramètre `HttpHandler`
  pour détecter la fin de la requête (vous aurez besoin de l'opérateur rxjs `finalize`)
  et cacher le spinner
- Dans `app.component`, écouter les modifications de l'observable `isLoading` du SpinnerService
  afin de mettre à jour une variable `isLoading` du composant.
- Dans le template du composant app, ajouter l'affichage d'un spinner quand la variable `isLoading`
  est true.
  Si vous avez intégré Material, utiliser le composant `mat-spinner`, sinon afficher simplement "Loading...".
