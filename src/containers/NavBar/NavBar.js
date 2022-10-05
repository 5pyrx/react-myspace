import React from 'react';

// Styling
import style from './NavBar.module.css';

//Components
import NavigationItems from '../../components/Navigation/NavigationItems';
import Logo from '../../components/Logo/Logo';

function NavBar(props) {
    return(
        <>
            <div className={style.Logo}>
                <Logo />
            </div>
            <div className={style.NavBar}>
                <NavigationItems click={props.click}/>
            </div>
        </>
    );
}

export default NavBar;