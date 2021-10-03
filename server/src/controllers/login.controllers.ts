import { Request, Response } from "express";

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

export const loginUser = (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    res.send(email + password);
  } catch (error) {
    throw new Error(`[loginRoutes @ POST]: ${error}`);
  }
};
