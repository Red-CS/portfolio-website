import { useState, useRef } from "react";

export default function ContactForm() {
  const name = useRef("");
  const email = useRef("");
  const subject = useRef("");
  const message = useRef("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      subject,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
      }
    });
  };

  return (
    <div>
      {/* <form className="contact-form"> */}
      <div className="form-group">
        <label className="label">Name</label>
        <input
          className="input"
          type="text"
          name="name"
          autoComplete="off"
          onChange={(e) => {
            name.current = e.target.value;
          }}
        />
      </div>
      <div className="form-group">
        <label className="label">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          autoComplete="off"
          onChange={(e) => {
            email.current = e.target.value;
          }}
        />
      </div>
      <div className="form-group">
        <label className="label">Subject</label>
        <input
          className="input"
          type="subject"
          name="subject"
          autoComplete="off"
          onChange={(e) => {
            subject.current = e.target.value;
          }}
        />
      </div>
      <div className="form-group">
        <label className="label">Message</label>
        <textarea
          className="input textarea"
          name="message"
          rows="6"
          onChange={(e) => {
            message.current = e.target.value;
          }}
        />
      </div>
      <div className="submit">
        <button
          type="submit"
          value="Send"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </div>
      <div
        className="confirm-message"
        //   style={{ visibility: submit ? "visible" : "hidden" }}
      >
        <p>Confirm Message Content</p>
      </div>
      {/* </form> */}
    </div>
  );
}
