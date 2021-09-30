import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let WINS = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HOME_WIN) {
        WINS++;
      } else if (match[2] === this.team && match[5] === MatchResult.AWAY_WIN) {
        WINS++;
      }
    }

    return `Team ${this.team} won ${WINS} games`;
  }
}
