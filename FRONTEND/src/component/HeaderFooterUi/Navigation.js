import React, {useState} from 'react'
import jovan from '../../assets/ProjectPageAssets/joker1.png'
import Wobble                from 'react-reveal/Wobble'
import { Link } from 'react-router-dom'

export const Navigation = () => {

    
        
       
    return (
        <div className="item">                                       
        <div className="previews">
            <div id="preview-home" className="preview-image" >
                <Link className="homeLink"  to="/">Home</Link>
            </div>
            <div  id="preview-about" className="preview-image">
                <Link className="aboutLink" to="/about">About</Link>
            </div>
            <div id="preview-work" className="preview-image">
                <Link className="workLink" to="/projects">MYwork</Link>
            </div>
            <div id="preview-contact" className="preview-image">
                <Link className="contactLink" to="/contact">Contact</Link>
            </div>
            <div id="preview-greetings" className="preview-image">                                           
            <Wobble duration={3000}>
                    <Link className="greetingsLink" to="https://www.hltv.org/">Hello</Link>                    
            </Wobble>                                   
            </div>    
        </div>
     
        <div className="content">
        <Wobble duration={3000}>
            <img src={jovan} alt="avatar" height="100%" width="35%" />
        </Wobble>    
        </div>
     
    </div>    
    )
}


export const Title = () => {
    return (
        <div className="title">
            <div className="hello_wrapper">
                <h2>Hello, my name is </h2>  
                    <h1 className="name_wrapper"> Jovan Derebanoski. </h1>       
                <h2>I'm a 
                    <span className="name_wrapper">&nbsp;
                        Developer
                    </span> &nbsp;
                        Based in 
                    <span className="name_wrapper">&nbsp;
                        Germany
                    </span>
                </h2>
                <h2>and I build things on the Internet</h2>
            </div>
        </div>
    )
 
}


