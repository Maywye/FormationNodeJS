const fs = require('fs').promises; // on utilise FileSystem sous forme de promise
const path = require('path');
require('colors');

const pathfile = path.resolve('presentation', 'assets', 'content', 'file.txt');
const content = 'Hello Async Await\r\n'; // retour a la ligne \r\n (return / new ligne)


//iife Immediately Invoked Function Expression : fonction annonyme auto-invoquée
(async () => {
    try {
        await fs.mkdir(path.dirname(pathfile), {recursive: true});
        console.log('Les répertoires ont bien été créées'.yellow);
        
        await fs.writeFile(pathfile, content, {flag: 'a'});
        console.log('Ecriture terminé'.yellow);
        
        const data = await fs.readFile(pathfile);
        console.log(data.toString('utf8'));
    } catch(e){
        console.log(e);
    }
})();




