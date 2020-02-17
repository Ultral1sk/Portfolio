import React, { Component }       from 'react'
import Flash                      from 'react-reveal/Flash';


import signLeft                   from '../assets/cartoonImages/signLeft.png'
import signArrowLeft              from '../assets/cartoonImages/arrowLeft.png'
import signArrowRight             from '../assets/cartoonImages/arrowRight.png'
import ContactContent               from '../component/contactUi/ContactContent'
import { SignTag, MobileSignTag } from '../component/ReusableUi/SignTag'

import modifiedJovan from '../assets/ProjectPageAssets/modifiedJoker.png'
import scroll from '../assets/backgroundImages/scroll2.png'
import react                   from '../assets/logos/react.png'
import js                         from '../assets/logos/js.png'
import css                        from '../assets/logos/css.png'
import gitHub                     from '../assets/logos/git.png'
import html                       from '../assets/logos/html.png'
import jQuery                     from '../assets/logos/jquery.png'
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
                                    <MobileSignTag link="/projects" imgUrl={signArrowLeft}  />
                                </div>
                               
                            </Flash>
                                    : 
                                  
                            <SignTag bck={signLeft} link="/projects" padding="0 5rem 9rem 0" rotate="rotate(15deg)">  <Flash> Work     </Flash></SignTag>   
                                
                        }

                        
                        </div>
                        <div className="contact_wanted_scroll_area">
                            <div className="contact_wanted_scroll_area_text_wrapper">
                                <ContactContent 
                                    bck={scroll} 
                                    title='Wanted' 
                                    duration={300}>
                                    <div className="wanted_text_wrapper">
                                    <p>Armed and Dangerous</p>
                                    <p>Wanted for heavy usage of the following weapons</p>
                                    <div className="icons_wrapper">
                                        <div>
                                            <img src={react} alt="react_logo" />
                                            <img src={redux} alt="redux_logo" width="15%"/>
                                            <img src={js}    alt="javascript_logo" width="15%" />
                                        </div>
                                        <div>
                                            <img src={jQuery} alt="react_logo" width="15%"/>
                                            <img src={html} alt="react_logo" width="15%"/>
                                            <img src={css} alt="react_logo" width="15%"/>
                                            <img src={gitHub} alt="react_logo" width="15%"/>
                                        </div>  
                                      
                                        </div>
                                       
                                    </div>
                                    <div className="wanted_img_wrapper">
                                            <img src={modifiedJovan} width="100%" />
                                        </div> 

                                </ContactContent>     
                            </div>      
                        </div>      
                   
                        <div className="contact_form_scroll_area">
                            <div className="contact_form_scroll_area_text_wrapper">
                                <ContactContent bck={scroll} delay={2000} duration={300} title="REPORT"/>          
                            </div>      
                        </div>   
                     
                 
                   
                    </div>
                </div>
        
            </>
        )
    }
}




export default About