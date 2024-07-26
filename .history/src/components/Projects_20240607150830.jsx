 
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./Project.css"

function Projects() {
  return (
    <>
    {/* header start  */}
    <div class="custom-container">
    
    <nav class="navbar">
        <div class="logo">
             
            <img src="logo.png " alt="Logo"/>
        </div>
        <ul class="pages">
              <li><a href="home">HOME</a></li>
            <li><a href="about">ABOUT</a></li>
            <li><a href="service">SERVICES</a></li>
            <li><a href="project">PROJECTS</a></li>
            <li><a href="contact">CONTACT</a></li>
        </ul>
    </nav>
    
    
    <img src="projecthead.jpg" alt="Image"/>
    <div class="custom-tagline">" "Shine On with Solar: Lighting Up Your Life, Responsibly!""</div>
</div>
{/* header end  */}
    {/* project start  */}
    <div className="container">
    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
        <h4 className="text-success mt-5">Our Projects</h4>
        <h1 className="mb-4">Visit Our Latest Solar And Renewable Energy Projects</h1>
    </div>
  <div id="carouselExampleDark" className="carousel carousel-white87\ slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src="carousel1.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">First slide label</h5>
          <p className="text-white">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src="carousel2.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">Second slide label</h5>
          <p className="text-white">Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src="carousel3.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className="text-white">Third slide label</h5>
          <p className="text-white">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden text-white">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden text-white">Next</span>
    </button>
  </div>
</div>
 
{/* project end  */}
{/* testimonial start  */} 
<div class="container">
  <h2 class="testimonial-heading mb-5">Client Testimonials</h2>
  
  <div class="row testimonial-cards">
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="people1.avif" alt="John Doe"/>
        <div class="card-body">
          <h5 class="card-title text-center">John Doe</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">CEO, XYZ Company</h6>
          <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="people2.avif" alt="Jane Smith"/>
        <div class="card-body">
          <h5 class="card-title text-center">Jane Smith</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">CTO, ABC Corporation</h6>
          <p class="card-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."</p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="people3.avif" alt="David Johnson"/>
        <div class="card-body">
          <h5 class="card-title text-center">David Johnson</h5>
          <h6 class="card-subtitle mb-2 text-muted text-center">Founder, PQR Inc.</h6>
          <p class="card-text">"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem."</p>
        </div>
      </div>
    </div>
  </div>
</div>


               {/* <!-- Testimonial End --> */}

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
          <p><a href='home' className='text-white' style={{ textDecoration: 'none' }}> HOME </a></p>
          <p><a href='about' className='text-white' style={{ textDecoration: 'none' }}>ABOUT US</a></p>
          <p><a href='service' className='text-white' style={{ textDecoration: 'none' }}>SERVICES</a></p>
          {/* <p><a href='project' className='text-white' style={{ textDecoration: 'none' }}>Projects</a></p> */}
          <p><a href='contact' className='text-white' style={{ textDecoration: 'none' }}> CONTACT US </a></p>
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

export default Projects