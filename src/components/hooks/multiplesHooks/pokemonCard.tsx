import { useLayoutEffect, useRef, useState } from "react";

interface PokemonCardProps {
  id: string,
  name: string,
  sprites: any[],
}

const PokemonCard: React.FC<PokemonCardProps> = ({id, name, sprites }) => {

  const [titleWidth, setTitleWidth] = useState<number>(0);
  const h2Ref = useRef<any>();

  /**
   * Este HOOK se suele utilizar más que nada para, por ejemplo
   * determinar/calcular los tamaños de un elemento o 
   * componente después de haberlo renderizado en pantalla
   */
  useLayoutEffect(() => {
    const { width } = h2Ref.current.getBoundingClientRect();
    setTitleWidth(width);
  }, [name]);

  return (
    <section>
      <div className="mb-3 d-flex align-items-center">
        <h2 ref={h2Ref} className="text-capitalize me-5" style={{width:"fit-content", border:"2px dashed blue"}}>
          #{id} - {name}
        </h2>
        <pre>Title Width: { Math.floor(titleWidth) } px | * useLayoutEffect() *</pre>
      </div>
      {
        sprites.map((sprite) => (
          <img key={sprite} src={sprite} alt={`Sprite ${name}`} />
        ))
      }
    </section>
  );
}

export default PokemonCard;
