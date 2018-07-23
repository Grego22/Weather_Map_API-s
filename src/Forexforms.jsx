import React from 'react'
import Forex from './Forex'
import { FormGroup, Input, FormControl } from 'react-bootstrap'

class Forexforms extends React.Component{

    constructor() {
        super();
        this.state = {ticker:""}
        this.handleTicker = this.handleTicker.bind(this)
    }

    handleTicker(event) {
        const target = event.target;
        const value = target.value.toUpperCase();
        this.setState({
            ticker: value
            // volume: response.volume
        })
    
    }
    render(){
        return (
            <div>
                <form className= "form-inline" onSubmit={this.props.buystock}>
                <input onChange={this.handleTicker} value={this.state.ticker}></input>
                <button onClick={this.handleChoice} className="btn btn-success"> Buy Stock </button>
                </form>
                <h1>This stock: {this.state.ticker}</h1>
                <h1>Volume: {this.state.volume}</h1>
            </div>
        )
    }   
}

export default Forexforms

