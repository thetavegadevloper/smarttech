
import "bootstrap/dist/css/bootstrap.min.css";
import quote1 from '../img/quote.jpg'
 import { NavLink } from "react-router-dom";

function Contact() {
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
                  {/* <a className="nav-link mx-lg-2  text-gray" aria-current="page" href="index.html">Home</a> */}
              <button className="">
              <NavLink to="/home">Home</NavLink>
              </button>
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
          <h1 className="display-3 text-white mb-3 animated slideInDown" style={{fontWeight : "bold"}}>Projects</h1>
        
      </div>
  </div>
  {/* <!-- Page Header End --> */}

  {/* <!-- Contact Start --> */}
  <div className="container-fluid  overflow-hidden px-lg-0" style={{margin: "6rem 0 " ,backgroundColor: "rgb(247, 247, 247)"}} >
      <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                  <div className="p-lg-5 ps-lg-0">
                      <h6 className="text-warning">Contact Us</h6>
                      <h1 className="mb-4">Feel Free To Contact Us</h1>
                      <p className="mb-4">"Your inquiries are important to us, and we strive to respond to every message promptly. Our team is dedicated to providing excellent customer service and ensuring your experience with us is exceptional.".</p>
                      <form>
                          <div className="row g-3">
                              <div className="col-md-6">
                                  <div className="form-floating">
                                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                      <label htmlFor="name">Your Name</label>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                      <label htmlFor="email">Your Email</label>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="form-floating">
                                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                      <label htmlFor="subject">Subject</label>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <div className="form-floating">
                                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                      <label htmlFor="message">Message</label>
                                  </div>
                              </div>
                              <div className="col-12">
                                  <button className="btn btn-warning py-3 px-5  text-white" type="submit">Send Message</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
              <div className="col-lg-6 pe-lg-0" style={{minHeight: "400px"}}>
                  <div className="position-relative h-100">
                      <iframe className="position-absolute w-100 h-100" style={{objectFit:"cover"}}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1558.5099127576354!2d75.35455724356142!3d19.873313825200682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3447ac68fcb%3A0x288db97cca822a00!2sThetaVega%20Tech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1717530581545!5m2!1sen!2sin"
                      frameBorder="0" allowFullScreen="" aria-hidden="false"
                      tabIndex="0"></iframe>
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/* <!-- Contact End -->
   <!-- Quote Start --> */}
  <div className="container-fluid  overflow-hidden px-lg-0" style={{margin: "6rem 0 "  , backgroundColor : "rgb(247, 247, 247)" , position: "relative"  ,bottom: "100px"}}  >
      <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
              <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style={{minHeight: "400px"}}>
                  <div className="position-relative h-100">
                      <img className="position-absolute img-fluid w-100 h-100" src={quote1} style={{objectFit: "cover"}} alt=""/>
                  </div>
              </div>
              <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                  <div className="p-lg-5 pe-lg-0">
                      <h6 className="text-warning">Free Quote</h6>
                      <h1 className="mb-4">Get A Free Quote</h1>
                      <p className="mb-4 pb-2">"Each solar project is unique. Fill out the form below with your specifics, and our experts will tailor a solution that meets your energy needs and budget."</p>
                      <form>
                          <div className="row g-3">
                              <div className="col-12 col-sm-6">
                                  <input type="text" className="form-control border-0" placeholder="Your Name" style={{height: "55px"}} />
                              </div>
                              <div className="col-12 col-sm-6">
                                  <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: "55px"}}/
                                  >
                              </div>
                              <div className="col-12 col-sm-6">
                                  <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height: "55px"}}/>
                              </div>
                              <div className="col-12 col-sm-6">
                                  <select className="form-select border-0" style={{height: "55px"}}>
                                      <option defaultValue>Select A Service</option>
                                      <option value="1">Service 1</option>
                                      <option value="2">Service 2</option>
                                      <option value="3">Service 3</option>
                                  </select>
                              </div>
                              <div className="col-12">
                                  <textarea className="form-control border-0" placeholder="Special Note"></textarea>
                              </div>
                              <div className="col-12">
                                  <button className="btn btn-warning py-3 px-5 text-white" type="submit">Submit</button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  {/* <!-- Quote End --> */}
  
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

export default Contact