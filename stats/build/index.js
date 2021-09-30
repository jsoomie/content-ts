"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
var dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);
// [0: date, 1: home, 2: away, 3: home score, 4: away score, 5: winner[home, away, draw], coach]
// Manchester United Wins
var manUnitedWins = 0;
var MAN_UNITED = "Man United";
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === MAN_UNITED && match[5] === MatchResult_1.MatchResult.HOME_WIN) {
        manUnitedWins++;
    }
    else if (match[2] === MAN_UNITED && match[5] === MatchResult_1.MatchResult.AWAY_WIN) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
