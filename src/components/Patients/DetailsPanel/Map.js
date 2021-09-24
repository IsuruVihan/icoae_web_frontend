import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const Map = ({lat, lng}) => {
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{lat: lat, lng: lng}}
    >
      <Marker
        position={{lat: lat, lng: lng}}
      />
      <Marker
        position={{lat: lat+2, lng: lng+2}}
      />
    </GoogleMap>
  ));

  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDWPfFE9TqNJmsub1jQ4WNA9Lr3LL5vS_Q&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{height: `100%`}}/>}
      containerElement={<div style={{height: `400px`}}/>}
      mapElement={<div style={{height: `100%`}}/>}
    />
  );
}

export default Map;
