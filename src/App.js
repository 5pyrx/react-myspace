import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// import Toolbar from './components/Navigation/Toolbar/Toolbar';
import HomePage from './containers/HomePage/HomePage';
import Project from './containers/Project/Project';
import Experience from './containers/Experience/Experience';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
        {/* <Toolbar /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/#Project" component={Project} />
        <Route path="/#experience" component={Experience} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
