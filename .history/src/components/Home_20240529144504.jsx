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
     <div className='service-container fluid bg-white'>
      <h1 className='text-center mt-5'> OUR SERVICES</h1>
      <div className='uppercon  fluid'>  
      <div className='box1  bg-white fluid'   >
      <img src="service1.jpg" alt='' className='img1'></img>
      <h3>ROOFTOP SOLUTIONS</h3>
      <p className='text-center'>We're dedicated to transforming rooftops into powerhouses of clean, renewable energy, one installation at a time.</p>
       </div>
      <div className='box1  bg-white fluid'  >
      <img src="service2.jpg" alt='' className='img1'></img>
      <h3>SOLAR POWER PLANTS</h3>
      <p className='text-center'>We're dedicated to transforming rooftops into powerhouses of clean, renewable energy, one installation at a time.</p>
       </div>
       </div>
      <div className='uppercon  fluid'>  
      <div className='box1  bg-white fluid'  >
      <img src="service3.jpg" alt='' className='img1'></img>
      <h3> HOME AUTOMATIONS</h3>
      <p className='text-center'>We're dedicated to transforming rooftops into powerhouses of clean, renewable energy, one installation at a time.</p>
       </div>
      <div className='box1  bg-white fluid'  >
      <img src="service4.jpg" alt='' className='img1'></img>
      <h3>HOME THEATRES</h3>
      <p className='text-center'>We're dedicated to transforming rooftops into powerhouses of clean, renewable energy, one installation at a time.</p>
       </div>
       </div>
       

     </div>
     <div class="faq-container ">
        <h1 class="text-warning">Frequently Asked Questions</h1>
        <br/>
        <br/>
          
        <div class="faq-item ">
          <input type="checkbox" id="faq1"/>
          <label for="faq1">How do solar panels work?</label>
          <div class="faq-content">
            <p>Solar panels work by capturing sunlight using photovoltaic cells, which convert sunlight into electricity through the photovoltaic effect. When sunlight hits the solar panels, it excites electrons in the cells, generating direct current (DC) electricity. An inverter then converts the DC electricity into alternating current (AC) electricity, which can be used to power homes and businesses.</p>
          </div>
        </div>
    
        <div class="faq-item">
          <input type="checkbox" id="faq2"/>
          <label for="faq2">What are the benefits of solar energy?</label>
          <div class="faq-content">
            <p>The benefits of solar energy include: reduction in electricity bills, long-term cost savings, reduced carbon footprint, combating climate change, increased property value, and energy independence.</p>
          </div>
        </div>
    
        <div class="faq-item">
          <input type="checkbox" id="faq3"/>
          <label for="faq3">What factors affect the efficiency of solar panels?</label>
          <div class="faq-content">
            <p>Several factors affect the efficiency of solar panels, including: the angle and orientation of the panels relative to the sun, shading from trees or buildings, weather conditions such as cloud cover and temperature, and the quality and condition of the panels and associated equipment.</p>
          </div>
        </div>
        
      </div>
    </>
  
  )
}

export default Home