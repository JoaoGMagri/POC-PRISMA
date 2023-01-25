import { QueryResult } from "pg";

import { SpendingEntity, Spending } from "../protocols/Spending.js";
import prisma from "../database/database.js";

async function allSpending() {
    return prisma.spending.findMany();
}
async function oneSpending(id: number) {
    return prisma.spending.findUnique({ where: { id: id } });
}
async function priceSpending(price: number) {
    return prisma.spending.findMany({ where: { price: { lt: price } } });
}
async function newSpending(obj: Spending): Promise<void> {
    /* connection.query(
        `
            INSERT INTO spending(name, price)
            VALUES($1, $2)
            
        `,[obj.name, obj.price]
    ) */
}
async function updateSpending(obj: Spending, id:number): Promise<void> {
    /* connection.query(
        `
            UPDATE 
                spending 
            SET
                name=$1,
                price=$2
            WHERE
                id = $3;
        `, [obj.name, obj.price, id]
    ) */

}
async function deleteSpending(id: number): Promise<void> {
    /* connection.query(
        `
            DELETE FROM
                spending 
            WHERE
                id = $1;
        `, [id]
    ) */
}

export const spendingQuery = {
    allSpending,
    oneSpending,
    priceSpending,
    newSpending,
    updateSpending,
    deleteSpending,
}