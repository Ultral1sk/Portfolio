import React from 'react'
import ProjectTemplateItem       from '../../component/projectUI/ProjectTemplateItem';
import ProjectShootingMsg        from './ProjectTemplateItem'
import {MobileSignTag}           from '../../component/ReusableUi/SignTag'
import signArrowLeft             from '../../assets/cartoonImages/arrowLeft.png'
import signArrowRight            from '../../assets/cartoonImages/arrowRight.png'
import projectOne                from '../../assets/ProjectPageAssets/target4.png'
import Flash                     from 'react-reveal/Flash';
import Zoom                      from 'react-reveal/Zoom';

const ProjectIndex = () => {
      return (
            <div>
                  <div className="projects_wrapper">
                    <div className="ProjectsGrid">      
                            <div className="leftSign"> 
                                <Flash>
                                    <MobileSignTag link="/about" imgUrl={signArrowLeft} />   
                                </Flash>
                            </div>
                            <div className="projectOneLeft" radius="0 0 50px 0"> 
                                <Zoom clear delay={500}>
                                    <ProjectTemplateItem 
                                        bck={projectOne} 
                                        color="black"
                                        size="1.3vw"
                                        >
                                        Lounge Bar       <br />
                                        barabar  Project
                                    </ProjectTemplateItem>
                                </Zoom>                           
                            </div>
                            <div className="projectTwoLeft">
                                <Zoom clear delay={1000}>
                                    <ProjectTemplateItem 
                                    bck={projectOne}    
                                    color="black"
                                    size="1.3vw"
                                    >
                                            Ecommerce       <br />
                                            Shoe Store      <br />
                                    </ProjectTemplateItem>
                                </Zoom>
                            </div>z
                            <div className="projectMiddle" >
                            
                                <Zoom clear >
                                    <ProjectTemplateItem color="white" size="3vw">
                                        Jovan's Work Record. <br />
                                        this is confidential. <br/ >

                                    </ProjectTemplateItem>
                                </Zoom>
                            </div>
                            <div className="projectThreeRight">
                                <Zoom clear delay={1500}>
                                    <ProjectTemplateItem 
                                    bck={projectOne}  
                                    size="1.3vw"
                                    color="black"
                            
                                    >
                                    E-sports <br />
                                    Project
                                    </ProjectTemplateItem>
                                </Zoom>
                            </div>
                            <div className="projectTFourRight" >
                                <Zoom clear delay={2000}>
                                    <ProjectTemplateItem
                                        bck={projectOne}   
                                        color="black"
                                        size="1.3vw"
                                        >
                                        ongoing <br />
                                        project
                                    </ProjectTemplateItem>
                                </Zoom>
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
}

export default ProjectIndex