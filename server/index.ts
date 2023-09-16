import express, { Express, Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './routes/api/routes';
import router from './routes/routes';
dotenv.config();

const port = process.env.PORT;

const app: Express = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../build')));
app.use('/api',api)
app.use('/',router)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});