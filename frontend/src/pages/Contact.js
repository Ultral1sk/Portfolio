import React, { Component }       from 'react'
import Flash                      from 'react-reveal/Flash';

import signLeft                   from '../assets/cartoonImages/signLeft.png'
import signArrowLeft              from '../assets/cartoonImages/arrowLeft.png'
import AboutContent               from '../component/aboutUI/AboutContent'
import { SignTag, MobileSignTag } from '../component/ReusableUi/SignTag'
import git                      from '../assets/logos/pair/git.png'
import xing                      from '../assets/logos/pair/xing.png'
import linked                      from '../assets/logos/pair/linked.png'
import scroll from '../assets/backgroundImages/scroll2.png'
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
            errorMessage : '',
            isSent : false,
            isChecked : false,
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
        this.setState({ isDesktop: window.innerWidth < 1280 });
      }


    changeHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name] : e.target.value})
      
   
    }
    
    clickHandler = () =>  this.setState({ isChecked : !this.state.isChecked});

    //talking to the backend through axios
    submitHandler = (e) => {
        e.preventDefault()
        const { name,  email , message, isChecked } = this.state

        switch (name, email, message, isChecked) {
            case (isChecked === false && name === undefined  && email === undefined &&  message === undefined  )
            :
                this.setState({ successMessage : this.state.errorMessage = 'Complete the Report  ' })
                setTimeout(() => this.setState({  isSent : false, isChecked : false, errorMessage : this.state.errorMessage = ''}), 3000);
            break;
            case (isChecked === true && name === '' ||  email === '' ||  message === '' )
                :
                 this.setState({ successMessage : this.state.errorMessage = 'Complete the Report  ' })
                 setTimeout(() => this.setState({  isSent : false, isChecked : false, errorMessage : this.state.errorMessage = ''}), 3000);
            break;
          
            case (isChecked === false && name !== undefined  && email !== undefined &&  message !== undefined  )
            :
                this.setState({ successMessage : this.state.errorMessage = 'Complete the Report  ' })
                setTimeout(() => this.setState({  isSent : false, isChecked : false, errorMessage : this.state.errorMessage = ''}), 3000);
            break;

           
            default:
                axios.post('/contact', { name, email, message })
                .then(res => {
                    console.log(res)
                    if( res.status === 200 && isChecked === true ){          
                    this.setState({ email : '' , name : '', message : '', isSent : true, isChecked : false, successMessage: 'Message Sent'}) 
                    setTimeout(() =>  this.setState({successMessage: ''}), 3000);             
                }   
                
            }).catch(err => {
                return  err
            })
                break;
        }

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
                                <MobileSignTag link="/projects" imgUrl={signArrowLeft}  />
                            </Flash>
                                    : 
                                  
                            <SignTag bck={signLeft} link="/projects" padding="0 5rem 9rem 0" rotate="rotate(15deg)">  <Flash> Projects     </Flash></SignTag>   
                                
                        }

                        
                        </div>
                   
                        <div className="scroll_area">
                            <div className="scroll_area_text_wrapper">
                              <AboutContent 
                                bck={scroll} 
                                delay={2000} 
                                duration={500} 
                                title="REPORT"
                                >
                                { 
                                this.state.isSent && this.state.isChecked === false
                                ? 
                                <p style={{color : 'green'}}>{this.state.successMessage }</p> 
                                : 
                                <p style={{color : 'red'}}>{ this.state.errorMessage }</p>

}

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
                                        id="textarea" 
                                            onChange={this.changeHandler} 
                                            type="text"
                                            name="message"
                                            value={this.state.message}
                                            placeholder="Contact / Comment" 
                                            >
                                        </textarea> 
                                </div>

                                    <span className="center" style={{marginTop : '2rem'}}>
                                            <label className="label" >
                                                <input  className="label__checkbox"    
                                                        style={{ backgroundColor : 'green' }}
                                                        type="checkbox"
                                                        name="isChecked"
                                                        checked={this.state.isChecked}
                                                        onClick={this.clickHandler}
                                                        /> 
                                                <span className="label__text">
                                                <span className="label__check">
                                                    <i id="checkboxIcon" className="fa fa-check icon"></i>
                                                </span>
                                                </span>
                                            </label>                          
                                        </span>              

                                    <button style={{marginTop : '2rem'}} type="submit">Submit</button>
                                

                                </form>

                                </AboutContent>       
                            </div>      
                        </div>   
                     
                
                    </div>
                </div>
      
            </>
        )
    }
}
export default About

