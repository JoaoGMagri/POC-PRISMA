import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Request, Response } from "express";

import spending from './routers/spending.routers.js';

const server = express();
dotenv.config();

server
    .use(cors())
    .use(express.json())
    .use(spending)
    .get("/health", (req: Request, res: Response) => { res.send('ok') })

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Server running in port: ${port}`);
})