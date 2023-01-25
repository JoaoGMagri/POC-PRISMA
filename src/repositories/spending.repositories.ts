import { QueryResult } from "pg";

import { SpendingEntity, Spending } from "../protocols/Spending.js";
import { connection } from "../database/database.js";

async function allSpending(): Promise<QueryResult<SpendingEntity[]>> {
    return connection.query(
        `
            SELECT * FROM spending;
        `
    )
}
async function oneSpending(id: number): Promise<QueryResult<SpendingEntity>> {
    return connection.query(
        `
            SELECT * FROM spending WHERE id = $1;
        `,[id]
    )
}
async function priceSpending(price: number): Promise<QueryResult<SpendingEntity[]>> {
    return connection.query(
        `
            SELECT * FROM spending WHERE price <= $1;
        `,[price]
    )
}
async function newSpending(obj: Spending): Promise<void> {
    connection.query(
        `
            INSERT INTO spending(name, price)
            VALUES($1, $2)
            
        `,[obj.name, obj.price]
    )
}
async function updateSpending(obj: Spending, id:number): Promise<void> {
    connection.query(
        `
            UPDATE 
                spending 
            SET
                name=$1,
                price=$2
            WHERE
                id = $3;
        `, [obj.name, obj.price, id]
    )

}
async function deleteSpending(id: number): Promise<void> {
    connection.query(
        `
            DELETE FROM
                spending 
            WHERE
                id = $1;
        `, [id]
    )
}

export const spendingQuery = {
    allSpending,
    oneSpending,
    priceSpending,
    newSpending,
    updateSpending,
    deleteSpending,
}