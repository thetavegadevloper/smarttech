import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css" 

function Contact() {
  return (
    <>
        {/* header start  */}
        <div class="custom-container">
    
    <nav class="navbar">
        <div class="logo">
             
            <img src="logo.png " alt="Logo"/>
        </div>
        <ul class="pages">
                <li><a href="home">HOME</a></li>
            <li><a href="about">ABOUT</a></li>
            <li><a href="service">SERVICES</a></li>
            <li><a href="project">PROJECTS</a></li>
            <li><a href="contact">CONTACT</a></li>
        </ul>
    </nav>
    
    
    <img src="contacthead.jpg" alt="Image"/>
    <div class="custom-tagline">" "Illuminate Your World with Clean, Green Solar Power!""</div>
</div>
{/* header end  */}

<section class="contact-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="text-center text-warning">Get in Touch</h2>
        <p class="section-subtitle">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <form action="#" method="post">
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" class="form-control" required/>
          </div>
          <div class="form-group">
            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" class="form-control" required/>
          </div>
          <div class="form-group">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" class="form-control" required/>
          </div>
          <div class="form-group">
            <label for="hours">Hours of Operation:</label>
            <input type="text" id="hours" name="hours" class="form-control" required/>
          </div>
          <button type="submit" class="btn btn-warning w-100">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="contact-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="text-center text-warning">Get a Free Quote</h2>
        <p class="section-subtitle">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <form action="#" method="post">
          <div class="form-group">
            <label for="name" class="form-label">Name:</label>
            <input type="text" id="name" name="name" class="form-control" required/>
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email Address:</label>
            <input type="email" id="email" name="email" class="form-control" required/>
          </div>
          <div class="form-group">
            <label for="phone" class="form-label">Phone Number:</label>
            <input type="tel" id="phone" name="phone" class="form-control" required/>
          </div>
          <div class="form-group">
            <label for="service" class="form-label">Select a Service:</label>
            <select id="service" name="service" class="form-control" required>
              <option value="">Select a service</option>
              <option value="solar-panel-installation">Solar Panel Installation</option>
              <option value="solar-panel-maintenance">Solar Panel Maintenance</option>
              <option value="solar-panel-repair">Solar Panel Repair</option>
              <option value="energy-audit">Energy Audit</option>
              <option value="other">Other (please specify)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="special-note" class="form-label">Special Note:</label>
            <textarea id="special-note" name="special-note" class="form-control"></textarea>
          </div>
          <button type="submit" class="btn btn-warning w-100">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>

 
        
 
{/* quote end  */}
{/* location start   */}
<section className="location-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="text-center text-success">Our Location</h2>
          <p className="section-subtitle">Visit us at our office location or contact us for more information.</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="location-map">
            {/* <!-- <iframe src="https://www.google.com/maps/embed?..." width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> --> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.5099127576354!2d75.35455724356142!3d19.873313825200682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3447ac68fcb%3A0x288db97cca822a00!2sThetaVega%20Tech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1717530581545!5m2!1sen!2sin" width="100%" height="400" style={{borderRadius :" 20px "}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
 
        </div>
      </div>
    </div>
  </section>
  {/* location end  */}

  <footer>
  <div className='bg-dark text-white pt-5 pb-4'>
    <div className='container text-center text-md-left'>
      <div className='row text-center text-md-left'>
        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-success'> Smart Tech Solutions</h5>
           <img src='logo2-removebg-preview.png' alt=''/>
        </div>    
        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-success'>Quick Links</h5>
          <p><a href='home' className='text-white' style={{ textDecoration: 'none' }}> HOME </a></p>
          <p><a href='about' className='text-white' style={{ textDecoration: 'none' }}>ABOUT US </a></p>
          <p><a href='service' className='text-white' style={{ textDecoration: 'none' }}>SERVICES</a></p>
          <p><a href='project' className='text-white' style={{ textDecoration: 'none' }}>PROJECTS</a></p>
          {/* <p><a href='contact' className='text-white' style={{ textDecoration: 'none' }}> Contact Us</a></p> */}
        </div>
        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-success'>Contact Us</h5>
          <p><i className='fas fa-home mr-3'></i>New York, NY 2023, US</p>
          <p><i className='fas fa-envelope mr-3'></i>info@example.com</p>
          <p><i className='fas fa-phone mr-3'></i>+1 (123) 456-7890</p>
        </div>
      </div>
      <hr className='mb-4'></hr>
      <div className='row align-items-center'>
        <div className='col-md-7 col-lg-8'>
          <p>Copyright @2020 All Rights Reserved by <a href='#' style={{ textDecoration: 'none' }}><strong className='text-success'>The Providers</strong></a></p>
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

export default Contact