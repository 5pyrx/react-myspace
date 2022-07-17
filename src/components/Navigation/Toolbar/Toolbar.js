import React from 'react';

import style from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

function Toolbar() {
  return (
    <div className={style.Toolbar}>
      <Logo />
      <NavigationItems />
    </div>
  );
}

export default Toolbar;
