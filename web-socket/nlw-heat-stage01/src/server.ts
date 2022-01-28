import dotenv from 'dotenv';
import app from './config/app';

dotenv.config()
const PORT = Number(process.env.PORT)




app.listen(PORT, () => {
  console.log("Listening on port: http://localhost:" + PORT)
})