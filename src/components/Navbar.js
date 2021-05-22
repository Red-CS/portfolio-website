import Link from "next/link";
import Menu from "./Menu";
import styles from "@styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div
        className={`${styles.logo} ${styles["fade-enter-done"]}`}
        tabIndex="-1"
      >
        <a href="/" aria-label="home" className={styles.link}>
          Red Williams
        </a>
      </div>
      <div className={styles.navLinks}>
        <ol>
          <li
            className={styles["facedown-enter-done"]}
            style={{ transitionDelay: "0ms" }}
          >
            <a href="/resume.pdf" target="_blank" className={styles.link}>
              Resume
            </a>
          </li>
          <li
            className={styles["facedown-enter-done"]}
            style={{ transitionDelay: "100ms" }}
          >
            <Link href="/projects">
              <a className={styles.link}>Projects</a>
            </Link>
          </li>
          <li
            className={styles["facedown-enter-done"]}
            style={{ transitionDelay: "200ms" }}
          >
            <Link href="/contact">
              <a className={styles.link}>Contact</a>
            </Link>
          </li>
          <li
            className={styles["facedown-enter-done"]}
            style={{ transitionDelay: "300ms" }}
          >
            <Link href="/TBD">
              <a className={styles.link}>TBD</a>
            </Link>
          </li>
        </ol>
      </div>
      <Menu />
    </nav>
  );
};

export default Navbar;
