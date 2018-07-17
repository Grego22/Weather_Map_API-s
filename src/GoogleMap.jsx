import React, {Component} from 'react'
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY_2 =`${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
const mylat =    `${process.env.REACT_APP_LAT}`
const mylng =    `${process.env.REACT_APP_LNG}`
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 26.143,
      lng: -80.342
    },
    zoom: 11
  };

  render() {
    console.log(mylat)
    console.log(mylng)
    console.log(`${process.env.REACT_APP_TEST}`)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY_2}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-80.342}
            lng={26.143}
            text={'Synechron'}
          />
        </GoogleMapReact>
        
      </div>
    );
  }
}

export default GoogleMap;