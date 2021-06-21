// Next Modules
import Head from "next/head";

// Components
import Header from "@components/Header";
import Footer from "@components/Footer";

// Hooks
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

// Styles
import styles from "@styles/pages/Contact.module.css";

export async function getStaticProps() {
  // Preview Deployments
  var url = `https://${process.env.VERCEL_URL}`;

  // Production
  if (process.env.VERCEL_ENV == "production") {
    url = "https://www.redwilliams.dev";
  }

  // Development
  else if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000";
  }

  return { props: { url: url } };
}

export default function Contact({ url }) {
  const initialNullState = {
    name: false,
    email: false,
    subject: false,
    message: false,
  };

  const nullFields = useRef(initialNullState);

  const [hasErrors, setErrors] = useState(false);

  const [serverError, setServerError] = useState(false);
  const [sendSuccessful, setSendSuccessful] = useState();
  const serverErrorMessage = "Sorry, your message could not be sent";

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    nullFields.current = initialNullState;
    const response = await fetch(`${url}/api/contact`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((data) => {
        return data.ok;
      })
      .catch((error) => console.log(error));
    setSendSuccessful(response);
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
              <form
                className={styles["form"]}
                onSubmit={handleSubmit((data) => {
                  setErrors(false);
                  var hasMissingFields = false;

                  // Iterate through each field of the null fields
                  Object.keys(nullFields.current).forEach((field) => {
                    // If the form data is missing the field
                    if (!data[`${field}`]) {
                      console.log(field);

                      // Set boolean flag
                      hasMissingFields = true;
                      // Mark field as null
                      nullFields.current[`${field}`] = true;
                    } else {
                      // Mark field as not null
                      nullFields.current[`${field}`] = false;
                    }
                  });

                  // If there were any missing fields
                  if (hasMissingFields) {
                    // Set errors as true, triggering a rerender to show the asterisks
                    setErrors(true);
                    return; // And don't submit the form
                  }
                  // Object.keys(nullFields.current).forEach((field) => {
                  //   field = false;
                  // });
                  onSubmit(data);
                })}
              >
                <div className={styles["form-group"]}>
                  <p
                    className={styles["asterisk"]}
                    style={{
                      visibility: nullFields.current.name
                        ? "visible"
                        : "hidden",
                    }}
                  >
                    *
                  </p>
                  <label className={styles["label"]}>Full Name</label>
                  <input
                    className={styles["input"]}
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    autoComplete="off"
                    {...register("name")}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <p
                    className={styles["asterisk"]}
                    style={{
                      visibility: nullFields.current.email
                        ? "visible"
                        : "hidden",
                    }}
                  >
                    *
                  </p>
                  <label className={styles["label"]}>Email Address</label>
                  <input
                    className={styles["input"]}
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    autoComplete="off"
                    {...register("email", {
                      validate: (email) => {
                        return email.indexOf("@") >= 1;
                      },
                    })}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <p
                    className={styles["asterisk"]}
                    style={{
                      visibility: nullFields.current.subject
                        ? "visible"
                        : "hidden",
                    }}
                  >
                    *
                  </p>
                  <label className={styles["label"]}>Subject</label>
                  <input
                    className={styles["input"]}
                    type="subject"
                    name="subject"
                    placeholder="The Email Subject"
                    autoComplete="off"
                    {...register("subject")}
                  />
                </div>
                <div className={styles["form-group"]}>
                  <p
                    className={styles["asterisk"]}
                    style={{
                      visibility: nullFields.current.message
                        ? "visible"
                        : "hidden",
                    }}
                  >
                    *
                  </p>
                  <label className={styles["label"]}>Message</label>
                  <textarea
                    className={styles[("input", "textarea")]}
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    {...register("message")}
                  />
                </div>
                <div className={styles["submit"]}>
                  <button
                    className={styles["button"]}
                    type="submit"
                    value="Submit"
                    disabled={sendSuccessful}
                  >
                    {sendSuccessful ? "Sent" : "Send"}
                  </button>
                  <div
                    className={styles["confirm-message"]}
                    style={{
                      visibility:
                        sendSuccessful !== false ? "hidden" : "visible",
                    }}
                  >
                    <p>{serverErrorMessage}</p>
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
