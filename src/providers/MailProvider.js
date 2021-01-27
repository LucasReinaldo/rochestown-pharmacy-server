import nodemailer from "nodemailer";

export default class MailProvider {
  transporter;

  constructor() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: process.env.ETHEREAL_USER,
          pass: process.env.ETHEREAL_PASSWORD
      }
  });

  this.transporter = transporter;
  }

  async sendMail({email, name}) {
    const send = await this.transporter.sendMail({
      from: '"Rochestown Pharmacy" <rochestownpharmacy@gmail.com>',
      to: email,
      subject: "Rochestown Pharmacy - Subscription",
      text: `Hello ${name}, Thank you for your subscription, we will get in touch soon with some amazing offers.`,
      html: `<h2>Hello ${name},</h2><br />
              <p>Thank you for your subscription, we will get in touch soon with some amazing offers.</p>`,
    });

    return send;
  }
}