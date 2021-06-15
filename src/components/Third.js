import styles from "@styles/Third.module.css";
import { Fragment } from "react";
import LeftFeaturedProject from "./LeftFeaturedProject";
import RightFeaturedProject from "./RightFeaturedProject";

/**
 * @returns Component for the Third Section (Project Section) of the site
 */
export default function ThirdSection(props) {
  var featuredProjectsArray = [];

  for (var i = 0; i < props.projectData.length; i++) {
    if (i % 2 == 0) {
      featuredProjectsArray.push(
        <LeftFeaturedProject
          title={props.projectData[i].project_name}
          descriptionParagraph={props.projectData[i].project_description}
          techList={props.projectData[i].tech_list}
          githubLink={
            props.projectData[i].github_link.indexOf("https://") == 0
              ? props.projectData[i].github_link
              : `https://${props.projectData[i].github_link}`
          }
          projectLink={
            props.projectData[i].project_link.indexOf("https://") == 0
              ? props.projectData[i].project_link
              : `https://${props.projectData[i].project_link}`
          }
        />
      );
    } else {
      featuredProjectsArray.push(
        <RightFeaturedProject
          title={props.projectData[i].project_name}
          descriptionParagraph={props.projectData[i].project_description}
          techList={props.projectData[i].tech_list}
          githubLink={
            props.projectData[i].github_link.indexOf("https://") == 0
              ? props.projectData[i].github_link
              : `https://${props.projectData[i].github_link}`
          }
          projectLink={
            props.projectData[i].project_link.indexOf("https://") == 0
              ? props.projectData[i].project_link
              : `https://${props.projectData[i].project_link}`
          }
        />
      );
    }
  }

  //TODO Handle logic if request sends empty string for a field
  return (
    <div className={styles[("section", "third-section")]}>
      <div className={styles["my-work"]}>
        <h2
          className={styles["section-header"]}
          id={styles["third-section-header"]}
        >
          My Work
        </h2>
        <span className="section-tag">
          &lt;ul class="noteworthy-projects"&gt;
        </span>
        <br />
        <br />
        <div className={styles["featured-projects"]}>
          {featuredProjectsArray.map((fp) => {
            return <Fragment key={fp.props.title}>{fp}</Fragment>;
          })}
        </div>
        <br />
        <br />
        <span className="section-tag">&lt;/ul&gt;</span>
      </div>
    </div>
  );
}
