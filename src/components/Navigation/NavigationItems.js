import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavigationItems.module.css';

function NavigationItems() {
  return (
      <ul className={style.NavigationItems}>
        <li><NavLink exact to="/#projects" activeClassName={style.activePage}>Projects</NavLink></li>
        <li><NavLink exact to="/#experience" activeClassName={style.activePage}>Experience</NavLink></li>
        <li><NavLink exact to="/#contact" activeClassName={style.activePage}><li>Contact</li></NavLink></li>
      </ul>
  );
}

export default NavigationItems;
