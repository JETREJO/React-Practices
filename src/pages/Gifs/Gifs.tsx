import Navbar from "../../components/NavBar/navbar";
import styles from "./Gifs.module.css";

const GifsApp = () => {
  return (
    <div className={styles.gifsappContainer}>
      <Navbar/>
      Soy el Gifs-App
    </div>
  );
}

export default GifsApp;
