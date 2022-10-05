import React from "react";

import style from './Backdrop.module.css';

const Backdrop = props => (
    <div className={style.Backdrop} onClick={props.click}></div>
);

export default Backdrop; 