import { adaptRouteExpress } from "../adapters"
import { makeLoadLastRankingController } from "../factories"

import { Router } from "express"

export default (router: Router): void => {
  router.get('/ranking/last', adaptRouteExpress(makeLoadLastRankingController()))
}