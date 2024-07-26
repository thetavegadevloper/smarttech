 
import "bootstrap/dist/css/bootstrap.min.css";  
import "./About.css"

function About() {
  return (
    <> 
     
     <div className="custom-container">
    
    <nav className="navbar">
        <div className="logo">
             
            <img src="logo.png " alt="Logo"/>
        </div>
        <ul className="pages">
                <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    
    
    <img src="aboutus1.jpg" alt="Image"/>
    <div className="custom-tagline " >"Empowering Tomorrow with Solar Solutions"</div>
</div>
 
     {/* about us start  */}
     <section className="about-us-section">
    <div className="about-us-overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-description">Who Are We : Smart Tech Solutions is a leading provider of technology solutions specializing in renewable energy and smart automation. with team of experienced professionals and a passion for innovation , we strive to deliver top-notch services tailored to our clients needs </p>
            <a href="#" className="btn btn-success">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about us end  */}
  {/* values start  */}
  <div className="container-fluid">
      <div className="container">
        <h3 className="text-center text-success"> Our Values</h3>
        <br/>
        <br/>
        <div className="row">
          <div className="col-md-4">
            <div className="card rounded-container ">
              <img src="3726696.jpg" className="card-img-top " alt="Image 1"/>
              <br/>
              <div className="card-body text-center">
                <h5 className="card-title">SUSTAINABILITY</h5>
                <p className="card-text"> We Prioritize Eco-Friendly solutions for a greener future.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded-container">
              <img src="stamp.jpg" className="card-img-top" alt="Image 2"/>
              <br/>
              <div className="card-body text-center">
                <h5 className="card-title">QUALITY</h5>
                <p className="card-text"> Our Commitment to excellence ensures reliable and efficient systems.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded-container">
              <img src="third.jpg" className="card-img-top" alt="Image 3"/>
              <br/>
              <div className="card-body text-center">
                <h5 className="card-title"> CUSTOMER SATISFACTION</h5>
                <p className="card-text text-gray"> your Satisfaction is our priority, driving us to deliver exceptional results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     
      <footer>
  <div className='bg-dark text-white pt-5 pb-4'>
    <div className='container text-center text-md-left'>
      <div className='row text-center text-md-left'>
        <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-primary'> Smart Tech Solutions</h5>
           <img src='logo2-removebg-preview.png' alt=''/>
        </div>
         
        <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Quick Links</h5>
          <p><a href='#' className='text-white' style={{ textDecoration: 'none' }}>About Us</a></p>
          <p><a href='#' className='text-white' style={{ textDecoration: 'none' }}>Services</a></p>
          <p><a href='#' className='text-white' style={{ textDecoration: 'none' }}>Projects</a></p>
          <p><a href='#' className='text-white' style={{ textDecoration: 'none' }}> Contact Us</a></p>
        </div>
        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
          <h5 className='text-uppercase mb-4 font-weight-bold text-primary'>Contact Us</h5>
          <p><i className='fas fa-home mr-3'></i>New York, NY 2023, US</p>
          <p><i className='fas fa-envelope mr-3'></i>info@example.com</p>
          <p><i className='fas fa-phone mr-3'></i>+1 (123) 456-7890</p>
  
        </div>
      </div>
      <hr className='mb-4'></hr>
      <div className='row align-items-center'>
        <div className='col-md-7 col-lg-8'>
          <p>Copyright @2020 All Rights Reserved by <a href='#' style={{ textDecoration: 'none' }}><strong className='text-primary'>The Providers</strong></a></p>
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

export default About