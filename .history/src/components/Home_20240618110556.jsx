 
 
import "bootstrap/dist/css/bootstrap.min.css";
 

function Home() {
   
  return (
     <> 
      

<body>
    {/* <!-- Spinner Start --> */}
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-warning" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div> 
    {/* <!-- Spinner End --> */}

 

    {/* <!-- Navbar Start --> */}
    <nav class="custom-navbar navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand me-auto" href="#"><img src="logo.png" alt="Logo" height="60px"/></a>
      
          {/* <!-- Offcanvas Menu --> */}
          <div class="custom-offcanvas offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" class="btn-close custom-btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link mx-lg-2 active text-gray" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="project.html">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
      
          {/* <!-- Get a Quote Button --> */}
          <a href="contact.html" class="custom-login-button text-white">Get a Quote</a>
      
          {/* <!-- Navbar Toggler (for small screens) --> */}
          <button class="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
        </div>
      </nav>
      
    {/* <!-- Navbar End --> */}


    {/* <!-- Carousel Start --> */}
    <div class="header">
        <img src="servicebg.jpg" alt="" height="580px" width="100%" />
        <div class="headertext">
          <h5 class="mb-3  text-white">Smart tech Solutions</h5>
          <h1 class="text-white">Powering Homes With Solar Panels</h1>
          <a href="about.html"> <button class="mt-5 text-white">Discover More</button></a>
        </div>
      </div>
       
    {/* <!-- Carousel End --> */}


    

    {/* <!-- About Start --> */}
    <div class="container-fluid  overflow-hidden my-5 px-lg-0" style="background-color: rgb(247, 247, 247);">
        <div class="container about px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="servicehead1.jpg" style="object-fit: cover;" alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h6 class="text-warning">About Us</h6>
                        <h1 class="mb-4 "> Years Experience In Solar & Renewable Energy Industry</h1>
                        <p>Smart Tech Solutions is a leading provider of technology solutions specializing in renewable energy and smart automation. with team of experienced professionals and a passion for innovation , we strive to deliver top-notch services tailored to our clients needs</p>
                        <p><i class="fa fa-check-circle text-warning me-3"></i>SUSTAINBILITY</p>
                        <p><i class="fa fa-check-circle text-warning me-3"></i> QUALITY</p>
                        <p><i class="fa fa-check-circle text-warning me-3"></i> CUSTOMER SATISFACTION</p>
                        <a href="index.html" class="btn btn-warning  py-3 px-4 mt-3 text-white">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Service Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h6 class="text-warning">Our Services</h6>
                <h1 class="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item  overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-1.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Rooftop Solar Solutions</h4>
                            <p> we specialize in providing cutting-edge solar rooftop solutions tailored to meet the energy needs of residential, commercial, and industrial properties.</p>
                            <a class="small fw-medium text-warning" href="service.html">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item  overflow-hidden">
                        <img class="img-fluid" src="SPP.avif"/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Solar Power Plants </h4>
                            <p>we specialize in designing, developing, and operating state-of-the-art solar power plants to meet the growing demand for clean and sustainable energy.  </p>
                            <a class="small fw-medium text-warning" href="service.html">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item  overflow-hidden">
                        <img class="img-fluid" src="automation.avif" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Luxury Home Automation</h4>
                            <p>We specialize in transforming residences into smart, sophisticated spaces where convenience, comfort, and control are at your fingertips. </p>
                            <a class="small fw-medium  text-warning" href="service.html">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item  overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-4.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Home Theatres</h4>
                            <p>Our home theaters are custom-designed to meet your unique preferences and lifestyle. Whether you envision a cozy media room for family movie nights. </p>
                            <a class="small fw-medium text-warning" href="service.html">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item  overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-5.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Wind Turbines</h4>
                            <p>Our home theaters are custom-designed to meet your unique preferences and lifestyle. Whether you envision a cozy media room for family movie nights. </p>
                            <a class="small fw-medium text-warning" href="service.html">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item  overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-6.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Hydropower Plants</h4>
                            <p>Our home theaters are custom-designed to meet your unique preferences and lifestyle. Whether you envision a cozy media room for family movie nights. </p>
                            <a class="small fw-medium text-warning" href="service.html">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}


    {/* <!-- Feature Start --> */}
    <div class="container-fluid  overflow-hidden my-5 px-lg-0 " style="background-color: rgb(247, 247, 247);">
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
                <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="project4.jpeg" style="object-fit: cover;" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature End --> */}


    {/* <!-- Projects Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h6 class="text-warning">Our Projects</h6>
                <h1 class="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
            </div>
           
            <div class="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
                <div class="col-lg-4 col-md-6 portfolio-item first">
                    <div class="portfolio-img  overflow-hidden">
                        <img class="img-fluid" src="pr1.jpg" alt=""/>
                        <div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-6.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                             
                        </div>
                    </div>
                    <div class="pt-3">
                        <p class="text-warning mb-0">Solar Panels</p>
                        <hr class="text-warning w-25 my-2"/>
                        <h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second">
                    <div class="portfolio-img  overflow-hidden">
                        <img class="img-fluid" src="pr3.jpg" alt=""/>
                        <div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-5.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                             
                        </div>
                    </div>
                    <div class="pt-3">
                        <p class="text-warning mb-0">Wind Turbines</p>
                        <hr class="text-warning w-25 my-2"/>
                        <h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item third">
                    <div class="portfolio-img  overflow-hidden">
                        <img class="img-fluid" src="project6.jpeg" alt=""/>
                        <div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-4.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                             
                        </div>
                    </div>
                    <div class="pt-3">
                        <p class="text-warning mb-0">Hydropower Plants</p>
                        <hr class="text-warning w-25 my-2"/>
                        <h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item first">
                    <div class="portfolio-img  overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-3.jpg" alt=""/>
                        <div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-3.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                             
                        </div>
                    </div>
                    <div class="pt-3">
                        <p class="text-warning mb-0">Solar Panels</p>
                        <hr class="text-warning w-25 my-2"/>
                        <h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second">
                    <div class="portfolio-img  overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-2.jpg" alt=""/>
                        <div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-2.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            
                        </div>
                    </div>
                    <div class="pt-3">
                        <p class="text-warning mb-0">Wind Turbines</p>
                        <hr class="text-warning w-25 my-2"/>
                        <h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item third">
                    <div class="portfolio-img  overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-1.jpg" alt=""/>
                        <div class="portfolio-btn">
                            <a class="btn btn-lg-square btn-outline-light rounded-circle mx-1" href="img/img-600x400-1.jpg" data-lightbox="portfolio"><i class="fa fa-eye"></i></a>
                            
                        </div>
                    </div>
                    <div class="pt-3">
                        <p class="text-warning mb-0">Hydropower Plants</p>
                        <hr class="text-warning w-25 my-2"/>
                        <h5 class="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Projects End --> */}


     

    {/* <!-- Team Start --> */}
    <div class="container-xxl py-5 mt-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                <h6 class="text-warning">Team Member</h6>
                <h1 class="mb-4">Experienced Team Members</h1>
            </div>
            <div class="row g-4">
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item  overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-1.jpg" alt=""/>
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item  overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-2.jpg" alt=""/>
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item  overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="img/team-3.jpg" alt=""/>
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-warning   mt-3" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
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
    <div class="faq-container ">
        <h5 class="text-warning">Frequently Asked Questions</h5>
        <h2>Navigate through FAQs for Insights</h2>
        

        <br/>
        <br/>
          
        <div class="faq-item ">
          <input type="checkbox" id="faq1"/>
          <label for="faq1">How do solar panels work?</label>
          <div class="faq-content">
            <p>Solar panels work by capturing sunlight using photovoltaic cells, which convert sunlight into electricity through the photovoltaic effect. When sunlight hits the solar panels, it excites electrons in the cells, generating direct current (DC) electricity. An inverter then converts the DC electricity into alternating current (AC) electricity, which can be used to power homes and businesses.</p>
          </div>
        </div>
    
        <div class="faq-item">
          <input type="checkbox" id="faq2"/>
          <label for="faq2">What are the benefits of solar energy?</label>
          <div class="faq-content">
            <p>The benefits of solar energy include: reduction in electricity bills, long-term cost savings, reduced carbon footprint, combating climate change, increased property value, and energy independence.</p>
          </div>
        </div>
    
        <div class="faq-item">
          <input type="checkbox" id="faq3"/>
          <label for="faq3">What factors affect the efficiency of solar panels?</label>
          <div class="faq-content">
            <p>Several factors affect the efficiency of solar panels, including: the angle and orientation of the panels relative to the sun, shading from trees or buildings, weather conditions such as cloud cover and temperature, and the quality and condition of the panels and associated equipment.</p>
          </div>
        </div>
        <div class="faq-item">
          <input type="checkbox" id="faq4"/>
          <label for="faq4">What factors affect the efficiency of solar panels?</label>
          <div class="faq-content">
            <p>Several factors affect the efficiency of solar panels, including: the angle and orientation of the panels relative to the sun, shading from trees or buildings, weather conditions such as cloud cover and temperature, and the quality and condition of the panels and associated equipment.</p>
          </div>
        </div>
        
      </div>
      {/* <!-- faq end  --> */}


 

    {/* <!-- Footer Start --> */}
    <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-4">Address</h5>
                    <p class="mb-2 text-white"><i class="fa fa-map-marker-alt me-3 text-light"></i>123 Street, New York, USA</p>
                    <p class="mb-2 text-white"><i class="fa fa-phone-alt me-3 text-light"></i>+012 345 67890</p>
                    <p class="mb-2 text-white"><i class="fa fa-envelope me-3 text-light"></i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="">About Us</a>
                    <a class="btn btn-link" href="">Contact Us</a>
                    <a class="btn btn-link" href="">Our Services</a>
                    <a class="btn btn-link" href="">Terms & Condition</a>
                    <a class="btn btn-link" href="">Support</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Project Gallery</h5>
                    <div class="row g-2">
                        <div class="col-4">
                            <img class="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid " src="abouthead3.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white ">
                        &copy; <a href="#">Smart Tech Solutions</a>, All Right Reserved.
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Footer End --> */}


    {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-warning btn-lg-square  back-to-top"><i class="bi bi-arrow-up" style="color: white;"></i></a>

</body>
     
    </>
  
  )
}

export default Home