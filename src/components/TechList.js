import styles from "@styles/TechList.module.css";

export default function TechList(props) {
  return (
    <ul className={styles["tech-list"]}>
      {props.tech_list_array.map((tech) => {
        return <li key={tech}>{tech}</li>;
      })}
    </ul>
  );
}
