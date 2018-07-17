import React from 'react'
import { FormGroup, Input, FormControl } from 'react-bootstrap'

class Forms extends React.Component{

    render(){
        return (
                <form className= "form-inline" onSubmit={this.props.loadWeather}>
                <FormGroup bsSize="large">
                    <FormControl type="text" name="city" placeholder="City..."/>
                </FormGroup>
                <FormGroup bsSize="large">
                    <FormControl  type="text" name="country" placeholder="Country..."/>
                </FormGroup>
                <button className="btn btn-primary"> Get Weather </button>
                </form>
        )
    }   
}

export default Forms

