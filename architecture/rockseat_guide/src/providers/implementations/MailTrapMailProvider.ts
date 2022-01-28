import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from "nodemailer/lib/mailer";

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "af55d617b02f1b",
                pass: "777b22ef22ddf2"
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail(message)
    }
}