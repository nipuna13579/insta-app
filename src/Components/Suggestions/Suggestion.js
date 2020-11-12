import React from 'react';
import User from '../User/User';

class Suggestions extends React.Component{
    state={
        users:null
    }

    async componentWillUpdate(){
        const resp = await fetch('http://jsonplaceholder.typicode.com/users')
        const users = await resp.json()
        
        this.setState({users})
    }

    render(){
        const {users} = this.state
        return(
            <div style={{width:'40%', alignSelf:'flex-start', display:'flex', flexDirection:'column', marginRight:'10px'}}>
                <div style={{fontWeight:'bold', color:'silver', marginBottom:'10px'}}>Suggestions</div>
                {
                    users &&
                    users.map(({...user}) => <User key={user.id} {...user}/>)
                }
            </div>
        )
    }
}

export default Suggestions;