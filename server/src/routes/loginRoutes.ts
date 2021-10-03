import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  try {
    res.send("Hello There");
  } catch (error) {
    throw new Error(`[loginRoutes: GET REQUEST "/"]: ${error}`);
  }
});

export { router };
