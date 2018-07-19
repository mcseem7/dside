import React, {Component} from 'react'
import ContactMap from './contactmap.svg'
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withGoogleMap(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 52.241978, lng: 20.9941643 }}
    >
      <Marker
          position={{ lat: 52.241978, lng: 20.9941643 }}
      />
    </GoogleMap>
);



export default class Contact  extends  Component {
  constructor() {
    super()

  }


  render() {
    return(
        <div>
          <section id="google__maps-container">
            <div className="google_map">
              {/*<MapWithAMarker*/}
                  {/*containerElement={<div style={{ height: `375px` }} />}*/}
                  {/*mapElement={<div style={{ height: `100%` }} />}*/}
              {/*/>*/}
              <object style={{width: '100%', height: '400px'}}  data={ContactMap} type="image/svg+xml">
                <img  alt="Location Dside"/>
              </object>
            </div>
          </section>
        </div>
    )
  }
}