import React, { Component }       from 'react'
import Flash                      from 'react-reveal/Flash';


import signLeft                   from '../assets/cartoonImages/signLeft.png'
import signArrowLeft              from '../assets/cartoonImages/arrowLeft.png'

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
import mongodb                     from '../assets/logos/mongo.png'
import express                      from '../assets/logos/express.png'
import node                      from '../assets/logos/node.png'

import git                      from '../assets/logos/pair/git.png'
import xing                      from '../assets/logos/pair/xing.png'
import linked                      from '../assets/logos/pair/linked.png'



import axios                      from 'axios'

export class About extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isDesktop: false, //This is where I am having problems
            name : '',
            email : '',
            message : '',
            successMessage : '',
            
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


    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
    }

    //talking to the backend through axios
    submitHandler = async (e) => {
        e.preventDefault()
        const { email, name, message} = this.state

        if( email, name, message === '') {
            this.setState({ successMessage : this.state.successMessage = 'complete the report ' })
            setTimeout(() => this.setState({ successMessage : this.state.successMessage = ''}), 3000);
            

        } else {
            await axios.post('/contact', {
                name,
                email,
                message
            });
        }
      

    }




    render() {
        const isDesktop = this.state.isDesktop;
        console.log(this.state)

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
                                                    <img src={html}      alt="html_logo" width="20%"/>
                                                    <img src={css}       alt="css_logo" width="20%"/>
                                                    <img src={bootstrap} alt="bootstrap" width="15%"/>
                                                    <img src={js}        alt="javascript_logo" width="20%" />
                                                    <img src={jQuery}    alt="jquery_logo" width="20%"/>

                                                </div>
                                                <div>
                                                    <img src={react}     alt="react_logo" width="25%"/>
                                                    <img src={redux}     alt="redux_logo" width="20%"/>
                                                    <img src={node}      alt="nodejs_logo" width="20%"/>
                                                    <img src={express}   alt="express_logo" width="15%"/>
                                                    <img src={mongodb}   alt="mongodb_logo" width="20%"/>
                                        
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
                            <div className="contact_form_scroll_area_text_wrapper">
                                <ContactContent 
                                    bck={scroll} 
                                    delay={2000} 
                                    duration={300} 
                                    title="REPORT"
                                >
                                {this.state.successMessage}
                                <form onSubmit={this.submitHandler}>
                                    <div style={{ display : 'flex', justifyContent : 'flexStart', alignItems : 'center'}} >
                                        <a href="https://github.com/Ultral1sk" style={{padding : '3rem 1rem 0 0rem'}}>
                                            <img src={git} width="50px" />
                                        </a>
                                            <input 
                                                    onChange={this.changeHandler} 
                                                    className="input_styles" 
                                                    type="text"
                                                    name="name" 
                                                    value={this.state.name}
                                                    placeholder="name" />
                                            
                                    </div>                  
                                    <div style={{ display : 'flex', justifyContent : 'flexStart', alignItems : 'center'}}>
                                        <a href="https://www.linkedin.com/in/jovan-derebanoski-7a053b153/" style={{padding : '3rem 1rem 0 0rem'}}>
                                            <img src={linked} width="50px" />
                                        </a>   
                                            <input 
                                                onChange={this.changeHandler} 
                                                className="input_styles" 
                                                type="email" 
                                                name="email" 
                                                value={this.state.email}
                                                placeholder="email" />

                                    </div>      
                                    <div style={{ display : 'flex', justifyContent : 'flexStart', alignItems : 'center'}}>
                                        <a href="https://www.xing.com/profile/Jovan_Derebanoski/cv" style={{padding : '1rem 1rem 0 0rem'}}>
                                            <img src={xing} width="50px" />
                                        </a>
                                            <textarea  
                                                onChange={this.changeHandler} 
                                                type="text"
                                                name="message"
                                                value={this.state.message}
                                                placeholder="Contact / Comment" 
                                                type="text">
                                            </textarea> 
                                    </div>    
                                    <br />
                                    <button type="submit">Submit</button>
                                   
                                </form>
                               
                                </ContactContent>   
                            </div>     
                        </div>                     
                    </div>
                </div>
            </>
        )
    }
}




export default About