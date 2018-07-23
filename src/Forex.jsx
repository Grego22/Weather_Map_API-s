import React from 'react'
import axios from 'axios'
import Forexforms from './Forexforms.jsx'


// const api_key = (' V736K62LC1EHN6NP')
    const api_key = ('UBXHXOE1AU2GHYG7')
const api_call_symbols = ('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NFLX&interval=15min&outputsize=full&apikey='+api_key)
// const response = await api_call.symbols.json()

class Forex extends React.Component{
    constructor(){
        super()
        this.state={
            symbol: undefined,
            interval: undefined,
        }   
    }

    componentDidMount(){
        axios.get(api_call_symbols)
        .then (res => {
            var data1  = {};
            data1 = JSON.stringify(res.data);
            console.log( data1 )
        
        
        })
    }
    buystock(){
        this.setState({
            
        })

    }

    render(){
        return(
        <div className="container">
        </div>   
        ) 

    }        
    }



export default Forex