// import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
// import Projects from './components/Projects';
import Service from './components/Service';
// import Newcontact from './components/Newcontact'
import Services from './components/Services';
 

function App() {
  return (
    <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service"  element={<Service/>} />
          {/* <Route path="/project"  element={<Projects/>} /> */}
          <Route path="/contact"  element={<Contact/>} />
          {/* <Route path="/newcontact" element={<Newcontact/>} /> */}
          <Route path="/services" element={<Services/>} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
