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
         
            }
      }


      
      clickHandler = () => {
            this.setState(state => ({
                  isOpen : !state.isOpen ,
 
            }))
      }
   



      render() {
            return (
                  <>
                   </>      
                  
    
            )
      }
}




export default CarouselComponent
