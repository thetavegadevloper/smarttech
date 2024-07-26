 
import "bootstrap/dist/css/bootstrap.min.css";  
import "./About.css"

function About() {
  return (
    <> 
    <div class="custom-container">
    <img src="Aboutus.jpg" alt="Image"/>
    <div class="custom-tagline">Your Tagline Here</div>
  </div>
  
     {/* about us start  */}
     <section class="about-us-section">
    <div class="about-us-overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 class="about-us-title">About Us</h2>
            <p class="about-us-description">Who Are We : Smart Tech Solutions is a leading provider of technology solutions specializing in renewable energy and smart automation. with team of experienced professionals and a passion for innovation , we strive to deliver top-notch services tailored to our clients needs </p>
            <a href="#" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about us end  */}
  {/* values start  */}
  <div class="container-fluid">
      <div class="container">
        <h3 class="text-center text-warning"> Our Values</h3>
        <br/>
        <br/>
        <div class="row">
          <div class="col-md-4">
            <div class="card rounded-container ">
              <img src="3726696.jpg" class="card-img-top " alt="Image 1"/>
              <br/>
              <div class="card-body text-center">
                <h5 class="card-title">SUSTAINABILITY</h5>
                <p class="card-text"> We Prioritize Eco-Friendly solutions for a greener future.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card rounded-container">
              <img src="award_ribbon_check_mark_with_stars_gradient_style.jpg" class="card-img-top" alt="Image 2"/>
              <br/>
              <div class="card-body text-center">
                <h5 class="card-title">QUALITY</h5>
                <p class="card-text"> Our Commitment to excellence ensures reliable and efficient systems.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card rounded-container">
              <img src="5374800.jpg" class="card-img-top" alt="Image 3"/>
              <br/>
              <div class="card-body text-center">
                <h5 class="card-title"> CUSTOMER SATISFACTION</h5>
                <p class="card-text"> your Satisfaction is our priority, driving us to deliver exceptional results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     
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

export default About