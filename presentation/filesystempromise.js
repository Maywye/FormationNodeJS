const fs = require('fs').promises; // on utilise FileSystem sous forme de promise
const path = require('path');
require('colors');

const pathfile = path.resolve('presentation', 'assets', 'content', 'file.txt');
const content = 'Hello promise\r\n'; // retour a la ligne \r\n (return / new ligne)

fs.mkdir(path.dirname(pathfile), {recursive: true}).then(() => {
    console.log('Les répertoires ont bien été créées'.yellow);

    return fs.writeFile(pathfile, content, {flag: 'a'});
}).then(() => {
    console.log('Ecriture terminé'.yellow);

    return fs.readFile(pathfile);
}).then((data) => {
    console.log(data.toString('utf8'));
}).catch((err) => {
    console.log(err);
})



