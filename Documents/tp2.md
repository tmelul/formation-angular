# Data-binding

## Data-binding simple
- Afficher une variable numérique dans le composant racine `app.component`
- Ajouter un bouton qui déclenche l'incrémentation de la variable

## Data-binding dans les 2 sens
- Ajouter à `app.component` un champ texte (`<input type="text"/>`) qui est lié en lecture-écriture à une variable de `app.component`. On utilisera pour cela `ngModel`.
	- pour pouvoir utiliser `ngModel`, il faut rajouter le module `FormsModule` aux `imports` de `app.module`.
	- attention à la syntaxe: `[(ngModel)]=...`
- Afficher le contenu de la variable texte en dehors de l'input et vérifier que le texte se mette bien à jour quand on saisit du texte dans l'input
- Ajouter un bouton qui ajoute la valeur saisie dans un tableau du `app.component.ts`. Typer au maximum la déclaration du tableau.
- Afficher les valeurs du tableau dans une liste: <ul><li>...</li></ul>
- Afficher la nombre total de caractères (Array.reduce...) de tous les mots du tableau
