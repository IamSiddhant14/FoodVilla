import React from 'react'
import {Link , Outlet} from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>This is the about page</h1>
      <Outlet/>
      <Link to="/about/profile" >Profile Page</Link>
    </div>
  )
}

export default About;
