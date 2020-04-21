import React, {useState}                     from 'react'
import ProjectTemplateItem       from '../../component/projectUI/ProjectTemplateItem';
import {MobileSignTag}           from '../../component/ReusableUi/SignTag'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Sound                     from './RadioSound'
import Fade                      from 'react-reveal/Fade';
import Tada                      from 'react-reveal/Tada';
import Flash                     from 'react-reveal/Flash';
import Zoom                      from 'react-reveal/Zoom';




const ProjectIndex = () => {
    
   
    const [state, setstate]      = useState(false) ;
    const tvHandler              = () => setstate(!state);

      return (
            <div>
                  <div className="projects_wrapper">
                    <div className="ProjectsGrid">      
                            <div className="leftSign"> 
                                <Flash><MobileSignTag link="/about" text="JUMP!"/></Flash>
                            </div>      

                            <div className="radioButton">  
                                <Tada duration={2000}  forever>
                                    <Sound  />   
                                </Tada>
                            </div>
       
                            <div className="projectMiddle">
                                <Zoom duration={200} when={state ? false : true} colapse >               
                                    <div className={ state ?   'off' : "toggleScreenOn"}></div>
                                </Zoom>
                                <Fade clear  delay={state ? 1000 : -1000} when={state ? true : false} >
                                    <div className="carousel-outer-controller" >
                                       
                                            <Carousel slidesPerPage={1}  animationSpeed={1000} infinite={state ? true : false} autoPlay={state ? 3000 : 50000}  >       
                                                <ProjectTemplateItem size="2vw" padding="1.5rem 0 0 4rem" bck >
                                                {state ? 
                                                <>
                                                <div className="tvCarouselWrapper">
                                                <h2 >NBA Project</h2>  
                                                    <a  target="_blank" href="https://sport-1b2e0.firebaseapp.com/">
                                                        <button className="linkButton" />  
                                                    </a>    
                                                </div>
                                               
                                                </>
                                                
                                                : null} 
                                                </ProjectTemplateItem>
                                                
                                                <ProjectTemplateItem size="2vw"  padding="1.5rem 0 0 4rem" bck >
                                                {state ? 
                                                <>
                                                <div className="tvCarouselWrapper">
                                                <h2 >Weather App</h2>  
                                                    <a  target="_blank" href="https://sport-1b2e0.firebaseapp.com/">
                                                        <button className="linkButton" />  
                                                    </a>    
                                                </div>
                                                </>
                                                
                                                : null} 
                                                </ProjectTemplateItem>
                                            </Carousel>   
                                            <div className="questionWrapper" >
                                                    <h3>I see you've found Jovan's stuff</h3>

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
                                <Flash><MobileSignTag link="/contact" text="RUN!"/></Flash>
                            </div>
                    </div>             
                </div>
            </div>
      )
}

export default ProjectIndex