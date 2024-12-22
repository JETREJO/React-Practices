import Message from "./message";
import { useForm } from "../../../hooks/useForm";

const EffectFormWithCustomHook = () => {

  const {formState, onInputChange, onFormReset} = useForm({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const {username, email, phone, password} = formState;

  return (
    <div className="pb-3 pt-3 border-bottom border-warning border-4 ps-3 pe-3">
      <h1>Formulario con Custom Hook</h1>
      <hr />

      { username === "javi" && <Message/> }

      <input
        type="text"
        name="username"
        className="form-control mb-3" 
        placeholder="Username"
        value={formState.username}
        onChange={(event) => onInputChange(event)}
        id="name-form-2" />

      <input
        type="email"
        name="email"
        className="form-control mb-3" 
        placeholder="tucorreo@algo.com"
        onChange={(event) => onInputChange(event)}
        value={email}
        id="mail-form-2" />

      <input
        type="text"
        name="phone"
        className="form-control mb-3" 
        placeholder="Celular"
        onChange={(event) => onInputChange(event)}
        value={phone}
        id="phone-form-2" />

      <input
        type="password"
        name="password"
        className="form-control mb-3" 
        placeholder="Contraseña"
        onChange={(event) => onInputChange(event)}
        value={password}
        id="password-form-2" />

      <button className="btn btn-primary"
        onClick={() => onFormReset()}
        type="button">
        Reset
      </button>

    </div>
  )
}

export default EffectFormWithCustomHook;
