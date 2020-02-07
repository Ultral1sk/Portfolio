import React, { Component }   from 'react'
import        { Link }        from 'react-router-dom';


export class ProjectTemplateItem extends Component {
    render() {
        return (
                <>                     
                    {/* <article className="project-Wrapper">
                    
                    
                   
                            <Link to={this.props.websiteLinks}>           
                            <div className="image-Container">        
                                <img     alt={this.props.imgDescription} className="image-Container" />
                                <div className="image-Overlay">
                                    <div className="text">{this.props.title}</div>
                                </div>
                            </div>
                            </Link> 
                                <br />
                                <br /> 
                            <span className="project-Description">Project Origin - <b>{this.props.origin}</b></span>
                 
                    </article>      */}
                </>  
        );
    }
}

export default ProjectTemplateItem
