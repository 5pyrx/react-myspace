import React from 'react';

import style from './Skills.module.css';

function Skills() {
  return (
    <div className={style.Skills}>
      <h1>Skills</h1>
      <div className={style.skillContainer}>
        <div className={style.singleSkill}>
          <h4>Technologys</h4>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>
        <div className={style.singleSkill}>
          <h4>Tools</h4>
          <p>VSCode</p>
          <p>Github</p>
          <p>Terminal</p>
          <p>Stack Overflow</p>
        </div>
      </div>
      <div className={style.learningContainer}>
        <h2>Learning Material</h2>
        <p><a href="https://teamtreehouse.com/profiles/spencerx">@Treehouse</a></p>
        <p><a href="https://javascriptbook.com/">Javascript & jQuery - Jon Duckett's </a></p>
        <p><a href="https://javascriptbook.com/">Academinds React Udemy Course</a></p>
        <p><a href="https://javascriptbook.com/">The Road to Reach - Robin Weiruch</a></p>
      </div>
    </div>
  );
}

export default Skills;
