import React, { Component }      from 'react';
import ProjectTemplateItem       from '../component/ProjectTemplateItem';
import SocialMedial              from '../component/SocialMedia';
import CarouselComponent from '../component/Carousel/Carousel'
import { Link } from 'react-router-dom'







// const portfolio = [
//     {projectNumber : 2, title : 'Sneaker Store',       imgDescription : 'Shoe Store Project',   origin : 'Europe',        websiteLinks : ''},
//     {projectNumber : 3, title : 'BarABar',             imgDescription : 'Lounge Bar Project',   origin : 'Macedonia',    websiteLinks : ''},
//     {projectNumber : 4, title : 'Ecommerce Store',     imgDescription : 'Unique Clothes Store', origin : 'Europe',         websiteLinks : ''},
//     {projectNumber : 1, title : 'My Portfolio',        imgDescription : 'Portfolio Project',    origin : 'Germany',      websiteLinks : ''},
// ]





export class Projects extends Component {

    
    render() {
        return (
            <>
                <div className="myWorkBackgroundImage">
                    <div className="projects_wrapper">
                        <div className="project_controller">
                            <div> <Link to="/about">IN!</Link> </div>
                                <CarouselComponent />
                            <div> <Link to="/contact">OUT!</Link> </div>
                        </div> 
                    </div> 
                </div> 
                     
            </>         
        )
    }
}

export default Projects




                
{/*             
        
                    <section id="">  
                    
                        {
                            portfolio.map((item, index) => {
                                return <ProjectTemplateItem {...item} key={index} />
                            })
                        }
                
                    </section> */}
                        
