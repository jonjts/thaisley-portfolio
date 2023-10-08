import nodemailer from 'nodemailer';

async function wrapedSendMail(mailOptions) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: { rejectUnauthorized: false }
    });

    console.log(mailOptions)

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        resolve(false)
      } else {
        console.log('Email enviado: ' + info.response);
        resolve(true)
      }
    });

  })
}

export default async (req, res) => {
  const { assunto, body } = req.body
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: assunto,
      text: body
    };
    await wrapedSendMail(mailOptions)
  } catch (error) {
    console.log(error)
    res.status = 400;
  }
  res.send({ message: 'Email enviado' });
}