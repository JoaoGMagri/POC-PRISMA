import { Request, Response } from "express";
import { ValidationError } from "joi";

import { Spending } from "../protocols/Spending.js";
import { spendingQuery} from "../repositories/spending.repositories.js";
import { validationNewSpending } from "../service/spending.js";

async function getSpending(req: Request, res: Response){
    const { idUser } = res.locals;
    try {
        const obj = await spendingQuery.allSpending(idUser);
        res.send(obj);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
async function getSpendingPrice(req: Request, res: Response){
    const price: number = Number(req.params.price);
    const { idUser } = res.locals;

    try {
        const obj = await spendingQuery.priceSpending(price, idUser);
        res.send(obj).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
async function postSpending(req: Request, res: Response){
    const obj: Spending = req.body;
    const { idUser } = res.locals;

    try {
        const validated: false | ValidationError = validationNewSpending(obj)
        if (validated) {
            return res.send({message: validated.message}).status(409);
        }
        spendingQuery.newSpending(obj, idUser)
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
async function putSpending(req: Request, res: Response){
    const obj: Spending = req.body;
    const id: number = Number(req.params.id);
    const { idUser } = res.locals;

    try {
        const validated: false | ValidationError = validationNewSpending(obj)
        if (validated) {
            return res.send({message: validated.message}).status(409);
        }
        const existed = await spendingQuery.oneSpending(id, idUser);
        if (existed.length === 0) {
            return res.sendStatus(409);
        }
        spendingQuery.updateSpending(obj, id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
async function deleteSpending(req: Request, res: Response){
    const id: number = Number(req.params.id);
    const { idUser } = res.locals;

    try {
        const existed = await spendingQuery.oneSpending(id, idUser)
        if (existed.length === 0) {
            return res.sendStatus(409);
        }
        spendingQuery.deleteSpending(id);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export const spendingFunc = {
    getSpending,
    getSpendingPrice,
    postSpending,
    putSpending,
    deleteSpending,
}