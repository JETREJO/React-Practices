import { useState } from "react";

export const useForm = ( initialForm:any = {} ) => {

  const [formState, setformState] = useState(initialForm)

  function onInputChange(event: React.ChangeEvent | any) {
    // "name" es el nombre de nuestro formulario
    const { value, name } = event.target;
    setformState({
      ...formState,
      [name]: value
    });
  }

  function onFormReset() {
    setformState(initialForm);
  }

  return {
    formState,
    onInputChange,
    onFormReset,
  };
}
