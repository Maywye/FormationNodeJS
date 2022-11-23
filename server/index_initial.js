const http = require('http');

const server = http.createServer();

server.on("request", (request, response) => {

    console.log(`Request URL: ${request.url}`);
    let html;
    // Ca permet de mettre en forme la réponse pour qu'elle soit au format html
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    //on modifie le status code
    response.statusCode = 200;


    if( "/" == request.url ) {
        html = `<h1>Bienvenue sur notre serveur NodeJS</h1>
<p>Formation NodeJS POE Front Toulouse - Novembre 2022</p>`;
    } else if( "/contact" == request.url) {
        html = `<h1>Nous Contacter</h1>
<p>Appeler nous au 06 11 82 18 00</p>`;
    } else {
        html = `<h1>Not Found</h1>`;
    }


    //on a finit d'écrire notre message
    response.end(html);
})

server.listen(5500);
console.log('Personal Node Server is listenning on http://localhost:5500');
console.log('Shutdown Node server with CTRL + C');