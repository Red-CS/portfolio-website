import Image from "next/image";
import styles from "@styles/Footer.module.css";

const Footer = () => (
  <div className={styles["footer"]}>
    <div className={styles["stay-connected"]}>
      {/* Stay Connected */}
      <h2>Stay Connected</h2>
      <div className={styles["socials-bottom"]}>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/red-williams-6a0a181b6"
              rel="noreferrer"
            >
              <Image
                src="/img/fa_linkedin.svg"
                width="40"
                height="40"
                className={styles[("fa", "fa-linkedin")]}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/Red-CS"
              rel="noreferrer"
            >
              <Image
                src="/img/fa_github.svg"
                width="40"
                height="40"
                className={styles[("fa", "fa-github")]}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.twitter/01_CodeRed"
              rel="noreferrer"
            >
              <Image
                src="/img/fa_twitter.svg"
                width="40"
                height="40"
                className={styles[("fa", "fa-twitter")]}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/@01_codered"
              rel="noreferrer"
            >
              <Image
                src="/img/fa_instagram.svg"
                width="40"
                height="40"
                className={styles[("fa", "fa-instagram")]}
              />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="mailto:red.devcs@gmail.com"
              rel="noreferrer"
            >
              <Image
                src="/img/fa_email.svg"
                width="40"
                height="40"
                className={styles[("fa", "fa-mail")]}
              />
            </a>
          </li>
        </ul>
      </div>
      <h3>It's not coding, it's problem solving</h3>
    </div>
  </div>
);

export default Footer;
