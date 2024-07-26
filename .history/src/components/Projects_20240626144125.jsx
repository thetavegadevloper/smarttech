import project1 from '../img/project1.jpg'
import project2 from '../img/project2.jpg'
import project3 from '../img/project3.jpg'
import project4 from '../img/project4.jpg'
import project5 from '../img/project5.jpg'
import project6 from '../img/project6.jpg' 
import logo from '../img/logo.png'
import gallery  from '../img/carousel-1.jpg'


import testimonial1 from '../img/testimonial-1.jpg'
import testimonial2 from '../img/testimonial-2.jpg'
import testimonial3 from '../img/testimonial-3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';


import "bootstrap/dist/css/bootstrap.min.css"; 
 

function Projects() {
    AOS.init();
    
  return (
    <>
    {/* <!-- Navbar Start --> */}
    <nav className="custom-navbar navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <Link className="navbar-brand me-auto" to="/"><img src={logo} alt="Logo" height="60px"/></Link>
    
        
            <button className="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
    
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link"  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/service">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active"  to="/project">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
    
            <Link  to="/contact" className="custom-login-button text-white d-lg-inline-block">Get a Quote</Link>
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
              <h6 className="text-warning" data-aos="fade-up"  data-aos-duration="1000">Our Projects</h6>
              <h1 className="mb-4" data-aos="fade-up"  data-aos-duration="1000">Visit Our Latest Solar And Renewable Energy Projects</h1>
          </div>
         
          <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
              <div className="col-lg-6 col-md-6 portfolio-item first" data-aos="fade-up"  data-aos-duration="3000">
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
              <div className="col-lg-6 col-md-6 portfolio-item second" data-aos="fade-up"  data-aos-duration="3000">
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
              <div className="col-lg-6 col-md-6 portfolio-item third" data-aos="fade-up"  data-aos-duration="3000">
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
              <div className="col-lg-6 col-md-6 portfolio-item first" data-aos="fade-up"  data-aos-duration="3000">
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
              <div className="col-lg-6 col-md-6 portfolio-item second" data-aos="fade-up"  data-aos-duration="3000">
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
              <div className="col-lg-6 col-md-6 portfolio-item third" data-aos="fade-up"  data-aos-duration="3000">
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
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <h6 className="text-warning">Testimonial</h6>
          <h1 className="mb-4">What Our Clients Say!</h1>
        </div>
        <Carousel
          // Remove interval={null} to enable automatic sliding
          interval={3000} // Slide every 3 seconds (adjust as needed)
          indicators={false} // hide slide indicators
          nextIcon={<BsArrowRight className="bi bi-arrow-right" />}
          prevIcon={<BsArrowLeft className="bi bi-arrow-left" />}
          className="testimonial-carousel owl-carousel wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <Carousel.Item className="testimonial-item text-center">
            <div className="testimonial-img position-relative">
              <img className="img-fluid rounded-circle mx-auto mb-5" src={testimonial1} alt="testimonial-1" />
              <div className="btn-square bg-warning rounded-circle">
                <i className="fa fa-quote-left text-white"></i>
              </div>
            </div>
            <div className="testimonial-text text-center rounded p-4">
              <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at  clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rrebum justo sea clita.</p>
              <h5 className="mb-1">Client Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </Carousel.Item>

          <Carousel.Item className="testimonial-item text-center">
            <div className="testimonial-img position-relative">
              <img className="img-fluid rounded-circle mx-auto mb-5" src={testimonial2} alt="testimonial-2" />
              <div className="btn-square bg-warning rounded-circle">
                <i className="fa fa-quote-left text-white"></i>
              </div>
            </div>
            <div className="testimonial-text text-center rounded p-4">
              <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita. duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
              <h5 className="mb-1">Client Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </Carousel.Item>

          <Carousel.Item className="testimonial-item text-center">
            <div className="testimonial-img position-relative">
              <img className="img-fluid rounded-circle mx-auto mb-5" src={testimonial3} alt="testimonial-3" />
              <div className="btn-square bg-warning rounded-circle">
                <i className="fa fa-quote-left text-white"></i>
              </div>
            </div>
            <div className="testimonial-text text-center rounded p-4">
              <p>Clita clita tempor duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
              <h5 className="mb-1">Client Name</h5>
              <span className="fst-italic">Profession</span>
            </div>
          </Carousel.Item>
        </Carousel>
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
                        <Link className="btn btn-square btn-outline-light btn-social"  to="#"><i className="fab fa-twitter"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-youtube"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <Link className="btn btn-link" to="#">About Us</Link>
                    <Link className="btn btn-link" to="#">Contact Us</Link>
                    <Link className="btn btn-link" to="#">Our Services</Link>
                    <Link className="btn btn-link" to="#">Terms & Condition</Link>
                    <Link className="btn btn-link" to="#">Support</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Project Gallery</h5>
                    <div className="row g-2">
                        <div className="col-4">
                            <img className="img-fluid " src={gallery} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery} alt=""/>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white ">
                        &copy; <Link to="#">Smart Tech Solutions</Link>, All Right Reserved.
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