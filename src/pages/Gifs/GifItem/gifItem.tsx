import styles from "./gifItem.module.css";

interface GifItemProps {
  id: string;
  title: string;
  url: string;
}

const GifItem: React.FC<GifItemProps> = ({id, title, url}) => {
  return (
    <li key={`id_${id}`} className={styles.card}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </li>
  )
}

export default GifItem;
