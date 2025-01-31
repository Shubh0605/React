import React from 'react';
class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        count: 0,
        count2: 2
    };
 }
    render(){
        const {name, location} = this.props;
        const {count,count2} = this.state;
        return(
            <div className="user-card">
                <h1>Count: {count}</h1>
                <h1>Count 2: {count2}</h1>
                <button onClick={() => {
                    //never update state variables directly
                    this.setState({count: count + 1, count2: count2 + 1});
                    

                }}>Count Inc</button>
            
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: 7303411297</h4>
        </div>

        )
    }
}
export default UserClass;