import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { HashLink as Link } from 'react-router-hash-link';
import style from './HomePage.module.css';

import Project from '../Project/Project.js';
import Experience from '../Experience/Experience.js';
import NavigationItems from '../../components/Navigation/NavigationItems';
import Logo from '../../components/Logo/Logo';

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
        <div className={style.Logo}>
          <Logo />
        </div>
        <div className={style.NavBar}>
          <NavigationItems />
        </div>
        <section>
          <div className={style.topContainer}>
            <div className={style.contentWrapper}>
              <div className={style.Content}>
                <h2>👋 Good {getDateTime()}</h2>
                <h2>I'm Jay Spencer</h2>
                <h1>A creative front-end <br/>
                web developer</h1>
              </div>
            </div>
            <Canvas className={style.Canvas} >
              <OrbitControls enableZoom={false} enablePan={false} />
              <Painting />
              {/* <GreenHouse  /> */}
            </Canvas>
          </div>
        </section>
        <section>
          <Project />
        </section>
        <section>
          <Experience />
        </section>
      </div>
    </>
  );
};

export default HomePage;
