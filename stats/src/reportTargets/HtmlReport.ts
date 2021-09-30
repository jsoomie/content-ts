import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReports implements OutputTarget {
  print(report: string): void {
    const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Report</title>
  </head>
  <body>
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
    <footer>  
      <p>This Report was created by a class inside!</p>
    </footer>
  </body>
  </html>
    `;

    fs.writeFileSync("report.html", html);
  }
}
