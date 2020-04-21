import React, {useState} from 'react'
import {Howl } from 'howler'
import theMan from '../../assets/ProjectPageAssets/Theman.mp3'


export const Sound = (props) => {

      
      let [disabled, setstate] = useState(false);
      
      const audioSound        = [{ sound : theMan, label : 'ON!'}];

      const toggle = ( ) =>  setTimeout(() => setstate(disabled = false), 3001); 
      const SoundPlay = (src) => {
            const sound = new Howl({ src });
            if   ( disabled )  return;
            else { 
                  setstate({ disabled : true});         
                  sound.play();
                  toggle()
            }             
      }
    



      const RenderButtonAndSound = () => {

            return audioSound.map((soundObj) => {    
            return <> <div className={disabled ? 'radioTxtOn' : 'radioTxtOff'}>Turn the Sound</div>                          
                        <button  
                              className="turnOnRadioButton" 
                              id="toggleButton" 
                              onClick={() => SoundPlay(soundObj.sound)} >
                              {soundObj.label}              
                        </button>
                        
                  </>
            });};
            
            return<>{RenderButtonAndSound()}</>;
    
};


export default Sound;