import React from 'react'

class Forms extends React.Component{

    render(){
        return (
                <form className= "form-inline" onSubmit={this.props.loadWeather}>
                <div className="form-group">
                    <input  type="text" name="city" placeholder="City..."/>
                </div>
                <div className="form-group">
                <input classname="sr-only" type="text" name="country" placeholder="Country..."/>
                </div>
                <button className="btn btn-primary"> Get Weather </button>
                </form>
        )
    }   
}

export default Forms

