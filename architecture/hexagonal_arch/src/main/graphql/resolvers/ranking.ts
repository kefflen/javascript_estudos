import { adapterApoloServer } from "../../adapters"
import { makeLoadLastRankingController } from "../../factories"

export default {
  Query: {
    async lastRanking (): Promise<any> {
      return adapterApoloServer(makeLoadLastRankingController())
    }
  }
}