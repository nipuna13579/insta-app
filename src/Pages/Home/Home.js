import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Profile from '../../Components/Profile/Profile';
import Explore from '../Explore/Explore';
import NewHome from '../NewHome/NewHome';

const Home = ({handleLogged}) => {
    return(
        
        <div>
            <Header  isLogged={handleLogged}/>
      
            <div>
                <Switch>
                    <Route exact path='/'  component={NewHome} />
                    <Route exact path='/explore' component={Explore} />
                    <Route path='/:username' component={Profile} />
                </Switch>
            </div>  
        </div> 
    )
}

export default Home; 