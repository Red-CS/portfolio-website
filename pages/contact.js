// Next Modules
import Head from "next/head";

// Components
import Header from "@components/Header";
import Footer from "@components/Footer";

// Hooks
import { useState, useRef } from "react";

// Email Client
import emailjs from "emailjs-com";

// Styles
import styles from "@styles/pages/Contact.module.css";

export default function Contact() {
  const name = useRef("");
  const email = useRef("");
  const subject = useRef("");
  const message = useRef("");
  const [submitted, setSubmitted] = useState(false);
  const [sendSuccessful, setSendSuccessful] = useState(false);
  const [successMessage, setSuccessMessage] = useState(
    "Sorry, your message could not be sent"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is of valid format
    if (
      name.current === null ||
      email.current === null ||
      email.current.indexOf("@") === -1 ||
      subject.current === null ||
      message.current === null
    ) {
      setSuccessMessage(
        "Invalid flieds. Please ensure everything is filled and correct"
      );
      setSubmitted(true);
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then((result) => {
        setSubmitted(result.status === 200);
        setSendSuccessful(result.status === 200);
        setSuccessMessage(
          result.status === 200
            ? "Your message was successfully sent"
            : "There was an error inH sending your message"
        );
      })
      .catch((e) => {
        setSuccessMessage("There was an error in sending your message");
        console.log(e);
      });
  };
  return (
    <div>
      <Head>
        <title>Contact | Red Williams</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Red Williams, Engineering/Computer Science student based in Blacksburg, Virginia"
        />
        <meta
          name="keywords"
          content="Red Williams,CS,Computer Science,Virginia Tech,Java,Python,HTML,JavaScript,Web Developer"
        />
        <meta name="author" content="Red Williams" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <Header />
        <div>
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
                  <button
                    className={styles["button"]}
                    type="submit"
                    value="Submit"
                    disabled={sendSuccessful}
                  >
                    Send
                  </button>
                  <div
                    className={styles["confirm-message"]}
                    style={{ visibility: submitted ? "visible" : "hidden" }}
                  >
                    <p>{successMessage}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
