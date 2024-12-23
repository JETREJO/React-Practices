import useFetchPokemon from "../../../hooks/useFetchPokemon";
import useCounter from "../../../hooks/useCounter";
import PokemonLoader from "./pokemonLoader";
import PokemonCard from "./pokemonCard";

const MultipleHooks = () => {
  
  const {counter, decrement, increment} = useCounter(1);
  const fetchURL = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const {data, isLoading, hasError} = useFetchPokemon(fetchURL);

  return (
    <div className="pb-3 pt-3 border-bottom border-warning border-4 ps-3 pe-3">
      <h1>Múltiples Custom Hooks</h1>
      <hr />

      { isLoading && <PokemonLoader /> }
      { hasError && <h3>Ha oacurrido un error :(</h3>}
      { data &&
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}/>
      } 

      <button onClick={ () => counter > 1 && decrement(1)} type="button" className="btn btn-primary me-3">
        Anterior
      </button>

      <button onClick={() => increment(1)} type="button" className="btn btn-primary">
        Siguiente
      </button>

    </div>
  )
}

export default MultipleHooks;
