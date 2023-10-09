import React, { Component } from "react";

class Message extends Component{
    
    constructor(){
        super()
        this.state={
            Message: 'Welcome Subscribe Our Channel'
        }
    }

    // state is type of reserved keyword here means object created

    changemessage(){
          this.setState({
            Message:'Thanks for subscribing our channel'
          }
          )
    }

    // setState accepts an object which needs to be changed 


         render(){
            return (
                <div>
                    <h1>{this.state.Message}</h1>
                    <button onClick={()=>this.changemessage()}>Subscribe</button>
                </div>
            )
         }
}

export default Message;