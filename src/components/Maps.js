import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import GoogleMapStyles from "./GoogleMapStyles";



const containerStyle = {
  position: "relative",
  width: "100%",
  height: "500px",
};

const style = {
  width: '100%',
  height: '100%'
}

export class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.setActiveListing = this.setActiveListing.bind(this);
  }

  _mapLoaded(mapProps, map) {
    map.setOptions({
       styles: GoogleMapStyles.mapStyle
    })
  }

  setActiveListing(marker){
    this.props.updateActiveListing(marker.index);
  };

  render() {

    const takeaways = this.props.takeaways;
    const filters = this.props.filters;
    const activeFilters = [];

    const keys = Object.keys(filters);
    for (const key of keys) {
      if (filters[key].status === true) {
        activeFilters.push(key);
      }
    }

    return (
      <Map
        className="container mx-auto p-4"
        containerStyle={containerStyle}
        google={this.props.google}
        zoom={11}
        style={style}
        initialCenter={{ lat: 53.159987, lng: -2.668829 }}
        onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
      >
        {/* <Marker position={{ lat: 53.159987, lng: -2.668829 }} /> */}

        {Object.keys(takeaways).map(function (key) {
          if (takeaways[key].cuisine.some((r) => activeFilters.indexOf(r) >= 0)) {
            return <Marker key={key} index={key} position={{ lat: takeaways[key].lat, lng: takeaways[key].lng }} onClick={this.setActiveListing} />
          }
        }, this)}

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCfUDxIrC1FPs4_CwpXPHaEx0aqlMUoWKY",
})(Maps);
