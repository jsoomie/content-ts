import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportTargets/ConsoleReports";
// import { WinsAnalysis } from "./analyzers/WinsAanalysis";
// import { HtmlReports } from "./reportTargets/HtmlReport";

//  create an object that satisfy the "DataReader" interface
// const csvFileReader = new CsvFileReader("football.csv");

//  create an instance of matchreader and pass in something satisfaying
//  the datareader
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const team = "Man United";

// const summary = new Summary(new WinsAnalysis(team), new HtmlReports());
const summary = Summary.winsAnalysisWithHtmlReport(team); // Shortcut

summary.buildAndPrintReport(matchReader.matches);
