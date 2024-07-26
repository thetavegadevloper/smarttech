 
import "bootstrap/dist/css/bootstrap.min.css"; 
import team1 from '../img/team-1.jpg' 
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import logo from '../img/logo.png'
import gallery  from '../img/carousel-1.jpg'
import AOS from 'aos';
import aboutimg from '../img/servicehead1.jpg'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
 
 

function About() {
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
                        <Link className="nav-link "  to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/about" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/service">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"  to="/project">Projects</Link>
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
                        <img className="position-absolute img-fluid w-100 h-100" src= {aboutimg} style={ {objectFit : "cover"}} alt=""/>
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
                        <Link  to="/home" className="btn btn-warning  py-3 px-4 mt-3 text-white">Explore More</Link>
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
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  data-aos="fade-up"  data-aos-duration="1000">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team1} alt=""/>
                            {/* <div className="team-social w-25">
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3" to="#"><i className="fab fa-instagram"></i></Link>
                            </div> */}
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" data-aos="fade-up"  data-aos-duration="2000">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team2} alt=""/>
                            {/* <div className="team-social w-25">
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3" to="#"><i className="fab fa-instagram"></i></Link>
                            </div> */}
                        </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s"  data-aos="fade-up"  data-aos-duration="3000">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team3} alt=""/>
                            {/* <div className="team-social w-25">
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3" to="#"><i className="fab fa-instagram"></i></Link>
                            </div> */}
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
                    {/* <h5 className="text-white mb-4">Address</h5> */}
                    {/* <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3 text-light"></i>123 Street, New York, USA</p> */}
                    {/* <p className="mb-2 text-white"><i className="fa fa-phone-alt me-3 text-light"></i>+012 345 67890</p> */}
                    {/* <p className="mb-2 text-white"><i className="fa fa-envelope me-3 text-light"></i>info@example.com</p> */}
                    {/* <div className="d-flex pt-2">
                        <Link className="btn btn-square btn-outline-light btn-social"  to="#"><i className="fab fa-twitter"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-youtube"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-linkedin-in"></i></Link>
                    </div> */}
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <Link className="btn btn-link" to="/about">About Us</Link>
                    <Link className="btn btn-link" to="/contact">Contact Us</Link>
                    <Link className="btn btn-link" to="/service">Our Services</Link>
                    {/* <Link className="btn btn-link" to="#">Terms & Condition</Link> */}
                    {/* <Link className="btn btn-link" to="#">Support</Link> */}
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
                       {/* &copy; <Link to="#">Smart Tech Solutions</Link>, All Right Reserved. */}
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