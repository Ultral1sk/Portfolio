import React from 'react'
import Slide from 'react-reveal/Slide';


import { Link } from 'react-router-dom';


// Desktop size sign component
const ProjectTemplateItem = (props) => {

     

       const SignTagStyles = {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: "40vh",
                  background: `url(${props.bck})`,
                  backgroundPosition: 'center', /* Center the image */
                  backgroundRepeat: 'no-repeat', /* Do not repeat the image */
                  backgroundSize: "100% 100%",
                  padding : props.padding,  
                  border: props.border,
                  borderRadius : props.radius,
        
                 

              
      }
    
      const fontStyles = {  transform : props.rotate, color: props.color }
      
      return   <div className="ProjectTemplate">
                
                    <div style={SignTagStyles}>
                        <Link 
                            style={{...fontStyles}}
                            text={props.text} 
                            to={props.link}>                  
                            {props.children}
                        </Link>           
                    </div>
          

              </div>
    
    }




export default ProjectTemplateItem