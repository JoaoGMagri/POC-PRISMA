import { Router } from "express";
import { spendingFunc } from "../controllers/spending.controllers.js";

const router = Router();

router
    .get("/spendings", spendingFunc.getSpending)
    .get("/spendings/:price", spendingFunc.getSpendingPrice)
    .post("/spendings", spendingFunc.postSpending)
    .put("/spendings/:id", spendingFunc.putSpending)
    .delete("/spendings/:id", spendingFunc.deleteSpending)

export default router;



