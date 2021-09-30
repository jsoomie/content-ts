"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReports_1 = require("./reportTargets/ConsoleReports");
var WinsAanalysis_1 = require("./analyzers/WinsAanalysis");
var Summary_1 = require("./Summary");
//  create an object that satisfy the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
//  create an instance of matchreader and pass in something satisfaying
//  the datareader
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var team = "Man United";
var summary = new Summary_1.Summary(new WinsAanalysis_1.WinsAnalysis(team), new ConsoleReports_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
