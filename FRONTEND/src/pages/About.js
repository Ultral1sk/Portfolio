import React, { Component }       from 'react'
import Flash                      from 'react-reveal/Flash';

import signRight                   from '../assets/cartoonImages/signRight.png'
import signLeft                   from '../assets/cartoonImages/signLeft.png'
import signArrowLeft              from '../assets/cartoonImages/arrowLeft.png'
import signArrowRight            from '../assets/cartoonImages/arrowRight.png'

import ContactContent               from '../component/contactUi/ContactContent'
import { SignTag, MobileSignTag } from '../component/ReusableUi/SignTag'

import modifiedJovan              from '../assets/ProjectPageAssets/modifiedJoker.png'
import scroll                     from '../assets/backgroundImages/scroll2.png'
import react                      from '../assets/logos/react.png'
import js                         from '../assets/logos/js.png'
import css                        from '../assets/logos/css.png'
import html                       from '../assets/logos/html.png'
import jQuery                     from '../assets/logos/jquery.png'
import redux                      from '../assets/logos/redux.png'
import bootstrap                       from '../assets/logos/bootstrap.png'
import node                      from '../assets/logos/node.png'






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
        this.setState({ isDesktop: window.innerWidth < 1280  });
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
                <div className="contact_background_image">
                    <div className="gridContact">
                        <div className="contact_sign_area_home" >
                        {
                            isDesktop ? 
                            <Flash>
                                <div className="arrow_sign_styling">
                                    <MobileSignTag link="/projects" imgUrl={signArrowRight}  />
                                </div>
                               
                            </Flash>
                                    : 
                                  
                            <SignTag bck={signRight} link="/projects" padding="0 0 9rem 3.5rem" rotate="rotate(-15deg)">  <Flash> WORK     </Flash></SignTag>   
                                
                        }          
                        </div>
                        <div className="contact_wanted_scroll_area">
                            <div className="contact_wanted_scroll_area_text_wrapper">
                                <ContactContent 
                                    bck={scroll} 
                                    title='Wanted' 
                                    duration={300}>
                                    <div className="wanted_text_wrapper">
                                    <h2 className="headerAbout">WANTED</h2>
                                        <hr />
                                     
                                        <p>Armed and Dangerous</p>
                                        <p>Wanted for heavy usage of the following weapons</p>
                                            <div className="icons_wrapper">
                                                <div>
                                                    <img src={html}      alt="html_logo" width="20%"/>
                                                    <img src={css}       alt="css_logo" width="20%"/>
                                                    <img src={bootstrap} alt="bootstrap" width="25%"/>
                                                    <img src={js}        alt="javascript_logo" width="20%" />
                                                  

                                                </div>
                                                <div>
                                                    <img src={react}     alt="react_logo" width="25%"/>
                                                    <img src={redux}     alt="redux_logo" width="20%"/>
                                                    <img src={jQuery}    alt="jquery_logo" width="20%"/>
                                                    <img src={node}      alt="nodejs_logo" width="20%"/>
                                                 
                                        
                                                </div>     
                                           
                                            </div>                    
                                    </div>
                                    <div className="wanted_img_wrapper">
                                        <img src={modifiedJovan} alt="modifiedAvatar" width="100%" />
                                    </div> 
                                </ContactContent>     
                            </div>      
                        </div>      
                   
                        <div className="contact_form_scroll_area">
                            <div className="contact_form_scroll_area_text_wrapper" >
                            <ContactContent 
                                    bck={scroll} 
                                    title='About' 
                                    duration={300}
                                    delay={450}>
                                    <div className="aboutTextWrapper">
                                            <h2 className="headerAbout">About</h2>
                                                <hr />
                                            <p>Hi my name is 
                                            <span style={{color : '#f84f6b'}} > Jovan. </span>i am a
                                            <span style={{color : '#f84f6b'}}> Husband, Developer, Teacher, Gamer 
                                            </span>  with a big sense of
                                            <span > humor. </span> 
                                    </p>
                                        insterested in the entire 
                                        <span style={{color : '#f84f6b'}}> frontend </span> 
                                            and  
                                        <span style={{color : '#f84f6b'}}> backend </span>  
                                        spectrum. Always eager to<span style={{color : '#f84f6b'}}> learn </span>  
                                        and     <span style={{color : '#f84f6b'}}> work </span> on
                                        abitious <span > projects </span>  with
                                         <span style={{color : '#f84f6b'}}> positive </span> people.
                                    </div>
                                
                                </ContactContent>     
                            </div>     
                        </div>  
                        <div className="contact_sign_area_projects" >
                        {
                            isDesktop ? 
                            <Flash>
                                <div className="arrow_sign_styling">
                                    <MobileSignTag link="/" imgUrl={signArrowLeft}  />
                                </div>
                               
                            </Flash>
                                    : 
                                  
                            <SignTag bck={signLeft  } link="/" padding="0 4rem 9rem 0" rotate="rotate(15deg)">  <Flash> Home     </Flash></SignTag>   
                                
                        }          
                        </div>                   
                    </div>
                </div>
            </>
        )
    }
}




export default About











