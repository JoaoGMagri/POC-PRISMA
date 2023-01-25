import { Router } from "express";
import { sessionFunc } from "../controllers/session.controllers.js";

const router = Router();

router
    .post("/signup", sessionFunc.signup)
    .post("/signin", sessionFunc.signin)

export default router;



