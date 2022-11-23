const fs = require('fs');
const path = require('path');
require('colors');

const pathfile = path.resolve('presentation', 'assets', 'content', 'file.txt');
const content = 'Hello world\r\n'; // retour a la ligne \r\n (return / new ligne)

//1. créer les répertoires
//2. écrire dans le fichier file.txt
//3. lire le fichier file.txt


//callback hell
//1.
fs.mkdir(path.dirname(pathfile), {recursive: true}, (error) => { //recursive = boucle 
    if(error){
        throw error; //throw =  lancer/lever une exception. met fin au programme
    }
    console.log('Les répertoires ont bien été créées'.yellow);


    //2.
    fs.writeFile(pathfile, content, {flag: 'a'}, (err) => { //a : précise à la fonction d'écrire -> écrire a la suite (a = append)
        if (err) throw err;
        console.log('Ecriture terminé'.yellow);


        //3
        fs.readFile(pathfile, (err, data) => {
            if(err) throw err;
            console.log(data.toString('utf8'));

        });
    });
});



