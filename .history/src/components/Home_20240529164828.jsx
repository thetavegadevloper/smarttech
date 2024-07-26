import React from 'react'
import "./Home.css"

function Home() {
  return (
     <> 
 <div className='hero'>
    <video autoPlay loop muted playsInline className='back-video'>
        <source src='background.mp4' type='video/mp4'/>
        Your browser does not support the video tag.
    </video> 
    <nav> 
        <img src="logo.png" alt='' className='logo'/>
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
 {/* services start  */} 
 {/* footer start   */}
 <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6 text-white">
                    <h5 class="text-white mb-4">Address</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                     
                </div>
                <div class="col-lg-3 col-md-6  ">
                    <h5 class="text-white mb-4">Quick Links</h5>
                    <a class="btn btn-link text-white" href="about.html">About Us</a>
                    <a class="btn btn-link text-white" href="contact.html">Contact Us</a>
                    <a class="btn btn-link text-white" href="service.html">Our Services</a>
                    <a class="btn btn-link text-white" href="project.html">Project/Portfolio</a>
                    <a class="btn btn-link text-white" href="">Support</a>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white">
                        &copy; <a href="#">Smart Tech Solutions</a>, All Right Reserved.
                    </div>
      
                </div>
            </div>
        </div>
      </div>
       

       
     
    </>
  
  )
}

export default Home