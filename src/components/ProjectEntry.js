import styles from "@styles/ProjectEntry.module.css";
import GithubFeather from "@components/svg/GithubFeather";
import ProjectFeather from "@components/svg/ProjectFeather";
import FolderIcon from "@components/svg/FolderIcon";

export default function ProjectEntry(props) {
  return (
    <li className={styles["project-elem"]}>
      <div className={styles["project-top"]}>
        <span className={styles["span-left"]}>
          <FolderIcon color="var(--color-gray)" />
        </span>
        <span className={styles["span-right"]}>
          <a
            href={
              props.github_link.indexOf("https://") === 0
                ? props.github_link
                : `https://${props.github_link}`
            }
            style={{ display: props.github_link === "" ? "none" : "inline" }}
          >
            <GithubFeather color="var(--color-gray)" />
          </a>
          <a
            href={
              props.project_link.indexOf("https://") === 0
                ? props.project_link
                : `https://${props.project_link}`
            }
            style={{ display: props.project_link === "" ? "none" : "inline" }}
          >
            <ProjectFeather color="var(--color-gray)" />
          </a>
        </span>
      </div>
      <h3 className={styles["card-name"]}>
        {props.title ? props.title : "Lorem ipsum dolor sit amet"}
      </h3>
      <p className={styles["card-desc"]}>
        {props.desc ? props.desc : "Lorem ipsum dolor sit amet"}
      </p>
    </li>
  );
}
