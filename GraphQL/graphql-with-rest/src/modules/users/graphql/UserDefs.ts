import { gql } from 'apollo-server-express'

export default gql`
  scalar Date
  type User {
    _id: ID
    name: String,
    username: String,
    createdAt: Date
  }

  type Query {
    getAllUsers(): [User]
  }
`
