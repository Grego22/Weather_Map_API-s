import React, {Component} from 'react'


class Clock extends Component{
    constructor(props){
        super(props)
        this.state = {
             time: new Date().toLocaleString()
        }
    }

    componentDidMount(){
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }

    tick(){
        this.setState({
            time: new Date().toLocaleString()
        })

    }

    render(){
        return(
            <p className = "App-Clock">
            The time is {this.state.time}
            </p>
        )
    }
}

export default Clock