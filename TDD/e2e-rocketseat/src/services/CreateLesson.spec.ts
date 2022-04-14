import { InMemoryLessonsRepositor as InMemoryLessonsRepository } from "../../test/repositories/inMemoryLessonsRepository"
import { CreateLesson } from "./CreateLesson"

test('Create lesson', async () => {
  const inMemoryLessonsRepository = new InMemoryLessonsRepository()
  const createLesson = new CreateLesson(inMemoryLessonsRepository)

  createLesson.execute({
    title: 'any_lesson'
  })

  expect(inMemoryLessonsRepository.items).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        title: 'any_lesson'
      })
    ])
  )
})