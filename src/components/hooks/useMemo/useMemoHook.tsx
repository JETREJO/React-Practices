import CardNoUseMemo from "./cardNoUseMemo";
import CardWithUseMemo from "./cardWithUseMemo";

const UseMemoHook = () => {

  return (
    <div className="pb-3 pt-3 border-bottom border-warning border-4 ps-3 pe-3">
      <h1>Use Memo | Resultados en consola</h1>
      <hr />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <CardNoUseMemo />
        <CardWithUseMemo />
      </div>
    </div>
  );
};

export default UseMemoHook;
