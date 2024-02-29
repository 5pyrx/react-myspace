import React from 'react';

import style from './Project.module.css';

import webLogo from '../../assets/website.svg';
import codeLogo from '../../assets/code.svg';

function Project() {
  return (
      <div className={style.Project}>
        <h1 className={style.Header}>Projects</h1>

        <div className={style.projContainer}>
          <div className={style.singleProjectWrap1}>
            <div className={style.singleProject1}>
              <div className={style.singleProjectImage2}></div>
              <div className={style.projectLinks}>
              <button className={style.borderLeft}>
                <a href="https://waste-not-js.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={webLogo} alt='view website' />
                </a>
                </button>
                <button className={style.borderRight}>
                  <a href="https://github.com/5pyrx/waste-not" target="_blank" rel="noopener noreferrer">
                    <img src={codeLogo} alt='view code' />
                  </a>
                </button>
              </div>
            </div>
            <div className={style.sidePanel}>
              <h3>3D Island</h3>
              <h4>A single page 3D app</h4>
              <p><strong>Built using:</strong> React, three.js, react-three-fiber, Drei, Tailwind </p>
              <p>
                A three.js single page project built to learn and demonstrate 3D techniques and animations.
              </p>
            </div>
          </div>
        </div>

        <div className={style.projContainer}>
          <div className={style.singleProjectWrap2}>
            <div className={style.sidePanel}>
              <h3>3D t-shirts</h3>
              <h4>An AI t-shirt designer</h4>
              <p><strong>Built using:</strong> React, three.js, react-three-fiber, Drei, Express,openAI</p>
              <p>
                A three.js single page project built using openAI to power logo and print
                designs for a 3D shirt model.
              </p>
            </div>
            <div className={style.singleProject1}>
              <div className={style.singleProjectImage3}></div>
              <div className={style.projectLinks}>
              <button className={style.borderLeft}>
                <a href="https://waste-not-js.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={webLogo} alt='view website' />
                </a>
                </button>
                <button className={style.borderRight}>
                  <a href="https://github.com/5pyrx/waste-not" target="_blank" rel="noopener noreferrer">
                    <img src={codeLogo} alt='view code' />
                  </a>
                </button>
              </div>
            </div>
            
          </div>
        </div>

        <div className={style.projContainer}>
          <div className={style.singleProjectWrap1}>
            <div className={style.singleProject1}>
              <div className={style.singleProjectImage1}></div>
              <div className={style.projectLinks}>
              <button className={style.borderLeft}>
                <a href="https://waste-not-js.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={webLogo} alt='website' />
                </a>
                </button>
                <button className={style.borderRight}>
                  <a href="https://github.com/5pyrx/waste-not" target="_blank" rel="noopener noreferrer">
                    <img src={codeLogo} alt='code' />
                  </a>
                </button>
              </div>
            </div>
            <div className={style.sidePanel}>
              <h3>Waste Not</h3>
              <h4>An authenticated CRUD App</h4>
              <p><strong>Built using:</strong> React, Node, Ajax & Firebase</p>
              <p>A responsive web app that fetchs a 
                list of possible recipes a user could cook, 
                based upon the food they have in their kitchen. 
                Which can be saved for to the users account.
              </p>
            </div>
          </div>
        </div>


      </div>
  );
}

export default Project;
