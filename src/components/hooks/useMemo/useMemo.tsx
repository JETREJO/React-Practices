import CardWithMemo from "./cardWithMemo";
import CardNoMemo from "./cardNoMemo";

const Memorize = () => {

  return (
    <div className="pb-3 pt-3 border-bottom border-warning border-4 ps-3 pe-3">
      <h1>Use Memo | (Resultados en consola)</h1>
      <hr />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardNoMemo />
        <CardWithMemo />
      </div>
    </div>
  );
};

export default Memorize;
