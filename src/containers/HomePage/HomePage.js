import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { NavLink } from 'react-router-dom';
import style from './HomePage.module.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import Painting from '../../components/3dModels/ScenePainting';
import GreenHouse from '../../components/3dModels/MangroveGreenhouse';

function HomePage() {
  return (
    <>
      
      <div className={style.HomePage}>
      
      <div className={style.Container}>
        <Toolbar />
        <div className={style.Content}>
          <h2>Jay Spencer</h2>
          <h1>Creative web developer</h1>
          <p>The only way to be proud of your work, <br/>
          is to put your self in to it</p>
        </div>
        
        <Canvas className={style.Canvas} >
          <OrbitControls enableZoom={false} />
          <Painting />
          {/* <GreenHouse  /> */}
        </Canvas>
        </div>
      </div>
    </>
  );
}

export default HomePage;
