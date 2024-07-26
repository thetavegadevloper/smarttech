import React from 'react'
import "./Home.css"

function Home() {
  return (
     <> 
 <div class='hero'>
    <video autoPlay loop muted playsInline class='back-video'>
        <source src='background.mp4' type='video/mp4'/>
        Your browser does not support the video tag.
    </video> 
    <nav> 
        <img src="logo.png" alt='' class='logo'/>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    </nav>
    <div class='content'> 
        <h1>Welcome to Smart Tech Solutions</h1>
       
    </div>
</div>
 {/* services start  */}  

       

       
     
    </>
  
  )
}

export default Home