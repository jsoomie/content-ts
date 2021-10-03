import { Router } from "express";
import { loginHome, loginUser } from "../controllers";
const router = Router();

// GET
router.get("/", loginHome);

// POST LOGIN
router.post("/", loginUser);

export { router };
