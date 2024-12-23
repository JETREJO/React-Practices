import { useRef } from "react";

const UseRefHook = () => {

  const inputRef1 = useRef<any>();
  const inputRef2 = useRef<any>();
  const inputRef3 = useRef<any>();

  function onClick (index:number) {
    switch(index) {
      case 1: { inputRef1.current.select(); break; }
      case 2: { inputRef2.current.select(); break; }
      case 3: { inputRef3.current.select(); break; }
      default: return;
    }
  }

  return (
    <div className="pb-3 pt-3 border-bottom border-warning border-4 ps-3 pe-3">
    <h1>Use Ref | Focus Screen</h1>
    <hr />

    <input
      type="text"
      className="form-control mb-3" 
      placeholder="Ingrese su nombre"
      ref={ inputRef1 } />

    <input
      type="text"
      className="form-control mb-3" 
      placeholder="Ingrese su nombre"
      ref={ inputRef2 } />

    <input
      type="text"
      className="form-control mb-3" 
      placeholder="Ingrese su nombre"
      ref={ inputRef3 } />

    <button className="btn btn-primary me-2"
      onClick={() => onClick(1)}>
      Focus 1
    </button>
    
    <button className="btn btn-primary me-2"
      onClick={() => onClick(2)}>
      Focus 2
    </button>

    <button className="btn btn-primary me-2"
      onClick={() => onClick(3)}>
      Focus 3
    </button>

  </div>
  )
}

export default UseRefHook;
