import CardWithMemo from "./cardWithMemo";
import CardNoMemo from "./cardNoMemo";

/**
 * Nótese que en CARD-NO-MEMO cuando se hace click en cualquiera de los
 * dos botones, el componente <small> se vuelve a renderizar, ni importando
 * que el valor del counter NO CAMBIE, lo cual es dañino para el performance
 * 
 * En cambio en CARD-WITH-MEMO el componente <small> solo se renderiza
 * cuando su valor cambia, es decir, cuando se cambia el estado de SHOW
 * no provoca un re-render del componente <small>, ya que ahora el componente
 * está memorizado, lo cual permite que este se renderice SI Y SOLO SI el
 * valor del "counter" cambie.
 * 
 * ¡ ¡ ¡ IMPORTANTE ! ! !
 * Estos manejos de performance ya son obsoletos en la versión 1.19 en adelante,
 * ya que estas optimizaciones ahora se hacen solas internamente.
 */

const Memorize = () => {

  return (
    <div className="pb-3 pt-3 border-bottom border-warning border-4 ps-3 pe-3">
      <h1>React Memo | (Resultados en consola)</h1>
      <hr />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardNoMemo />
        <CardWithMemo />
      </div>
    </div>
  );
};

export default Memorize;
