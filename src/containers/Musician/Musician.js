import React from 'react';

import style from './Musician.module.css';
import MusicianImage from '../../assets/Backgrounds/MusicianImage.jpg';

function Musician() {
  return (
    <div className={style.Musician}>
      <div className={style.topContainer}>
        <img src={MusicianImage} alt="A computer with coding in screen"/>
        <div className={style.Content}>
          <h2>I enjoy producing music</h2>
          <p>You can check out some of my tracks below</p>
        </div>
      </div>
      <div>
        <p>
          This will be a soundcloud music player one day!
        </p>
      </div>
    </div>
  );
}

export default Musician;
