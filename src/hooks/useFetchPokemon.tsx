import { useEffect, useState } from "react";

const pokeLocalCache: any = {};

const useFetchPokemon = (urlToFetch:string) => {

  const [state, setState] = useState<any>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    setLoadingState();
    getFetch(urlToFetch);
  }, [urlToFetch]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  }

  const getFetch = async(urlToFetch:string) => {

    if (pokeLocalCache[urlToFetch]) {
      setState({
        data: pokeLocalCache[urlToFetch],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(urlToFetch);
    // Ponemos un "sleep" para simular más tiempo de respuesta:
    await new Promise( resolve => setTimeout(resolve, 2000));
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        },
      });
    }
    const data = await resp.json();
    // Guardo respuesta API
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });
    // Manejo del Caché
    pokeLocalCache[urlToFetch] = data;
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };

}

export default useFetchPokemon;
