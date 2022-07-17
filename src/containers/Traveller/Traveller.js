import React from 'react';

import style from './Traveller.module.css';
import TravellerImage from '../../assets/Backgrounds/TravellerImage.jpg';

function Traveller() {
  return (
    <div className={style.Traveller}>
      <img src={TravellerImage} alt="A computer with coding in screen"/>
      <p>This is the Traveller view</p>
    </div>
  );
}

export default Traveller;
