import React, { Component } from "react";

 class counter extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    changeCounter(){
     this.setState({
        count:this.state.count+1
     })
    }

  render() {
    return (
      <div>
        <h1> Count - {this.state.count}</h1>
        <button onClick={()=>this.changeCounter()}>Increase </button>
      </div>
    )
  }
}

export default counter
