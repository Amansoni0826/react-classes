import React, {useState} from "react";

const Multiple = () => {

    const [number,setNumber] = useState(1);
    const handleClick = () => {
        setNumber(number * 10)
    }
    return <>
     <h1>I am Multiple by 10 = {number}</h1>
     <button onClick={handleClick}>Click me For Multiply</button>
    </>

}

export default Multiple