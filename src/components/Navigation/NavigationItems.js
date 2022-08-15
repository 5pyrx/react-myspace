import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

import style from './NavigationItems.module.css';

function NavigationItems() {
  const { hash } = useLocation();
  console.log(hash);
  return (
      <ul className={style.NavigationItems}>
        <li>
          <NavHashLink 
            exact to="#projects" 
            activeClassName={style.activePage}
            smooth
            activeStyle={{
              fontWeight: "bold",
              color: "#ff4f98"
            }}
          >
            Projects
          </NavHashLink>
        </li>
        <li>
        <NavHashLink 
            exact to="#experience" 
            activeClassName={style.activePage}
            smooth
            activeStyle={{
              fontWeight: "bold",
              color: "#ff4f98"
            }}
          >
            Experience
          </NavHashLink>
        </li>
        <li>
        <NavHashLink 
            exact to="#contact" 
            activeClassName={style.activePage}
            smooth
            activeStyle={{
              fontWeight: "bold",
              color: "#ff4f98"
            }}
          >
            Contact
          </NavHashLink>
        </li>
      </ul>
  );
}

export default NavigationItems;
