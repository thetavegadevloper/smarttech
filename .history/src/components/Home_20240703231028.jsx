 
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
import logo from '../img/logo.png'
import homeheader from '../img/servicebg.jpg'
import aboutimg from '../img/servicehead1.jpg'
import service2 from '../img/SPP.avif'
import service3 from '../img/automation.avif'
import pr3 from '../img/pr3.jpg'
import gallery  from '../img/carousel-1.jpg'
import theater  from '../img/hometheatre.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS for AOS animations
import { Link } from 'react-router-dom';
import { FaSolarPanel } from "react-icons/fa";
import { TbHomeCog } from "react-icons/tb";
import { GiTheater } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import { MdOutlineSupportAgent } from "react-icons/md";
import gallery1  from "../img/gallery-1.jpg"
import gallery2  from "../img/gallery-2.jpg"
import gallery3  from "../img/gallery-3.jpg"
import gallery4  from "../img/gallery-4.jpg"
import gallery5  from "../img/gallery2.jpg"
import gallery6  from "../img/gallery3.jpg"
import cor1  from "../img/cor1.jpeg"
import logo2 from "../img/logo2.png"




 

function Home() {
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
                        <Link className="nav-link" to="/about" >About</Link>
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


    {/* <!-- Carousel Start --> */}
    <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class="active" aria-current="true"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item">
      <img src={cor1} alt="Slide 1" height="550px" width="100%"/>
      <div class="carousel-caption">
        <h4>Smart Tech Solutions</h4>
        <h1>Powering the Homes with Solar Panels</h1>
        <button class="btn btn-primary">Discover More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={gallery1} alt="Slide 2" height="550px" width="100%"/>
      <div class="carousel-caption">
        <h4>Smart Tech Solutions</h4>
        <h1>Powering the Homes with Solar Panels</h1>
        <button class="btn btn-primary">Discover More</button>
      </div>
    </div>
    <div class="carousel-item active">
      <img src={gallery2} alt="Slide 3" height="550px" width="100%"/>
      <div class="carousel-caption">
        <h4>Smart Tech Solutions</h4>
        <h1>Powering the Homes with Solar Panels</h1>
        <button class="btn btn-primary">Discover More</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
   
    {/* <!-- Carousel End --> */}



    

    {/* <!-- About Start --> */} 
      <div className="about-container">  
       <div className="about-img"> 
        <img src={gallery6} alt="" ></img>
       </div>
        <div className="about-text">
           <h5> About Us </h5>
           <h2> Who Are We :</h2>
           <p className="mt-5">  Smart Tech Solutions is a leading provider of technology solutions specializing in renewable energy and smart automation. With a team of experienced professionals and a passion for innovation, we strive to deliver top-notch services tailored to our clients' needs.</p>
           


        </div>

      </div> 
      <div class="container-fluid mt-5">
      <div class="container">
        <h3 class="text-center "> Our Values</h3>
        <br/>
        <br/>
        <div class="row">
          <div class="col-md-4">
            <div class="card rounded-container ">
              <img src={project1} class="card-img-top " alt="Image 1"/>
              <br/>
              <div class="card-body text-center">
                <h5 class="card-title">SUSTAINABILITY</h5>
                <p class="card-text"> We Prioritize Eco-Friendly solutions for a greener future.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card rounded-container">
              <img src={project2} class="card-img-top" alt="Image 2" />
              <br/>
              <div class="card-body text-center">
                <h5 class="card-title">QUALITY</h5>
                <p class="card-text"> Our Commitment to excellence ensures reliable and efficient systems.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card rounded-container">
              <img src={project3} class="card-img-top" alt="Image 3" />
              <br/>
              <div class="card-body text-center">
                <h5 class="card-title"> CUSTOMER SATISFACTION</h5>
                <p class="card-text"> your Satisfaction is our priority, driving us to deliver exceptional results</p>
              </div>
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
                <h6 className="text-warning " data-aos="fade-up"  data-aos-duration="1000">Our Services</h6>
                <h1 className="mb-4" data-aos="fade-up" data-aos-duration="3000">We Are Pioneers In The World Of Renewable Energy</h1>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up"  data-aos-duration="1000">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={project2} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                            <FaSolarPanel style={{height : '50px' , width : '50px'}}/>
                            </div>
                            <h4 className="mb-3">Rooftop Solar Solutions</h4>
                            <p> we specialize in providing cutting-edge solar rooftop solutions tailored to meet the energy needs of residential, commercial, and industrial properties.</p>
                            <Link className="small fw-medium text-warning" to="/service">Read More<i className="fa fa-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={service2}/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                            <FaSolarPanel style={{height : '50px' , width : '50px'}}/>
                            </div>
                            <h4 className="mb-3">Solar Power Plants </h4>
                            <p>we specialize in designing, developing, and operating state-of-the-art solar power plants to meet the growing demand for clean and sustainable energy.  </p>
                            <Link className="small fw-medium text-warning" to="/service">Read More<i className="fa fa-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-aos-duration="3000">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={service3} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                            <TbHomeCog  style={{height : '50px' , width : '50px'}}/>
                             
                            </div>
                            <h4 className="mb-3">Luxury Home Automation</h4>
                            <p>We specialize in transforming residences into smart, sophisticated spaces where convenience, comfort, and control are at your fingertips. </p>
                            <Link className="small fw-medium  text-warning" to="/service" >Read More<i className="fa fa-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-aos-duration="1000">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={theater} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                            <GiTheater style={{height : '50px' , width : '50px'}} />

                            </div>
                            <h4 className="mb-3">Home Theatres</h4>
                            <p>Our home theaters are custom-designed to meet your unique preferences and lifestyle. Whether you envision a cozy media room for family movie nights. </p>
                            <Link className="small fw-medium text-warning" to="/service">Read More<i className="fa fa-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up"  data-aos-duration="2000">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={project5} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                            <GrVmMaintenance style={{height : '50px' , width : '50px'}} />
                            </div>
                            <h4 className="mb-3">Maintenance</h4>
                            <p> Our comprehensive solar maintenance services ensure that your investment continues to deliver optimal energy savings and environmental benefits year after year.</p>
                            <Link className="small fw-medium text-warning"  to="/contact">Read More<i className="fa fa-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-aos="fade-up" data-aos-duration="3000">
                    <div className="service-item  overflow-hidden">
                        <img className="img-fluid" src={project3} alt=""/>
                        <div className="position-relative p-4 pt-0">
                            <div className="service-icon">
                            <MdOutlineSupportAgent  style={{height : '50px' , width : '50px'}}/>
                            </div>
                            <h4 className="mb-3">Support </h4>
                            <p>we specialize in providing expert solar consultation services to help you navigate the transition to renewable energy with confidence.  </p>
                            <Link className="small fw-medium text-warning"  to="/contact">Read More<i className="fa fa-arrow-right ms-2"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End --> */}
    {/* <!-- Feature Start --> */}
    <div className="about-container">  
        
        <div className="about-text">
    
           <h2> Why Choose Us!</h2>
           <p className="mt-5"> Whether you’re looking to reduce your carbon footprint, lower energy costs, or gain energy independence, we have the expertise to deliver tailored solar solutions that meet your needs.</p>

           <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="btn-lg-square bg-black rounded-circle">
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
                                    <div className="btn-lg-square bg-black rounded-circle">
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
                                    <div className="btn-lg-square bg-black rounded-circle">
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
                                    <div className="btn-lg-square bg-black rounded-circle">
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
        <div className="about-img"> 
        <img src={gallery6} alt="" ></img>
       </div>


      </div> 
       
     
     
    {/* <!-- Feature End --> */}


     


     

    {/* <!-- Team Start --> */}
    {/* <div className="container-xxl py-5 mt-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <h6 className="text-warning">Team Member</h6>
                <h1 className="mb-4">Experienced Team Members</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s"  data-aos="fade-up"  data-aos-duration="1000">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team1} alt=""/> */}
                            {/* <div className="team-social w-25">
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3" to="#"><i className="fab fa-instagram"></i></Link>
                            </div> */}
                        {/* </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" data-aos="fade-up"  data-aos-duration="2000">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team2} alt=""/> */}
                            {/* <div className="team-social w-25">
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3" to="#"><i className="fab fa-instagram"></i></Link>
                            </div> */}
                        {/* </div> */}
                        {/* <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s"  data-aos="fade-up"  data-aos-duration="3000">
                    <div className="team-item  overflow-hidden">
                        <div className="d-flex">
                            <img className="img-fluid w-75" src={team3} alt=""/> */}
                            {/* <div className="team-social w-25">
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3"  to="#"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-lg-square btn-outline-warning   mt-3" to="#"><i className="fab fa-instagram"></i></Link>
                            </div> */}
                        {/* </div>
                        <div className="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
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
          <label htmlFor="faq4">What happens to solar energy production on cloudy days or at night?</label>
          <div className="faq-content">
            <p>Solar panels can still generate electricity on cloudy days, although their output is reduced. During the night, your home or business will use electricity from the grid unless you have a solar battery storage system to store excess energy generated during the day.</p>
          </div>
        </div>
        
      </div>
      {/* <!-- faq end  --> */}


 

    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                <img src={logo2} alt=""> </img>
                 

                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Address</h5>
                    <p className="mb-2 text-white"><i className="fa fa-map-marker-alt me-3 text-light"></i>Shop No.7,Soniya Chambers,Seven Hills, Jalna Road ,Aurangabad - 431001</p>
                    <p className="mb-2 text-white"><i className="fa fa-phone-alt me-3 text-light"></i>+91 9822172065/ 9225842444 </p>
                    <p className="mb-2 text-white"><i className="fa fa-envelope me-3 text-light"></i>info@smartts.in</p>
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

export default Home