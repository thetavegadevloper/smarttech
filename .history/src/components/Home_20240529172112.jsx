import React from 'react'
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
     <> 
 <div className='hero'>
    <video autoPlay loop muted playsInline className='back-video'>
        <source src='background.mp4' type='video/mp4'/>
        Your browser does not support the video tag.
    </video> 
    <nav> 
        <img src="logo.png" alt='' className='logo'/>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
    </nav>
    <div className='content'> 
        <h1>Welcome to Smart Tech Solutions</h1>
       
    </div>
</div>
 {/* services start  */} 
 {/* footer start   */}
 <div className="container-fluid bg-white text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6 text-white">
                    <h5 className="text-black mb-4">Address</h5>
                    <p className="mb-2 text-black"  ><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2 text-black"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2 text-black"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                     
                </div>
                <div className="col-lg-3 col-md-6  ">
                    <h5 className="text-black mb-4">Quick Links</h5>
                    <a className="btn btn-link text-black" href="about.html">About Us</a>
                    <a className="btn btn-link text-black" href="contact.html">Contact Us</a>
                    <a className="btn btn-link text-black" href="service.html">Our Services</a>
                    <a className="btn btn-link text-black" href="project.html">Project/Portfolio</a>
                    <a className="btn btn-link text-black" href="">Support</a>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 text-black">
                        &copy; <a href="#">Smart Tech Solutions</a>, All Right Reserved.
                    </div>
      
                </div>
            </div>
        </div>
      </div>
      <footer>
          <div className='bg-dark text-white pt-5 pb-4'>
              <div className='container text-center text-md-left'>
               <div className='row text-center text-md-left'>
                  <div className='col-md-3  col-lg-3 col-xl-3 mx-auto mt-3'>

                     <h5 className='text-uppercase mb-4 font-weight-bold text-warning '>Company Name </h5>
                     <p> Here you can use rows and column to organize your footer content lorem ipsum  dolor ital consectore lorem ipsim dolar sit amt adipisicing elit </p>
                  </div>
                  <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>

                  </div>

               </div>

              </div>

          </div>
         
      </footer>
       

       
     
    </>
  
  )
}

export default Home