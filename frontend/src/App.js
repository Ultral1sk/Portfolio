import React                    from 'react';
import { Switch, Route }         from 'react-router-dom';
import  Home                    from './pages/Home';
import  About                   from './pages/About';
import  Contact                 from './pages/Contact';
import  Projects                from './pages/Projects';
import  Error                   from './pages/Error';


import './App.scss'




function App() {
    console.log(`bitch is loggin from app js FRONTEND`)
  return <div className="App">  
            <Switch>
                <Route exact path='/'         component={Home} />             
                <Route exact path='/about'    component={About} />     
                <Route exact path='/contact'  component={Contact} /> 
                <Route exact path='/projects' component={Projects} /> 
                <Route                        component={Error} />           
            </Switch>
        </div> 

}

export default App