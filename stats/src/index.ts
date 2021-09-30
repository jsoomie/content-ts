import fs from "fs";

//  loads unparsed data as a string
const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  //  splits data with a new line then maps through them
  //  and split each point with a comma to create a parsed list
  .split("\n")
  .map((row): string[] => {
    return row.split(",");
  });

console.log(matches);
