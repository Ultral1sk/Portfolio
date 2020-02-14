import React, { Component }      from 'react';
import ProjectTemplateItem       from '../component/projectUI/ProjectTemplateItem';
import {MobileSignTag}           from '../component/ReusableUi/SignTag'
import signArrowLeft             from '../assets/cartoonImages/arrowLeft.png'
import signArrowRight            from '../assets/cartoonImages/arrowRight.png'
import projectOne                from '../assets/cartoonImages/board3.png'
import Bounce                    from 'react-reveal/Bounce';
import Flash                     from 'react-reveal/Flash';
import Zoom                      from 'react-reveal/Zoom';


const Projects = (props) => (
      <div className="myWorkBackgroundImage">       
                <div className="projects_wrapper">
                    <div className="ProjectsGrid">      
                            <div className="leftSign"> 
                                <Flash>
                                    <MobileSignTag link="/about" imgUrl={signArrowLeft} />   
                                </Flash>
                            </div>
                            <div className="projectOneLeft" radius="0 0 50px 0"> 
                                <Bounce top delay={500}>
                                    <ProjectTemplateItem 
                                        bck={projectOne} 
                                        color="black"
                                        padding="7rem 0 0 0"
                                        >
                                        Lounge Bar       <br />
                                        barabar  Project
                                    </ProjectTemplateItem>
                                </Bounce>                           
                            </div>
                            <div className="projectTwoLeft">
                                <Bounce top delay={1000}>
                                    <ProjectTemplateItem 
                                    bck={projectOne}    
                                    color="black"
                                    padding="7rem 0 0 0"
                                    >
                                            Ecommerce       <br />
                                            Shoe Store      <br />
                                    </ProjectTemplateItem>
                                </Bounce>
                            </div>
                            <div className="projectMiddle" >
                                <Zoom clear >
                                    <ProjectTemplateItem color="white" size="3vw">
                                        Jovan's Work Record. <br />
                                        this is confidential. <br/ >

                                    </ProjectTemplateItem>
                                </Zoom>
                            </div>
                            <div className="projectThreeRight">
                                <Bounce top delay={1500}>
                                    <ProjectTemplateItem 
                                    bck={projectOne}  

                                    color="black"
                                    padding="7rem 0 0 0"
                                    >
                                    E-sports <br />
                                    Project
                                    </ProjectTemplateItem>
                                </Bounce>
                            </div>
                            <div className="projectTFourRight" >
                                <Bounce top delay={2000}>
                                    <ProjectTemplateItem
                                        bck={projectOne}   
                                        color="black"
                                        padding="7rem 0 0 0"
                                        >
                                        ongoing <br />
                                        project
                                    </ProjectTemplateItem>
                                </Bounce>
                            </div>
                            <div className="rightSign" > 
                                <Flash>
                                    <MobileSignTag link="/contact" imgUrl={signArrowRight} />   
                                </Flash>
                            </div>
                    </div>             
                </div>
            </div>             
 )

export default Projects
   




{/* <Slide top>
<ProjectTemplateItem 
    bck={board1}             
    color="black"
    rotate="rotate(-10deg)"       
    >
    Lounge Bar       <br />
    barabar  Project
</ProjectTemplateItem>
</Slide>                            */}

       {/* <div className="leftSign"> 
                                <SignTag link="about">  In! </SignTag>
                            </div> */}