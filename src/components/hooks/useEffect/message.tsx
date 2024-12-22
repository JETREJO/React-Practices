import { useEffect, useState } from "react";

interface CoordsType {
  x: number,
  y: number,
}

const Message = () => {

  const [coords, setCoords] = useState<CoordsType | null>(null);

  useEffect(() => {
    console.log("%cMessage mounted!", "color:green");
    window.addEventListener("mousemove", (event) => {
      const {clientX, clientY} = event;
      setCoords({x:clientX, y:clientY});
    });
    return () => { console.log("%cMessage UNMOUNTED", "color:red"); }
  }, []);

  return (
    <>
      <h3>Usuario ya existe!</h3>
      <h5>{ JSON.stringify(coords) }</h5>
    </>
  )
}

export default Message;
