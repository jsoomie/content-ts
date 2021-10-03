import express, { Request, Response } from "express";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hello there</h1>
    </div>
  `);
});

app
  .listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(`${error} at server creation`);
  });
