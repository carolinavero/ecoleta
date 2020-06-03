import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); // use - colocar uma funcionalidade a mais no express, pra ele entender o json enviado
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);