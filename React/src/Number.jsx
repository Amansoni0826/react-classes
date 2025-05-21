import React, { useState } from "react";

const Number = () => {
    const [AddNumber, setNumber] = useState(0)
    const handleNumber = () => {
        setNumber(AddNumber + 2)
    }
    return <>
        <h1>Joint Number by 1= {AddNumber}</h1>
        <button onClick={handleNumber}>Click Me For the Joint</button>
    </>
}

export default Number