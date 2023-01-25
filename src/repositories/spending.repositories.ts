import { QueryResult } from "pg";

import { SpendingEntity, Spending } from "../protocols/Spending.js";
import prisma from "../database/database.js";

async function allSpending(id: number) {
  return prisma.spending.findMany({ where: { idUser: id } });
}
async function oneSpending(id: number, idUser: number) {
  return prisma.spending.findMany({ where: { id, idUser } });
}
async function priceSpending(price: number, id: number) {
  return prisma.spending.findMany({
    where: {
      price: { lte: price },
      idUser: id,
    },
  });
}
async function newSpending(obj: Spending, idUser: number) {
  return prisma.spending.create({
    data: {
      name: obj.name,
      price: obj.price,
      idUser,
    },
  });
}
async function updateSpending(obj: Spending, id: number) {
  return prisma.spending.update({
    where: { id },
    data: {
      name: obj.name,
      price: obj.price,
    },
  });
}
async function deleteSpending(id: number) {
  return prisma.spending.delete({ where: { id } });
}

export const spendingQuery = {
  allSpending,
  oneSpending,
  priceSpending,
  newSpending,
  updateSpending,
  deleteSpending,
};
