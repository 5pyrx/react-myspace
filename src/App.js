import React from 'react';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

import Toolbar from './components/Navigation/Toolbar/Toolbar';
import HomePage from './containers/HomePage/HomePage';
// import Programmer from './containers/Programmer/Programmer';
import Musician from './containers/Musician/Musician';
import Traveller from './containers/Traveller/Traveller';
import Footer from './components/Footer/Footer';

import asyncComponent from './hoc/asyncComponent';
// playing with loading components async using react-router-dom (could be done with suspense)
const AsyncProgrammer = asyncComponent(() => {
  return import('./containers/Programmer/Programmer');
});



function App() {
  return (
    <BrowserRouter>
        <Toolbar />
        <Route exact path="/" component={HomePage} />
        <Route path="/programmer" component={AsyncProgrammer} />
        <Route path="/musician" component={Musician} />
        <Route path="/traveller" component={Traveller} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
