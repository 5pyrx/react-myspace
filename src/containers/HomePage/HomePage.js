import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { NavLink } from 'react-router-dom';
import style from './HomePage.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Programmer from '../Programmer/Programmer.js';
import Experience from '../Experience/Experience.js';

import Painting from '../../components/3dModels/ScenePainting';
// import GreenHouse from '../../components/3dModels/MangroveGreenhouse';

function HomePage() {

  const getDateTime = () => {
    let date = new Date();
    let hour = date.getHours();
    console.log(date);
    console.log(hour);
    let welcomeMessage = "";
    if (hour > 0 && hour < 12) {
      welcomeMessage = "Morning";
    } else if (hour >= 12 && hour <= 17) {
      welcomeMessage = "Afternoon";
    } else {
      welcomeMessage = "Evening";
    }
    return welcomeMessage;
  };

  return (
    <>
      
      <div className={style.HomePage}>
      
        <div className={style.Container}>
          <Toolbar />
          <div className={style.Content}>
            <p>👋 Good {getDateTime()}</p>
            <h2>I'm Jay Spencer</h2>
            <h1>A creative front-end <br/>
            web developer</h1>
            <p>The only way to be proud of your work, <br/>
            is to put your self in to it</p>
          </div>
          <Canvas className={style.Canvas} >
            <OrbitControls enableZoom={false} autoRotate={false} rotateSpeed={0.2} />
            <Painting />
            {/* <GreenHouse  /> */}
          </Canvas>
        </div>

        <Programmer />

        <Experience />
      </div>
    </>
  );
};

export default HomePage;
