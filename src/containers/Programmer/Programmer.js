import React from 'react';

import style from './Programmer.module.css';

function Programmer() {
  return (
    <div className={style.Programmer}>
      <div className={style.progContainer}>
        <h1>Coding</h1>
        <p>I have taken a roundabout way of learning programming</p>
        <h4>Python <i>2016</i></h4>
        <p>I started learning Python basics because I was told it was the best place to start...<strong>great advice!</strong></p>
        <h3>HTML,CSS <i>2017</i></h3>
        <p>After learning basics functions, loops, conditional statements etc, I learned that I need HTML & CSS to build a website</p>
        <h2>Javascript & jQuery<i>2017</i></h2>
        <p>I learnt JS through online courses on <a href="https://teamtreehouse.com/profiles/spencerx">@Treehouse</a> and <a href="https://javascriptbook.com/">Jon Duckett's Javascript & jQuery</a></p>
        <h1>React.js <i>2018</i></h1>
        <p>I initially began learning React 16, learning class components, component lifecycles and the joys of prop drilling 🤯</p>
      </div>
    </div>
  );
}

export default Programmer;
