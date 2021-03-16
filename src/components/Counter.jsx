const { useState } = require("react")

const Counter = () => {
  const [counter, setCounter] = useState(0)

  function Increment () {
    setCounter(counter + 1)
  }
  
  return (
    <>
    <h3>{counter}</h3>
    <button onClick={Increment}>Increment</button>
    </>
  )
};

export default Counter;