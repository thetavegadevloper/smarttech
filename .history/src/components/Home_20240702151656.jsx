 
 
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



 

function Home() {
    AOS.init();
  return (
     <> 

    {/* <!-- Navbar Start --> */}
    <nav className="custom-navbar navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
            <Link className="navbar-brand me-auto" to="/"><img src={logo} alt="Logo" height="60px"/>
             <p>Smart Tech</p> <p> Solutions</p> </Link>
    
        
            <button className="navbar-toggler custom-navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
    
    
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active"  to="/">Home</Link>
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
    <div className="header">
        <img src={homeheader} alt="" height="580px" width="100%" />
        <div className="headertext">
          <h5 className="mb-3  text-white">Smart tech Solutions</h5>
          <h1 className="text-white">Powering Homes With Solar Panels</h1>
          <Link  to="/about"> <button className="mt-5 text-white">Discover More</button></Link>
        </div>
      </div>
       
    {/* <!-- Carousel End --> */}



    

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
    <div className="container-fluid  overflow-hidden my-5 px-lg-0 " style={{backgroundColor : "rgb(247, 247, 247)"}}>
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                        <h6 className="text-warning">Why Choose Us!</h6>
                        <h1 className="mb-4">Complete Commercial & Residential Solar Systems</h1>
                        <p className="mb-4 pb-2"> Whether you’re looking to reduce your carbon footprint, lower energy costs, or gain energy independence, we have the expertise to deliver tailored solar solutions that meet your needs.</p>
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
                        <img className="position-absolute img-fluid w-100 h-100" src={pr3} style={{objectFit : "cover"}} alt=""/>
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
                <h6 className="text-warning"  data-aos="fade-up"  data-aos-duration="1000">Our Projects</h6>
                <h1 className="mb-4"  data-aos="fade-up"  data-aos-duration="1000">Visit Our Latest Solar And Renewable Energy Projects</h1>
            </div>
           
            <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.5s">
                <div className="col-lg-4 col-md-6 portfolio-item first"  data-aos="fade-up"  data-aos-duration="3000">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project4} alt=""/>
                        
                    </div>
                    <div className="pt-3">  
                        <p className="text-warning mb-0">Project 1</p>
                        <hr className="text-warning w-25 my-2"/>
                        
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second"  data-aos="fade-up"  data-aos-duration="3000">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project6} alt=""/>
                         
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Project 2</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item third"  data-aos="fade-up"  data-aos-duration="3000">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project5} alt=""/>
                         
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Project 3</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item first"  data-aos="fade-up"  data-aos-duration="3000">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project1} alt=""/>
                         
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Project 4</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item second"  data-aos="fade-up"  data-aos-duration="3000">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project2} alt=""/>
                         
                    </div>
                    <div className="pt-3">
                        <p className="text-warning mb-0">Project 5</p>
                        <hr className="text-warning w-25 my-2"/>
                        <h5 className="lh-base">We Are pioneers of solar & renewable energy industry</h5>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item third"  data-aos="fade-up"  data-aos-duration="3000">
                    <div className="portfolio-img  overflow-hidden">
                        <img className="img-fluid" src={project3} alt=""/>
                         
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
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Project Gallery</h5>
                    <div className="row g-2">
                        <div className="col-4">
                            <img className="img-fluid " src={gallery1} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery2} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery3} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery4} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery5} alt=""/>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid " src={gallery6} alt=""/>
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

export default Home