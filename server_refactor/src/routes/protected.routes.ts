import { Router } from "express";
import { protectedRoute } from "../controllers";
import { requireAuth } from "../middleware/auth";
const router = Router();

// PROTECTED ROUTE
router.get("/", requireAuth, protectedRoute);

export { router };
