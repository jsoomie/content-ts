import fs from "fs";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

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
      })
      .map(this.mapRow);
  }
}
