import nodemailer from "nodemailer";

class Mailer {
  constructor(senderEmail, password) {
    this.senderEmail = senderEmail;
    this.password = password;

    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: password,
      },
    });
  }

  async send_email(receiver) {
    const mailAttributes = {
      from: this.senderEmail,
      to: receiver,
      subject: "Secret Santa - Your turn to be someone's Santa",
      text: "Test1",
    };
    try {
      const info = await this.transporter.sendMail(mailAttributes);
      console.log("Email sent:", info.response);
    } catch (error) {
      console.log("Email not sent to", receiver, error);
    }
  }
  
}

export { Mailer };


