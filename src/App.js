import React, { useState } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// Nav
import NavBar from './containers/NavBar/NavBar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

// Containers
import HomePage from './containers/HomePage/HomePage';
import Project from './containers/Project/Project';
import Experience from './containers/Experience/Experience';
import Contact from './containers/Contact/Contact';

function App() {

  const [isActive, setIsActive] = useState(false);

  const handleToggleMenu = () => {
    isActive ? 
      setIsActive(false)
    :
      setIsActive(true)
  };


  return (

      <BrowserRouter>
        { isActive ?
          <>
            <SideDrawer />
            <Backdrop click={handleToggleMenu}/>
          </>
        : 
        <></>
        }
          <NavBar click={handleToggleMenu}/>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/#skills" component={Skills} /> */}
          <Route path="/#projects" component={Project} />
          <Route path="/#experience" component={Experience} />
          <Route path="/#contact" component={Contact} />
      </BrowserRouter>
  );
}

export default App;

