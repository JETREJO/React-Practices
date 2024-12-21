import EffectSimpleForm from "../../components/hooks/useEffect/simpleForm";
import StateWithCustomHook from "../../components/hooks/useState/customHook";
import HookState from "../../components/hooks/useState/state";
import Navbar from "../../components/NavBar/navbar";
import styles from "./Hooks.module.css";

const HooksApp = () => {

  return (
    <div className={styles.hooksappContainer}>
      <Navbar/>
      <HookState />
      <StateWithCustomHook />
      <EffectSimpleForm />
    </div>
  );
}

export default HooksApp;
