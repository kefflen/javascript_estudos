import { CreateLessonData, LessonsRepository } from "../LessonsRepository";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export class PrismaLessonRepository implements LessonsRepository{
  async create(data: CreateLessonData): Promise<void> {
    await prisma.lesson.create({
      data
    })
  }
  
}