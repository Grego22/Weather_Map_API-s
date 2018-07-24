import React from 'react'
import { FormGroup, Input, FormControl } from 'react-bootstrap'

class NewsForm extends React.Component{

    render(){
        return (
                <form className= "form-inline" onSubmit={this.props.loadNews}>
                {/* <FormGroup bsSize="large">
                    <FormControl type="text" name="city" placeholder="City..."/>
                </FormGroup>
                <FormGroup bsSize="large">
                    <FormControl  type="text" name="country" placeholder="Country..."/>
                </FormGroup> */}
                <button className="btn btn-primary"> Get News </button>
                </form>
        )
    }   
}

export default NewsForm

