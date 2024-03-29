import fs from "fs";
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      //  splits data with a new line then maps through them
      //  and split each point with a comma to create a parsed list
      .split("\n")
      .map((row): string[] => {
        return row.split(",");
      });
  }
}
