import { Router } from "express";
import { loginHome, loginUser } from "../controllers";
const router = Router();

// LOGIN GET
router.get("/", loginHome);

// LOGIN POST
router.post("/", loginUser);

export { router };
