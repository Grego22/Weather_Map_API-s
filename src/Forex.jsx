import React from 'react'


const ForexDataClient = require("forex-quotes");
const client = new ForexDataClient('L9ZN8pE2ezTzAghBXtLgbrHrkABlAwjs')

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