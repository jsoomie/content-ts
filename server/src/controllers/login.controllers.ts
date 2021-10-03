import { Request, Response } from "express";

interface ReqBody extends Request {
  body: { [key: string]: string | undefined };
}

/**
 * Logins home to display some things for testing only
 * @param req Nothing should come into req.body at this route
 * @param res To sedn out html or json for testing only
 */
export const loginHome = (req: Request, res: Response) => {
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
    throw new Error(`[loginRoutes @ GET ]: ${error}`);
  }
};

/**
 * User login with email and password
 * @param req username: string, password: string = req.body
 * @param res login confirmation
 */
export const loginUser = (req: ReqBody, res: Response) => {
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
};

/**
 * User logout
 * @param req req.session
 * @param res redirects to home page
 */
export const logoutUser = (req: Request, res: Response) => {
  try {
    req.session = undefined;
    res.redirect("/");
  } catch (error) {
    throw new Error(`[loginRoute @ loutuser]: ${error}`);
  }
};
