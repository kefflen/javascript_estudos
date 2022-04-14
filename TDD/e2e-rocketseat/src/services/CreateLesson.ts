import { LessonsRepository } from "../repositories/LessonsRepository";

interface CreateLessonRequest {
  title: string,
  description?: string
}

export class CreateLesson {
  constructor(
    private lessonRepository: LessonsRepository
  ) {}

  async execute({ title, description }: CreateLessonRequest) {
    await this.lessonRepository.create({ title, description })
  }
}