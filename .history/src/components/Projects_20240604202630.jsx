 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Project.css"

function Projects() {
  return (
    <>
    {/* project start  */}
    <div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
        <h6 className="text-warning">Our Projects</h6>
        <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
    </div>
  <div id="carouselExampleDark" className="carousel carousel-white87\ slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="service1.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">First slide label</h5>
          <p className="text-white">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="service1.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">Second slide label</h5>
          <p className="text-white">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="service1.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">Third slide label</h5>
          <p className="text-white">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden text-white">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden text-white">Next</span>
    </button>
  </div>
</div>
 
{/* project end  */}
{/* testimonial start  */}
<div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                    <h6 class="text-warning">Testimonial</h6>
                    <h1 class="mb-4">What Our Clients Say!</h1>
                </div>
                <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <div class="testimonial-item text-center">
                        <div class="testimonial-img position-relative">
                            <img class="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-1.jpg"/>
                            <div class="btn-square bg-warning rounded-circle">
                                <i class="fa fa-quote-left text-white  "></i>
                            </div>
                        </div>
                        <div class="testimonial-text text-center rounded p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 class="mb-1">Client Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div class="testimonial-item text-center">
                        <div class="testimonial-img position-relative">
                            <img class="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-2.jpg"/>
                            <div class="btn-square bg-warning rounded-circle">
                                <i class="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div class="testimonial-text text-center rounded p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 class="mb-1">Client Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div class="testimonial-item text-center">
                        <div class="testimonial-img position-relative">
                            <img class="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-3.jpg"/>
                            <div class="btn-square bg-warning rounded-circle">
                                <i class="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div class="testimonial-text text-center rounded p-4">
                            <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h5 class="mb-1">Client Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Testimonial End -->

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

export default Projects