import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserControler";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUserRepository = new PostgresUserRepository()
const mailTrapMailProvider = new MailTrapMailProvider()

const createUserUseCase = new CreateUserUseCase(postgresUserRepository, mailTrapMailProvider)



const createUserController = new CreateUserController(createUserUseCase)
export { createUserUseCase, createUserController}