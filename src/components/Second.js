import styles from "@styles/Second.module.css";

const SecondSection = () => (
  <div className={styles[("section", "second-section")]}>
    <div className={styles["about-me"]}>
      <h2 className={styles[("section-header", "sh-about-me")]}>About Me</h2>
      <span style={{ fontSize: "15px", fontFamily: "SF Mono Light" }}>
        &lt;p class="about-me"&gt;
      </span>
      <p id={styles["about-me-content"]}>
        <br />
        <br />
        Hey there! I am a first-year student at{" "}
        <a className={styles["link-hover"]} href="https://www.vt.edu/">
          Virginia Tech
        </a>{" "}
        studying under the college of General Engineering. I have been
        interested in computers all my life, and started learning computer
        programming in high school. Actually, I wrote some of my first programs
        on my Ti-84 Plus CE calculator to help me with some of my schoolwork! My
        first real language was Java, but since then I have worked with Python,
        Javascript, HTML and CSS. I hope to learn more about computer science
        and professionalism in technology.
        <br />
        <br />
        When I'm not coding or studying, I love to longboard! In particular,
        longboard dancing and freestyle. I also love to practice quads! I was an
        avid member of both Marching Band and Indoor Drumline throughout my
        percussion career, where I served as Tenor Section Leader my during
        final season. When I'm not doing any of that, I enjoy playing videogames
        as a pastime.
        <br />
        <br />
      </p>
      <span style={{ fontSize: "15px", fontFamily: "SF Mono Light" }}>
        &lt;/p&gt;
      </span>
    </div>
  </div>
);

export default SecondSection;
