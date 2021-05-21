import styles from "../../styles/component/Third.module.css";
import LeftFeaturedProject from "./LeftFeaturedProject";
import RightFeaturedProject from "./RightFeaturedProject";
import { defaultFirstProject, defaultSecondProject } from "../lib/defaults";
import React, { useState, useEffect } from "react";
import supabase from "../../pages/api/_base";

/**
 * @returns Component for the Third Section (Project Section) of the site
 */
export default function ThirdSection(props) {
  const [objUrl, setObjUrl] = useState("");
  const getBlobUrl = async () => {
    // Get image data
    try {
      const { data } = await supabase.storage
        .from("FeaturedProjectMedia")
        .download("projectImage2");
      const blobUrl = URL.createObjectURL(data);
      setObjUrl(blobUrl);
    } catch (err) {
      setObjUrl("/img/2020-08-09.png");
    }
  };

  var featuredProjectsArray = [];
  useEffect(() => {
    getBlobUrl();
  }, []);

  for (var i = 0; i < props.projectData.length; i++) {
    // Left Featured Project
    if (i % 2 == 0) {
      featuredProjectsArray.push(
        <LeftFeaturedProject
          title={props.projectData[i].project_name}
          descriptionParagraph={props.projectData[i].project_description}
          tech1={props.projectData[i].tech_one}
          tech2={props.projectData[i].tech_two}
          tech3={props.projectData[i].tech_three}
          tech4={props.projectData[i].tech_four}
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
          imageSrc={objUrl}
        />
      );
    } else {
      featuredProjectsArray.push(
        <RightFeaturedProject
          title={props.projectData[i].project_name}
          descriptionParagraph={props.projectData[i].project_description}
          tech1={props.projectData[i].tech_one}
          tech2={props.projectData[i].tech_two}
          tech3={props.projectData[i].tech_three}
          tech4={props.projectData[i].tech_four}
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
          imageSrc={objUrl}
        />
      );
    }
  }

  // Update the state when necessary
  // useEffect(() => {
  //   getBlobUrl();
  //   // Import project data from API call
  //   switch (props.projectData.length) {
  //     // There are no projects in the database
  //     case 0:
  //       props.projectData[0] = defaultFirstProject;
  //       props.projectData[1] = defaultSecondProject;
  //       break;

  //     // There is only 1 project in the database
  //     case 1:
  //       props.projectData[1] = defaultSecondProject;
  //       break;

  //     // Database is fully loaded
  //     case 2:
  //       // Add any extral logic for fully loaded database
  //       break;

  //     // Either something went wrong or I can't count
  //     default:
  //       console.warn("Error");
  //       console.warn(props.projectData);
  //       break;
  //   }
  // }, []);
  //TODO Handle logic if request sends empty string for a field
  return (
    <div className={styles[("section", "third-section")]}>
      <div className={styles["my-work"]}>
        {/* My Work */}
        <h2
          className={styles["section-header"]}
          id={styles["third-section-header"]}
        >
          My Work
        </h2>
        &lt;&gt;
        <br />
        <br />
        {featuredProjectsArray.map((fp) => {
          return <React.Fragment key={fp.props.title}>{fp}</React.Fragment>;
        })}
        {/* <LeftFeaturedProject
          title={props.projectData[0].project_name}
          descriptionParagraph={props.projectData[0].project_description}
          tech1={props.projectData[0].tech_one}
          tech2={props.projectData[0].tech_two}
          tech3={props.projectData[0].tech_three}
          tech4={props.projectData[0].tech_four}
          githubLink={
            props.projectData[0].github_link.indexOf("https://") == 0
              ? props.projectData[0].github_link
              : `https://${props.projectData[0].github_link}`
          }
          projectLink={
            props.projectData[0].project_link.indexOf("https://") == 0
              ? props.projectData[0].project_link
              : `https://${props.projectData[0].project_link}`
          }
          imageSrc={objUrl}
        />
        <RightFeaturedProject
          title={props.projectData[1].project_name}
          descriptionParagraph={props.projectData[1].project_description}
          tech1={props.projectData[1].tech_one}
          tech2={props.projectData[1].tech_two}
          tech3={props.projectData[1].tech_three}
          tech4={props.projectData[1].tech_four}
          githubLink={
            props.projectData[1].github_link.indexOf("https://") == 0
              ? props.projectData[1].github_link
              : `https://${props.projectData[1].github_link}`
          }
          projectLink={
            props.projectData[1].project_link.indexOf("https://") == 0
              ? props.projectData[1].project_link
              : `https://${props.projectData[1].project_link}`
          }
          imageSrc={"/img/2020-08-09.png"}
        /> */}
        <br />
        <br />
        &lt;/&gt;
      </div>
    </div>
  );
}
