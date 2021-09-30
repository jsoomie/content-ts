"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportTargets/ConsoleReports";
// import { WinsAnalysis } from "./analyzers/WinsAanalysis";
// import { HtmlReports } from "./reportTargets/HtmlReport";
//  create an object that satisfy the "DataReader" interface
// const csvFileReader = new CsvFileReader("football.csv");
//  create an instance of matchreader and pass in something satisfaying
//  the datareader
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
var team = "Man United";
// const summary = new Summary(new WinsAnalysis(team), new HtmlReports());
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport(team); // Shortcut
summary.buildAndPrintReport(matchReader.matches);
