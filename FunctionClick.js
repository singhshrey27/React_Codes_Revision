import React from "react";

function FunctionClick(){
    function ClickHandler(){
        console.log("Button is clicked")
    }
    return (
        <div>
        <button onClick={ClickHandler}>Click here</button>
        </div>
    )
}

export default FunctionClick