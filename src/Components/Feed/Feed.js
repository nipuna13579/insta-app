import React from 'react';
import './Feed.css';

const Feed = ({author,download_url}) =>{
    return(
        <div className='div-feed'>
            <div style={{padding:'10px 2px', fontWeight:'bold'}}>{author}</div>
            <div style={{width:'100%',  height:'auto'}}>
                <img src={download_url} alt='' />
            </div>
        </div>
    )
}

export default Feed;