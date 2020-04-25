import React from 'react'



import { Link } from 'react-router-dom';


// Desktop size sign component
const ProjectTemplateItem = (props) => {

     

       const SignTagStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '41.2%',
        height: "23.2vh",
        backgroundColor: `${props.bck}`,
        borderRadius : '17%',
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
 
        padding : props.padding,  
        border: props.border,



              
      }


    
      const fontStyles = {  transform : props.rotate, color: 'white', fontSize : props.size,  }
      
      return    <div style={SignTagStyles}>
                    <a 
                        style={{...fontStyles}}
                        text={props.text} 
                      >                  
                        {props.children}

                    </a>           
                </div>
          

          
    
    }




export default ProjectTemplateItem