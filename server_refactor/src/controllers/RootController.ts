import { Request, Response } from "express";
import { get, controller, use } from "./decorators";
import { requireAuth } from "../middleware/auth";

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    try {
      if (req.session && req.session.loggedIn) {
        res
          .send(
            `
        <form action="/auth/logout" method="GET">
          <h3>You are logged in!</h3>
          <button>Logout</button>
        </form>
        <a href="/protected">Protected Route</a>
        `
          )
          .status(200);
      } else {
        res
          .send(
            `
        <div>
          <h3>You are not logged in...</h3>
          <a href="/auth/login">login</a>
        </div>
        `
          )
          .status(422);
      }
    } catch (error) {
      throw new Error("This is an error");
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    try {
      res.send(`
        <div>
          <div>This is a protected route!</div>
          <div>Welcome user!</div>
          <a href="/">Back Home!</a>
        </div>
        `);
    } catch (error) {
      throw new Error(`[protected routes]: ${error}`);
    }
  }
}
