import styles from "../../styles/component/Third.module.css";
import LeftFeaturedProject from "./LeftFeaturedProject";
import RightFeaturedProject from "./RightFeaturedProject";
import { useState } from "react";

// Start of Prisma integration
import { PrismaClient } from "@prisma/client";

export async function getServerSideProps() {
    const prisma = new PrismaClient();
    const featuredProject = prisma.featuredProject.findMany();
    return {
        props: {
            defaultProject : featuredProject
        }
    };
}

async function saveFeaturedProject(project) {
    const response = await fetch("/api/featured-project", {
        method: "POST",
        body: JSON.stringify(project)
    })

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
}


const featuredProjects = fetch("/api/featured-project", {
    method: "GET"
})
.then((response) => {
    return response.json()
})
.then((data) => {
    return data;
});

// if (!response.ok) {
//     throw new Error(response.statusText);
// }

// return response;

// const showProject = () => {
//     featuredProjects.then((a) => {
//         console.log(a["projects"][0].project_name);
//         return a["projects"][0].project_name;
//     })
// }

// const showProject = async () => {
//     const a = await featuredProjects;
//     console.log(a["projects"][0].project_name);
//     return a["projects"][0].project_name;
// }

export default function ThirdSection() {
    const [projectName, setProjectName] = useState("Default Project");
    const [projectDesc, setProjectDesc] = useState("Default Description");
    const [projectTech1, setProjectTech1] = useState("Default Tech1");
    const [projectTech2, setProjectTech2] = useState("Default Tech2");
    const [projectGithub, setProjectGithub] = useState("www.defaultGithubLink.com");
    const [projectProject, setProjectProject] = useState("www.defaultProjectLink.com");
    featuredProjects.then(data => {
        console.log(data)
        setProjectName(data["projects"][0].project_name);
        setProjectDesc(data["projects"][0].project_description);
        setProjectTech1(data["projects"][0].tech_one);
        setProjectTech2(data["projects"][0].tech_two);
        setProjectGithub(data["projects"][0].github_link);
        setProjectProject(data["projects"][0].project_link);
    });
    return (
    <div className={styles["section", "third-section"]}>
        <div className={styles["my-work"]}>
            {/* My Work */}
            <h2 className={styles["section-header"]} id={styles["third-section-header"]}>My Work</h2>
            &lt;&gt;
            <br/>
            <br/>
            <LeftFeaturedProject 
                title={"Project Title"} 
                descriptionParagraph={`Lorem ipsum dolor sit amet.
                    Ad placeat perferendis perspiciatis vitae.
                    Consequuntur, neque? Suscipit, laboriosam itaque.
                    Praesentium nemo temporibus magni sunt!
                    Eligendi illum sed ipsam aperiam.`}
                tech1={"Python"}
                tech2={"Github API"}
                tech3={"Batch"}
                imageSrc={"/img/2020-08-09.png"}
            />
            <RightFeaturedProject 
                title={"Second Project"} 
                descriptionParagraph={`Lorem ipsum dolor sit amet.
                    Ad placeat perferendis perspiciatis vitae.
                    Consequuntur, neque? Suscipit, laboriosam itaque.
                    Praesentium nemo temporibus magni sunt!
                    Eligendi illum sed ipsam aperiam.`}
                tech1={"AWS"}
                tech2={"Python"}
                imageSrc={"/img/2020-08-09.png"}
            />
            <LeftFeaturedProject 
                title={projectName}
                descriptionParagraph={projectDesc}
                tech1={projectTech1}
                tech2={projectTech2}
                tech3={"No Data"}
                imageSrc={"/img/2020-08-09.png"}
                githubLink={projectGithub}
                projectLink={projectProject}
            />
            <br/>
            <br/>
            &lt;/&gt;
        </div>
   </div>
    );
}

// export default ThirdSection;