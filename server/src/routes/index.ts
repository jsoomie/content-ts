import { Router } from "express";
const router = Router();

import { router as loginRoutes } from "./login.routes";
import { router as homeRoutes } from "./home.routes";

router.use("/login", loginRoutes);
router.use("/", homeRoutes);

export { router };
