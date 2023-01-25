import {  Request, Response, NextFunction } from "express";

import { sessionRepositories } from "../../repositories/session.repositories.js";

export async function authorization(req: Request, res: Response, next: NextFunction){

    const { authorization } = req.headers;
    const token:string = authorization?.replace('Bearer ', '');

    try {
        const userExists = await sessionRepositories.validateToken(token);

        if(!userExists) {
            return res.sendStatus(401);
        }

        res.locals = userExists;
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

    next();

}