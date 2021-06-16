import styles from "@styles/Third.module.css";
import FeaturedProject from "./FeaturedProject";

/**
 * @returns Component for the Third Section (Project Section) of the site
 */
export default function ThirdSection(props) {
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
        <div className={styles["featured-projects"]}>
          {props.projectData.map((project, index) => {
            return (
              <FeaturedProject
                title={project.project_name}
                descriptionParagraph={project.project_description}
                techList={project.tech_list}
                githubLink={
                  project.github_link.indexOf("https://") == 0
                    ? project.github_link
                    : `https://${project.github_link}`
                }
                projectLink={
                  project.project_link.indexOf("https://") == 0
                    ? project.project_link
                    : `https://${project.project_link}`
                }
                key={index}
              />
            );
          })}
        </div>
        <span className="section-tag">&lt;/ul&gt;</span>
      </div>
    </div>
  );
}
