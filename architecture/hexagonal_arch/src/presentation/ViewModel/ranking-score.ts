import { RankingScore } from "../../domain/entities"

export abstract class RankingScoreViewModel {
  public readonly player: Player
  public readonly score: number
  public readonly matchDate: string
  public readonly heroes: Hero[]
  

  static map(entity: RankingScore): RankingScoreViewModel {
    return {
      ...entity,
      matchDate: entity.matchDate.toISOString()
    }
  }

  static mapCollection(entities: RankingScore[]): RankingScoreViewModel[] {
    return entities.map(RankingScoreViewModel.map)
  }

}

type Player = {
  name: string
  country: string
}

type Hero = {
  name: string
  level: number
}
