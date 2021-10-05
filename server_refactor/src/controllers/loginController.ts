import { NextFunction, Request, Response } from "express";
import { get, post, controller, bodyValidator } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    try {
      res.send(`
      <form action="/auth/login" method="POST">
        <div>
          <label for="email">Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input name="password" type="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
      `);
    } catch (error) {
      throw new Error(`[GET @ getLogin]: ${error}`);
    }
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (
        email &&
        password &&
        email === "email@email.com" &&
        password === "password"
      ) {
        req.session = { loggedIn: true };
        res.redirect("/");
      } else {
        res.send("Invalid email or password");
      }
    } catch (error) {
      throw new Error(`[loginRoutes @ POST]: ${error}`);
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    try {
      req.session = undefined;
      res.redirect("/");
    } catch (error) {
      throw new Error(`[loginRoute @ loutuser]: ${error}`);
    }
  }
}
