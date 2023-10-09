import { Component } from "react";

class CondionalRendering extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedin: true
        }
    }
    render(){
        // if(this.state.isLoggedin){
        //     return <div>Welcome shrey</div>
        // }else{
        //     return <div>Welcome Guest</div>
        // }
        
        // 1.first method of conditions is if else and it cannot be used in a single div of return type else block needs to
        // be their own return div


        // 2.By using the JavaScript variables
        
        // var message;
        // if(this.state.isLoggedin){
        //     message=<div>Welcome shrey</div> 
        // }else{
        //     message=<div>Welcome Guest</div>
        // }


        // return (
        //     <div>{message}</div>
        // )

        // 3.By using the ternary operator

        // return(
        //     this.state.isLoggedin? <div>Welcome shrey</div>
        //     :<div>Welcome Guest</div>
        // )

        // 4.By using the short circuit operator this is being used when we want to display only one case and other one is null

        return this.state.isLoggedin && <div>Welcome shrey</div>
    }
}

export default CondionalRendering