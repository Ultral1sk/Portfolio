import React, { Component } from 'react';
import Zoom                         from 'react-reveal/Zoom';
import Spin                         from 'react-reveal/Spin';



 
const AboutContent = (props) => {

  const TypistStyles = {
    color: 'rgb(248, 79, 107)'
   }

  const TypistTextWidth = {
     width : '70%'
   }
   const TypistWidth = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: "80vh",
    background: `url(${props.bck})`,
    backgroundPosition: 'center', /* Center the image */
    backgroundRepeat: 'no-repeat', /* Do not repeat the image */
    backgroundSize: "cover",
    padding : props.padding,  

   }

 

    return (
      <Spin duration={300} count={2} >
        <Zoom duration={2000}>
          <div style={{...TypistWidth}}>
            <div className="AboutContentStyles" style={{...TypistTextWidth}}>
              <h2 className="about" >About</h2>
                <p>Hi my name is 
                  <span style={{...TypistStyles}}> Jovan. </span>
                  i am a<span  style={{...TypistStyles}}> Husband, Developer, Teacher, Gamer</span></p>
                <p>Specialized in the following areas </p>
                insterested in the entire frontend and backend spectrum eager to learn and work on
                abitious projects with positive people
              </div>
          </div> 
        </Zoom>
      </Spin>
  

 
    );
}


export default AboutContent