import React from 'react'
import signImg from '../../assets/cartoonImages/sign1.png'
import signArrowImg from '../../assets/cartoonImages/arrow.png'

import { Link } from 'react-router-dom';


// Desktop size sign component
export const SignTag = (props) => {
       const SignTagStyles = {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: "100%",
                  height: "100%",
                  background: `url(${signImg})`,
                  backgroundPosition: 'center', /* Center the image */
                  backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                  backgroundSize: "250px 350px",
                  padding : '0rem 0rem 8.5rem 4rem',          
      }
    
      const fontStyles = {  transform : 'rotate(-15deg)'  }
  
      return   <div className="sign_img_wrapper">
                  <div style={{...SignTagStyles}}>
                        <Link style={{...fontStyles}}
                              text={props.text} 
                              to={props.link}>                  
                              {props.children}
                        </Link>
                  </div>
              </div>
    
    }


// mobile size changing sign component
export const MobileSignTag = (props) => {
      return   <div className="sign_img_wrapper">
                  <div>
                        <Link to={props.link}>                  
                              <img src={signArrowImg} width='25%' />
                        </Link>
                  </div>
              </div>

}



