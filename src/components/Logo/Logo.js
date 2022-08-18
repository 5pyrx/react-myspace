import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

import style from './Logo.module.css';

function Logo() {
  return (
    <NavHashLink 
      exact to="/#home" 
      smooth
      activeClassName={style.activeHomePage}
      activeStyle={{
        fontWeight: "bold",
        color: "#ff4f98"
      }}
    >
      <div className={style.brand}>
        <div className={style.logo}>
          <svg width="200px" height="200px" >
                <path stroke="#ffffff" strokeWidth="0" fill="#62ebf0" d="M140.773,59.227C137.316,55.771,130.055,50,100,50
                s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
                C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
                S144.229,62.683,140.773,59.227z"/>

                <path stroke="#ff4f98" strokeWidth="0" fill="#ffffff" d="M140.773,59.227C137.316,55.771,130.055,50,100,50
                s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
                C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
                S144.229,62.683,140.773,59.227z"/>

                <path stroke="#ff4f98" strokeWidth="0" fill="#ffffff" d="M140.773,59.227C137.316,55.771,130.055,50,100,50
                s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
                C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
                S144.229,62.683,140.773,59.227z"/>
          </svg>
          
        </div>
      </div>
    </NavHashLink>
  );
}

export default Logo;
