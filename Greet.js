import React from "react";

// function Greet(){
//     return <h1>Hello shiransh</h1>
// }

// arrow function for greet
const Greet = (props) =>{
    // console.log(props);
    return(
        <div>
            <h1>Hello {props.name} also known as {props.heroName}</h1>
            {props.children};
        </div>
    ) 
}

//props are used to pass the property from one component to another


export default Greet