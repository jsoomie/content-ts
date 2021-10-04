import express, { Request, Response } from "express";
import { router } from "./routes";
import cookieSession from "cookie-session";

import { AppRouter } from "./AppRouter";
import "./controllers/loginController";

// start app
const app = express();

// PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["kit kat dog"] }));

// Routes
app.use("/", router);

app.use(AppRouter.getInstance());

// Routes fall back
app.get("*", (req: Request, res: Response) => {
  try {
    res.send("Page 404 or server not running");
  } catch (error) {
    throw new Error(`[INDEX: GET REQUEST "/"]: ${error}`);
  }
});

// server start
app
  .listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(`[INDEX: SERVER CREATION]: ${error}`);
  });
