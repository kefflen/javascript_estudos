import { Lesson } from "@prisma/client";
import { CreateLessonData, LessonsRepository } from "../../src/repositories/LessonsRepository";

export class InMemoryLessonsRepositor implements LessonsRepository{
  public items: Lesson[] = []

  async create(data: CreateLessonData): Promise<void> {
    this.items.push({
      title: data.title,
      description: data.description ?? null,
      id: 'teste'
    })
  }
}