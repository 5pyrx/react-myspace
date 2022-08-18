import React from 'react';
import { useState } from "react";

import Modal from '../../components/Modal/Modal';

import style from './Experience.module.css';

function Experience() {
  const [ modalState, setModalState ] = useState(false);


  return (
    <div className={style.Experience}>
      {modalState ? 
        <Modal closeModal={setModalState}/> 
        : 
      <div className={style.experienceContent}>
        <div className={style.contentTitle}>
          <h2>Professional Experience</h2>
          <p>I have worked in digital teams for > 6 years</p>
        </div>
        <div className={style.boxFlex}>
          <div className={style.boxContainer}>
            <h3>Product Manager</h3>
            <p>Cupcake ipsum dolor sit amet candy canes. Cheesecake croissant croissant jujubes marzipan biscuit bear claw. 
              Gummies biscuit pie halvah pastry brownie lemon drops. Danish cake icing jujubes lollipop oat cake chocolate cake tootsie roll candy. 
              Dessert caramels fruitcake tart donut donut.</p>
          </div>
          <div className={style.buttonBackground}>
            <button 
              className={style.buttonDownload}
              onClick={() => {
                setModalState(true)
              }}
            >
              View CV
            </button>
          </div>
          <div className={style.boxContainer}>
            <h3>Scrum Master</h3>
            <p>Cupcake ipsum dolor sit amet candy canes. Cheesecake croissant croissant jujubes marzipan biscuit bear claw. 
              Gummies biscuit pie halvah pastry brownie lemon drops. Danish cake icing jujubes lollipop oat cake chocolate cake tootsie roll candy. 
              Dessert caramels fruitcake tart donut donut.</p>
          </div>
        </div>
      </div>
    }
    </div>
  );
}

export default Experience;
