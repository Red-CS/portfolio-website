import { useState, useRef } from "react";
import emailjs from "emailjs-com";
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
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div>
      {/* <form className="contact-form"> */}
      <div className={styles["contact-container"]}>
        <div className={styles["left-col"]}></div>
        <div className={styles["right-col"]}>
          <form className={styles["form"]} onSubmit={handleSubmit}>
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
              <button className={styles["button"]} type="submit">
                Send
              </button>
            </div>
            <div
              className={styles["confirm-message"]}
              style={{ visibility: submitted ? "visible" : "hidden" }}
            >
              <p>{successMessage}</p>
            </div>
          </form>
        </div>
      </div>

      {/* </form> */}
    </div>
  );
}
