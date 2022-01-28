import { LastRankingLoaderService } from "../../datalayer/services";
import { FakeRankingRepository } from "../../infra/repositories";
import { Controller } from "../../presentation/controller/contracts";
import { LoadLastRankingController } from "../../presentation/controller/load-last-ranking-controller";

export const makeLoadLastRankingController = (): Controller => {
  const repo = new FakeRankingRepository()
  const loader = new LastRankingLoaderService(repo)
  return  new LoadLastRankingController(loader)
}