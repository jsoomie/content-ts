import { Router } from "express";
import { home } from "../controllers";
const router = Router();

// HOMEPAGE
router.get("/", home);

export { router };
