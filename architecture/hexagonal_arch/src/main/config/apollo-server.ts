import typeDefs from "../graphql/type-defs"
import resolvers from "../graphql/resolvers/ranking"

import { ApolloServer } from "apollo-server-express"
import { Express } from "express"

export const setupApolloServer = (app: Express): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs
  })
  server.applyMiddleware
}