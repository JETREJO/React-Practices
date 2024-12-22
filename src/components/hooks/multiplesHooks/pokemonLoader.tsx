import Loader from "../../loader/loader";

const PokemonLoader = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Loader />
    </section>
  );
}

export default PokemonLoader;
