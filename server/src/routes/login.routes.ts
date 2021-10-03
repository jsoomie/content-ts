import { Router } from "express";
import { loginHome, loginUser, logoutUser } from "../controllers";
const router = Router();

// LOGIN GET
router.get("/", loginHome);

// LOGIN POST
router.post("/login", loginUser);

// LOGOUT
router.post("/logout", logoutUser);

export { router };
