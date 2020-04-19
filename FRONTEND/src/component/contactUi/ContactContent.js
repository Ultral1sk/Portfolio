import React from 'react';
import Zoom                         from 'react-reveal/Zoom';
import Spin                         from 'react-reveal/Spin';
import { withRouter } from 'react-router-dom';



 
const ContactContent = (props) => {


   const ContactTypistWidth = {
 display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: "73vh",
    background: `url(${props.bck})`,
    backgroundPosition: 'center', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: "cover",
    padding : props.padding,  
    
   }


    return (
      <Spin duration={props.duration} count={2} delay={props.delay} >
        <Zoom duration={2000} delay={props.delay}>
          <div style={{...ContactTypistWidth}}>
            <div className="ContactContentStyles">
              
                  {props.children}
              </div>
          </div> 
        </Zoom>
      </Spin>
  

 
    );
}


export default ContactContent