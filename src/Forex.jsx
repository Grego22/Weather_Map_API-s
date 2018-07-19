import React from 'react'


const ForexDataClient = require("forex-quotes");
const client = new ForexDataClient(' V736K62LC1EHN6NP')
// const api_call_symbols = await fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey='+api_call_symbols)
// const response = await api_call.symbols.json()
class Forex extends React.Component{
    
    render(){
        console.log("Test")
        return(
            client.getSymbols().then(response => {
                console.log(response)
            })

        )
    }



}

export default Forex