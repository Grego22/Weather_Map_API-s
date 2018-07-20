import React from 'react'
import Forex from './Forex'
import { FormGroup, Input, FormControl } from 'react-bootstrap'

class Forexforms extends React.Component{

    constructor() {
        super();
        this.state = {ticker:""}
    }

    componentWillMount() {
        this.myChoice = null;        
    }

    handleTicker(symbol) {
        this.myChoice = symbol.target.value;
        console.log(this.myChoice);
    }

    handleChoice() {
        this.setState({ticker: this.myChoice});
    }

    render(){
        return (
            <div>
                <form className= "form-inline" onSubmit={this.props.buystock}>
                <FormGroup bsSize="large">
                    <FormControl type="text" name="city" placeholder="Ticker Symbol.."/>
                </FormGroup>
                <input onChange={this.handleTicker} value={this.state.ticker}></input>
                <button onClick={this.handleChoice} className="btn btn-success"> Buy Stock </button>
                </form>
                <h1>This stock: {this.state.ticker}</h1>
            </div>
        )
    }   
}

export default Forexforms

