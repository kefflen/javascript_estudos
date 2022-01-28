import { setupRoutes } from './routes'

import express from 'express'
import { setupApolloServer } from './apollo-server'


const app = express()
setupRoutes(app)
setupApolloServer(app)
export default app