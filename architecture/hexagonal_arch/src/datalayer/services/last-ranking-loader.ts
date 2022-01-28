import { RankingScore } from "../../domain/entities";
import { RankingUnavailableError } from "../../domain/errors";
import { LastRankingLoader } from "../../domain/usecases";
import { LoadLastRankingRepository } from "../contracts";
//Data layer so conhece o domain
export class LastRankingLoaderService implements LastRankingLoader{
  constructor(
    private readonly loadLastRankingRepository: LoadLastRankingRepository
  ) {}
  async exec(): Promise<RankingScore[]> {
    if (new Date().getHours() < 2) {
      throw new RankingUnavailableError()
    }
    
    return this.loadLastRankingRepository.loadLastRanking()
  }
}
