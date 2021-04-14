import styles from "../../styles/component/Third.module.css";
import LeftFeaturedProject from "./LeftFeaturedProject";
import RightFeaturedProject from "./RightFeaturedProject";
import { useState, useEffect } from "react";

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


export default function ThirdSection() {
    const [characterObject, setCharacterObject] = useState({})
    useEffect(() => 
        featuredProjects.then(data => {
            console.log(data)
            setCharacterObject(data)
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