import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1>Hello name is {this.props.name}</h1>
    }
}
// in case of the class props are being accessed using this keyword

export default Welcome;