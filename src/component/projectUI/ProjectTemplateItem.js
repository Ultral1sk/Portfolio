import React from 'react'
import Slide from 'react-reveal/Slide';


import { Link } from 'react-router-dom';


// Desktop size sign component
const ProjectTemplateItem = (props) => {

     

       const SignTagStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: "46vh",
        background: `url(${props.bck})`,
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
        backgroundSize: "130% 200%",
        padding : props.padding,  
        border: props.border,



              
      }
    
      const fontStyles = {  transform : props.rotate, color: 'white', fontSize : props.size }
      
      return    <div style={SignTagStyles}>
                    <Link 
                        style={{...fontStyles}}
                        text={props.text} 
                        to={props.link}>                  
                        {props.children}
                    </Link>           
                </div>
          

          
    
    }




export default ProjectTemplateItem