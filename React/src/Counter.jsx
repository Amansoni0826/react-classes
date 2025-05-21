import React, { useState } from "react"
const Counter = () => {
    const [number, setNumber] = useState(0);

    const handleClick = () => {
      setNumber(number + 1)
    };
    return <> 
        <h1>Counter = {number}</h1>
        <button onClick={handleClick}>Click Me</button>
    </>
}

export default Counter