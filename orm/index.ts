import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send(`Bienvenue sur notre serveur d'api Node TS`);
});







const port = 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is listenning on http://localhost:${port}`);
    console.log('Shutdown Node Server with CTRL + C');
})