import React from 'react'
import axios from 'axios'


const api_key = (' V736K62LC1EHN6NP')
const api_call_symbols = ('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey='+api_key)
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
            console.log(res.data)
        
        
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