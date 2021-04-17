import styles from "../../styles/component/Third.module.css";
import LeftFeaturedProject from "./LeftFeaturedProject";
import RightFeaturedProject from "./RightFeaturedProject";
import { useState, useEffect } from "react";

/**
 * Fetches the objects in FeaturedProject table and returns the Promise.
 */
// TODO: Change fetch url to https://redwilliams.dev/api/featured-project upon pushing
const url = process.env.NODE_ENV === "development" ? "http://localhost:3000" : `https://${process.env.VERCEL_URL}`;
console.log(url);
const featuredProjects = fetch(`${url}/api/featured-project`, {
    method: "GET"
})
.then((response) => {
    if (!response.ok) {
        return Promise.reject(response);
    }
    return response.json();
})
.then((data) => {
    return data;
})
.catch((error) => {
    console.log("Error in retrieving FeaturedProjects");
    console.log(error);
});

const defaultFirstProject = {
    project_name: "Default Name",
    project_description: 'Default Description',
    tech_one: 'Tech 1',
    tech_two: 'Tech 2',
    tech_three: 'Tech 3',
    tech_four: 'Tech 4',
    github_link: 'https://www.github.com/Red-CS',
    project_link: 'https://www.github.com/Red-CS'
}

const defaultSecondProject = {
    project_name: "Default Name 2",
    project_description: 'Default Description 2',
    tech_one: 'Tech 1',
    tech_two: 'Tech 2',
    tech_three: 'Tech 3',
    tech_four: 'Tech 4',
    github_link: 'https://www.github.com/Red-CS',
    project_link: 'https://www.github.com/Red-CS'
}


export default function ThirdSection() {
    /* const url = process.env.NODE_ENV === "development" 
    ? process.env.SERVER_URI : `https://${process.env.VERCEL_URL}`;
    */
    // console.log(process.env.NODE_ENV) // == 'development
    const [characterObject, setCharacterObject] = useState({
        projects: [
            defaultFirstProject,
            defaultSecondProject
        ]
    });

    // Update
    useEffect(() => 
    featuredProjects.then(data => {
            switch(data["projects"].length) {

                // There are no projects in the database
                case 0:
                    setCharacterObject({
                        projects: [
                            defaultFirstProject,
                            defaultSecondProject
                        ]
                    })
                    break;
                
                // There is only 1 project in the database
                case 1:
                    setCharacterObject({
                        projects: [
                            data["projects"][0],
                            defaultFirstProject
                        ]
                    })
                    break;

                // Database is fully loaded
                case 2:
                    setCharacterObject({ 
                        projects: [
                            data["projects"][0],
                            data["projects"][1]
                        ]
                    });
                    break;

                // Either something went wrong or I can't count
                default:
                    console.warn("Error");
                    console.warn(data);
                    break;
            }
        })
        .catch(error => {
        console.log(error);
    }), []);
    console.log(characterObject["projects"][0].project_link)
    //TODO Handle logic if request sends empty string for a field
    return (
    <div className={styles["section", "third-section"]}>
        <div className={styles["my-work"]}>
            {/* My Work */}
            <h2 className={styles["section-header"]} id={styles["third-section-header"]}>My Work</h2>
            &lt;&gt;
            <br/>
            <br/>
            <LeftFeaturedProject 
                title={characterObject["projects"][0].project_name} 
                descriptionParagraph={characterObject["projects"][0].project_description}
                tech1={characterObject["projects"][0].tech_one}
                tech2={characterObject["projects"][0].tech_two}
                tech3={characterObject["projects"][0].tech_three}
                tech4={characterObject["projects"][0].tech_four}
                githubLink={characterObject["projects"][0].github_link.indexOf("https://") == 0 
                    ? characterObject["projects"][0].github_link 
                    : `https://${characterObject["projects"][0].github_link}`}
                projectLink={characterObject["projects"][0].project_link.indexOf("https://") == 0 
                    ? characterObject["projects"][0].project_link 
                    : `https://${characterObject["projects"][0].project_link}`}
                imageSrc={"/img/2020-08-09.png"}
            />
            <RightFeaturedProject 
                title={characterObject["projects"][1].project_name} 
                descriptionParagraph={characterObject["projects"][1].project_description}
                tech1={characterObject["projects"][1].tech_one}
                tech2={characterObject["projects"][1].tech_two}
                tech3={characterObject["projects"][1].tech_three}
                tech4={characterObject["projects"][1].tech_four}
                githubLink={characterObject["projects"][1].github_link.indexOf("https://") == 0 
                    ? characterObject["projects"][1].github_link 
                    : `https://${characterObject["projects"][1].github_link}`}
                projectLink={characterObject["projects"][1].project_link.indexOf("https://") == 0 
                    ? characterObject["projects"][1].project_link 
                    : `https://${characterObject["projects"][1].project_link}`}
                imageSrc={"/img/2020-08-09.png"}
            />
            <br/>
            <br/>
            &lt;/&gt;
        </div>
   </div>
    );
}

// export default ThirdSection;