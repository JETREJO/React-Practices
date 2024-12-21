import { useEffect, useState } from "react";
import { GifImage } from "../interfaces/Gifs";
import { getGifs } from "../requests/Gifs";

const useFetchGifs = (category:string) => {
  const [images, setImages] = useState<GifImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getData() {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return { images, isLoading };
}

export default useFetchGifs
