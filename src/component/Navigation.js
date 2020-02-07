import React, { Component } from 'react'
import { Link }  from 'react-router-dom'


class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleClass : false
        };
     
    } 

    openNav = () => {
        
        this.setState( state => ({
            toggleClass : !state.toggleClass
        }));
    }


    render() {
        return (
          <div>
            <div className="hamburgerWrapper">
                <span className="hamburger" onClick={this.openNav}>&#9776; </span>
            </div>   

            <div className = {this.state.toggleClass ? "overlay-top" : "overlay"} >
              
                <div className = "topNav-container" onClick={this.openNav}>             
                    <Link className="closebtn">   ×   </Link>
                        <div className = "overlay-content">    
                                                         
                            <Link  to="/">Home</Link>
                            <Link  to="/about">About</Link>
                            <Link  to="/projects">Projects</Link>
                            <Link  to="/contact">Contact</Link>

                        </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Navigation