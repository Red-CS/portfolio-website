import { useState, useRef } from "react";
import styles from "../../styles/component/ContactForm.module.css";

export default function ContactForm() {
  const name = useRef("");
  const email = useRef("");
  const subject = useRef("");
  const message = useRef("");
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    "Sorry, your message could not be sent"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
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
        setSuccessMessage("Your message was successfully sent");
        setSubmitted(true);
      }
    });
  };

  return (
    <div>
      {/* <form className="contact-form"> */}
      <div className={styles["contact-container"]}>
        <div className={styles["left-col"]}></div>
        <div className={styles["right-col"]}>
          <div className={styles["form"]}>
            <label className={styles["label"]}>Full Name</label>
            <input
              className={styles["input"]}
              type="text"
              name="name"
              placeholder="Your Full Name"
              autoComplete="off"
              onChange={(e) => {
                name.current = e.target.value;
              }}
            />
            <div className={styles["form-group"]}>
              <label className={styles["label"]}>Email Address</label>
              <input
                className={styles["input"]}
                type="email"
                name="email"
                placeholder="Your Email Address"
                autoComplete="off"
                onChange={(e) => {
                  email.current = e.target.value;
                }}
              />
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["label"]}>Subject</label>
              <input
                className={styles["input"]}
                type="subject"
                name="subject"
                placeholder="The Email Subject"
                autoComplete="off"
                onChange={(e) => {
                  subject.current = e.target.value;
                }}
              />
            </div>
            <div className={styles["form-group"]}>
              <label className={styles["label"]}>Message</label>
              <textarea
                className={styles[("input", "textarea")]}
                name="message"
                placeholder="Your Message"
                rows="6"
                onChange={(e) => {
                  message.current = e.target.value;
                }}
              />
            </div>
            <div className={styles["submit"]}>
              <button
                className={styles["button"]}
                type="submit"
                value="Send"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                disabled={submitted}
              >
                Send
              </button>
            </div>
            <div
              className={styles["confirm-message"]}
              style={{ visibility: submitted ? "visible" : "hidden" }}
            >
              <p>{successMessage}</p>
            </div>
          </div>
        </div>
      </div>

      {/* </form> */}
    </div>
  );
}
