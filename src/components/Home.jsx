import "bootstrap/dist/css/bootstrap.min.css";
// import team1 from "../img/team-1.jpg";
// import team2 from "../img/team-2.jpg";
// import team3 from "../img/team-3.jpg";
import greenq from "../img/greenq.jpg";
import quality1 from "../img/quality1.png";
import customer from "../img/customer.jpg";
// import sunrise from "../img/sunrise.jpg";
// import solarpowerplant from "../img/solarpowerplant.jpg";
import "../components/Home.css";
import Carousel from "react-bootstrap/Carousel";
// import about1 from "../img/about1.jpg";
import sunset from "../img/sunset.jpg";
import logo from "../img/logo.png"; 
// import home1 from "../img/home1.jpg";
// import innovetive from "../img/innovetive.jpg";
import project4 from "../img/project4.jpg";

import service2 from "../img/SPP.avif";
import service3 from "../img/automation.avif";
// import pr3 from "../img/pr3.jpg";
// import gallery from "../img/carousel-1.jpg";
 import header2 from "../img/header2.jpg";
import AOS from "aos";
// import "aos/dist/aos.css"; // Import the CSS for AOS animations
import { Link } from "react-router-dom";
import { FaSolarPanel } from "react-icons/fa";
import { TbHomeCog } from "react-icons/tb";
import { GiTheater } from "react-icons/gi";
import gallery from "../img/gallery.jpg";
import logo3 from "../img/logo3.png";
import Hometheater from "../img/Hometheater.jpg";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React from "react";

function Home() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "90d68976-a66d-4e66-a3a6-aabdb2a9c0d6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send the form. Please try again later.");
    }
  };

  AOS.init();
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <nav className="custom-navbar navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand me-auto" to="/">
            <img src={logo} alt="Logo" height="60px" />
          </Link>

          <button
            className="navbar-toggler custom-navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" id="home" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="admin" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section3">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <Link
            to="/Contact"
            className="custom-login-button text-white d-lg-inline-block"
          >
            Get a Quote
          </Link>*/}
        </div>
      </nav>  


      





      {/* new  */}
      {/* <nav className="custom-navbar navbar navbar-expand-lg sticky-top navbar-transparent shadow-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="40px" />
          </Link>

          <button
            className="navbar-toggler custom-navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item" style={{marginLeft: '40rem'}}>
                <a className="nav-link" id="home" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="admin" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section3">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* <!-- Navbar End --> */}

      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sunset} // Replace with your image URL
            alt="First slide"
            style={{ opacity: '0.80', backgroundColor: 'black'}}
          />
          <Carousel.Caption className="caption-right caption-lg-left">
            <h3 style={{ color: 'white', fontWeight: 'bolder'}}>Welcome to</h3>
            <h1 style={{ color: 'white', fontWeight: 'bolder', textshadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'}}>SMART TECH SOLUTIONS</h1>
            <h5 style={{ color: 'white', fontWeight: 'bolder'}}>Empowering your future with sustainable energy and smart automation.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={innovetive} // Replace with your image URL
            alt="Second slide"
          />
          <Carousel.Caption className="caption-right caption-lg-left">
            <h1 style={{ color: 'white', fontWeight: 'bolder'}}>Innovative Technology Solutions</h1>
            <h5 style={{ color: 'white', fontWeight: 'bolder'}}>Leading the way in renewable energy.</h5>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={header2} // Replace with your image URL
            alt="Third slide"
          />
          <Carousel.Caption className="caption-right caption-lg-left">
          <h1 style={{ color: 'white', fontWeight: 'bolder'}}>Smart Automation</h1>
            <h5 style={{ color: 'white', fontWeight: 'bolder'}}>Transforming homes and businesses with advanced automation.</h5>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block w-100 h-70"
            src={innovetive} // Replace with your image URL
            alt="Fourth slide"
          />
          <Carousel.Caption className="caption-right caption-lg-left">
            <h1 style={{ color: 'white', fontWeight: 'bolder'}}>Sustainable Energy</h1>
            <h5 style={{ color: 'white', fontWeight: 'bolder'}}>Harnessing the power of the sun for a greener tomorrow.</h5>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </div>

      {/* <!-- Carousel End --> */}

      {/* <!-- About Start --> */}
     <div className="about1" id="about" style={{ height: '1rem'}}></div>
     <div className="container my-5">
      <div className=" text-black p-3 rounded shadow-md" style={{ backgroundColor: 'white'}}>
      <div className="jadu">
      <div className="text-center">
        <h1 className="text-uppercase mb-4" style={{ color: '#f28d35'}}>ABOUT US</h1>
        </div>
        <h4 className="mb-3">Welcome to Smart Tech Solutions</h4>
        <p style={{fontSize: '1.2rem', textAlign: 'justify'}}>
          We are pioneers in providing state-of-the-art green energy solutions, specializing in both
          ON Grid and OFF Grid solar installations for domestic and industrial needs. Our mission is
          to drive sustainability by harnessing the power of the sun to deliver reliable and efficient
          solar energy solutions. With a highly experienced team and partnerships with top PV panel
          and inverter manufacturers, we ensure our clients receive the highest quality service from
          concept to commissioning and beyond.
        </p>
        <p style={{fontSize: '1.2rem', textAlign: 'justify'}}>
          As a leading provider of Solar Energy solutions, we are dedicated to helping homeowners and
          businesses harness the suns abundant energy to reduce their carbon footprint and save on
          energy costs.
        </p>
        </div>
        <div className="jadu">
        <div className="text-center">
        <h4 className="mt-5 mb-3">At Smart Tech Solutions</h4>
        <h5>We are Committed to</h5>
        </div>
        <div className="row mt-4">
          <div className="col-md-3 text-center shadow-lg" style={{ boxShadow: ''}}>
            <i className="bi bi-lightning-charge-fill display-4 mb-2" style={{ color: '#f28d35'}}></i>
            <p style={{fontSize: '1.2rem'}}>Reducing energy costs</p>
          </div>
          <div className="col-md-3 text-center shadow-lg">
            <i className="bi bi-globe2 display-4 mb-2" style={{ color: '#0dac12'}}></i>
            <p style={{fontSize: '1.2rem'}}>Promoting environmental sustainability</p>
          </div>
          <div className="col-md-3 text-center shadow-lg">
            <i className="bi bi-battery-charging display-4 mb-2" style={{ color: '#f28d35'}}></i>
            <p style={{fontSize: '1.2rem'}}>Enhancing energy independence</p>
          </div>
          <div className="col-md-3 text-center shadow-lg">
            <i className="bi bi-bar-chart-fill display-4 mb-2" style={{ color: '#f28d35'}}></i>
            <p style={{fontSize: '1.2rem'}}>Providing cutting-edge energy management and monitoring systems</p>
          </div>
          </div>
        </div>
      </div>
    </div>
     {/* <div className="container-fluid p-3" style={{ width: '100%'}}>
      <div className="row">
      <div className="col-lg-5 order-lg-1 ">
        <div className="text-center">
            <h4 className="mt-5 mb-3 fw-bolder">At Smart Tech Solutions,</h4>
            <h5>We are Committed to</h5>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 text-center mb-4">
              <i className="bi bi-lightning-charge-fill display-4 mb-2" style={{ color: '#f28d35'}}></i>
              <p style={{ fontWeight: 'bold'}}>Reducing energy costs</p>
            </div>
            <div className="col-md-6 text-center mb-4">
              <i className="bi bi-globe2 text-success display-4 mb-2"></i>
              <p style={{ fontWeight: 'bold'}}>Promoting environmental sustainability</p>
            </div>
            <div className="col-md-6 text-center mb-4">
              <i className="bi bi-battery-charging display-4 mb-2" style={{ color: '#f28d35'}}></i>
              <p style={{ fontWeight: 'bold'}}>Enhancing energy independence</p>
            </div>
            <div className="col-md-6 text-center mb-4">
              <i className="bi bi-bar-chart-fill display-4 mb-2" style={{ color: '#f28d35'}}></i>
              <p style={{ fontWeight: 'bold'}}>Providing cutting-edge energy management and monitoring systems</p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 order-lg-2 mb-8 rounded shadow-lg" style={{ backgroundColor: ''}}>
          <div className="text-white p-5 rounded custom-shadow">
            <h2 className="text-uppercase mb-4 text-center" style={{ color: '#f28d35'}}>About Us</h2>
            <h4 className="mb-3"  style={{ color: 'black'}}>Welcome to Smart Tech Solutions</h4>
            <p style={{  color: 'black', fontWeight: '5%'}}>
              We are pioneers in providing state-of-the-art green energy solutions, specializing in both
              ON Grid and OFF Grid solar installations for domestic and industrial needs. Our mission is
              to drive sustainability by harnessing the power of the sun to deliver reliable and efficient
              solar energy solutions. With a highly experienced team and partnerships with top PV panel
              and inverter manufacturers, we ensure our clients receive the highest quality service from
              concept to commissioning and beyond.
            </p>
            <p style={{  color: 'black'}}>
              As a leading provider of Solar Energy solutions, we are dedicated to helping homeowners and
              businesses harness the suns abundant energy to reduce their carbon footprint and save on
              energy costs.
            </p>
          </div>
        </div>
      </div>
    </div> */}

    
      {/* <br /> */}
      <div className="container-fluid mt-5">
        <div className="container">
          <h1 className="text-center" style={{color: '#f28d35'}}>OUR VALUES</h1>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className="card rounded-container ">
                <img src={greenq} className="card-img-top " alt="Image 1" />
                <br />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{color: '#f28d35'}}>SUSTAINABILITY</h5>
                  <p className="card-text" style={{fontSize: '1.2rem'}}>
                    {" "}
                    We Prioritize Eco-Friendly solutions for a greener future.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-container">
                <img src={quality1} className="card-img-top" alt="Image 2" />
                <br />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{color: '#f28d35'}}>QUALITY</h5>
                  <p className="card-text" style={{fontSize: '1.2rem'}}>
                    {" "}
                    Our Commitment to excellence ensures reliable and efficient
                    systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded-container">
                <img src={customer} className="card-img-top" alt="Image 3" />
                <br />
                <div className="card-body text-center">
                  <h5 className="card-title" style={{color: '#f28d35'}}>
                    {" "}
                    CUSTOMER SATISFACTION
                  </h5>
                  <p className="card-text" style={{fontSize: '1.2rem'}}>
                    {" "}
                    your Satisfaction is our priority, driving us to deliver
                    exceptional results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
      
      {/* <!-- Service Start --> */}
      
      <div id="section3" style={{ height: '2rem'}}></div>
      {/* <br></br> */}
      <div className="Tabs">
        <div
          className="text-center mx-auto mt-5 mb-2 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <h1 className="mt-4" id="section3" style={{ marginTop: "2rem", color: '#f28d35'}}>
            OUR SERVICES
          </h1>
          <h4 className="mb-4" style={{ margin: '1rem'}}>
            We Are Pioneers In The World Of Renewable Energy
          </h4>
        </div>
        <div className="container">
          <Tabs
            defaultActiveKey="profile"
            id="service-tabs"
            className="mb-5"
            variant="pills"
            justify
          >
            <Tab eventKey="home" title="Rooftop Solar">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img
                    className="img-fluid rounded"
                    src={project4}
                    alt="Project 2"
                  />
                </div>
                <div className="col-md-6">
                  <div className="service-details" style={{ marginTop: '1rem'}}>
                    <FaSolarPanel className="service-icon" />
                    <h3>Rooftop Solar Solutions</h3>
                    <p className="mb-4" style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                      Tailored solutions for residential, commercial, and
                      industrial consumers.
                    </p>
                    <ul className="custom-service-points">
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Design and Installation: Tailored Solutions for
                        residential, commercial, and industrial consumers.
                      </li>
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Business Models: Choose between OPEX (Operating Expense)
                        and Capex (Capital Expense) Models.
                      </li>
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Benefits: Cost savings, energy independence, and
                        environmental impact.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="profile" title="Solar Power Plants">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                  <img
                    className="img-fluid rounded"
                    src={service2}
                    alt="Service 2"
                  />
                </div>
                <div className="col-md-6">
                  <div className="service-details">
                    <FaSolarPanel className="service-icon" />
                    <h3>Solar Power Plants</h3>
                    <p className="mb-4" style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                      Comprehensive solutions for solar power generation.
                    </p>
                    <ul className="custom-service-points">
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Design and Installation: Comprehensive solutions for
                        solar power generation.
                      </li>
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Operation and Maintenance: Ensuring optimal performance
                        and longevity.
                      </li>
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Case Studies/Testimonials: Showcase successful projects
                        and satisfied clients.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="longer-tab" title="Home Automation">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                  <img
                    className="img-fluid rounded"
                    src={service3}
                    alt="Service 3"
                  />
                </div>
                <div className="col-md-6">
                  <div className="service-details">
                    <TbHomeCog className="service-icon" />
                    <h3>Smart Luxury Home Automation</h3>
                    <p className="mb-4" style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                      Control lighting, temperature, security, and entertainment
                      systems seamlessly.
                    </p>
                    <ul className="custom-service-points">
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Features: Control lighting, temperature, security, and
                        entertainment systems seamlessly.
                      </li>
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Integration: Customizable solutions to fit your
                        lifestyle and preferences.
                      </li>
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Benefits: Convenience, energy efficiency, and enhanced
                        living experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab eventKey="contact" title="Home Theatres">
              <div className="row justify-content-center align-items-center">
                <div className="col-md-6">
                  <img
                    className="img-fluid rounded"
                    src={Hometheater}
                    alt="Home Theater"
                  />
                </div>
                <div className="col-md-6">
                  <div className="service-details">
                    <GiTheater className="service-icon" />
                    <h3>Home Theatres</h3>
                    <p className="mb-4" style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                      Immerse yourself in superior audiovisual experiences.
                    </p>
                    <ul className="custom-service-points">
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Audio and Video Controls: Immerse yourself in superior
                        audiovisual experiences.
                      </li>
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Customization: Design your dream home theatre with our
                        expert guidance.
                      </li>
                      <li style={{textAlign: 'justify', fontSize: '1.2rem'}}>
                        Quality: High-quality equipment and intuitive controls
                        for an immersive entertainment experience.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
        {/* <!-- Service End --> */}
        {/* <!-- Feature Start --> */}
        <div className="container-fluid py-5">
      <div className="row justify-content-center">
        {/* Left Column: Image */}
        {/* <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <img src={gallery} alt="About Us" className="img-fluid" />
        </div> */}

        {/* Right Column: Text and Icons */}
        <div className="col-lg-6" style={{ padding: '2rem'}}>
          <h2>Why Choose Us!</h2>
          <p className="mt-5" style={{ textAlign: 'justify', fontSize: '1.2rem' }}>
            Whether you’re looking to reduce your carbon footprint, lower
            energy costs, or gain energy independence, we have the expertise
            to deliver tailored solar solutions that meet your needs.
          </p>
          <div className="row g-4 mt-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="btn-lg-square rounded-circle" style={{ background: '#f28d35'}}>
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-0">Quality</p>
                  <h5 className="mb-0" style={{ color: '#f28d35'}}>Services</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="btn-lg-square rounded-circle" style={{ background: '#f28d35'}}>
                  <i className="fa fa-user-check text-white"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-0">Expert</p>
                  <h5 className="mb-0" style={{ color: '#f28d35'}}>Workers</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="btn-lg-square rounded-circle" style={{ background: '#f28d35'}}>
                  <i className="fa fa-drafting-compass text-white"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-0">Free</p>
                  <h5 className="mb-0" style={{ color: '#f28d35'}}>Consultation</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <div className="btn-lg-square rounded-circle" style={{ background: '#f28d35'}}>
                  <i className="fa fa-headphones text-white"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-0">Customer</p>
                  <h5 className="mb-0" style={{ color: '#f28d35'}}>Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 d-flex align-items-center justify-content-center ">
          <img src={gallery} alt="About Us" className="img-fluid rounded" />
        </div>
      </div>
    </div>

      </div>

      {/* new  */}
      

      {/* <!-- Feature End --> */}

      {/* Contact US  start */}

      <div className="about1 text-center" id="contact" style={{ height: '1rem'}}><h2 style={{ color: '#f28d35'}}>CONTACT US</h2></div>

      <div>
        <div className="container py-5">
          <div className="row">
          <div className="col-md-6">
              <div className="map-container">
                {/* <!-- Replace with your map embed code or image --> */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.1540562823006!2d75.34763437420601!3d19.875715726382598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3eccf8ca457%3A0x5dbfa2b513834344!2sSeven%20hill!5e0!3m2!1sen!2sin!4v1719472188387!5m2!1sen!2sin"
                  width="100%"
                  height="630"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 rounded" style={{ backgroundColor: '#f28d35', marginTop: '1rem' }}>
              <div className="quote-form text-dark p-4 rounded" style={{ backgroundColor: '#f28d35' }}>
                <h2 className="mb-4 text-white" style={{ fontWeight: 'bold'}}>Get A Quote</h2>
                <form id="quoteForm" method="POST" onSubmit={onSubmit} style={{ backgroundColor: '#f28d35' }}>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label font-weight-bolder" style={{ fontWeight: 'bold'}}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      name="fullName"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold'}}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label" style={{ fontWeight: 'bold'}}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="location" className="form-label" style={{ fontWeight: 'bold'}}>
                      Location
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label" style={{ fontWeight: 'bold'}}>
                      Message (optional)
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn text-white" style={{ fontWeight: 'bold', backgroundColor: '#0dac12'}}>
                    Submit
                  </button>
                </form>
                {result && <p>{result}</p>}
              </div>
            </div>
           
          </div>
        </div>
      </div>

      {/* <!-- faq start  --> */}
      {/* <div className="faq-container ">
        <h5 className="text-warning">Frequently Asked Questions</h5>
        <h2>Navigate through FAQs for Insights</h2>

        <br />
        <br />

        <div className="faq-item ">
          <input type="checkbox" id="faq1" />
          <label htmlFor="faq1">How do solar panels work?</label>
          <div className="faq-content">
            <p>
              Solar panels work by capturing sunlight using photovoltaic cells,
              which convert sunlight into electricity through the photovoltaic
              effect. When sunlight hits the solar panels, it excites electrons
              in the cells, generating direct current (DC) electricity. An
              inverter then converts the DC electricity into alternating current
              (AC) electricity, which can be used to power homes and businesses.
            </p>
          </div>
        </div>

        <div className="faq-item">
          <input type="checkbox" id="faq2" />
          <label htmlFor="faq2">What are the benefits of solar energy?</label>
          <div className="faq-content">
            <p>
              The benefits of solar energy include: reduction in electricity
              bills, long-term cost savings, reduced carbon footprint, combating
              climate change, increased property value, and energy independence.
            </p>
          </div>
        </div>

        <div className="faq-item">
          <input type="checkbox" id="faq3" />
          <label htmlFor="faq3">
            What factors affect the efficiency of solar panels?
          </label>
          <div className="faq-content">
            <p>
              Several factors affect the efficiency of solar panels, including:
              the angle and orientation of the panels relative to the sun,
              shading from trees or buildings, weather conditions such as cloud
              cover and temperature, and the quality and condition of the panels
              and associated equipment.
            </p>
          </div>
        </div>
        <div className="faq-item">
          <input type="checkbox" id="faq4" />
          <label htmlFor="faq4">
            What happens to solar energy production on cloudy days or at night?
          </label>
          <div className="faq-content">
            <p>
              Solar panels can still generate electricity on cloudy days,
              although their output is reduced. During the night, your home or
              business will use electricity from the grid unless you have a
              solar battery storage system to store excess energy generated
              during the day.
            </p>
          </div>
        </div>
      </div> */}
      {/* <!-- faq end  --> */}

      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <img src={logo3} alt="" height="180px" id="footimg" />
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-4">Address</h5>
              <p className="mb-2 text-white">
                <i className="fa fa-map-marker-alt me-3 text-light"></i>Shop
                No.7,Soniya Chambers,Seven Hills, Jalna Road ,Aurangabad -
                431001
              </p>
              <p className="mb-2 text-white">
                <i className="fa fa-phone-alt me-3 text-light"></i>+91
                9822172065/ 9225842444{" "}
              </p>
              <p className="mb-2 text-white">
                <i className="fa fa-envelope me-3 text-light"></i>
                info@smartts.in
              </p>
              {/* <div className="d-flex pt-2">
                        <Link className="btn btn-square btn-outline-light btn-social"  to="#"><i className="fab fa-twitter"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-youtube"></i></Link>
                        <Link className="btn btn-square btn-outline-light btn-social" to="#"><i className="fab fa-linkedin-in"></i></Link>
                    </div> */}
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" id="contact" to="/contact">
                Contact Us
              </Link>
              <Link className="btn btn-link" to="/service">
                Our Services
              </Link>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-white ">
                &copy; <Link to="#">Smart Tech Solutions</Link>, All Right
                Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
      <div className="text-center  mb-3 mb-md-0 text-white" style={{ backgroundColor: '#f28d35', height: '2rem', alignItems: 'center'}}>
      <p style={{fontWeight: 'bold'}}>&copy; Smart Tech Solutions</p>
              </div>

      {/* <!-- Back to Top --> */}
      <a href="#" className="btn btn-lg btn-lg-square  back-to-top" style={{ backgroundColor: '#f28d35' }}>
        <i className="bi bi-arrow-up" style={{ color: "white" }}></i>
      </a>
    </>
  );
}

export default Home;
