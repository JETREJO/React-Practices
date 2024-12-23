import { useState } from "react";
import useCounter from "../../../hooks/useCounter";

function heavyFunction(iterations:number) {
  console.log("%c--- DISPARO FUNCIÓN PESADA ---", "color:red");
  for (let i=0; i<iterations; i++) {
    console.log("Itero");
  }
  const message = `Terminé de iterarme ${iterations} veces.`;
  console.log(message);
  return (<pre>{message}</pre>);
}

const CardNoUseMemo = () => {

  const { counter, increment } = useCounter(6000);
  const [show, setShow] = useState<boolean>(true);
  
  return (
    <div style={{width: "300px"}}>
      <h3 style={{fontSize:"30px",  textAlign:"center", marginBottom:"10px"}}>SIN MEMO</h3>
      <hr />
      <div style={{ display: "flex", flexDirection: "column" }}>
        { heavyFunction(counter) }
        <small style={{textAlign:"center", marginBottom:"10px"}}> Show / Hide : {JSON.stringify(show)}</small>
        <button className="btn btn-primary" type="button" onClick={() => increment(1)}>
          Increment
        </button>
        <button className="btn btn-outline-light mt-3" type="button" onClick={() => setShow(!show)}>
          Show / Hide
        </button>
      </div>
    </div>
  );
}

export default CardNoUseMemo;
