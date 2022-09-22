import Navbar from "./components/navbar/Navbar";
import './App.css';
import Details from "./components/details/Details";
import React, { useRef } from "react";
import { useState } from "react";

import { useJsApiLoader, GoogleMap, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';

const center = { lat: 28.6139, lng: 77.2090 }; // center is the center of the map

function App() {

  const { isLoaded } = useJsApiLoader({  // whether map script is loaded or not
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(null) // map is the map object
  const [directionsResponse, setDirectionsResponse] = useState(null) // directionsResponse is the response from the directions api
  const [distance, setDistance] = useState('') // distance is the distance between the origin and destination
  const [duration, setDuration] = useState('') // duration is the duration between the origin and destination

  const originRef = useRef('')
  const destinationRef = useRef('')

  if(!isLoaded) return <h1>Loading...</h1>

  async function calculateRoute() {

    if(originRef.current.value === '' || destinationRef.current.value === '')
      return

    const directionsService = new window.google.maps.DirectionsService() // directionsService is the directions service object
    const results = await directionsService.route({ // results is the response from the directions service
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING
    })

    setDirectionsResponse(results) // set the directions response
    setDistance(results.routes[0].legs[0].distance.text) // set the distance
    setDuration(results.routes[0].legs[0].duration.text) // set the duration
    
  }

  return (
    <div className="App">
      <Navbar />
      <p className="header">Let's calculate <b>distance</b> from Google maps</p>
      <div className="main-content">
        <Details Autocomplete={Autocomplete} originRef={originRef} destinationRef={destinationRef} calculateRoute={calculateRoute} distance={distance} duration={duration} />
        <div>
        <GoogleMap center={center} zoom={15} mapContainerStyle={{ width: '40vw', height: '70vh' }} options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
         >
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
        </div>
      </div>
    </div>
  );
}

export default App;
