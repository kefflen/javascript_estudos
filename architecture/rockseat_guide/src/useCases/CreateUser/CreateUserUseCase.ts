import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
 
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ) {}
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExist = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExist) {
            throw new Error("User already exist.")
        }

        const user = new User(data)

        await this.usersRepository.save(user)
        
        this.mailProvider.sendMail({
            to: {
                name: data.name,
                address: data.email
            },
            from: {
                name: data.name,
                address: data.email
            },
            subject: "Seja bem-vindo à nossa plataforma.",
            html: "<p>Voce ja pode fazer login na nossa plataforma.</p>"
        })
    }
}