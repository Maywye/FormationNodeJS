//require() est la fonction NodeJS qui permet de récupérer des modules NodeJs
//défini dans l'application, dans les dépendances ou dans l'API de node
const path = require('path');
require('colors');

// ./ fait référence au répertoire courant
const file = "./content/file.txt"

console.log(`__dirname(): ${path.dirname(file).red}`); //affiche le répertoire parent
console.log(`basename(): ${path.basename(file).red}`); // affiche le nom du fichier
console.log(`extname(): ${path.extname(file).red}`); // affiche l'extension du fichier

console.log(`Séparateur système: ${path.sep}`);

// Créer un chemin vers le fichier image.png, se trouvant dans un répertoire images
// se trouvant dans un répertoire assets

const image = path.join('assets', 'image', 'image.png');
console.log(`Chemin vers mon image: ${image.green}`);

//exo : accès au fichier image
console.log(path.join(__dirname, image).green);
console.log(`resolve() :  ${path.resolve().blue}`);
console.log(path.resolve('presentation', image).red);