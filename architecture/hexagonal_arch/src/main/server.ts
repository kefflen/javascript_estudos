//mport 'module-alias/register' // Para que o @<path> funcione no js
import app from "./config/app"
import { env } from './config/env'


app.listen(env.port, () => {
  console.log('Running server at: http://localhost:' + env.port)
})