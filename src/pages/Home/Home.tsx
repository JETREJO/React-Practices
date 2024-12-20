import Navbar from "../../components/NavBar/navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar/>
      Soy el Home
    </div>
  );
}

export default Home;
