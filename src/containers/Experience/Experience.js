import React from 'react';
import { useState } from "react";

import Modal from '../../components/Modal/Modal';

import style from './Experience.module.css';
import Footer from '../../components/Footer/Footer';

function Experience() {
  const [ modalState, setModalState ] = useState(false);

  return (
    <>
    <div className={style.Experience}>
      {modalState ? 
        <Modal closeModal={setModalState}/> 
        : 
      <div className={style.experienceContent}>
        <div className={style.contentTitle}>
          <h1>Professional Experience</h1>
          <p>I have worked in digital teams for over 8 years</p>
        </div>
        <div className={style.boxFlex}>
          <div className={style.wideBoxTop}>
              <h3>Software Engineer</h3>
              <p>
                I started my engineering journey learning python basics, moving onto Javascript & JQuery and later learning React 16.
                During my role as Innovation Product Manager I was able to assist in the build phase of new product concepts, 
                building user interfaces for blockchain, savings and mortgage journeys.
              </p>
              <p>
                I continued to deepen my knowledge of react, utilising resources such as Robin Weiruch's Road to React, Maximillian Schwarzmüller's complete guide and Bruno Simon's Three.js & React-three-fiber.
                And completed a full-stack Javascript software engineering course at Northcoders
              </p>
          </div>
          <div className={style.boxContainer}>
            <h3>Product Manager</h3>
            <p>5 years as a digital product manager
              assisting in the research, design and development of new products 
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
            <p>2 years as a scrum master, assisting remote teams in 
              delivering complex data dashboards for tier 1 banks. 
              </p>
          </div>
          <div className={style.wideBox}>
            <h3>Entrepreuner</h3>
            <p>Tech start-up founder of a mobile app called Tipsta, which allowed customers to tip restaurant staff directly. Designed using figma, built using meteor.js & launched to the app store in 2018</p>
          </div>
        </div>
      </div>
    }
    </div>
      <div className={style.Contact}>
      <Footer />
      
    </div>
    </>
  );
}

export default Experience;
