import React from 'react'
import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Series</h2>

      <User name ={"Shubham Kumar (function)"} location = {"Ghaziabad (function)"} />

      <UserClass name ={"Shubham Kumar (Class)"} location = {"Ghaziabad (class)" } />
    </div>

    
  )
}

export default About;