import { InMemoryLessonsRepositor as InMemoryLessonsRepository } from "../../test/repositories/inMemoryLessonsRepository"
import { CreateLesson } from "./CreateLesson"

describe('CreateLessonService', () => {
  test('Should be able to create a new lesson', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository()
    const createLesson = new CreateLesson(inMemoryLessonsRepository)
  
    const title = 'any_lesson'
    
    await expect(createLesson.execute({ title }))
      .resolves.not.toThrow()

    
    expect(inMemoryLessonsRepository.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ title })
      ])
    )
  })

  test('Should NOT be able to create a new lesson', async () => {
    const inMemoryLessonsRepository = new InMemoryLessonsRepository()
    const createLesson = new CreateLesson(inMemoryLessonsRepository)
    const title = ''

    await expect(createLesson.execute({ title }))
      .rejects.toThrow()
    
    expect(inMemoryLessonsRepository.items).toEqual([])
  })



})