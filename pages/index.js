// Next Modules
import Head from 'next/head'

// Components
import Header from "../src/components/Header"
import Home from "../src/components/Home"
import Second from "../src/components/Second"
import Third from "../src/components/Third"
import Fourth from "../src/components/Fourth"
import Footer from "../src/components/Footer"

// CSS
import styles from '../styles/page/Main.module.css'

// Runs on every request to the server
export async function getServerSideProps() {
  // TODO: Get url from getStaticProps, and pass it into getServerSideProps
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

  // Fetch project data
  const featuredProjects = await fetch(`${url}/api/featured-project`, {
    method: "GET",
  });

  const projectInfo = await featuredProjects.json();

  // Data to send as props
  const data = {
    url: url,
    projectData: projectInfo.projects
  };
  return { props: { data } };
}

export default function Main({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="UTF-8" />

        <title>Red Williams - First-Year General Engineering Student</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Red Williams, Engineering/Computer Science student based in Blacksburg, Virginia" />
        <meta name="keywords" content="Red Williams,CS,Computer Science,Virginia Tech,Java,Python,HTML,JavaScript, web developer" />
        <meta name="author" content="Red Williams" />
        <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <Header />
        <Home />
        <Second />
        <Third url={data.url} projectData={data.projectData} />
        <Fourth />
        <Footer />
      </main>
    </div>
  )
};