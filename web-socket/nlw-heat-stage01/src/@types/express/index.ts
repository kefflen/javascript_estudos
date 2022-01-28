declare namespace express {
  export interface Request implements Request {
    userId: string
  }
}