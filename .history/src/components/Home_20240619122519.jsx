 
 
import "bootstrap/dist/css/bootstrap.min.css";
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import project1 from '../img/project1.jpg'
import project2 from '../img/project2.jpg'
import project3 from '../img/project3.jpg'
import project4 from '../img/project4.jpg'
import project5 from '../img/project5.jpg'
import project6 from '../img/project6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS animations
 

function Home() {
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
                  <a className="nav-link mx-lg-2 active text-gray" aria-current="page" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-lg-2" href="">Services</a>
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


    {/* <!-- Carousel Start --> */}
    <div className="header">
        <img src="servicebg.jpg" alt="" height="580px" width="100%" />
        <div className="headertext">
          <h5 className="mb-3  text-white">Smart tech Solutions</h5>
          <h1 className="text-white">Powering Homes With Solar Panels</h1>
          <a href="about.html"> <button className="mt-5 text-white">Discover More</button></a>
        </div>
      </div>
       
    {/* <!-- Carousel End --> */}


    

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


    {/* <!-- Service Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h6 className="text-warning " data-aos="fade-up"  data-aos-duration="3000">Our Services</h6>
                <h1 className="mb-4" data-aos="fade-up" data-aos-duration="3000">We Are Pioneers In The World Of Renewable Energy</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-wow-delay="0.1s">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={project1} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Rooftop Solar Solutions</h4>
                            <p> we specialize in providing cutting-edge solar rooftop solutions tailored to meet the energy needs of residential, commercial, and industrial properties.</p>
                            <a className="small fw-medium text-warning" href="service.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-wow-delay="0.3s">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src="SPP.avif"/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Solar Power Plants </h4>
                            <p>we specialize in designing, developing, and operating state-of-the-art solar power plants to meet the growing demand for clean and sustainable energy.  </p>
                            <a className="small fw-medium text-warning" href="service.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-wow-delay="0.5s">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src="automation.avif" alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Luxury Home Automation</h4>
                            <p>We specialize in transforming residences into smart, sophisticated spaces where convenience, comfort, and control are at your fingertips. </p>
                            <a className="small fw-medium  text-warning" href="service.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-wow-delay="0.1s">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={project4} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Home Theatres</h4>
                            <p>Our home theaters are custom-designed to meet your unique preferences and lifestyle. Whether you envision a cozy media room for family movie nights. </p>
                            <a className="small fw-medium text-warning" href="service.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-wow-delay="0.3s">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={project5} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Wind Turbines</h4>
                            <p>Our home theaters are custom-designed to meet your unique preferences and lifestyle. Whether you envision a cozy media room for family movie nights. </p>
                            <a className="small fw-medium text-warning" href="service.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-wow-delay="0.5s">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={project3} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                                <i className="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 className="mb-3">Hydropower Plants</h4>
                            <p>Our home theaters are custom-designed to meet your unique preferences and lifestyle. Whether you envision a cozy media room for family movie nights. </p>
                            <a className="small fw-medium text-warning" href="service.html">Read More<i className="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- Feature Start --> */}
    <div className="container-fluid  overflow-hidden my-5 px-lg-0 " style={{backgroundColor : "rgb(247, 247, 247)"}}>
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                        <h6 className="text-warning">Why Choose Us!</h6>
                        <h1 className="mb-4">Complete Commercial & Residential Solar Systems</h1>
                        <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-warning rounded-circle">
                                        <i className="fa fa-check text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-0">Quality</p>
                                        <h5 className="mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-warning rounded-circle">
                                        <i className="fa fa-user-check text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-0">Expert</p>
                                        <h5 className="mb-0">Workers</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-warning rounded-circle">
                                        <i className="fa fa-drafting-compass text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-0">Free</p>
                                        <h5 className="mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-warning rounded-circle">
                                        <i className="fa fa-headphones text-white"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-0">Customer</p>
                                        <h5 className="mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="project4.jpeg" style={{objectFit : "cover"}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature End --> */}


    {/* <!-- Projects Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h6 className="text-warning">Our Projects</h6>
                <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
            </div>
           
            <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project4} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                             
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Solar Panels</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project6} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                             
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Wind Turbines</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item third">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project5} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                             
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Hydropower Plants</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project1} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-3.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                             
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Solar Panels</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project2} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Wind Turbines</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item third">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project3} alt=""/>
                        <div className="portfolio-btn">
                            <a className="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-1.jpg" data-lightbox="portfolio"><i className="fa fa-eye"></i></a>
                            
                        </div>
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Hydropower Plants</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Projects End --> */}


     

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
    {/* <!-- Team End -->
        <!-- faq start  --> */}
    <div className="faq-container ">
        <h5 className="text-warning">Frequently Asked Questions</h5>
        <h2>Navigate through FAQs for Insights</h2>
        

        <br/>
        <br/>
          
        <div className="faq-item ">
          <input type="checkbox" id="faq1"/>
          <label htmlFor="faq1">How do solar panels work?</label>
          <div className="faq-content">
            <p>Solar panels work by capturing sunlight using photovoltaic cells, which convert sunlight into electricity through the photovoltaic effect. When sunlight hits the solar panels, it excites electrons in the cells, generating direct current (DC) electricity. An inverter then converts the DC electricity into alternating current (AC) electricity, which can be used to power homes and businesses.</p>
          </div>
        </div>
    
        <div className="faq-item">
          <input type="checkbox" id="faq2"/>
          <label htmlFor="faq2">What are the benefits of solar energy?</label>
          <div className="faq-content">
            <p>The benefits of solar energy include: reduction in electricity bills, long-term cost savings, reduced carbon footprint, combating climate change, increased property value, and energy independence.</p>
          </div>
        </div>
    
        <div className="faq-item">
          <input type="checkbox" id="faq3"/>
          <label htmlFor="faq3">What factors affect the efficiency of solar panels?</label>
          <div className="faq-content">
            <p>Several factors affect the efficiency of solar panels, including: the angle and orientation of the panels relative to the sun, shading from trees or buildings, weather conditions such as cloud cover and temperature, and the quality and condition of the panels and associated equipment.</p>
          </div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq4"/>
          <label htmlFor="faq4">What factors affect the efficiency of solar panels?</label>
          <div className="faq-content">
            <p>Several factors affect the efficiency of solar panels, including: the angle and orientation of the panels relative to the sun, shading from trees or buildings, weather conditions such as cloud cover and temperature, and the quality and condition of the panels and associated equipment.</p>
          </div>
        </div>
        
      </div>
      {/* <!-- faq end  --> */}


 

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

export default Home