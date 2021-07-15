import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
  lat: 47.38082,
  lng: 8.54233
};

type mapStyle = {
    style: Object
};

const MapComponent= ({style}: mapStyle) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBtfMPXYUfq5Ajw6e49Ps6Y6dn0BsoCFIY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={style}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {
         /* Child components, such as markers, info windows, etc. */ 
         <Marker position={{ lat: 47.38082, lng: 8.54233 }} />
        }
        
        <>
          
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)