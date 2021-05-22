import styles from "@styles/Home.module.css";
// import Head from 'next/head'
export default function Home() {
  return (
    <div className={styles.mainSection}>
      <div className={styles.header}>
        <h1 className={styles.headerName}>
          Red
          <br />
          Williams
        </h1>
        <h3 className={styles.headerDescription}>
          <span>
            Exploring Computer Science and solving problems through logic and
            code. Engineering student in Blacksburg, Virginia.
          </span>
        </h3>
      </div>
    </div>
  );
}
