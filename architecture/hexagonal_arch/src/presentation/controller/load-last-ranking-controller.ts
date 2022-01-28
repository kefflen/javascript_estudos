import { LastRankingLoader } from "../../domain/usecases";
import { RankingScoreViewModel } from "../ViewModel";
import { Controller, HttpResponse, ok, serverError } from "./contracts";

export class LoadLastRankingController implements Controller{
  constructor(
    private readonly lastRankingLoader: LastRankingLoader
  ) {}
  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.exec()
      return ok(RankingScoreViewModel.mapCollection(ranking))
    } catch (error) {
      return serverError(new Error('Houve algum erro: controller.load-last-ranking'))
    }
    
  }
}