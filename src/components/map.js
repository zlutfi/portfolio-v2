import React, { Component } from "react"
import { Map, GoogleApiWrapper } from "google-maps-react"

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

const mapStyles = {
  width: "100%",
  height: "100%",
}

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={{
          lng: -80.816143,
          lat: 35.215375,
        }}
      />
    )
  }
}

export default GoogleApiWrapper({
  //   apiKey: `${process.env.MAPS_API_KEY}`,
  apiKey: "AIzaSyDxgZ0-6frAj45f6XdWeCrToDJy_ei3nw8",
})(MapContainer)
