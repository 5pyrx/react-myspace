import React, { Component } from 'react';

import style from './Layout.module.css';

class Layout extends Component {
  // state = {
  //   showSideDrawer: false
  // }
  //
  // sideDrawerClosedHandler = () => {
  //   this.setState({showSideDrawer: false});
  // }
  //
  // sideDrawerToggleHandler = () => {
  //   this.setState((prevState) => {
  //     return { showSideDrawer: !prevState.showSideDrawer };
  //   });
  // }

  render () {
    return (
      <div className={style.Layout}></div>
    );
  }
}


export default Layout;
