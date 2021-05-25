import styles from "@styles/ProjectEntry.module.css";

export default function ProjectEntry(props) {
  console.log(props);
  return (
    <li className={styles["project-elem"]}>
      <h3 className={styles["card-name"]}>
        {props.title ? props.title : "Lorem ipsum dolor sit amet"}
      </h3>
      <p className={styles["card-desc"]}>
        {props.desc ? props.desc : "Lorem ipsum dolor sit amet"}
      </p>
    </li>
  );
}
