import React from 'react';

import style from './Programmer.module.css';
import ProgrammerImage from '../../assets/Backgrounds/ProgrammerImage.jpg';

function Programmer() {
  return (
    <div className={style.Programmer}>
      <img src={ProgrammerImage} alt="A computer with coding in screen"/>
      <p>This is the Programmer view</p>
    </div>
  );
}

export default Programmer;
