import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css" 

function Contact() {
  return (
    <>
       <section class="contact-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form action="#" method="post">
          <div class="form-group text-left ">
            <label for="phone">Phone Number : </label>
            <input type="tel" id="phone" name="phone" class="form-control "   required/>
            <span class="icon-phone"></span>
          </div>
          <div class="form-group text-left">
            <label for="email">Email Address :</label>
            <input type="email" id="email" name="email" class="form-control"   required/>
            <span class="icon-envelope"></span>
          </div>
          <div class="form-group text-left">
            <label for="address">Address :</label>
            <input type="text" id="address" name="address" class="form-control"   required/>
            <span class="icon-map-marker"></span>
          </div>
          <div class="form-group text-left">
            <label for="hours">Hours of Operation :</label>
            <input type="text" id="hours" name="hours" class="form-control"   required/>
            <span class="icon-clock"></span>
          </div>
          <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
      </div>
       
  </div>
  </div>
</section>
       <section class="contact-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="section-title">Get in Touch</h2>
        <p class="section-subtitle">We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form action="#" method="post">
          <div class="form-group text-left ">
            <label for="phone">Phone Number : </label>
            <input type="tel" id="phone" name="phone" class="form-control "   required/>
            <span class="icon-phone"></span>
          </div>
          <div class="form-group text-left">
            <label for="email">Email Address :</label>
            <input type="email" id="email" name="email" class="form-control"   required/>
            <span class="icon-envelope"></span>
          </div>
          <div class="form-group text-left">
            <label for="address">Address :</label>
            <input type="text" id="address" name="address" class="form-control"   required/>
            <span class="icon-map-marker"></span>
          </div>
          <div class="form-group text-left">
            <label for="hours">Hours of Operation :</label>
            <input type="text" id="hours" name="hours" class="form-control"   required/>
            <span class="icon-clock"></span>
          </div>
          <button type="submit" class="btn btn-primary w-100">Submit</button>
        </form>
      </div>
       
  </div>
  </div>
</section>


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

export default Contact