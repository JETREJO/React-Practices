import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gifs">Gifs</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
