import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/backgroundImages/2850814.jpg'

const ErrorStyles = {
    

    display: 'flex',
    justifyContent: 'center',
    alignItems : 'center',
    background: `url(${background})`,
    backgroundPosition: 'bottom', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize : 'cover',
    border : '15px solid black',
    width: '100%',
    height: '100vh',
  
    // 

  
}



const Error = () => {
    return (
        <div style={{...ErrorStyles}}>
            <Link className="ErrorFontStyles" to='/' >
                    I don't think you are going to find Jovan here <br />
                    Click to return
            </Link>
        </div>
  
    )
}

export default Error