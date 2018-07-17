import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from  './MyComponent.jsx'
import NavigatorComponent from './NavigatorComponent.jsx'
import Clock from './Clock.jsx'
import Forms from './Forms.jsx'
import Weather from './Weather.jsx'
import moment from 'moment'
import GoogleMapReact from 'google-map-react';
import GoogleMap from './GoogleMap.jsx'
import { FormGroup, Input } from 'react-bootstrap'
import Login from './Login.jsx'

const Api_Key = `${process.env.REACT_APP_WEATHER_API}`


class App extends Component {

  state = {
    
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        sunset: undefined,
        error: undefined
      }

      // this is the flux capcitor here.  
  getWeather = async (e) => {
      const city =e.target.elements.city.value;
      const country = e.target.elements.country.value;
      //const city = e.target.elements.city.value
      //const country = e.target.country.value
      e.preventDefault()
      const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+ country +'&appid='+Api_Key)
      const response = await api_call.json()
      console.log(response)
      var kelvin = response.main.temp
      var farent = 1.8 * (kelvin-273)+32
      var degrees = farent.toFixed(1)
      var day = moment(this.state.sunset)
      var date = day.format('h:mm A')
      if(city && country){
        this.setState({
          temperature: degrees,
          city: response.name,
          country: response.sys.country,
          humidity: response.main.humidity,
          sunset: date,
          description: response.weather[0].description,
          error: ""
        })
      }else{
        this.setState({
          error: "Please input search values..."
        })
      }
    }
  

  render() {
    return (
      <div className="App">
      <NavigatorComponent/>
      <Clock></Clock>
      <Forms loadWeather={this.getWeather}/>
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        sunset={this.state.sunset}
        description={this.state.description}
        error={this.state.error}/>
     <GoogleMap/>
      </div>
      )
    }
  }

  // tells the browser that if there is a default behavior for this event on this object, then skip that default behavior.



export default App;
