import React, {useState}                     from 'react'
import ProjectTemplateItem       from '../../component/projectUI/ProjectTemplateItem';
import {MobileSignTag}           from '../../component/ReusableUi/SignTag'
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Fade                     from 'react-reveal/Fade';
import Tada                      from 'react-reveal/Tada';
import Flash                      from 'react-reveal/Flash';
import Zoom                      from 'react-reveal/Zoom';

const ProjectIndex = () => {

    
    const [state, setstate] = useState(false)
    const [radioState, setRadio] = useState(false)
    const [show, showState] = useState('')
    console.log(state)
    const radioHandler = () => {
        setRadio(!radioState)
    }
    const tvHandler = () => {
        setstate(!state)
        
    setTimeout(() => {
        setstate(!state)
    }, 1000); 
    }  
      return (
            <div>
                  <div className="projects_wrapper">
                    <div className="ProjectsGrid">      
                            <div className="leftSign"> 
                                <Flash><MobileSignTag link="/about" text="OUT!"/></Flash>
                            </div>
                            <div className="radioButton">
                            <Tada duration={2000}  forever>
                                    <button className="turnOnRadioButton" id="toggleButton" onClick={radioHandler}  >{radioState ? 'OFF!' : 'ON!'}</button>
                                </Tada>
                            </div>
       
                            <div className="projectMiddle">
                                <Zoom duration={200} when={state ? false : true} colapse >               
                                    <div className={ state ?   'off' : "toggleScreenOn"}></div>
                                </Zoom>
                                <Fade clear  delay={state ? 1000 : -1000} when={state ? true : false} >
                                    <div className="carousel-outer-controller" >
                                            <Carousel slidesPerPage={1}  animationSpeed={1000} infinite={state ? true : false} autoPlay={state ? 3000 : 50000}  >
                                                <ProjectTemplateItem size="2vw" to="www.hltv.org" padding="1.5rem 0 0 4rem" bck to="www.google.com">
                                                {state ? 
                                                <>
                                                <div className="tvCarouselWrapper">
                                                <h2 >NBA Project</h2>  
                                                    <a  target="_blank" href="https://www.hltv.org/">
                                                        <button className="linkButton" />  
                                                    </a>    
                                                </div>
                                               
                                                </>
                                                
                                                : null} 
                                                </ProjectTemplateItem>
                                                <ProjectTemplateItem size="2vw" to="www.hltv.org" padding="1.5rem 0 0 4rem" bck to="www.google.com">
                                                {state ? 
                                                <>
                                                <div className="tvCarouselWrapper">
                                                <h2 >Weather App</h2>  
                                                    <a  target="_blank" href="https://www.hltv.org/">
                                                        <button className="linkButton" />  
                                                    </a>    
                                                </div>
                                                </>
                                                
                                                : null} 
                                                </ProjectTemplateItem>
                                            </Carousel>   
                                            <div className="questionWrapper" >
                                                    <h3>I see you sniffin Around Jovan's stuff</h3>

                                            </div>   
                                            
                                        </div>
                                </Fade>
                            </div>    
                            <div className="tvButton" >
                                <Tada duration={2000}  forever>
                                    <button className="turnOnTvButton" id="toggleButton" onClick={tvHandler}  >{state ? 'OFF!' : 'ON!'}</button>
                                </Tada>
                            </div>    

                            <div className="rightSign" > 
                                <Flash><MobileSignTag link="/contact" text="OUT!"/></Flash>
                            </div>
                    </div>             
                </div>
            </div>
      )
}

export default ProjectIndex