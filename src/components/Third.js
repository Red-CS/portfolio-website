import styles from "../../styles/component/Third.module.css";
import LeftFeaturedProject from "./LeftFeaturedProject";
import RightFeaturedProject from "./RightFeaturedProject";
import { useState, useEffect } from "react";

// Start of Prisma integration
import { PrismaClient } from "@prisma/client";

// export async function getServerSideProps() {
//     const prisma = new PrismaClient();
//     const featuredProject = prisma.featuredProject.findMany();
//     return {
//         props: {
//             defaultProject : featuredProject
//         }
//     };
// }

/**
 * Fetches the objects in FeaturedProject table and returns the Promise.
 */
const featuredProjects = fetch("http://localhost:3000/api/featured-project", {
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

export default function ThirdSection() {
    const [characterObject, setCharacterObject] = useState({
        projects: [
        {
            project_name: "Default Name",
            project_description: 'Default Description',
            tech_one: 'Tech 1',
            tech_two: 'Tech 2',
            tech_three: 'Tech 3',
            tech_four: 'Tech 4',
            github_link: 'https://www.github.com/Red-CS',
            project_link: 'https://www.github.com/Red-CS'
        }
    ]
    })

    // Update
    useEffect(() => 
        featuredProjects.then(data => {
            console.log(data)
            setCharacterObject(data)
    })
    .catch(error => {
        console.log(error);
    }), [characterObject]);

    console.log("Character Object:")
    console.log(characterObject)
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
                title={characterObject["projects"][0].project_name} 
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
            <br/>
            <br/>
            &lt;/&gt;
        </div>
   </div>
    );
}

// export default ThirdSection;