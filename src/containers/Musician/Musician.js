import React from 'react';

import style from './Musician.module.css';
import MusicianImage from '../../assets/Backgrounds/MusicianImage.jpg';

function Musician() {
  return (
    <div className={style.Musician}>
      <div className={style.topContainer}>
        <img src={MusicianImage} alt="A computer with coding in screen"/>
        <div className={style.Content}>
          <h2>I am a music producer and performer</h2>
          <p>You can check out some of my tracks below</p>
        </div>
      </div>
      <div>This will be a music player with a list of the tracks i upload to the site from a mongoDB</div>
    </div>
  );
}

export default Musician;
