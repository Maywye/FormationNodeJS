import express from 'express';
import path from 'path';

const app = express(); // init express

//middleware -> fonction (requete, reponse, next)
app.use (function(req, res, next) {
    console.log(`Request: ${req.url}`);
    next(); //la fonction next() permet de passer au middleware suivant
})
app.use(express.static(path.join(__dirname, 'public')));


// route = Verb HTTP (GET/POST) + URL (/contact)
/*
GET         ->  Lire / demande en lecture
POST        ->  Créer
DELETE      ->  Supprimer
PATCH       ->  Remplacer (modification partiel)
PUT         ->  Mettre à jour (modification totale)
*/


app.get('/', (req, res) => {
    const html = `<h1>Bienvenue sur notre serveur Node Express ! </h1>
    <p>Découvrons ensemble le fonctionnement d'ExpressJS</p>
    <p>Accéder au fichier static <a href="accueil.html">accueil.html</a></p>
    <ul>
        <li><a href="/no-route </a>Page no route</li>
        <li><a href="/users">Liste des utilisateurs</a></li>
    </ul>
    `;
    res.send(html);

    res.send(html); // send() ne met pas fin a la fonction annonyme (controller)
});

// affiche les utilisateurs aux formats JSON
app.get('/users', (req, res) => {
    //users est une donnée d'exemple uniquement
    const users = [
        {id : 1, firstname: 'John', lastname: 'Doe', city:'Toulouse'},
        {id : 2, firstname: 'Jone', lastname: 'Doe', city:'Lille'}
    ];

    // .json -> affiche les données au format json et applique les entêtes http nécessaire
    // Content-Type: application/json
    res.json(users); 
})

app.get('users/:id', (req, res, next) => {
    //params permet de récupérer les paramètres d'url
    // params est un objet
    const id = req.params.id;
    console.log(id);

    if( 1 != id) { // si l'utilisateur n'existe pas
        next(); // on affiche une 404
    }

    res.json( {id : 1, firstname: 'John', lastname: 'Doe', city:'Toulouse'});
})

// comment appeler manuellement la page 404
app.get('no-route', (req, res, next) => {
    console.log('Je suis dans no route ! ');
    next();
});

// si aucune route n'a été trouvé alors on affiche une 404
app.get('*', (req, res) =>{
    res.status(404).send('<h1>Not Found</h1>')
})

const port = 3200
app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is listenning on http://localhost:${port}`);
    console.log('Shutdown Node Server with CTRL + C');
})