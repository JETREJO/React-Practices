import { useState } from "react";
import Navbar from "../../components/NavBar/navbar";
import styles from "./Gifs.module.css";
import AddCategory from "./AddCategory/addCategory";
import GifCollection from "./GifCollection/gifCollection";

const GifsApp = () => {

  const [categories, setCategories] = useState<string[]>([]);

  function onAddCategory (newCategory: string) {
    if (categories.includes(newCategory)) { return; }

    // En el SET se puede hacer un CALLBACK con lo que CONTIENE el ESTADO (su info anterior)
    setCategories([newCategory, ...categories]);
  }

  return (
    <div className={styles.gifsappContainer}>
      <Navbar/>
      
      <h2>Gifs App</h2>

      {/* Forma larga de escribirlo */}
      {/* <AddCategory onNewCategory={(value:string) => onAddCategory(value) }/> */}
      {/* Forma corta:  */}
      <AddCategory onNewCategory={onAddCategory}/>

      {
        categories.map((category) => (
          <GifCollection
            key={`$id_${category}`}
            category={category} />
        ))
      }

    </div>
  );
}

export default GifsApp;
