import useCounter from "../../../hooks/useCounter";

const StateWithCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter();

  return (
    <div className="pb-5 border-bottom border-warning border-4">
      <h1 className="fs-1 ms-3 mt-3">USE STATE | Custom Hooks</h1>
      <hr />
      <h3 className="fs-3 ms-3 mb-3">Counter 1: {counter}</h3>

      <button
        className='btn bg-info ms-3 me-2'
        onClick={() => increment(10)}>
          +1
      </button>

      <button
        className='btn bg-info me-2'
        onClick={() => reset()}>
          Reset
      </button>

      <button
        className='btn bg-info'
        onClick={() => decrement()}>
          -1
      </button>
    </div>
  )
}

export default StateWithCustomHook;
