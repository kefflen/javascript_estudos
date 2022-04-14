import { CreateLesson } from "./CreateLesson"

test('Create lesson', async () => {
  const createLesson = new CreateLesson({
    create: async (data) => {}
  })

  await expect(createLesson.execute({ title: 'any_lesson'}))
    .resolves.not.toThrow()
})