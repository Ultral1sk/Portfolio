import React, { Component } from 'react'
import signRight            from '../../src/assets/cartoonImages/signRight.png'
import { SignTag }          from '../component/ReusableUi/SignTag'
import Flash                from 'react-reveal'
import { Navigation, Title} from '../component/HeaderFooterUi/Navigation'


export class Home extends Component {

 
      
    render() {
        console.log(this.props);
        
        return (
            <>
                <div className="profilePicture">
                    <div className="grid">
                            <Title />
                     
                        <div className="header">
                            <div className="avatar_wrapper">
                                <div className="avatar_inner_wrapper">
                                    <Navigation />         
                                </div>     
                            </div>
                        </div>
                     

                        <div className="sidebar">
                            <SignTag link='/about' bck={signRight}  padding="1rem 0 9rem 4rem" rotate="rotate(-15deg)" >
                                <Flash> About     </Flash> 
                            </SignTag>
                        </div>            
                    </div>        
                </div>
            </>
        );
    }
}

export default Home
