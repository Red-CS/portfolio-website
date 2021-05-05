export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "redwilliams.dev@gmail.com",
    to: "red.devcs@gmail.com",
    subject: `Message From ${req.body.name.current}`,
    text: req.body.message + " | Sent from: " + req.body.email.current,
    html: `<div>${req.body.message.current}</div><p>Sent from:
    ${req.body.email.current}</p>`,
  };

  try {
    transporter.sendMail(mailData);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ error: "Could not send email" });
  }

  return res.status(200).json({ status: "200" });
}
