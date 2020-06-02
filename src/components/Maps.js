import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import GoogleMapStyles from "./GoogleMapStyles";

const containerStyle = {
  position: "relative",
  width: "1200px",
  height: "400px",
};

export class Maps extends React.Component {
  render() {
    return (
      <Map
        className="container mx-auto px-4"
        containerStyle={containerStyle}
        google={this.props.google}
        zoom={15}
        style={GoogleMapStyles}
        initialCenter={{ lat: 53.159987, lng: -2.668829 }}
      >
        <Marker position={{ lat: 53.159987, lng: -2.668829 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCfUDxIrC1FPs4_CwpXPHaEx0aqlMUoWKY",
})(Maps);
