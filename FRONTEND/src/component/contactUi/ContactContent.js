import React from 'react';
import Zoom                         from 'react-reveal/Zoom';
import Spin                         from 'react-reveal/Spin';



 
const ContactContent = (props) => {


   const ContactTypistWidth = {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: "73vh",
    background: `url(${props.bck})`,
    backgroundPosition: 'center', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: "cover",
    textAlign : 'center'
   }


    return (
      <Spin duration={props.duration} count={2} delay={props.delay} >
        <Zoom duration={2000} delay={props.delay}>
          <div style={{...ContactTypistWidth}}>
            <div className="ContactContentStyles">
              <h2 className="contact">{props.title}</h2>
              <hr />
                  {props.children}
              </div>
          </div> 
        </Zoom>
      </Spin>
  

 
    );
}


export default ContactContent