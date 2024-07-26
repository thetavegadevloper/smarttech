 
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
     <> 
 <div className='hero'>
    <video autoPlay loop muted playsInline className='back-video'>
        <source src='newvid.mp4' type='video/mp4'/>
        Your browser does not support the video tag.
    </video> 
    <nav> 
        <img src="logo.png" alt='' className='logo' />
        <ul >
            <li><a href='home'>HOME</a></li>
            <li><a href='about'>ABOUT</a></li>
            <li><a href='service'>SERVICES</a></li>
            <li><a href='project'>PROJECTS</a></li>
            <li><a href='contact'>CONTACT</a></li>
        </ul>
    </nav>
    <div className='content'> 
        <h3>WELCOME TO SMART TECH SOLUTIONS</h3>
        
         
       
    </div>
</div>
 {/* services start  */} 
 <div className='service-head text-success'> 
 <h4 > Our Services</h4>
  
 </div>
  
    
    <div className="service-container">
    
        <div className="service">
            <img src="service1.jpg" alt="Service 1" height="250px"/>
            <h3 >ROOFTOP SOLUTIONS</h3>
            <br/>
            <div className="para">   
                 <p className='text-center'> we specialize in providing cutting-edge solar rooftop solutions tailored to meet the energy needs of residential, commercial, and industrial properties. Harnessing the power of sunlight, our rooftop solar systems offer a sustainable and cost-effective alternative to traditional energy sources.</p>
            </div>
           <a href="service">  <button type="button" className="btn btn-outline-success">Read More </button></a>
        </div>
        <div className="service">
            <img src="service5.jpg" alt="Service 2"  height="250px"/>
            <h3>SOLAR POWER PLANTS</h3>
            <br/>
            <div className="para">   
                 <p className='text-center'> we specialize in designing, developing, and operating state-of-the-art solar power plants to meet the growing demand for clean and sustainable energy. Our solar power plants harness the abundant energy of the sun to generate electricity on a large scale, providing reliable and renewable power to communities.</p>
            </div>
            <a href="service">  <button type="button" className="btn btn-outline-success">Read More </button></a>
        </div>
        <div className="service">
            <img src="service3.jpg" alt="Service 2" height="250px"/>
            <h3>LUXURY HOME AUTOMATION</h3>
            <br/>
            <div className="para">   
             <p className='text-center'>We specialize in transforming residences into smart, sophisticated spaces where convenience, comfort, and control are at your fingertips. Whether you're building a new home or upgrading your existing one, our bespoke automation systems are designed to exceed your expectations.</p>
            </div> 
            <a href="service">  <button type="button" className="btn btn-outline-success">Read More </button></a>
        </div>
        <div className="service">
            <img src="service4.jpg" alt="Service 2" height="250px"/>
            <h3>HOME THEATRES</h3>
            <br/>
            <div className="para">   
                 <p className='text-center'>  Our home theaters are custom-designed to meet your unique preferences and lifestyle. Whether you envision a cozy media room for family movie nights or a sophisticated entertainment lounge for hosting friends, our team of experts will work closely with you to bring your vision to life.</p>
            </div> 
            <a href="service">  <button type="button" className="btn btn-outline-success">Read More </button></a>
        </div>
    </div>
    {/* service end  */}
    {/* Solar calculator  start */}
    {/* solar calculator end  */}
      {/* project start  */}
      <section className="projects-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="  mb-5  mt-5 text-success">Checkout Our  Latest Projects </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <a href="project" className="project-container">
            <img src="pr1.jpg" alt="project 1" className="project-image"/>
          </a>
        </div>
        <div className="col-md-4">
          <a href="project" className="project-container">
            <img src="pr2.webp" alt="project 2" className="project-image"/>
          </a>
        </div>
        <div className="col-md-4">
          <a href="project" className="project-container">
            <img src="pr3.jpg" alt="project 3" className="project-image"/>
          </a>
        </div>
      </div>
    </div>
  </section>  
  
  {/* project end  */}
  {/* solar calculator */}
   

  {/* solar calculator end  */}

    {/* faq start  */}
    <div className="faq-container ">
        <h2 className="text-success">Frequently Asked Questions</h2>
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
        
      </div>
    {/* faq end  */}
    
   
 {/* footer start   */}
 <footer>
  <div className='bg-dark text-white pt-5 pb-4'>
    <div className='container text-center text-md-left'>
      <div className='row text-center text-md-left'>
        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-success'> Smart Tech Solutions</h5>
           <img src='logo2-removebg-preview.png' alt=''/>
        </div>    
        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-success'>Quick Links</h5>
          
          <p><a href='about' className='text-white' style={{ textDecoration: 'none' }}>About Us</a></p>
          <p><a href='service' className='text-white' style={{ textDecoration: 'none' }}>Services</a></p>
          <p><a href='project' className='text-white' style={{ textDecoration: 'none' }}>Projects</a></p>
          <p><a href='contact' className='text-white' style={{ textDecoration: 'none' }}> Contact Us</a></p>
        </div>
        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-success'>Contact Us</h5>
          <p><i className='fas fa-home mr-3'></i>New York, NY 2023, US</p>
          <p><i className='fas fa-envelope mr-3'></i>info@example.com</p>
          <p><i className='fas fa-phone mr-3'></i>+1 (123) 456-7890</p>
        </div>
      </div>
      <hr className='mb-4'></hr>
      <div className='row align-items-center'>
        <div className='col-md-7 col-lg-8'>
          <p>Copyright @2020 All Rights Reserved by <a href='#' style={{ textDecoration: 'none' }}><strong className='text-success'>The Providers</strong></a></p>
        </div>
        <div className='col-md-5 col-lg-4'>
          <div className='text-center text-md-right'>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-facebook'></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-twitter'></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-google-plus'></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-linkedin-in'></i></a>
              </li>
              <li className='list-inline-item'>
                <a href='#' className='btn-floating btn-sm text-white' style={{ fontSize: '23px' }}><i className='fab fa-youtube'></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
 

       
     
    </>
  
  )
}

export default Home