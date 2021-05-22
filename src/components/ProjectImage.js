import supabase from "../../pages/api/_base";
import { useEffect, useState } from "react";

export default function ProjectImage(props) {
  const imageSrc = props.imageSrc;
  const DEFAULT_IMAGE_PATH = "/img/2020-08-09.png";
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (imageSrc) downloadImage(imageSrc);
  }, [imageSrc]);

  async function downloadImage(path) {
    try {
      const { data } = await supabase.storage
        .from("FeaturedProjectMedia")
        .download(path);
      if (data) {
        const url = URL.createObjectURL(data);
        setImageUrl(url);
      } else {
        // Data is null, using default image
        setImageUrl(DEFAULT_IMAGE_PATH);
      }
    } catch (error) {
      console.log("Error downloading image: ", error.message);
    }
  }

  return <img id="img" src={imageUrl} />;
}
