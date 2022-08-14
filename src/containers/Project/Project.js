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
      <div className={style.coursesContainer}>
        <h3>Courses</h3>
        <p><a href="https://teamtreehouse.com/profiles/spencerx">@Treehouse</a></p>
        <p><a href="https://javascriptbook.com/">Javascript & jQuery - Jon Duckett's </a></p>
        <p><a href="https://javascriptbook.com/">Academinds React Udemy Course</a></p>
        <p><a href="https://javascriptbook.com/">The Road to Reach - Robin Weiruch</a></p>
      </div>
    </div>
  );
}

export default Project;
