import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Service from './components/Service';
import ScrollToTop from './components/ScrollToTop';
 

function App() {
  return (
    <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service"  element={<Service/>} />
          <Route path="/project"  element={<Projects/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
h