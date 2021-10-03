import { Router } from "express";
const router = Router();

import { router as loginRoutes } from "./login.routes";

router.use("/login", loginRoutes);

export { router };
