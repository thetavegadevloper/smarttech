import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about';
import Contact from './components/Contact';
import Service from './components/service';
import Projects from './components/Projects';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
           
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
