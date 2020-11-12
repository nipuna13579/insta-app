import React from 'react';
import Feeds from '../../Components/Feeds/Feeds';
import Suggestions from '../../Components/Suggestions/Suggestion';
import './NewHome.css';

const NewHome = () =>{
    return(
        <div className='div-newhome'>

        <Suggestions />
        <Feeds />
            
        </div>
    )
}

export default NewHome;