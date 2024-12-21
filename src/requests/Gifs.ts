export const getGifs = async (category:string) => {
  const BASE_URL = import.meta.env.VITE_GIFS_URL;
  const KEY = import.meta.env.VITE_GIFS_API_KEY;
  const URL = `${BASE_URL}?api_key=${KEY}&q=${category}&limit=5&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await fetch(URL);
  const { data } = await response.json();
  const gifs = data.map((img:any) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height_downsampled.url,
  }));
  // console.log(" Esta es la respuesta : ", gifs);
  return gifs;
}
