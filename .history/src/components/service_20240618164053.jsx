 
import "bootstrap/dist/css/bootstrap.min.css";  
import project1 from '../img/project1.jpg'
import project2 from '../img/project2.jpg'
import project3 from '../img/project3.jpg'
import project4 from '../img/project4.jpg'
import project5 from '../img/project5.jpg'
import project6 from '../img/project6.jpg'
import testimonial1 from '../img/testmonial-1.jpg'
import testimonial2 from '../img/testmonial-2.jpg'
import testimonial3 from '../img/testmonial-3.jpg'

 
function Service() {
  return (
    <> 
         
    {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-warning" style={{width : "3rem" ,   height : "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>  */}
    {/* <!-- Spinner End --> */}

 

    {/* <!-- Navbar Start --> */}
    <nav className="custom-navbar navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="#"><img src="logo.png" alt="Logo" height="60px"/></a>
      
          {/* <!-- Offcanvas Menu --> */}
          <div className="custom-offcanvas offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link mx-lg-2  text-gray" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2 active" href="">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="project.html">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
      
          {/* <!-- Get a Quote Button --> */}
          <a href="contact.html" className="custom-login-button text-white">Get a Quote</a>
      
          {/* <!-- Navbar Toggler (for small screens) --> */}
          <button className="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>
      
    {/* <!-- Navbar End --> */}

       
    {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5">
      <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown" style="font-weight: bold;">Services</h1>
          
      </div>
  </div>
  {/* <!-- Page Header End --> */}


  {/* <!-- Service Start --> */}
  <div class="container-xxl py-5">
      <div class="container">
          <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth : "600px"}}>
              <h6 class="text-warning">Our Services</h6>
              <h1 class="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
          </div>
          <div class="row g-4">
              <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="service-item  overflow-hidden">
                      <img class="img-fluid" src={project1} alt="" />
                      <div class="position-relative p-4 pt-0">
                          <div class="service-icon">
                              <i class="fa fa-solar-panel fa-3x"></i>
                          </div>
                          <h4 class="mb-3">Solar Rooftop Solutions</h4>
                          <ul class="custom-service-points">
                              <li>Design and installation: Tailored Solutions for residential, commercial, and industrial consumers.</li>
                              <li>Business Models: Choose between OPEX (Operating Expense) and Capex (Capital Expense) Models.</li>
                              <li>Benefits: Cost savings, energy independence, and environmental impact.</li>
                            </ul>
                          {/* <!-- <a class="small fw-medium text-warning" href="">Read More<i class="fa fa-arrow-right ms-2"></i></a> --> */}
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                  <div class="service-item  overflow-hidden">
                      <img class="img-fluid" src={project2} alt="" />
                      <div class="position-relative p-4 pt-0">
                          <div class="service-icon">
                              <i class="fa fa-wind fa-3x"></i>
                          </div>
                          <h4 class="mb-3">Solar Power Plants </h4>
                          <ul class="custom-service-points">
                              <li>Design and installation: Tailored Solutions for residential, commercial, and industrial consumers.</li>
                              <li>Business Models: Choose between OPEX (Operating Expense) and Capex (Capital Expense) Models.</li>
                              <li>Benefits: Cost savings, energy independence, and environmental impact.</li>
                            </ul>
                          {/* <!-- <a class="small fw-medium text-warning" href="">Read More<i class="fa fa-arrow-right ms-2"></i></a> --> */}
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="service-item  overflow-hidden">
                      <img class="img-fluid" src={project3} alt="" />
                      <div class="position-relative p-4 pt-0">
                          <div class="service-icon">
                              <i class="fa fa-lightbulb fa-3x"></i>
                          </div>
                          <h4 class="mb-3"> Luxury Home Automation</h4>
                          <ul class="custom-service-points">
                              <li>Design and installation: Tailored Solutions for residential, commercial, and industrial consumers.</li>
                              <li>Business Models: Choose between OPEX (Operating Expense) and Capex (Capital Expense) Models.</li>
                              <li>Benefits: Cost savings, energy independence, and environmental impact.</li>
                            </ul>
                          {/* <!-- <a class="small fw-medium  text-warning" href="">Read More<i class="fa fa-arrow-right ms-2"></i></a> --> */}
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="service-item  overflow-hidden">
                      <img class="img-fluid" src={project4} alt="" />
                      <div class="position-relative p-4 pt-0">
                          <div class="service-icon">
                              <i class="fa fa-solar-panel fa-3x"></i>
                          </div>
                          <h4 class="mb-3">Home Theatres</h4>
                          <ul class="custom-service-points">
                              <li>Design and installation: Tailored Solutions for residential, commercial, and industrial consumers.</li>
                              <li>Business Models: Choose between OPEX (Operating Expense) and Capex (Capital Expense) Models.</li>
                              <li>Benefits: Cost savings, energy independence, and environmental impact.</li>
                            </ul>
                          {/* <!-- <a class="small fw-medium text-warning" href="">Read More<i class="fa fa-arrow-right ms-2"></i></a> --> */}
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                  <div class="service-item  overflow-hidden">
                      <img class="img-fluid" src={project5} alt="" />
                      <div class="position-relative p-4 pt-0">
                          <div class="service-icon">
                              <i class="fa fa-wind fa-3x"></i>
                          </div>
                          <h4 class="mb-3">Wind Turbines</h4>
                          <ul class="custom-service-points">
                              <li>Design and installation: Tailored Solutions for residential, commercial, and industrial consumers.</li>
                              <li>Business Models: Choose between OPEX (Operating Expense) and Capex (Capital Expense) Models.</li>
                              <li>Benefits: Cost savings, energy independence, and environmental impact.</li>
                            </ul>
                          {/* <!-- <a class="small fw-medium text-warning" href="">Read More<i class="fa fa-arrow-right ms-2"></i></a> --> */}
                      </div>
                  </div>
              </div>
              <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="service-item  overflow-hidden">
                      <img class="img-fluid" src={project6} alt="" />
                      <div class="position-relative p-4 pt-0">
                          <div class="service-icon">
                              <i class="fa fa-lightbulb fa-3x"></i>
                          </div>
                          <h4 class="mb-3">Hydropower Plants</h4>
                          <ul class="custom-service-points">
                              <li>Design and installation: Tailored Solutions for residential, commercial, and industrial consumers.</li>
                              <li>Business Models: Choose between OPEX (Operating Expense) and Capex (Capital Expense) Models.</li>
                              <li>Benefits: Cost savings, energy independence, and environmental impact.</li>
                            </ul>
                          {/* <!-- <a class="small fw-medium text-warning" href="">Read More<i class="fa fa-arrow-right ms-2"></i></a> --> */}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/* <!-- Service End --> */}


  {/* <!-- Feature Start --> */}
  <div class="container-fluid  overflow-hidden my-5 px-lg-0" style={{backgroundColor : "rgb(247, 247, 247)"}}>
      <div class="container feature px-lg-0">
          <div class="row g-0 mx-lg-0">
              <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                  <div class="p-lg-5 ps-lg-0">
                      <h6 class="text-warning">Why Choose Us!</h6>
                      <h1 class="mb-4">Complete Commercial & Residential Solar Systems</h1>
                      <p class="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                      <div class="row g-4">
                          <div class="col-6">
                              <div class="d-flex align-items-center">
                                  <div class="btn-lg-square bg-warning rounded-circle">
                                      <i class="fa fa-check text-white"></i>
                                  </div>
                                  <div class="ms-4">
                                      <p class="mb-0">Quality</p>
                                      <h5 class="mb-0">Services</h5>
                                  </div>
                              </div>
                          </div>
                          <div class="col-6">
                              <div class="d-flex align-items-center">
                                  <div class="btn-lg-square bg-warning rounded-circle">
                                      <i class="fa fa-user-check text-white"></i>
                                  </div>
                                  <div class="ms-4">
                                      <p class="mb-0">Expert</p>
                                      <h5 class="mb-0">Workers</h5>
                                  </div>
                              </div>
                          </div>
                          <div class="col-6">
                              <div class="d-flex align-items-center">
                                  <div class="btn-lg-square bg-warning rounded-circle">
                                      <i class="fa fa-drafting-compass text-white"></i>
                                  </div>
                                  <div class="ms-4">
                                      <p class="mb-0">Free</p>
                                      <h5 class="mb-0">Consultation</h5>
                                  </div>
                              </div>
                          </div>
                          <div class="col-6">
                              <div class="d-flex align-items-center">
                                  <div class="btn-lg-square bg-warning rounded-circle">
                                      <i class="fa fa-headphones text-white"></i>
                                  </div>
                                  <div class="ms-4">
                                      <p class="mb-0">Customer</p>
                                      <h5 class="mb-0">Support</h5>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight : "400px"}}>
                  <div class="position-relative h-100">
                      <img class="position-absolute img-fluid w-100 h-100" src="project4.jpeg" style="object-fit: cover;" alt="" />
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/* <!-- Feature End --> */}


  {/* <!-- Testimonial Start --> */}
  <div className="container-xxl py-5">
      <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
              <h6 className="text-warning">Testimonial</h6>
              <h1 className="mb-4">What Our Clients Say!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
              <div className="testimonial-item text-center">
                  <div className="testimonial-img position-relative">
                      <img className="img-fluid rounded-circle mx-auto mb-5" src={testimonial1} />
                      <div className="btn-square bg-warning rounded-circle">
                          <i className="fa fa-quote-left text-white"></i>
                      </div>
                  </div>
                  <div className="testimonial-text text-center rounded p-4">
                      <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                      <h5 className="mb-1">Client Name</h5>
                      <span className="fst-italic">Profession</span>
                  </div>
              </div>
              <div className="testimonial-item text-center">
                  <div className="testimonial-img position-relative">
                      <img className="img-fluid rounded-circle mx-auto mb-5" src={testimonial2} />
                      <div className="btn-square bg-warning rounded-circle">
                          <i className="fa fa-quote-left text-white"></i>
                      </div>
                  </div>
                  <div className="testimonial-text text-center rounded p-4">
                      <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                      <h5 className="mb-1">Client Name</h5>
                      <span className="fst-italic">Profession</span>
                  </div>
              </div>
              <div className="testimonial-item text-center">
                  <div className="testimonial-img position-relative">
                      <img className="img-fluid rounded-circle mx-auto mb-5" src={testimonial3} />
                      <div className="btn-square bg-warning rounded-circle">
                          <i className="fa fa-quote-left text-white"></i>
                      </div>
                  </div>
                  <div className="testimonial-text text-center rounded p-4">
                      <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                      <h5 className="mb-1">Client Name</h5>
                      <span className="fst-italic">Profession</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/* <!-- Testimonial End --> */}
      
        {/* <!-- Footer Start --> */}
        <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Address</h5>
                    <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3 text-light"></i>123 Street, New York, USA</p>
                    <p className="mb-2 text-white"><i className="fa fa-phone-alt me-3 text-light"></i>+012 345 67890</p>
                    <p className="mb-2 text-white"><i className="fa fa-envelope me-3 text-light"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Our Services</a>
                    <a className="btn btn-link" href="">Terms & Condition</a>
                    <a className="btn btn-link" href="">Support</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Project Gallery</h5>
                    <div className="row g-2">
                        <div className="col-4">
                            <img className="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white ">
                        &copy; <a href="#">Smart Tech Solutions</a>, All Right Reserved.
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}

      {/* <!-- Back to Top --> */}
    <a href="#" className="btn btn-lg btn-warning btn-lg-square  back-to-top"><i className="bi bi-arrow-up" style={{color: "white"}}></i></a>



    </>
  )
}

export default Service