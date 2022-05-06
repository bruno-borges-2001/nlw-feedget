import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "47217767bacd64",
    pass: "8704b2ec4bf8dd",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData) {
    const { subject, body } = data;
    await transport.sendMail({
      from: "Equipe Feedget <feedget@feedget.com>",
      to: "Bruno Borges <brunoborges2001@gmail.com",
      subject,
      html: body,
    });
  }
}
