import { LoadLastRankingRepository } from "../../datalayer/contracts";
import { RankingScoreModel } from "../../datalayer/model/ranking-score";
import { ranking } from "../data";

export class FakeRankingRepository implements LoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreModel[]> {
    return ranking.map(item => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes
    }))
  }
}