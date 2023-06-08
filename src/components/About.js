import React from 'react'
import {Link , Outlet} from 'react-router-dom';
import  Profileclass  from './ProfileClass';

const About = () => {
  return (
    <div>
      <h1>This is the about page</h1>
      <Outlet/>
      <Profileclass name={"Siddhant"}/>
      <Link to="/about/profile" >Link To Profile Page(Functional component )</Link>
    </div>
  )
}

export default About;
