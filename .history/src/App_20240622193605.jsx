import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Service from './components/Service';
 

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service"  element={<Service/>} />
          <Route path="/project"  element={<Projects/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
