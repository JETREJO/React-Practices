interface PokemonCardProps {
  id: string,
  name: string,
  sprites: any[],
}

const PokemonCard: React.FC<PokemonCardProps> = ({id, name, sprites }) => {
  return (
    <section>
      <h2 className="text-capitalize mb-3">
        #{id} - {name}
      </h2>
      {
        sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={`Sprite ${name}`} />
        ))
      }
    </section>
  );
}

export default PokemonCard;
