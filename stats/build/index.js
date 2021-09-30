"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//  loads unparsed data as a string
var matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    //  splits data with a new line then maps through them
    //  and split each point with a comma to create a parsed list
    .split("\n")
    .map(function (row) {
    return row.split(",");
});
console.log(matches);
