import React from 'react'
import "./Home.css"

function Home() {
  return (
     <> 
    <div className='hero'>
    <video autoPlay loop muted plays-inine className='back-video'>
      <source src='shorts.mp4' type='video/mp4'></source>
    </video> 
    <nav> 
     <img src="logo.png" alt='' className='logo'></img>
       <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Projects</a></li>
        <li><a href='#'>Contact</a></li>
        
       </ul>
    </nav>
    <div className='content'> 
      <h1> California</h1>
      <a href='#'> Explore</a>
    </div>
    </div>
     {/* services start  */}
     <div className='service-container fluid bg-light'> 
      

     </div>
    </>
  
  )
}

export default Home