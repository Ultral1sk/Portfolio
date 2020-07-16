import React, {useState, useEffect} from 'react'
import jovan from '../../assets/ProjectPageAssets/joker1.png'
import Wobble                from 'react-reveal/Wobble'
import { Link } from 'react-router-dom'
import signRight from '../../assets/cartoonImages/signRight.png'

export const Navigation = () => {

    const [state, setstate] = useState(true)
    
    useEffect(() => {
        setTimeout(() => setstate(!true), 3000);
       
    }, [])

 
    return (


<div className="main_wrapper">
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
                  {/* <Wobble duration={3000}> */}
                        <Link className="greetingsLink" to="https://www.hltv.org/">
                              {
                              state
                              ? 
                              <p className="timer"> HOVER</p> 
                              : 
                              'Hello' 
                              }
                        </Link>                    
                  {/* </Wobble>                                    */}
                  </div>    
            </div>
      <div className="avatar__movement__controller">
      <span className="content">
        <Wobble duration={3000}>
            <img src={jovan} alt="avatar" height="100%" width="35%" />
        </Wobble>    
        </span>
      </div>
    </div>    
    <div className="sign__wrapper">
              <Link to="about" className="sign__text">ABOUT</Link>
              <img src={signRight} className="sign__right" />
        </div>
</div>



        /* old code */
    //     <div className="item">                                       
    //     <div className="previews">
    //         <div id="preview-home" className="preview-image" >
    //             <Link className="homeLink"  to="/">Home</Link>
    //         </div>
    //         <div  id="preview-about" className="preview-image">
    //             <Link className="aboutLink" to="/about">About</Link>
    //         </div>
    //         <div id="preview-work" className="preview-image">
    //             <Link className="workLink" to="/projects">MYwork</Link>
    //         </div>
    //         <div id="preview-contact" className="preview-image">
    //             <Link className="contactLink" to="/contact">Contact</Link>
    //         </div>
    //         <div id="preview-greetings" className="preview-image">                                           
    //         <Wobble duration={3000}>
    //                 <Link className="greetingsLink" to="https://www.hltv.org/">
    //                     {
    //                     state
    //                         ? 
    //                     <p className="timer"> HOVER</p> 
    //                         : 
    //                     'Hello' 
    //                     }
    //                 </Link>                    
    //         </Wobble>                                   
    //         </div>    
    //     </div>
     
    //     <div className="content">
    //     <Wobble duration={3000}>
    //         <img src={jovan} alt="avatar" height="100%" width="35%" />
    //     </Wobble>    
    //     </div>
     
    // </div>    
    )
}


export const HomePageContent = () => {
    return (
        <div className="contentWrapper">
        <p className="content__first__paragraph">
           Hello, my name is
        </p>
        <h2 className="content--key--words name--key--word">
            Jovan Derebanoski.
        </h2>
        <p>
            I'm a  
            <span className="content--key--words"> Developer </span>
            Based in 
            <span  className="content--key--words"> Germany </span>
        </p>
        <p>
           and I build things on the Internet
        </p>
     </div>
    )
 
}


