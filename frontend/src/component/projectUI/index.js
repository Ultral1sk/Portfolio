import React, {useState}         from 'react'
import {Link }                   from 'react-router-dom'
import Slide from 'react-reveal/Slide';
import arrow from '../../assets/ProjectPageAssets/arrow.png'


const ProjectIndex = () => {
    
   

   return(
    
      <div className="myWorkWrapper">
        <div  className="myWorkInnerWrapper">
            <div style={{width: '100%'}}>
          
          <Slide top>
            <div id="projectBox" className="topLeft">
                <a href="https://sport-1b2e0.firebaseapp.com/" target="_blank">SportsProject </a>
            </div>

          </Slide>
            <div className="centerLeft">
                <Link to="about">
                <img src={arrow} alt="back" />
              
                </Link>
            </div>
            <Slide bottom delay={400}>
            <div id="projectBox" className="bottomLeft">
                <a href="https://joweatherapp.netlify.app/" target="_blank">WeatherApp   </a>
            </div>
            </Slide>
            </div>
            <div  className="myProjects">
                <a> Projects </a>
            </div>
            <div style={{width: '100%'}}>
            <Slide top delay={800}>
                <div id="projectBox" className="topRight">
                    <a href="https://checkoutcardtest.netlify.app" target="_blank"> CheckoutCard </a>
               
               </div>
               </Slide>
               <div className="centerRight">
                <Link to="contact">
                <img src={arrow} alt="forward" />
                 
                </Link>
                </div>
                <Slide bottom delay={1000}>
                <div id="projectBox" className="bottomRight">
                <a href="https://github.com/Ultral1sk/gameShopFrontEnd" target="_blank"> 
                     Final Project <br /> Loading...</a>
                    
                </div>
                </Slide>
            </div>
        </div>
      

      </div>

   
   )
}

export default ProjectIndex