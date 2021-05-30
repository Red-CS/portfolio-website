import styles from "@styles/LeftFeaturedProject.module.css";
import ProjectImage from "./ProjectImage";
import GithubFeather from "@components/svg/GithubFeather";
import ProjectFeather from "@components/svg/ProjectFeather";
import TechList from "@components/TechList";

const LeftFeaturedProject = (props) => (
  <div className={styles["featured-project"]}>
    <div className={styles["project-content"]}>
      <p className={styles["project-overline"]}>Featured Project</p>
      <h3 className={styles["project-title"]}>{props.title}</h3>
      <div className={styles["project-description"]}>
        <p className={styles["project-description-paragraph"]}>
          {props.descriptionParagraph}
        </p>
      </div>
      <TechList color="var(--color-black)" tech_list_array={props.techList} />
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
          {/* <ProjectImage imageSrc={props.title} /> */}
          <img
            src={`data:${props.imageData.type};base64,${props.imageData.base64}`}
            alt="hgfd"
          />
        </div>
      </a>
    </div>
  </div>
);

export default LeftFeaturedProject;
