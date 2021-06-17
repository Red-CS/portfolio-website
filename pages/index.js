// Next Modules
import Head from "next/head";

// Components
import Header from "@components/Header";
import Home from "@components/Home";
import Second from "@components/Second";
import Third from "@components/Third";
import Fourth from "@components/Fourth";
import Footer from "@components/Footer";
import FeaturedProject from "@components/FeaturedProject";
import VentureListObject from "@components/VentureListObject";

// Styles
import styles from "@styles/../pages/Index.module.css";

// Supabase Client
import { createClient } from "@supabase/supabase-js";

/*
NOTE - As I understand it, the flow is this:
  - Whenever someone access the website, the code is compiled
*/
export async function getStaticProps() {
  // Preview Deployments
  var url = `https://${process.env.VERCEL_URL}`;

  // Production
  if (process.env.VERCEL_ENV == "production") {
    url = "https://www.redwilliams.dev";
  }

  // Development
  else if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000";
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  // Get featured projects from database
  const { data } = await supabase
    .from(process.env.FEATURED_PROJECT)
    .select("*")
    .match({ featured: true });

  return {
    props: {
      passed: { url: url, projectData: data },
      revalidate: 60,
    },
  };
}

export default function Main({ passed }) {
  return (
    <div>
      <Head>
        <title>Red Williams - First-Year General Engineering Student</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Red Williams, Engineering/Computer Science student based in Blacksburg, Virginia"
        />
        <meta
          name="keywords"
          content="Red Williams,CS,Computer Science,Virginia Tech,Java,Python,HTML,JavaScript, web developer"
        />
        <meta name="author" content="Red Williams" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <Header />

        {/* --------------------------- Main Section / Hero -------------------------- */}
        <div className={styles["main-section"]}>
          <div className={styles["main-section-content"]}>
            <h1 className={styles["main-section-name"]}>
              Red
              <br />
              Williams
            </h1>
            <h3 className={styles["main-section-description"]}>
              <span>Computer Science and Engineering</span>
            </h3>
          </div>
        </div>

        {/* ------------------------ Second Section / About Me ----------------------- */}
        {/* <Second /> */}
        <div className={styles[("section", "second-section")]}>
          <div className={styles[("about-me", "section-content")]}>
            <h2 className={styles["section-header"]}>About Me</h2>
            <span className="section-tag">&lt;p class="about-me"&gt;</span>
            <p>
              <br />
              <br />
              Hey there! I am a first-year student at{" "}
              <a className={styles["link-hover"]} href="https://www.vt.edu/">
                Virginia Tech
              </a>{" "}
              studying under the college of General Engineering. I have been
              interested in computers all my life, and started learning computer
              programming in high school. Actually, I wrote some of my first
              programs on my Ti-84 Plus CE calculator to help me with some of my
              schoolwork! My first real language was Java, but since then I have
              worked with Python, Javascript, HTML and CSS. I hope to learn more
              about computer science and professionalism in technology.
              <br />
              <br />
              When I'm not coding or studying, I love to longboard! In
              particular, longboard dancing and freestyle. I also love to
              practice quads! I was an avid member of both Marching Band and
              Indoor Drumline throughout my percussion career, where I served as
              Tenor Section Leader my during final season. When I'm not doing
              any of that, I enjoy playing videogames as a pastime.
              <br />
              <br />
            </p>
            <span className="section-tag">&lt;/p&gt;</span>
          </div>
        </div>

        {/* -------------------- Third Section / Featured Projects ------------------- */}
        {/* <Third url={passed.url} projectData={passed.projectData} /> */}
        <div className={styles[("section", "third-section")]}>
          <div className={styles["my-work"]}>
            <h2 className={styles["section-header"]}>My Work</h2>
            <span className="section-tag">
              &lt;ul class="noteworthy-projects"&gt;
            </span>
            <div className={styles["featured-projects"]}>
              {passed.projectData.map((project, index) => {
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

        {/* -------------------- Fourth Section / Future Ventures -------------------- */}
        {/* <Fourth /> */}
        <div className={styles[("section", "fourth-section")]}>
          <div className={styles["future-ventures"]}>
            <h2
              className={styles["section-header"]}
              id={styles["fourth-section-header"]}
            >
              Future Ventures
            </h2>
            <span className="section-tag">&lt;ul class="next-up"&gt;</span>
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
            <span className="section-tag">&lt;/ul&gt;</span>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
