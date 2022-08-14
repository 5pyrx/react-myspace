import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// import Toolbar from './components/Navigation/Toolbar/Toolbar';
import HomePage from './containers/HomePage/HomePage';
import Programmer from './containers/Programmer/Programmer';
import Traveller from './containers/Traveller/Traveller';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
        {/* <Toolbar /> */}
        <Route exact path="/" component={HomePage} />
        <Route path="/programmer" component={Programmer} />
        <Route path="/traveller" component={Traveller} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
