import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import './styles.css'

export function Mapconfig (){


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD6CVy49q8Oe4_7eEXbN1GMBLdYawCAI4c"
      })
    return (
        <div className="conteiner">
           {isLoaded ? (
            <GoogleMap
                mapContainerStyle={{width: '100%', height: '100%'}}
                center={{
                    lat: -5.528684, 
                    lng: -47.471169
                }}
                zoom={14}
            >
            </GoogleMap>
        ) : <></>}
        </div>
    );
}