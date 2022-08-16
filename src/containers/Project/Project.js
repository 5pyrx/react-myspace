import React from 'react';

import style from './Project.module.css';

function Project() {
  return (
    <div className={style.Project}>
      <h1>Projects</h1>
      <div className={style.projContainer}>
        <div className={style.singleProject}></div>
        <div className={style.singleProject}></div>
        <div className={style.singleProject}></div>
        <div className={style.singleProject}></div>
      </div>
    </div>
  );
}

export default Project;
