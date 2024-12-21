import React, { useState } from "react";

interface AddCategoryProps {
  onNewCategory: Function;
}

const AddCategory: React.FC<AddCategoryProps> = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState<string>("");

  function onInputChange ( {target}: React.ChangeEvent<HTMLInputElement> ) {
    setInputValue(target.value);
  }

  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanValue = inputValue.trim();

    // Solo aceptaremos cadenas de más de 3 caracteres
    if (cleanValue.length < 3) { return; }
    
    onNewCategory( cleanValue );
    setInputValue("");
  }

  return (
    <form action=""
      onSubmit={(e) => onSubmitForm(e)}
      >
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={ (event) => onInputChange(event) }
        />
    </form>
  );
}

export default AddCategory;
