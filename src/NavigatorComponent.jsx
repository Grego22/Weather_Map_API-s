import React, { Component } from 'react';

class NavigatorComponent extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">Grego LLC</a>
            </div>
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Weather</a></li>
                <li><a href="#">Clock</a></li>
                <li><a href="#">Future</a></li>
            </ul>
            </div>
        </nav>

        )

    }
}

export default NavigatorComponent 