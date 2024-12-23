import MultipleHooks from "../../components/hooks/multiplesHooks/multipleHooks";
import EffectFormWithCustomHook from "../../components/hooks/useEffect/formCustomHook";
import EffectSimpleForm from "../../components/hooks/useEffect/simpleForm";
import Memorize from "../../components/hooks/useMemo/useMemo";
import StateWithCustomHook from "../../components/hooks/useState/customHook";
import HookState from "../../components/hooks/useState/state";
import Navbar from "../../components/NavBar/navbar";
import UseRefHook from "../../components/ref/useRefHook";
import styles from "./Hooks.module.css";

const HooksApp = () => {

  return (
    <div className={styles.hooksappContainer}>
      <Navbar/>
      <HookState />
      <StateWithCustomHook />
      <EffectSimpleForm />
      <EffectFormWithCustomHook />
      <MultipleHooks />
      <UseRefHook />
      <Memorize />
    </div>
  );
}

export default HooksApp;
