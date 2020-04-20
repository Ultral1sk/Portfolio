import React from 'react';
import Zoom                         from 'react-reveal/Zoom';
import Spin                         from 'react-reveal/Spin';



 
const AboutContent = (props) => {

   const TypistWidth = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: "83vh",
    background: `url(${props.bck})`,
    backgroundPosition: 'center', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: "cover",
    padding : props.padding,  
   
   }

 

    return (
      <Spin duration={300} count={3} >
        <Zoom duration={2000}>
          <div style={{...TypistWidth}}>
            <div className="AboutContentStyles">
              <h2 className="about" style={{fontSize : '3vw', paddingTop: '2rem', color : '#1f1f1f', textShadow : '2px 2px 2px #f0f0f0'}}  >Contact</h2>
              {props.children}
              </div>
          </div> 
        </Zoom>
      </Spin>
  

 
    );
}


export default AboutContent