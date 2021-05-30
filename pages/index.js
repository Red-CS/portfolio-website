// Next Modules
import Head from "next/head";

// Components
import Header from "@components/Header";
import Home from "@components/Home";
import Second from "@components/Second";
import Third from "@components/Third";
import Fourth from "@components/Fourth";
import Footer from "@components/Footer";

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

  // Fetch project data
  // const featuredProjects = await fetch(`${url}/api/projects`, {
  //   method: "POST",
  //   body: JSON.stringify({ featured: true }),
  // });

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  // let d = (await supabase.storage
  //   .from("FeaturedProjectMedia")
  //   .download("Default Project")).data;

  // console.log(d);
  // const d = await data.arrayBuffer();
  // const b64 = Buffer.from(d).toString("base64");

  // Get featured projects from database
  const { data } = await supabase
    .from(process.env.FEATURED_PROJECT)
    .select("*")
    .match({ featured: true });

  var imageData = [];
  for (var i = 0; i < data.length; i++) {
    try {
      let imageBlob = (
        await supabase.storage
          .from("FeaturedProjectMedia")
          .download(data[i].project_name)
      ).data;
      let imageBuffer = await imageBlob.arrayBuffer();

      // Append base64
      imageData.push({
        base64: Buffer.from(imageBuffer).toString("base64"),
        type: imageBlob.type,
      });
    } catch (err) {
      console.log("Error occurred for " + data[i].project_name);
    }
  }

  return {
    props: { passed: { url: url, projectData: data, imageArr: imageData } },
  };
}

export default function Main({ passed }) {
  // console.log(passed.base);
  // console.log(window);
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
        <Home />
        <Second />
        <Third
          url={passed.url}
          projectData={passed.projectData}
          imageData={passed.imageArr}
        />
        <Fourth />
        <Footer />
      </main>
    </div>
  );
}
