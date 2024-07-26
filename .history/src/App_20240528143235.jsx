import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Projects from './components/Projects';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
           
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
