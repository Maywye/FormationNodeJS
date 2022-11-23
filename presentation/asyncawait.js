require('colors');
// le mot clé async permet de créer des fonctions qui retourne des Promise()
// dans une fonction async, "return" permet de définir que la Promise est en réussite(resolve)

// async function success() {
//     return 'Bravo ! ';
// }


// dans une fonction async "throw" permet de définir que la promise est en échec (reject)

// async function fail() {
//     throw new Error('Dommage...')
// }

// success().then(console.log);
// fail().catch(console.log);


function randomNumber() {
    const number = Math.floor(Math.random() * 10);

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(number)
        }, 2500);
    })
}

async function addition () {
    console.log("Récupération de la première valeur".yellow);
    const a = await randomNumber();
    console.log("Premiere valeur récupérée".green);
    console.log("Récupération de la deuxieme valeur".yellow);
    const b = await randomNumber();
    console.log("Deuxieme valeur récupérée".green);

    console.log("Addition".yellow);
    console.log(`${a} + ${b} = ${a+b}`);
}

console.log('avant addition');
addition();
console.log("apres addition");