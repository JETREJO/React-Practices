import { useState } from "react";
import Message from "./message";

const EffectSimpleForm = () => {

  const [formState, setformState] = useState({
    username: "",
    email: "",
  });

  const {email, username} = formState;
  
  function onInputChange(event:React.ChangeEvent | any) {
    // "name" es el nombre de nuestro formulario
    const { value, name } = event.target;
    setformState({
      ...formState,
      [name]: value
    });
  }

  return (
    <div className="pb-3 pt-3 border-bottom border-warning border-4 ps-3 pe-3">
      <h1>Formulario simple</h1>
      <hr />

      { username === "javi" && <Message/> }

      <input
        type="text"
        name="username"
        className="form-control mb-3" 
        placeholder="Username"
        value={formState.username}
        onChange={(event) => onInputChange(event)}
        id="name-form" />

      <input
        type="email"
        name="email"
        className="form-control mb-3" 
        placeholder="tu-correo@algo.com"
        onChange={(event) => onInputChange(event)}
        value={email}
        id="mail-form" />
    </div>
  )
}

export default EffectSimpleForm;
