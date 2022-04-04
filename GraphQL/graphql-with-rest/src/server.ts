import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import mongoose from 'mongoose'
import { graphqlHTTP } from 'express-graphql'

const app = express()

app.use(express.json())

mongoose.connect("mongodb://localhost:27017/code_drops")

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json(error.message)
    }
    return response.status(500).json(error)
  }
)

app.listen(4003, () => {
  console.log('Running at: http://localhost:4003')
})