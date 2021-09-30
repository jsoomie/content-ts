import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

const dateOfFirstMatch = reader.data[0][0];
console.log(dateOfFirstMatch);

// [0: date, 1: home, 2: away, 3: home score, 4: away score, 5: winner[home, away, draw], coach]
// Manchester United Wins
let manUnitedWins = 0;
const MAN_UNITED = "Man United";

for (let match of reader.data) {
  if (match[1] === MAN_UNITED && match[5] === MatchResult.HOME_WIN) {
    manUnitedWins++;
  } else if (match[2] === MAN_UNITED && match[5] === MatchResult.AWAY_WIN) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
