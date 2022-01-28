import { RankingScore } from "../entities"

export interface LastRankingLoader {
  exec: () => Promise<RankingScore[]>
}