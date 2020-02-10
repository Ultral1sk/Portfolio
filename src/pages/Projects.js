import React, { Component }      from 'react';
import ProjectTemplateItem       from '../component/ProjectTemplateItem';
import {SignTag} from '../component/ReusableUi/SignTag'
import { Link } from 'react-router-dom'
import projectOne from '../assets/ProjectPageAssets/imageedit_266_6972894412.png'
import projectTwo from '../assets/ProjectPageAssets/imageedit_284_8507348349.png'
import projectThree from '../assets/ProjectPageAssets/imageedit_308_5141458827.png'
import projectFour from '../assets/ProjectPageAssets/59433.jpg'
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';


export class Projects extends Component {

   

    render() {
        return (
            <>
                <div className="myWorkBackgroundImage">
       
                    <div className="projects_wrapper">
         
                        <div className="ProjectsGrid">      
                            <div className="leftSign"> 
                                <SignTag link="about">  In! </SignTag>
                            </div>
                                <div className="projectOneLeft" radius="0 0 50px 0"> 
                                <LightSpeed left delay={1000}>
                                    <ProjectTemplateItem 
                                        bck={projectOne} 
                                        border="15px solid white" 
                                        color="black"
                                        rotate="rotate(-10deg)"
                                        radius="50% "
                                        >
                                        Lounge Bar       <br />
                                        barabar  Project
                                    </ProjectTemplateItem>
                                </LightSpeed>                           
                                </div>
                                <div className="projectTwoLeft">
                                <LightSpeed left delay={2000}>
                                    <ProjectTemplateItem 
                                    bck={projectTwo} 
                                    border="15px solid white"   
                                    rotate="rotate(-10deg)"
                                    color="black"
                                    radius="50% "
                                    >
                                            Ecommerce       <br />
                                            Shoe Store      <br />
                                    </ProjectTemplateItem>
                                </LightSpeed>
                                </div>
                                <div className="projectMiddle" >
                                <Zoom clear >
                                    <ProjectTemplateItem color="white">
                                        Jovan's Work Record. <br />
                                        this is confidential. <br/ >
                                        
                                    </ProjectTemplateItem>
                                </Zoom>
                                </div>
                                <div className="projectThreeRight">
                                <LightSpeed right delay={1500}>
                                    <ProjectTemplateItem 
                                    bck={projectFour}   
                                    border="15px solid white"
                                    rotate="rotate(10deg)"
                                    color="black"
                                    radius="50% "
                                    >
                                    E-sports <br />
                                    Project
                                    </ProjectTemplateItem>
                                </LightSpeed>
                                </div>
                                <div className="projectTFourRight" >
                                <LightSpeed right delay={2500}>
                                    <ProjectTemplateItem
                                        bck={projectThree}  
                                        border="15px solid white"
                                        rotate="rotate(10deg)"
                                        color="black"
                                        radius="50% "  
                                        >
                                        ongoing <br />
                                        project
                                    </ProjectTemplateItem>
                                </LightSpeed>
                                </div>
                            <div className="rightSign" > 
                                <SignTag link="contact"> Out! </SignTag>
                            </div>
                        </div>             
                    </div> 
                </div>             
            </>         
        )
    }
}

export default Projects




                
{/*             
        
                    <section id="">  
                    
                        {
                            portfolio.map((item, index) => {
                                return <ProjectTemplateItem {...item} key={index} />
                            })
                        }
                
                    </section> */}
                        







                //     <div className="project_controller">
                //     <LightSpeed left >             
                //         <div>
                //             <ProjectTemplateItem bck={projectOne} rotate="rotate(-10deg)">Barabar <p>Project</p></ProjectTemplateItem>                 
                //         </div>
                //     </LightSpeed>
                //     <LightSpeed right delay={1000}>             
                //         <div>
                //             <ProjectTemplateItem bck={projectTwo} rotate="rotate(10deg)">Barabar <p>Project</p></ProjectTemplateItem>                 
                //         </div>
                //     </LightSpeed>                         
                // </div> 
             
                // {/* <div className="Rhombus">
                //     <LightSpeed>             
                //             <div className="rhombus_controller">
                //             <Zoom>
                //                 <ProjectTemplateItem bck={rhombusImg}>Barabar Project</ProjectTemplateItem>
                //             </Zoom>                 
                //             </div>
                //         </LightSpeed>
                //     </div> */}
         
                    
                // <div className='project_controller'>
                // <LightSpeed left delay={1500}>             
                //         <div>
                //             <ProjectTemplateItem bck={projectThree} rotate="rotate(-10deg)">Sports <p>Project</p></ProjectTemplateItem>                 
                //         </div>
                //     </LightSpeed>
                //     <LightSpeed right delay={2000}>             
                //         <div>
                //             <ProjectTemplateItem bck={projectFour} rotate="rotate(10deg)"><span>Sports</span>  <p>Project</p> </ProjectTemplateItem>                 
                //         </div>
                //     </LightSpeed>
                // </div>