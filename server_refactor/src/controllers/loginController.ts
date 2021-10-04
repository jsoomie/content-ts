import { Request, Response } from "express";
import { get, controller } from "./decorators";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    try {
      res.send(`
      <form action="/user/login" method="POST">
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
}
