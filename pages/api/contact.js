import sendgrid from "@sendgrid/mail";

export default async (req, res) => {
  if (req.method !== "POST")
    return res.status(400).json({ message: "Bad request type" });
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "red.devcs@gmail.com",
    from: process.env.EMAIL_USER,
    subject: "Portfolio Contact",
    text: ` New Message
    
     Name: ${JSON.parse(req.body).name}
     
     Email: ${JSON.parse(req.body).email}
     
     Subject: ${JSON.parse(req.body).subject}
     
     Message: ${JSON.parse(req.body).message}`,
    html: `
    <h1 align="center" style="font-family: Helvetica sans-serif">New Message</h1>
    <p style="font-family: Helvetica sans-serif"><strong>Name:</strong> ${
      JSON.parse(req.body).name
    }</p>
    <p style="font-family: Helvetica sans-serif"><strong>Email:</strong> ${
      JSON.parse(req.body).email
    }</p>
    <p style="font-family: Helvetica sans-serif"><strong>Subject:</strong> ${
      JSON.parse(req.body).subject
    }</p>
    <p style="font-family: Helvetica sans-serif"><strong>Message:</strong></p>
    <blockquote style="font-family: Helvetica sans-serif">${
      JSON.parse(req.body).message
    }</blockquote>
    `,
  };
  sendgrid
    .send(msg)
    .then(() => {
      return res.status(200).json({ message: "Email sent" });
    })
    .catch((error) => {
      console.error(error);
      return res
        .status(400)
        .json({ message: "There was an error with that request" });
    });
};
