import React, {useState} from 'react'
import {Howl } from 'howler'
import theMan from '../../assets/ProjectPageAssets/Theman.mp3'
import arrow from '../../assets/ProjectPageAssets/arrow.png'


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
            return <> <div onClick={() => SoundPlay(soundObj.sound)}>
                          <img src={arrow}  />
             
                        </div>                          
                     
                  </>
            });};
            
            return<>{RenderButtonAndSound()}</>;
    
};


export default Sound;