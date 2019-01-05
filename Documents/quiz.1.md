# Quiz jour 1

Attention, pour certaines questions il peut y avoir zéro, une, ou plusieurs bonnes réponses.

## Qui développe Angular ?

* Framasoft
* Microsoft
* Linus Torvalds
* Steve Jobs 

-> Google

## Quelles sont les propositions valides ?

* Une promesse encapsule du code synchrone
* -> Un observable est une promesse
* -> Une requête HTTP doit être asynchrone
* Une promesse est toujours résolue

## Quelles sont les lignes de code non valides ?

* const e = () => true;
* const f = () -> false;
* const g => (x) = 2;
* const h = x => x * x;

## Que va afficher ce code dans la console ?

    new Promise((resolve, reject) => {
        let t = setTimeout(() => resolve('bar'), 100); 
    }).then(console.log);
    console.log('foo');

-> 'foo' puis 'bar'

## Que va afficher ce code dans la console ?

    let arr = [1,2,3];
    let [a,b,c] = arr;
    let [x,y,z] = [c, b, a];
    console.log(x);
    console.log(y);
    console.log(z);

## Que va afficher ce code dans la console ?

    let jedi = {
        color : 'blue',
        name : 'hobywhan'
    };
    let {name} = jedi;
    console.log(name);


## Que va afficher ce code dans la console ?

    let jedi1 = {
        color : 'blue',
        name : 'hobywhan'
    };
    
    let jedi2 = {
        color : 'green',
        name : 'luke'
    };
    let jedis = [jedi1, jedi2];
    let [{name}, {color}] = jedis;
    console.log(name);
    console.log(color);

## Expliquer en quelques mots le two-way data binding d'angular

-> permet de lié une variable avec du code html

## Quelle sont les différence d'usage entre une directive et un component ?





