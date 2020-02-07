import React, { Component } from 'react'
import WrappedMap from '../component/GoogleMap'
import SocialMedia from '../component/SocialMedia'
const REACT_APP_GOOGLE_KEY ="AIzaSyBiInmwY2fppFieFCVoDMxn9KLso0pJ6Cs"

export class Contact extends Component {
    
  
    render() {
        return (
        <>
          <div className="background_img">



                {/* <div className="GoogleMap" >
                    <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
                        loadingElement={<div style={{ height : "100%" }} />}
                        containerElement={<div style={{ height : "100%" }} />}
                            mapElement={<div style={{ height : "100%" }} />}              
                            />   
                </div>           
                <SocialMedia />                         */}
         </div>
        </>
     
        )
    }
}

export default Contact
