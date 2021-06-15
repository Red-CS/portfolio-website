import styles from "@styles/Fourth.module.css";
import VentureListObject from "./VentureListObject";

const FourthSection = () => (
  <div className={styles[("section", "fourth-section")]}>
    <div className={styles["future-ventures"]}>
      <h2
        className={styles["section-header"]}
        id={styles["fourth-section-header"]}
      >
        Future Ventures
      </h2>
      <h3 className={styles["section-underline"]}>
        Areas in tech I plan to pursure
      </h3>
      <span className="section-tag">&lt;ul class="next-up"&gt;</span>
      <br />
      <br />
      <div className={styles["categories"]}>
        <VentureListObject
          ventureName="Programming"
          listItem1="Low Level Programming"
          listItem2="Machine Learning"
          listItem3='Coding "Best Practices"'
        />

        <VentureListObject
          ventureName="Software Development"
          listItem1="Javascript Frameworks"
          listItem2="Typescript"
          listItem3="UX/UI Design and Prototyping"
          listItem4="SVG Animation"
        />

        <VentureListObject
          ventureName="Electronics"
          listItem1="Microcontrollers (Arduino)"
          listItem2="Circuitry"
          listItem3="Raspberry Pi"
        />
      </div>
      <br />
      <br />
      <span className="section-tag">&lt;/ul&gt;</span>
    </div>
  </div>
);

export default FourthSection;
