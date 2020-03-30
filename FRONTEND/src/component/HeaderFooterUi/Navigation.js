import React from 'react'
import jovan from '../../assets/ProjectPageAssets/joker1.png'
import Wobble                from 'react-reveal/Wobble'


export const Navigation = () => {
    return (
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
            <Wobble duration={3000}>
                    <a className="greetingsLink" href="https://www.hltv.org/">Hello</a>                    
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


