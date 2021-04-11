import styles from "../../styles/component/Third.module.css";
import LeftFeaturedProject from "./LeftFeaturedProject";
import RightFeaturedProject from "./RightFeaturedProject";
const ThirdSection = () => (
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
            <br/>
            <br/>
            &lt;/&gt;
        </div>
   </div>
);

export default ThirdSection;