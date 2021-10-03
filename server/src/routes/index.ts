import { Router } from "express";
const router = Router();

import { router as loginRoutes } from "./loginRoutes";

router.use("/login", loginRoutes);

export { router };
