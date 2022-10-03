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
          <h1>Professional Experience</h1>
          <p>I have worked in digital teams for > 7 years</p>
        </div>
        <div className={style.boxFlex}>
          <div className={style.boxContainer}>
            <h3>Product Manager</h3>
            <p>I have worked as a digital product manager for 5 years; 
              assisting in the research, design and development of new user experiences 
              in the financial services industry.</p>
          </div>
          <button className={style.buttonBackground} onClick={() => {
                setModalState(true)
              }}>
                <h3 className={style.buttonFont}>

              View CV
                </h3>
          </button>
          <div className={style.boxContainer}>
            <h3>Agile Scrum Master</h3>
            <p>I was a scrum master for 2 years, assisting a remote team 
              delivering complex data dashboards for a tier 1 bank. 
              Giving me a deep understand of how digital teams operate.</p>
          </div>
        </div>
      </div>
    }
    </div>
  );
}

export default Experience;
