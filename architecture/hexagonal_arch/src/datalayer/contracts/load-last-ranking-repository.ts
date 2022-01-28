import { RankingScoreModel } from "../model/ranking-score";

export interface LoadLastRankingRepository {
  loadLastRanking: () => Promise<RankingScoreModel[]>
}