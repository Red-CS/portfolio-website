// Next Modules
import Head from "next/head";

// Components
import Header from "@components/Header";
import ProjectEntry from "@components/ProjectEntry";
import Footer from "@components/Footer";

// Database
import { createClient } from "@supabase/supabase-js";

// Styles
import styles from "@styles/../pages/Projects.module.css";

export async function getStaticProps() {
  // Instantiate Client
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  // Fetch all project data
  const { data } = await supabase
    .from(process.env.FEATURED_PROJECT)
    .select("*");

  // Data to pass as props
  return { props: { projectData: data }, revalidate: 60 };
}

/**
 * Projects Page
 * @param {Array<object>} projectData
 * @returns Project Page of the Website
 */
export default function Projects({ projectData }) {
  return (
    <div>
      <Head>
        <title>Projects | Red Williams</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Red Williams, Engineering/Computer Science student based in Blacksburg, Virginia"
        />
        <meta
          name="keywords"
          content="Red Williams,CS,Computer Science,Virginia Tech,Java,Python,HTML,JavaScript,Web Developer"
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
        <div className={styles["archive-container"]}>
          <header className={styles["project-header"]}>
            <h2 className={styles["archive-title"]}>Repository Archive</h2>
            <p className={styles["archive-desc"]}>
              A running list of some of my projects
            </p>
          </header>
          <span className="section-tag">
            &lt;table class="software-archive"&gt;
          </span>
          <ul className={styles["archive-ul"]}>
            {projectData.map((project, index) => {
              return (
                <ProjectEntry
                  title={project.project_name}
                  desc={project.project_description}
                  techList={project.tech_list}
                  githubLink={
                    // Return an empty string if github_link is undefined
                    project.github_link ? project.github_link : ""
                  }
                  projectLink={
                    // Return an empty string if github_link is undefined
                    project.project_link ? project.project_link : ""
                  }
                  key={index}
                />
              );
            })}
          </ul>
          <span className="section-tag">&lt;/table&gt;</span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
