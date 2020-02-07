import React, { Component } from 'react'
import jovan from '../assets/ProjectPageAssets/joker1.png'
import sign from '../../src/assets/cartoonImages/sign1.png'

import { SignTag } from '../component/ReusableUi/SignTag'


import { Link } from 'react-router-dom'
export class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            mouseOver : false,
      
        }
    }

    mouseOver = () => {
        this.setState(state => ({
            mouseOver : !state.mouseOver
        }))
        console.log('rendering')
        
    }


    
      
    render() {
        console.log(this.props);
        
        return (
            <>
             <div className="profilePicture">
            <div className="grid">
                <div className="title">
                    <div className="hello_wrapper">
                        <h2>Hello, my name is </h2>  
                            <h1 className="name_wrapper"> Jovan Derebanoski </h1>
                      
                        <h2>I'm a 
                            <span className="name_wrapper">&nbsp;
                                Developer
                            </span> &nbsp;
                                Based in 
                            <span className="name_wrapper">&nbsp;
                                Germany
                            </span>
                        </h2>
                        <h2>I build things on the Internet</h2>
                    </div>
                </div>
                <div className="header">
                    <div className="avatar_wrapper">
                        <div className="avatar_inner_wrapper">
                            <div className="item">  
                                <div className="previews">
                                    <div id="preview-home" className="preview-image" >
                                        <a className="homeLink"  href="/">Home</a>
                                    </div>
                                    <div  id="preview-about" className="preview-image">
                                        <a className="aboutLink" href="/about">About</a>
                                    </div>
                                    <div id="preview-work" className="preview-image">
                                        <a className="workLink" href="/projects">MYwork</a>
                                    </div>
                                    <div id="preview-contact" className="preview-image">
                                        <a className="contactLink" href="/contact">Contact</a>
                                    </div>
                                    <div id="preview-greetings" className="preview-image">
                                        <a className="greetingsLink" href="https://www.hltv.org/">Hello</a>
                                    </div>
                                </div>
                                <div className="content">
                                    <img src={jovan} height="100%" width="35%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar">
                    <SignTag link='/about'>
                        About
                    </SignTag>
                </div>
              
              
            </div>
        
          
              
            

                
            </div>

            
       
  
            

            </>
        )
    }
}

export default Home
