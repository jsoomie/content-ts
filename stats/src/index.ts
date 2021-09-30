import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

//  create an object that satisfy the "DataReader" interface
const csvFileReader = new CsvFileReader("football.csv");

//  create an instance of matchreader and pass in something satisfaying
//  the datareader
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches

// [0: date, 1: home, 2: away, 3: home score, 4: away score, 5: winner[home, away, draw], coach]
// Manchester United Wins
let manUnitedWins = 0;
const MAN_UNITED = "Man United";

for (let match of matchReader.matches) {
  if (match[1] === MAN_UNITED && match[5] === MatchResult.HOME_WIN) {
    manUnitedWins++;
  } else if (match[2] === MAN_UNITED && match[5] === MatchResult.AWAY_WIN) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
