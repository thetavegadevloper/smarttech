import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='hero'>
    <video autoPlay loop muted plays-inine className='back-video'>
      <source src='shorts.mp4' type='video/mp4'></source>
    </video> 
    <nav> 
     <img src="logo.png" alt='' className='logo'></img>
       <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Abour</a></li>
        <li><a href='#'>Popular Places</a></li>
        <li><a href='#'>Home</a></li>
        
       </ul>
    </nav>
    <div className='content'> 
      <h1> California</h1>
      <a href='#'> Explore</a>
    </div>
     
     
    </div>
  )
}

export default Home