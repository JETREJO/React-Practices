import { useState } from "react";

const useCounter = (initialValue=10) => {
  const [counter, setCounter] = useState<number>(initialValue);

  function increment ( value=1 ) {
    setCounter(counter + value);
  };
  
  function decrement () {
    setCounter(counter - 1);
  };

  function reset () {
    setCounter(0);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
}

export default useCounter
