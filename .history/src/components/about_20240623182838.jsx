 
import "bootstrap/dist/css/bootstrap.min.css"; 
import team1 from '../img/team-1.jpg' 
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
 
 

function About() {
  return (
    <> 
      {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-warning" style="width: 3rem; height: 3rem;" role="status">
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
                  <a className="nav-link mx-lg-2 active" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="service.html">Services</a>
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
    <div className="container-fluid page-header py-5 mb-5">
      <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown" style={{fontWeight : "bold"}}  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >About Us</h1>
           
      </div>
  </div>
  {/* <!-- Page Header End --> */}
      
  {/* <!-- Feature Start --> */}
  <div className="container-xxl py-5">
    <div className="container">
        <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-4">
                    <div className="btn-lg-square bg-warning   me-3">
                        <i className="fa fa-users text-white"></i>
                    </div>
                    <h1 className="mb-0" data-toggle="counter-up">3453</h1>
                </div>
                <h5 className="mb-3">Happy Customers</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center mb-4">
                    <div className="btn-lg-square bg-warning   me-3">
                        <i className="fa fa-check text-white"></i>
                    </div>
                    <h1 className="mb-0" data-toggle="counter-up">4234</h1>
                </div>
                <h5 className="mb-3">Project Done</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div className="d-flex align-items-center mb-4">
                    <div className="btn-lg-square bg-warning  me-3">
                        <i className="fa fa-award text-white"></i>
                    </div>
                    <h1 className="mb-0" data-toggle="counter-up">3123</h1>
                </div>
                <h5 className="mb-3">Awards Win</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <div className="d-flex align-items-center mb-4">
                    <div className="btn-lg-square bg-warning me-3">
                        <i className="fa fa-users-cog text-white"></i>
                    </div>
                    <h1 className="mb-0" data-toggle="counter-up">1831</h1>
                </div>
                <h5 className="mb-3">Expert Workers</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div>
        </div>
    </div>
</div>
{/* <!-- Feature Start --> */}


{/* <!-- About Start --> */}
<div className="container-fluid  overflow-hidden my-5 px-lg-0" style={{backgroundColor: "rgb(247, 247, 247)"}}>
        <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="servicehead1.jpg" style={ {objectFit : "cover"}} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 pe-lg-0">
                        <h6 className="text-warning">About Us</h6>
                        <h1 className="mb-4 "> Years Experience In Solar & Renewable Energy Industry</h1>
                        <p>Smart Tech Solutions is a leading provider of technology solutions specializing in renewable energy and smart automation. with team of experienced professionals and a passion for innovation , we strive to deliver top-notch services tailored to our clients needs</p>
                        <p><i className="fa fa-check-circle text-warning me-3"></i>SUSTAINBILITY</p>
                        <p><i className="fa fa-check-circle text-warning me-3"></i> QUALITY</p>
                        <p><i className="fa fa-check-circle text-warning me-3"></i> CUSTOMER SATISFACTION</p>
                        <a href="index.html" className="btn btn-warning  py-3 px-4 mt-3 text-white">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


{/* <!-- Team Start --> */}
<div className="container-xxl py-5 mt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h6 className="text-warning">Team Member</h6>
                <h1 className="mb-4">Experienced Team Members</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team1} alt=""/>
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team2} alt=""/>
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team3} alt=""/>
                            <div className="team-social w-25">
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-lg-square btn-outline-warning   mt-3" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 {/* <!-- Team End --> */}

    

 

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

export default About