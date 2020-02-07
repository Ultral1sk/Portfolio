import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Carousel  from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Fade from 'react-reveal/Fade';
import barabar from '../../assets/ProjectPageAssets/Barabar.jpg'
import ecommerce from '../../assets/ProjectPageAssets/ecommerce.jpg'
import heat from '../../assets/ProjectPageAssets/heat.jpg'
import camera from '../../assets/cartoonImages/camera.png';


const LinkStyling = {
      width : '100%',
      color : 'white',
      textAlign : 'center',

}


class CarouselComponent extends Component {
      constructor(props) {
            super(props)
      
            this.state = {
                  isOpen : false,
                  hideFilm : false,
                  isHovered : false
            }
      }


      
      clickHandler = () => {
            this.setState(state => ({
                  isOpen : !state.isOpen ,
 
            }))
      }
      hoverHandler = () => {
            this.setState(state => ({
                  isHovered : !state.isHovered
            }))
      }



      render() {
            return (
       
                         
                  <div className="projects_inner_wrapper">

                        <div>
                              <h2 className="work_container">Jovan's Record</h2>
                        </div>         
                        <Fade>

                     
                              <div 
                                    className={this.state.isOpen ? '' : "carousel_wrapper"  }
                                    style={{ width: "50%" }}
                              >
                              
                                    <Carousel 
                                       
                                          slidesPerPage={2}
                                          infinite
                                          keepDirectionWhenDragging
                                    >
                                          <div className="carousel_img_wrapper"  >
                                                <Link 
                                                      style={{LinkStyling}}
                                                      onMouseOver={this.hoverHandler} 
                                                      onMouseLeave={this.hoverHandler}  
                                                      className={this.state.isHovered ? 
                                                      'carousel_inside_containerOn' 
                                                      : 
                                                      'carousel_inside_containerOff'}
                                                >
                                                      Barabar <br />
                                                      Project
                                                </Link>  
                                                <img src={barabar} width="80%"  height="80%"/>
                                          </div>
                                          <div className="carousel_img_wrapper">
                                                <Link
                                                      onMouseOver={this.hoverHandler} 
                                                      onMouseLeave={this.hoverHandler}  
                                                      className={this.state.isHovered ? 
                                                      'carousel_inside_containerOn' 
                                                      : 
                                                      'carousel_inside_containerOff'}
                                                >
                                                      Ecommerce <br />
                                                      Project
                                                </Link>
                                                <img src={ecommerce} width="80%"  height="80%"/>
                                          </div>
                                          <div className="carousel_img_wrapper">
                                                <Link
                                                      onMouseOver={this.hoverHandler} 
                                                      onMouseLeave={this.hoverHandler}  
                                                      className={this.state.isHovered ? 
                                                      'carousel_inside_containerOn' 
                                                      : 
                                                      'carousel_inside_containerOff'}
                                                >
                                                      Sport Blog <br />
                                                      Project
                                                </Link>
                                                <img src={heat} width="80%"  height="80%"/>
                                          </div>
                                    </Carousel>
                              </div>
                        </Fade>
                              
                        <div onClick={this.clickHandler} style={{'padding' : '2rem', "cursor" : 'pointer' }}>         
                              <div style={{'paddingBottom' : '2rem'}}>
                                    <button className="play_button">{this.state.isOpen ? 'STOP!' : 'PLAY!'}</button>
                              </div>               
                        </div>

                  </div>
      

    
            )
      }
}




export default CarouselComponent
