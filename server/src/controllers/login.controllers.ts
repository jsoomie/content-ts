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
    <form method="POST">
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
    if (email && password) {
      res.send(email + password).status(200);
    } else {
      res.send("Please enter correct information").status(422);
    }
  } catch (error) {
    throw new Error(`[loginRoutes @ POST]: ${error}`);
  }
};
