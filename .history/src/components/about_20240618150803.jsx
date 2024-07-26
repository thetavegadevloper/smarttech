 
import "bootstrap/dist/css/bootstrap.min.css";  
 

function About() {
  return (
    <> 
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
                  <a class="nav-link mx-lg-2  text-gray" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2 active" href="about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-lg-2" href="service.html">Services</a>
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
     
      {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5">
      <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown" style="font-weight: bold;">About Us</h1>
           
      </div>
  </div>
  {/* <!-- Page Header End --> */}
      
  {/* <!-- Feature Start --> */}
  <div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                <div class="d-flex align-items-center mb-4">
                    <div class="btn-lg-square bg-warning   me-3">
                        <i class="fa fa-users text-white"></i>
                    </div>
                    <h1 class="mb-0" data-toggle="counter-up">3453</h1>
                </div>
                <h5 class="mb-3">Happy Customers</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                <div class="d-flex align-items-center mb-4">
                    <div class="btn-lg-square bg-warning   me-3">
                        <i class="fa fa-check text-white"></i>
                    </div>
                    <h1 class="mb-0" data-toggle="counter-up">4234</h1>
                </div>
                <h5 class="mb-3">Project Done</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                <div class="d-flex align-items-center mb-4">
                    <div class="btn-lg-square bg-warning  me-3">
                        <i class="fa fa-award text-white"></i>
                    </div>
                    <h1 class="mb-0" data-toggle="counter-up">3123</h1>
                </div>
                <h5 class="mb-3">Awards Win</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div>
            <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                <div class="d-flex align-items-center mb-4">
                    <div class="btn-lg-square bg-warning me-3">
                        <i class="fa fa-users-cog text-white"></i>
                    </div>
                    <h1 class="mb-0" data-toggle="counter-up">1831</h1>
                </div>
                <h5 class="mb-3">Expert Workers</h5>
                <span>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit</span>
            </div>
        </div>
    </div>
</div>
{/* <!-- Feature Start --> */}


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
                    <h1 class="mb-4">Years Experience In Solar & Renewable Energy Industry</h1>
                    <p> Smart Tech Solutions is a leading provider of technology solutions specializing in renewable energy and smart automation. with team of experienced professionals and a passion for innovation , we strive to deliver top-notch services tailored to our clients needs</p>
                    <p><i class="fa fa-check-circle text-warning me-3"></i>SUSTAINBILITY</p>
                    <p><i class="fa fa-check-circle text-warning me-3"></i> QUALITY   </p>
                    <p><i class="fa fa-check-circle text-warning me-3"></i> CUSTOMER SATISFACTION</p>
                    <a href="" class="btn btn-warning  py-3 px-4 mt-3 text-white">Explore More</a>
                </div>
            </div>
        </div>
    </div>
</div>
{/* <!-- About End --> */}


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
{/* <!-- Team End --> */}

    

 

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

   
    </>
  )
}

export default About