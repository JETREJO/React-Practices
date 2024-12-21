import Loader from "../../../components/loader/loader";
import useFetchGifs from "../../../hooks/useFetchGifs";
import GifItem from "../GifItem/gifItem";
import styles from "./gifCollection.module.css";

interface GifCollectionProps {
  category: string;
}

const GifCollection: React.FC<GifCollectionProps> = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (  
    <div>
      <h3>{category}</h3>
      { isLoading && <div className={styles.loaderWrapper}><Loader/></div> }
      <ul className={styles.gifGrid}>
        { images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </ul>
    </div>
  );
}

export default GifCollection;
