"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
//  create an object that satisfy the "DataReader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
//  create an instance of matchreader and pass in something satisfaying
//  the datareader
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
// [0: date, 1: home, 2: away, 3: home score, 4: away score, 5: winner[home, away, draw], coach]
// Manchester United Wins
var manUnitedWins = 0;
var MAN_UNITED = "Man United";
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === MAN_UNITED && match[5] === MatchResult_1.MatchResult.HOME_WIN) {
        manUnitedWins++;
    }
    else if (match[2] === MAN_UNITED && match[5] === MatchResult_1.MatchResult.AWAY_WIN) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
