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
      <h5> welcome to the smart tech solutions</h5>
      <a href='#'> Explore</a>
    </div>
    </div>
     {/* services start  */} 
     
     <div class='service-container fluid bg-video'>
    <video autoplay loop muted playsinline class="bg-video__content">
        <source src="background.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
    </video>
    <div class='text-container'>
        <h1 class='text-center mt-5'>OUR SERVICES</h1>
        <div class='uppercon fluid'>  
            <div class='box1 bg-white '>
                <img src="service1.jpg" alt='' class='img1'></img>
                <h3>ROOFTOP SOLUTIONS</h3>
                <p class='text-center'>We're dedicated to transforming rooftops into powerhouses of clean, renewable energy, one installation at a time.</p>
            </div>
            <div class='box1 bg-white fluid'>
                <img src="service2.jpg" alt='' class='img1'></img>
                <h3>SOLAR POWER PLANTS</h3>
                <p class='text-center'>We're dedicated to transforming rooftops into powerhouses of clean, renewable energy, one installation at a time.</p>
            </div>
        </div>
        <div class='uppercon fluid'>  
            <div class='box1 bg-white fluid'>
                <img src="service3.jpg" alt='' class='img1'></img>
                <h3>HOME AUTOMATIONS</h3>
                <p class='text-center'>We're dedicated to transforming rooftops into powerhouses of clean, renewable energy, one installation at a time.</p>
            </div>
            <div class='box1 bg-white fluid'>
                <img src="service4.jpg" alt='' class='img1'></img>
                <h3>HOME THEATRES</h3>
                <p class='text-center'>We're dedicated to transforming rooftops into powerhouses of clean, renewable energy, one installation at a time.</p>
            </div>
        </div>
    </div>
</div>

       

       
     
    </>
  
  )
}

export default Home