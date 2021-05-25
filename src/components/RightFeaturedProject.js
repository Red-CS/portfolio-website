import styles from "@styles/RightFeaturedProject.module.css";
import ProjectImage from "./ProjectImage";
import GithubFeather from "@components/svg/GithubFeather";
import ProjectFeather from "@components/svg/ProjectFeather";

const RightFeaturedProject = (props) => (
  <div className={styles["featured-project"]}>
    <div className={styles["project-content"]}>
      <p className={styles["project-overline"]}>Featured Project</p>
      <h3 className={styles["project-title"]}>{props.title}</h3>
      <div className={styles["project-description"]}>
        <p className={styles["project-description-paragraph"]}>
          {props.descriptionParagraph}
        </p>
      </div>
      <ul className={styles["project-tech-list"]}>
        <li>{props.tech1}</li>
        <li>{props.tech2}</li>
        <li>{props.tech3}</li>
        <li>{props.tech4}</li>
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

export default RightFeaturedProject;
