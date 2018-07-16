import React, { Component } from 'react';
class MyComponent extends Component{

    a = 10;
    constructor(){
        super()
        console.log("I am being CONNNSTRUCTED!!!!")
        this.state = {username: "synechron", password: "xxxxxx"}
    }

    handleEvent(event){
        console.log("Event", event)
        console.log(this)
        this.a = 20;
            this.setState({
                username : "abcabc"
            })
    }

    componentWillMount(){
        console.log("Whoa, I think I am going to render")
    }
    render(){
        console.log("Told ya, Here I go rendering")
        return (
            <div> Wow I am a flashy component </div>
        )
    }
    componentDidMount(){
        console.log("I rendered, now I am pretty tired")
    }
    // return(
    //     <div onClick ={this.handleEvent.bind(this)}>Cool</div>
    // )
    componentWillUnmount(){
        console.log("See ya later Aligator")
    }
}




export default MyComponent 