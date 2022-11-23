const colors = require('colors');

function lancerDes() {
    //[0;1]
    const value = Math.floor(Math.random() * 6 + 1);
    const fail = Math.floor(Math.random() * 8 + 1);

    return new Promise ( (resove, reject) => {
        setTimeout( () => {
            if( fail > 1 ) {
                resove(value);
            }

            reject('Cassé');
        }, 1000);
    });
}

lancerDes().then((value) => {
    console.log(`Résultat obtenu : ${colors.green(value)}`);
}).catch((error) => {
    console.log(error.red);
}).finally(() => {
    console.log('Recommencer ?'.green);
    console.log('--------------------------------------------');
});

// ---------------------------------------------------------------------------------------------

lancerDes() // 1er lancé
.then((value) => { //résultat du 1er lancé
    console.log(`1er Résultat obtenu : ${colors.blue(value)}`);

    return lancerDes(); //2nd lancé
}).then((value) => { //résultat du 2nd lancé
        console.log(`2eme Résultat obtenu : ${colors.blue(value)}`);
}).catch((error) => { // erreur commune au 2 lancés
    console.log(error.red);
}).finally(() => {
    console.log('Recommencer ?'.blue);
    console.log('--------------------------------------------');
});

// ---------------------------------------------------------------------------------------------

Promise.all([lancerDes(), lancerDes()]).then((values) => {
    const [value1, value2] = values;

    console.log(`1er Résultat obtenu : ${colors.yellow(value1)}`);
    console.log(`2eme Résultat obtenu : ${colors.yellow(value2)}`);
}).catch((error) => {
    console.log(error.red);
}).finally(() => {
    console.log('Recommencer ?'.yellow);
})