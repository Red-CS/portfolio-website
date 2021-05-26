import styles from "@styles/ProjectEntry.module.css";
import GithubFeather from "@components/svg/GithubFeather";
import ProjectFeather from "@components/svg/ProjectFeather";
import FolderIcon from "@components/svg/FolderIcon";
import TechList from "@components/TechList";

export default function ProjectEntry(props) {
  return (
    <li className={styles["project-entry"]}>
      <div>
        <div className={styles["project-top"]}>
          <span className={styles["span-left"]}>
            <FolderIcon color="var(--color-gray)" />
          </span>
          <span className={styles["span-right"]}>
            <a
              href={
                props.githubLink.indexOf("https://") === 0
                  ? props.githubLink
                  : `https://${props.githubLink}`
              }
              style={{ display: props.githubLink === "" ? "none" : "inline" }}
            >
              <GithubFeather color="var(--color-gray)" />
            </a>
            <a
              href={
                props.projectLink.indexOf("https://") === 0
                  ? props.projectLink
                  : `https://${props.projectLink}`
              }
              style={{ display: props.projectLink === "" ? "none" : "inline" }}
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
      </div>
      <TechList
        tech_list_array={props.techList}
        color="var(--color-gray-lighter)"
        justify="left"
      />
    </li>
  );
}
