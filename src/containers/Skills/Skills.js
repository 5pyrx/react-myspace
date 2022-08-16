import React from 'react';

import style from './Skills.module.css';

function Skills() {
  return (
    <div className={style.Skills}>
      <h1>Skills</h1>
      <div className={style.skillContainer}>
        <div className={style.singleSkill}></div>
        <div className={style.singleSkill}></div>
      </div>
      <div className={style.learningContainer}>
        <h3>Learning Material</h3>
        <p><a href="https://teamtreehouse.com/profiles/spencerx">@Treehouse</a></p>
        <p><a href="https://javascriptbook.com/">Javascript & jQuery - Jon Duckett's </a></p>
        <p><a href="https://javascriptbook.com/">Academinds React Udemy Course</a></p>
        <p><a href="https://javascriptbook.com/">The Road to Reach - Robin Weiruch</a></p>
      </div>
    </div>
  );
}

export default Skills;
