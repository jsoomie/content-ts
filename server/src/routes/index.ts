import { Router } from "express";
import { requireAuth } from "../middleware/auth";
const router = Router();

import { router as loginRoutes } from "./login.routes";
import { router as homeRoutes } from "./home.routes";
import { router as protectedRoutes } from "./protected.routes";

router.use("/user", loginRoutes);
router.use("/", homeRoutes);
router.use("/protected", requireAuth, protectedRoutes);

export { router };
