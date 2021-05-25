import ProjectEntry from "./ProjectEntry";
import styles from "@styles/ProjectArchive.module.css";

export default function ProjectArchive() {
  return (
    <div className={styles["archive-container"]}>
      <header className={styles["header"]}>
        <h2 className={styles["archive-title"]}>Repository Archive</h2>
        <p className={styles["archive-desc"]}>
          A running list of some of my projects
        </p>
      </header>
      <ul className={styles["archive-ul"]}>
        <ProjectEntry
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit cum
        consectetur ea labore hic nemo corporis corrupti a! Saepe repudiandae et
        optio veniam fugit dignissimos deleniti."
        />
        <ProjectEntry />
        <ProjectEntry />
        <ProjectEntry />
        <ProjectEntry />
        <ProjectEntry />
        <ProjectEntry />
        <ProjectEntry />
      </ul>
    </div>
  );
}
