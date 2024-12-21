import { useState } from "react"

interface CounterType {
  counter1: number;
  counter2: number;
  counter3: number;
}

const HookState = () => {

  const [stateCounter, setCounter] = useState<CounterType>({
    counter1: 0,
    counter2: 20,
    counter3: 120,
  });

  const {counter1, counter2, counter3} = stateCounter;

  return (
    <div className="pb-5 border-bottom border-warning border-4">
      <h1 className="fs-1 ms-3">USE STATE</h1>
      <hr />
      <h3 className="fs-3 ms-3 mb-3">Counter 1: {counter1}</h3>
      <h3 className="fs-3 ms-3 mb-3">Counter 2: {counter2}</h3>
      <h3 className="fs-3 ms-3 mb-3">Counter 3: {counter3}</h3>

      <button
        className='btn bg-info ms-3 me-2'
        onClick={() => setCounter({...stateCounter , counter1: counter1 + 1}) }>
          +1
      </button>

      <button
        className='btn bg-info'
        onClick={() => setCounter({ counter1: counter1 - 1, counter2, counter3})}>
          -1
      </button>
    </div>
  )
}

export default HookState;
