import React from 'react'

class Forms extends React.Component{

    render(){
        return (
            <form onSubmit={this.props.loadWeather}>
             <label className="sr-only" for="inlineFormInput">Name</label>
            <input  type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button className="btn btn-primary"> Get Weather </button>
            </form>
        )
    }   
}

export default Forms

