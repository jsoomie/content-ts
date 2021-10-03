import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  try {
    if (req.session && req.session.loggedIn) {
      res
        .send(
          `
      <div>
        <h3>You are logged in!</h3>
        <a href="/logout">Logout</a>
      </div>
      `
        )
        .status(200);
    } else {
      res
        .send(
          `
      <div>
        <h3>You are not logged in...</h3>
        <a href="/login">login</a>
      </div>
      `
        )
        .status(422);
    }
  } catch (error) {
    throw new Error(`[homeRoute @ home]: ${error}`);
  }
};
