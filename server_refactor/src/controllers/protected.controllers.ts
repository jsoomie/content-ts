import { Request, Response } from "express";

export const protectedRoute = (req: Request, res: Response) => {
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
};
