import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParentComponent extends Component {

    constructor(){
        super()
        this.state={
           ParentName:'Parent'
        }
        this.greetParent=this.greetParent.bind(this)
        // to bind the function with the constructor
    }
    greetParent(childName){
        alert(`Hello ${this.state.ParentName} child name is ${childName}`)
    }


  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
        {/* reference of greetparent is given into the greethandler */}
      </div>
    )
  }
}

export default ParentComponent
