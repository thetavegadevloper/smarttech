import React from 'react';
import "./Home.css";

function Home() {
  return (
    <div className='hero'>
      <video autoPlay loop muted playsInline className='back-video'>
        <source src={require('./background.mp4')} type='video/mp4'/>
        Your browser does not support the video tag.
      </video>
      <nav> 
        <img src={require('./logo.png')} alt='' className='logo'/>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <div className='content'> 
        <h1>Welcome to Smart Tech Solutions</h1>
      </div>
    </div>
  );
}
 
export default Home;
