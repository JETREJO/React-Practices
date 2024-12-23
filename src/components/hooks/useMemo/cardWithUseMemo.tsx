import { useMemo, useState } from "react";
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

const CardWithUseMemo = () => {

  const { counter, increment } = useCounter(6000);
  const [show, setShow] = useState<boolean>(true);

  const memoizedValue = useMemo(() => heavyFunction(counter), [counter]);

  /**
   * USE-MEMO sirve para MEMORIZAR un valor (regularmente el resultado de una función)
   * y evita que se vuelva a renderizar, a menos que el valor de su DEPENDENCIA cambie.
   * Es decir, la función que se encuentre dentro del USE-MEMO se va a ejecutar
   * SI Y SOLO SI el valor de su dependencia cambia, de lo contrario esta función
   * NO se volverá a ejecutar aunque se re-renderice todo el componente.
  */
    
  return (
    <div style={{width: "300px"}}>
      <h3 style={{fontSize:"30px",  textAlign:"center", marginBottom:"10px"}}>SIN MEMO</h3>
      <hr />
      <div style={{ display: "flex", flexDirection: "column" }}>

        {/* Renderizo el valor memorizado */}
        { memoizedValue }

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

export default CardWithUseMemo;
