import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* used to communicate with the parent component */}

      <button onClick={()=>props.greetHandler('child')}>Greet Parent</button>
      {/* arrow functions are used here to pass the parameters from the child component to parent component */}
    </div>
  )
}

export default ChildComponent
