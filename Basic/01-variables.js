//var, es la forma original para declarar variables pero no se usa ya.
//-------------------------------------------------------------------------
var helloWorld = "¡Hello, JavaScript!";
console.log(helloWorld);

//Puedo volver a acceder a la variable y cambiarle el valor
helloWorld = "Hola de nuevo, JavaScript!";

//let, es más nueva, es la forma correcta de declarar variables.
//-------------------------------------------------------------------------
let helloWorld2 = "¡Hello, JavaScript 2!";
console.log(helloWorld2);

//Puedo volver a acceder a la variable y cambiarle el valor
helloWorld2 = "¡Hola de nuevo, JavaScript 2!";
console.log(helloWorld2);

/*PArece el mismo funcionamiento, realmente lo es, pero con let
solo podemos acceder a ella dentor d eun bloque.  */

//const, son variables constantes, no se pueden modificar y su valor nunca cambia
//-------------------------------------------------------------------------------
const helloWorld3 = "¡Hello, JavaScript 3!";
console.log(helloWorld3);

//No puede cambiar su valor
//Error
//helloworld3 = "Hola de nuevo, JavaScript 3!";