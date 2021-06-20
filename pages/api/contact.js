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
    <h3 style="font-family: Helvetica sans-serif">Name: ${
      JSON.parse(req.body).name
    }</h3>
    <h3 style="font-family: Helvetica sans-serif">Email: ${
      JSON.parse(req.body).email
    }</h3>
    <h3 style="font-family: Helvetica sans-serif">Subject: ${
      JSON.parse(req.body).subject
    }</h3>
    <h3 style="font-family: Helvetica sans-serif">Message:</h3>
    <blockquote style="font-family: Helvetica sans-serif">${
      JSON.parse(req.body).message
    }</blockquote>
    `,
  };
  sendgrid
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
  console.log(req.body);
  return res.status(200).json({ message: "Test" });
};
