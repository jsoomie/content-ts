import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { WinsAnalysis } from "./analyzers/WinsAanalysis";
import { Summary } from "./Summary";

//  create an object that satisfy the "DataReader" interface
const csvFileReader = new CsvFileReader("football.csv");

//  create an instance of matchreader and pass in something satisfaying
//  the datareader
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const team = "Man United";

const summary = new Summary(new WinsAnalysis(team), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
