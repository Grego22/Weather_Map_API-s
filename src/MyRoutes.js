import React from 'react'
import {BrowserRouter as Router, Route, Switch}

const Routes= () =>(
    <Router>
        <Switch>
            <Route exact path = '/' component={HomeComponent}/>
            <Route exact path = 'weather' component={Weather}/>
            <Route exact path = 'Clock' component={Clock}/>
        </Swich>
    </Router>           
            
)