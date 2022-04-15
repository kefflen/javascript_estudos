import express from 'express'
import cors from 'cors'
import { PrismaLessonRepository } from './repositories/prisma/PrismaLessonsRepository'
import { CreateLesson } from './services/CreateLesson'
const app = express()

app.use(express.json)
app.use(cors())
app.post('/lessons', async (request, response) => {
  const { title, description } = request.body

  const prismaLessonRepository = new PrismaLessonRepository()
  const createLesson = new CreateLesson(prismaLessonRepository)

  try {
    await createLesson.execute({ title, description })
  } catch (e: any) {
    return response.status(400).json({ error: e.message })
  }
  return response.status(201).send()
})


export default app
