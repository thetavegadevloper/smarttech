 
import "bootstrap/dist/css/bootstrap.min.css";  
import "./Service.css"
function Service() {
  return (
    <> 
    {/* service start  */}
    <section class="custom-services-section">
    <div class="container">
      <h2 class="custom-section-title">Our Custom Services</h2>
      <div class="row">
        <div class="col-md-12">
          <div class="custom-service-container">
            <img src="Aboutus.jpg" alt="Service 1" class="custom-service-image"/>
            <div class="custom-service-text">
              <h3 class="custom-service-title">Custom Service 1</h3>
              <ul class="custom-service-points">
                <li>Design and installation: Tailored Solutions for residential, commercial, and industrial consumers.</li>
                <li>Business Models: Choose between OPEX (Operating Expense) and Capex (Capital Expense) Models.</li>
                <li>Benefits: Cost savings, energy independence, and environmental impact.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="custom-service-container">
            <img src="service2.jpg" alt="Service 2" class="custom-service-image"/>
            <div class="custom-service-text">
              <h3 class="custom-service-title">Custom Service 2</h3>
              <ul class="custom-service-points">
                <li>Design and Installation: Comprehensive solutions for solar power generation.</li>
                <li>Operation and Maintenance: Ensuring optimal performance and longevity.</li>
                <li>Case Studies/Testimonials: Showcase successful projects and satisfied clients.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="custom-service-container">
            <img src="service3.jpg" alt="Service 3" class="custom-service-image"/>
            <div class="custom-service-text">
              <h3 class="custom-service-title">Custom Service 3</h3>
              <ul class="custom-service-points">
                <li>Features: Control lighting, temperature, security, and entertainment system seamlessly.</li>
                <li>Integration: Customizable solutions to fit your lifestyle and preferences.</li>
                <li>Benefits: Convenience, energy efficiency, and enhanced living experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="custom-service-container">
            <img src="service4.jpg" alt="Service 4" class="custom-service-image"/>
            <div class="custom-service-text">
              <h3 class="custom-service-title">Custom Service 4</h3>
              <ul class="custom-service-points">
                <li>Audio and Video Controls: Immerse yourself in superior audiovisual experience.</li>
                <li>Customization: Design your dream home theatre with our expert guidance.</li>
                <li>Quality: High-quality and intuitive controls for an immersive entertainment experience.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* service end  */}
  
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

export default Service