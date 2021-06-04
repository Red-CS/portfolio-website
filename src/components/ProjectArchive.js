import ProjectEntry from "./ProjectEntry";
import styles from "@styles/ProjectArchive.module.css";
import { Fragment } from "react";

export default function ProjectArchive(props) {
  var projectDataArray = [];

  for (var i = 0; i < props.projectData.length; i++) {
    projectDataArray.push(
      <ProjectEntry
        title={props.projectData[i].project_name}
        desc={props.projectData[i].project_description}
        techList={props.projectData[i].tech_list}
        githubLink={
          // Return an empty string if github_link is undefined
          props.projectData[i].github_link
            ? props.projectData[i].github_link
            : ""
        }
        projectLink={
          // Return an empty string if project_link is undefined
          props.projectData[i].project_link
            ? props.projectData[i].project_link
            : ""
        }
      />
    );
  }

  return (
    <div className={styles["archive-container"]}>
      <header className={styles["header"]}>
        <h2 className={styles["archive-title"]}>Repository Archive</h2>
        <p className={styles["archive-desc"]}>
          A running list of some of my projects
        </p>
      </header>
      <span style={{ fontSize: "15px", fontFamily: "SF Mono Light" }}>
        &lt;table class="software-archive"&gt;
      </span>
      <ul className={styles["archive-ul"]}>
        {projectDataArray.map((project) => {
          return <Fragment key={project.props.title}>{project}</Fragment>;
        })}
      </ul>
      <span style={{ fontSize: "15px", fontFamily: "SF Mono Light" }}>
        &lt;/table&gt;
      </span>
    </div>
  );
}
