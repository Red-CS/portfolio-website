import styles from "@styles/FeaturedProject.module.css";
import ProjectImage from "./ProjectImage";
import GithubFeather from "@components/svg/GithubFeather";
import ProjectFeather from "@components/svg/ProjectFeather";

export default function FeaturedProject(props) {
  return (
    <div className={styles["featured-project"]}>
      <div className={styles["project-content"]}>
        <p className={styles["project-overline"]}>Featured Project</p>
        <h3 className={styles["project-title"]}>{props.title}</h3>
        <div className={styles["project-description"]}>
          <p>{props.descriptionParagraph}</p>
        </div>
        <ul className={styles["tech-list"]}>
          {props.techList.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
        <div className={styles["project-links"]}>
          <a target="_blank" href={props.githubLink} rel="noreferrer">
            <GithubFeather color="var(--color-black-lighter)" />
          </a>
          <a target="_blank" href={props.projectLink} rel="noreferrer">
            <ProjectFeather color="var(--color-black-lighter)" />
          </a>
        </div>
      </div>
      <div className={styles["project-image"]}>
        <a target="_blank" href={props.projectLink} rel="noreferrer">
          <div className={styles["image-container"]}>
            <div className={styles["image-wrapper"]} aria-hidden="true" />
            <ProjectImage imageSrc={props.title} />
          </div>
        </a>
      </div>
    </div>
  );
}
