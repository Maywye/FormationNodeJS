// Pour lancer l'application
// dans le terminal
//node path/to/file.js
// node presentation/base.js

const name = "Marine";
let city = "Toulouse"
const number = 16;

console.log("Bonjour " + name); // identique à JS
console.log("Hello ", "World ", number ); // identique à JS
console.log("Salut %s, tu es toujours à %s", name, city); // différent de JS
console.log(`Salut ${name}, tu es toujours à ${city} ?`); //version es6

console.log(`__filename: ${__filename}`); // chemin absolu du fichier 
console.log(`__dirname: ${__dirname}`); // chemin absolu du repertoire ou se situe le fichier

setTimeout (() => {
    console.log("J'ai été executé après 1 seconde"); // action différé donc elle est dite non blocante
}, 1000);

console.log("Fin de la page");