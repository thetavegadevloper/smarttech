import React from 'react'
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css";

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
        <ul >
            <li><a href='home'>Home</a></li>
            <li><a href='about'>About</a></li>
            <li><a href='service'>Services</a></li>
            <li><a href='project'>Projects</a></li>
            <li><a href='contact'>Contact</a></li>
        </ul>
    </nav>
    <div className='content'> 
        <h1>Welcome to Smart Tech Solutions</h1>
       
    </div>
</div>
 {/* services start  */} 
 <h1 class="heading fadeIn mt-5" >Our Services</h1>
    
    <div class="service-container">
        <div class="service">
            <img src="service1.jpg" alt="Service 1" height="250px"/>
            <h3 >Rooftop Solutions</h3>
            <br/>
            <div class="para">   
                 <p className='text-center'> we specialize in providing cutting-edge solar rooftop solutions tailored to meet the energy needs of residential, commercial, and industrial properties. Harnessing the power of sunlight, our rooftop solar systems offer a sustainable and cost-effective alternative to traditional energy sources.</p>
            </div>
        </div>
        <div class="service">
            <img src="service2.jpg" alt="Service 2"  height="250px"/>
            <h3>Solar Power Plants</h3>
            <br/>
            <div class="para">   
                 <p> we specialize in designing, developing, and operating state-of-the-art solar power plants to meet the growing demand for clean and sustainable energy. Our solar power plants harness the abundant energy of the sun to generate electricity on a large scale, providing reliable and renewable power to communities, businesses, and utilities.</p>
            </div>
        </div>
        <div class="service">
            <img src="service3.jpg" alt="Service 2" height="250px"/>
            <h3> Luxury Home Automation</h3>
            <br/>
            <div class="para">   
             <p>We specialize in transforming residences into smart, sophisticated spaces where convenience, comfort, and control are at your fingertips. Whether you're building a new home or upgrading your existing one, our bespoke automation systems are designed to exceed your expectations.</p>
            </div>  
        </div>
        <div class="service">
            <img src="service4.jpg" alt="Service 2" height="250px"/>
            <h3>Home Theaters</h3>
            <br/>
            <div class="para">   
                <ul>
                    <li> Audio and Video Controls: Immerse yourself in superior audiovisual experience .  </li>
                    <li>  Customization : Design your dream home theatre with our expert guidance.</li>
                    <li>  Quality : High-quality equipment and intutive controls for an immersive entertainment experience.</li>
                </ul>
            </div> 
        </div>
    </div>
 {/* footer start   */}
      <footer>
  <div className='bg-dark text-white pt-5 pb-4'>
    <div className='container text-center text-md-left'>
      <div className='row text-center text-md-left'>
        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-primary'> Smart Tech Solutions</h5>
           <img src='logo2-removebg-preview.png' alt=''/>
        </div>
         
        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Quick Links</h5>
          <p><a href='#' className='text-white' style={{ textDecoration: 'none' }}>About Us</a></p>
          <p><a href='#' className='text-white' style={{ textDecoration: 'none' }}>Services</a></p>
          <p><a href='#' className='text-white' style={{ textDecoration: 'none' }}>Projects</a></p>
          <p><a href='#' className='text-white' style={{ textDecoration: 'none' }}> Contact Us</a></p>
        </div>
        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contact Us</h5>
          <p><i className='fas fa-home mr-3'></i>New York, NY 2023, US</p>
          <p><i className='fas fa-envelope mr-3'></i>info@example.com</p>
          <p><i className='fas fa-phone mr-3'></i>+1 (123) 456-7890</p>
  
        </div>
      </div>
      <hr className='mb-4'></hr>
      <div className='row align-items-center'>
        <div className='col-md-7 col-lg-8'>
          <p>Copyright @2020 All Rights Reserved by <a href='#' style={{ textDecoration: 'none' }}><strong className='text-primary'>The Providers</strong></a></p>
        </div>
        <div className='col-md-5 col-lg-4'>
          <div className='text-center text-md-right'>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-facebook'></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-twitter'></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-google-plus'></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-linkedin-in'></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-youtube'></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
 

       
     
    </>
  
  )
}

export default Home