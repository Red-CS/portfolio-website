import styles from "@styles/RightFeaturedProject.module.css";
import ProjectImage from "./ProjectImage";

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
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#191919"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles[("feather", "feather-github")]}
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a target="_blank" href={props.projectLink} rel="noreferrer">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#191919"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles[("feather", "feather-external-link")]}
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
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
