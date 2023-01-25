import {  Request, Response } from "express";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

import { SignUpSchema, SignInSchema } from "../schemas/session.schema.js";
import { sessionRepositories } from "../repositories/session.repositories.js";

async function signup(req: Request, res: Response){
    const obj = req.body;
    
    const { error } = SignUpSchema.validate(obj);
    if( error ) {
        return res.send({message: error.message}).status(409);
    }
    
    const passwordCrypt = bcrypt.hashSync(obj.password, 10);
    
    const objUser = {
        name: obj.name,
        password: passwordCrypt,
        email: obj.email,
    }

    try {
        const validEmail = await sessionRepositories.validateEmail(obj.email);
        if(validEmail.length > 0) {
            return res.sendStatus(409);
        }

        await sessionRepositories.singUpRep(objUser);
        res.sendStatus(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

}

async function signin(req: Request, res: Response) {
    const obj = req.body;
    const token = uuidv4();
    
    const { error } = SignInSchema.validate(obj);
    if( error ) {
        return res.send({message: error.message}).status(409);
    }

    try {
        
        const userExist = await sessionRepositories.validateEmail(obj.email);
        if(userExist.length === 0) {
            return res.sendStatus(409);
        }

        const passwordOK = bcrypt.compareSync(obj.password, userExist[0].password);
        if (!passwordOK) {
            return res.sendStatus(401);
        }

        const exists = await sessionRepositories.validateSession(userExist[0].id);
        console.log(exists);
        if (exists.length > 0) {
            return res.send(exists[0].token);
        }

        await sessionRepositories.singInRep(userExist[0].id, token);

        res.send(token).status(200);

    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }

}


export const sessionFunc = {
    signup,
    signin
}