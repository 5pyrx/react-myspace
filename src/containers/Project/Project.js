import React from 'react';

import style from './Project.module.css';

function Project() {
  return (
    <div className={style.Project}>
      <h1>Projects</h1>
      <div className={style.projContainer}>
        <div className={style.singleProjectWrap}>
          <div className={style.singleProject1}>
            <a href="https://waste-not-react.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <div className={style.singleProjectImage1}></div>
            </a>
          </div>
          <div className={style.sidePanel}>
            <h3>Waste Not</h3>
            <h5>An authenticated CRUD App</h5>
            <p>Built using: git, npm, ajax, firebase & react.js</p>
            <p>Waste not is a responsive web app that fetchs a 
              list of possible recipes you could cook, 
              based upon the food a user stores to their profile. 
              These recipes can then be added to a users favourites to view upon next login. 
            </p>
          </div>
        </div>
        <div className={style.singleProjectWrap}>
          <div className={style.sidePanel}>
              <h3>Waste Not</h3>
              <h5>React.js, AJAX, Firebase</h5>
              <p></p>
            </div>
          <div className={style.singleProject2}>
            <div className={style.singleProjectImage2}></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Project;
