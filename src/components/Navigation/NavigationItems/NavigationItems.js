import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './NavigationItems.module.css';

function NavigationItems() {
  return (
    <ul className={style.NavigationItems}>
      <li><NavLink exact to="/Programmer" activeClassName={style.activePage}>Programmer</NavLink></li>
      {/* <li><NavLink exact to="/Musician" activeClassName={style.activePage}>Musician</NavLink></li> */}
      <li><NavLink exact to="/Traveller" activeClassName={style.activePage}>Traveller</NavLink></li>
      <li>
        <button>Get in touch</button>
      </li>
    </ul>
    //
    // </div>
  );
}

export default NavigationItems;
