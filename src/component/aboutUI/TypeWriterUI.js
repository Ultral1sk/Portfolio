import React, {Component, Children} from 'react';
import Zoom                         from 'react-reveal/Zoom';

const TypistStyles = {
 color: 'rgb(248, 79, 107)'
}
const TypistWidth = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems : 'center',
  height : '100%'
}

 
export default class MyComponent extends Component {

 
  render() {
    return (

      <Zoom>
      <div style={{...TypistWidth}}>
          <h2 className="about" >About</h2>
          <p>Hi my name is 
            <span style={{...TypistStyles}}> Jovan. </span>
            i am a<span  style={{...TypistStyles}}> Husband, Developer, Teacher, Gamer</span></p>
          <p>Specialized in the following areas </p>
          insterested in the entire frontend and backend spectrum eager to learn and work on
          abitious projects with positive people
        </div>
      </Zoom>
  
  

 
    );
  }
}

