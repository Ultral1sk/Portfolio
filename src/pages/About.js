import React, { Component }       from 'react'
import Flash                      from 'react-reveal/Flash';

import signRight                  from '../assets/cartoonImages/signRight.png'
import signLeft                   from '../assets/cartoonImages/signLeft.png'
import signArrowLeft              from '../assets/cartoonImages/arrowLeft.png'
import signArrowRight             from '../assets/cartoonImages/arrowRight.png'
import AboutContent               from '../component/aboutUI/AboutContent'
import { SignTag, MobileSignTag } from '../component/ReusableUi/SignTag'

import scroll from '../assets/backgroundImages/scroll2.png'
import reactImg                   from '../assets/logos/react1.png'
import javasScriptImg             from '../assets/logos/javascript.png'
import css                        from '../assets/logos/css.png'
import gitHub                     from '../assets/logos/github.png'
import html                       from '../assets/logos/html.png'
import jQuery                     from '../assets/logos/jquery.png'
import nodejs                     from '../assets/logos/node1.png'
import redux                      from '../assets/logos/redux.png'


export class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isDesktop: false, //This is where I am having problems
            onHover : false
          };
    
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
      }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate = () => {
        this.setState({ isDesktop: window.innerWidth < 992 });
      }

    hoverHandler = () => {
        console.log('hoverme')
        this.setState(state => ({
            onHover : !state.onHover
        }))
     
        
    }


    render() {
        const isDesktop = this.state.isDesktop;


        return (
            <>
           
                <div className="about_background_image">
                    <div className="gridAbout">
                        <div className="sign_area_home" >
                        {
                            isDesktop ? 
                            <Flash>
                                <MobileSignTag link="/projects" imgUrl={signArrowRight}  />
                            </Flash>
                                    : 
                                  
                            <SignTag bck={signLeft} link="/" padding="0 5rem 9rem 0" rotate="rotate(15deg)">  <Flash> home     </Flash></SignTag>   
                                
                        }

                        
                        </div>
                   
                        <div className="scroll_area">
                            <div className="scroll_area_text_wrapper">
                                <AboutContent bck={scroll}/>          
                            </div>      
                        </div>   
                     
                 
                        <div className="sign_area_work">       
                        {
                            isDesktop ? 
                            <Flash infinity>
                                <MobileSignTag link="/" imgUrl={signArrowLeft}/>    
                            </Flash>
                                    : 
                            <span className="arrow_sign_rotator">
                                <SignTag 
                                    padding="0 0 9rem 4.5rem"  
                                    bck={signRight} 
                                    link="/projects"
                                    rotate="rotate(-15deg)"
                                >   <Flash> Mywork     </Flash>
                                </SignTag>   
                            </span>
                        }            
                        </div>
                    </div>
                </div>
        
            </>
        )
    }
}




export default About

{/* <img className="sign_image" src={sign} height="100%" width="20%" />    

                <img className="imgSketch" src={sketch} width="10%" height="20%" />
    <img src={redux} width="70px" height="70px" /> */}




//     <div className="htmlCssJsJq_wrapper">
//     <img src={html} width="100%" height="100%" />
//     <img src={css} width="100%"  height="100%"/>         
//     <img src={javasScriptImg} width="100%" height="100%" />
//     <img src={jQuery} width="100%" height="100%"/>

// </div>
// <div className="reactReduxNodeGit_wrapper">
//     <img src={reactImg} width="100%" height="100%" />
//     <img src={redux} width="100%" height="100%"/>
//     <img src={nodejs} width="100%" height="100%"/>  
//     <img src={gitHub} width="100%" height="100%"/>
// </div>   