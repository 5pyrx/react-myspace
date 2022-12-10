import React from 'react';

import style from './Project.module.css';

// import codeIcon from '../../assets/code.svg';

function Project() {
  return (
    <div className={style.Project}>
      <h1 className={style.Header}>Projects</h1>
      <div className={style.projContainer}>
        <div className={style.singleProjectWrap}>
          <div className={style.singleProject1}>
            <div className={style.singleProjectImage1}></div>
            <div className={style.projectLinks}>
            <button className={style.borderLeft}>
              <a href="https://waste-not-js.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img src={require('../../assets/website.svg')} alt='website' />
              </a>
              </button>
              <button className={style.borderRight}>
                <a href="https://github.com/5pyrx/waste-not" target="_blank" rel="noopener noreferrer">
                  <img src={require('../../assets/code.svg')} alt='code' />
                </a>
              </button>
            </div>
          </div>
          <div className={style.sidePanel}>
            <h3>Waste Not</h3>
            <h4>An authenticated CRUD App</h4>
            <p>Built using: git, npm, ajax, firebase & react.js</p>
            <p>Waste not is a responsive web app that fetchs a 
              list of possible recipes a user could cook, 
              based upon the food they have in their kitchen. 
              These recipes can then be saved to their favourites, ready to view when they next login. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
