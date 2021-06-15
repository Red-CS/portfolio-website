// Next Modules
import Head from "next/head";

// Components
import Header from "@components/Header";
import ProjectArchive from "@components/ProjectArchive";
import Footer from "@components/Footer";
import { createClient } from "@supabase/supabase-js";

// Styles
import styles from "@styles/../page/Projects.module.css";

export async function getStaticProps() {
  // Preview Deployments
  var url = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  // Production
  if (process.env.NEXT_PUBLIC_VERCEL_ENV == "production") {
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

  // Fetch all project data
  const { data } = await supabase
    .from(process.env.FEATURED_PROJECT)
    .select("*");

  // Data to send as props
  return { props: { passed: { url: url, projectData: data } }, revalidate: 60 };
}

export default function Projects({ passed }) {
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
        <ProjectArchive url={passed.url} projectData={passed.projectData} />
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
          <ul>
            {/* 
            Main List here
            */}
          </ul>
          <span className="section-tag">&lt;/table&gt;</span>
        </div>
        <Footer />
      </main>
    </div>
  );
}
