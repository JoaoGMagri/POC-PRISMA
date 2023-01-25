import { Router } from "express";
import { spendingFunc } from "../controllers/spending.controllers.js";
import { authorization } from "../middleware/session/authorization.middleware.js";

const router = Router();

router
    .all("/*", authorization)
    .get("/spendings", spendingFunc.getSpending)
    .get("/spendings/:price", spendingFunc.getSpendingPrice)
    .post("/spendings", spendingFunc.postSpending)
    .put("/spendings/:id", spendingFunc.putSpending)
    .delete("/spendings/:id", spendingFunc.deleteSpending)

export default router;



