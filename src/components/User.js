import {useState} from 'react';

const User = ({name,location}) => {

    const[count] = useState(0);
    const[count2] = useState(1);
    
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count 2 = {count2}</h1>
            <h2>Name: {name}</h2>
            <h4>Contact: 7303411297</h4>
            <h3>Location: {location}</h3>
        </div>
        
    )
}

export default User;

