import React from 'react';
// import { Canvas } from 'react-three-fiber';
// import { NavLink } from 'react-router-dom';
import style from './HomePage.module.css';

import homeImage from '../../assets/Backgrounds/homeImage.png';
// import Programmer from '../../assets/Backgrounds/ProgrammerImage.jpg';
// import Musician from '../../assets/Backgrounds/MusicianImage.jpg';
// import TravellerImage from '../../assets/Backgrounds/TravellerImage1.png';
// import ContentBanner from '../../components/ContentBanner/ContentBanner';

// function Box() {
//   return (
//     <mesh>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="hotpink" />
//     </mesh>
//   )
// }

function HomePage() {
  return (
    <>
      <div className={style.HomePage}>
        <div className={style.topContainer}>
          <img className={style.imgMain} src={homeImage} alt="A sunset with someone sat under a braintree" />
          <div className={style.Content}>
            <h2>Jonathan Spencer</h2>
            <h1>An aspiring <br/> web developer</h1>
            <p>The only way to be proud of your work, <br/>
            is to put your self in to it</p>
          </div>
        </div>
        {/* <ContentBanner />
        <div className={style.midContainer}>
          <div className={style.imageBox}>
            <NavLink to="/Programmer">
              <img className={style.linkedImages} src={Programmer} alt="A sunset with someone sat under a braintree" />
            </NavLink>
          </div>
          <div className={style.imageBox}>
            <NavLink to="/Musician">
              <img src={Musician} alt="Music production equiptment" />
            </NavLink>
          </div>
        </div>
        <div className={style.botContainer}>
          <NavLink to="/Traveller">
            <img className={style.imgMain} src={TravellerImage} alt="A sun sets over Thai fishing boats" />
          </NavLink>
        </div> */}
      </div>
    </>
  );
}

export default HomePage;
