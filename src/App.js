import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// Containers
import HomePage from './containers/HomePage/HomePage';
import Skills from './containers/Skills/Skills';
import Project from './containers/Project/Project';
import Experience from './containers/Experience/Experience';
import Contact from './containers/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/#skills" component={Skills} />
        <Route path="/#projects" component={Project} />
        <Route path="/#experience" component={Experience} />
        <Route path="/#contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;

