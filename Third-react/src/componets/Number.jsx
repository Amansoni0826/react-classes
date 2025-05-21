import React from "react";

const Number = () => {
    let a = prompt("Enter a Number");
    let b = prompt("Enter a second Number");
    let c = parseInt(a) + parseInt(b);
    return <>
        <h2>We have Digit =  {c} </h2>
    </>
}

export default Number