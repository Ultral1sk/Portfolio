import React            from 'react'
import backgroundImg    from '../assets/backgroundImages/test1.png'

const WrapperBackground = {
      display: "flex",
      fontFamily: 'Bangers, cursive',
      background: `url(${backgroundImg})`,
      backgroundPosition: 'bottom', /* Center the image */
      backgroundRepeat: 'no-repeat', /* Do not repeat the image */
      border : '15px solid black',
      width: '100%',
      height: '100vh'
}

const Wrapper = (props) => {
      return (
            <div style={{...WrapperBackground}}>
                  
                  {props.children}

            </div>
      )
}


export default Wrapper