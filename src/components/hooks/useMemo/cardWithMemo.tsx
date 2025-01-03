import { useState } from "react";
import useCounter from "../../../hooks/useCounter";
import SmallMemo from "./smallMemo";

const CardWithMemo = () => {

  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState<boolean>(true);
  
  return (
    <div style={{width: "300px"}}>
      <h3 style={{fontSize:"30px",  textAlign:"center", marginBottom:"10px"}}>CON MEMO</h3>
      <hr />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <SmallMemo value={counter} />
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

export default CardWithMemo;
