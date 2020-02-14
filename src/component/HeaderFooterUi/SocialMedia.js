import React    from 'react'
import { Link } from 'react-router-dom';

export default function SocialMedia() {
    return (
        <div className="container-fluid">
            <div className="socialMedia row p-4">
                <div>
                <Link to="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-linkedin"><i className="fa fa-linkedin"></i></Link>
                     <Link to="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-xing"><i className="fa fa-xing"></i></Link>
                      <Link to="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-github"><i className="fa fa-github-alt"></i></Link>
                       <Link to="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-google-plus"><i className="fa fa-google-plus"></i></Link>
                        <Link to="http://scripteden.com/download/eden-ui/" target="_blank" className="btn-social btn-steam"><i className="fa fa-steam"></i></Link>


                        <div>
                            <i>Copyright ©2019 Ultral1sk All Rights Reserved</i>
                        </div>
                </div>
                        
          
            </div>
        </div>
    )
}
