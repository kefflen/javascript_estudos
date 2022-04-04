// https://www.youtube.com/watch?v=WhFx2heoFrA
import express from 'express'
import swaggerUI from 'swagger-ui-express'

import router from './routes'
import swaggerDocs from './swagger.json'

const app = express()
app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))


app.use("/v1", router)

app.listen(8080, () => console.log('Running at: http://localhost:8080'))