import project1 from '../img/project1.jpg'
import project2 from '../img/project2.jpg'
import project3 from '../img/project3.jpg'
import project4 from '../img/project4.jpg'
import project5 from '../img/project5.jpg'
import project6 from '../img/project6.jpg' 

import testimonial1 from '../img/testimonial-1.jpg'
import testimonial2 from '../img/testimonial-2.jpg'
import testimonial3 from '../img/testimonial-3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

import "bootstrap/dist/css/bootstrap.min.css"; 
 

function Projects() {
    AOS.init();
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
                  <a className="nav-link mx-lg-2 " href="">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2 active" href="project.html">Projects</a>
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
    <div className="container-fluid page-header py-5 mb-5">
      <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown" style={{fontWeight : "bold"}} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Projects</h1>
        
      </div>
  </div>
  {/* <!-- Page Header End --> */}


  {/* <!-- Projects Start --> */}
  <div className="container-xxl py-5">
      <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth : "600px"}}>
              <h6 className="text-warning">Our Projects</h6>
              <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
          </div>
         
          <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
              <div className="col-lg-6 col-md-6 portfolio-item first">
                  <div className="portfolio-img  overflow-hidden">
                      <img className="img-fluid" src={project1} alt=""/>
                      <div className="portfolio-btn">
                          <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                           
                      </div>
                  </div>
                  <div className="pt-3">
                      <p className="text-warning mb-0">Project 1</p>
                      <hr className="text-warning w-25 my-2"/>
                      <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 portfolio-item second">
                  <div className="portfolio-img  overflow-hidden">
                      <img className="img-fluid" src={project2} alt=""/>
                      <div className="portfolio-btn">
                          <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                           
                      </div>
                  </div>
                  <div className="pt-3">
                      <p className="text-warning mb-0">Project 2</p>
                      <hr className="text-warning w-25 my-22"/>
                      <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 portfolio-item third">
                  <div className="portfolio-img  overflow-hidden">
                      <img className="img-fluid" src={project3} alt=""/>
                      <div className="portfolio-btn">
                          <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                           
                      </div>
                  </div>
                  <div className="pt-3">
                      <p className="text-warning mb-0">Project 3</p>
                      <hr className="text-warning w-25 my-2"/>
                      <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 portfolio-item first">
                  <div className="portfolio-img  overflow-hidden">
                      <img className="img-fluid" src={project4} alt=""/>
                      <div className="portfolio-btn">
                          <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                           
                      </div>
                  </div>
                  <div className="pt-3">
                      <p className="text-warning mb-0"> Project 4</p>
                      <hr className="text-warning w-25 my-2"/>
                      <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 portfolio-item second">
                  <div className="portfolio-img  overflow-hidden">
                      <img className="img-fluid" src={project5} alt=""/>
                      <div className="portfolio-btn">
                          <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                          
                      </div>
                  </div>
                  <div className="pt-3">
                      <p className="text-warning mb-0">Project 5</p>
                      <hr className="text-warning w-25 my-2"/>
                      <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                  </div>
              </div>
              <div className="col-lg-6 col-md-6 portfolio-item third">
                  <div className="portfolio-img  overflow-hidden">
                      <img className="img-fluid" src={project6} alt=""/>
                      <div className="portfolio-btn">
                          <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                          
                      </div>
                  </div>
                  <div className="pt-3">
                      <p className="text-warning mb-0">Project 6</p>
                      <hr className="text-warning w-25 my-2"/>
                      <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                  </div>
              </div>
          </div>
      </div>
  </div>

  {/* <!-- Projects End --> */}



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

export default Projects