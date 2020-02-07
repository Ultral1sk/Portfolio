import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import GoogleMapStyles from '../component/GoogleMapStyles'



function Map( ){
    return (
        <div>
          <GoogleMap 
          defaultZoom={10} 
          defaultCenter={{ lat: 51.457909, lng: 7.013860 }} 
          defaultOptions={{styles : GoogleMapStyles}}

          />
        </div>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
export default WrappedMap

