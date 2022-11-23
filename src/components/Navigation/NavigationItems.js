import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
// import { useLocation } from "react-router-dom";
// custom hook
// import { useScrollPosition } from '../../Hooks/useScrollPosition';

// Style
import style from './NavigationItems.module.css';

// Images
import LinkedInLogo from '../../assets/LinkedinBlack.png';
import GithubLogo from '../../assets/GithubBlack.png';

function NavigationItems(props) {
  return (
    <>
      <ul 
        className={ 
          style.NavigationItems
          }
      >
        <li className={style.flexList}>
          <a 
            href="https://www.linkedin.com/in/jonathan-spencer-55675792/" 
            target="_blank" 
            rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="Linkedin"/>
          </a>
          <a 
            href="https://github.com/jay-sparks" 
            target="_blank" 
            rel="noopener noreferrer">
            <img src={GithubLogo} alt="Github"/>
          </a>
        </li>
        <li>
          <NavHashLink 
            exact to="#projects" 
            smooth
            style={style.NavLink}
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
            style={style.NavLink}
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
            style={style.NavLink}
            activeStyle={{
              fontWeight: "bold",
              color: "#ff4f98"
            }}
          >
            Contact
          </NavHashLink>
        </li>
      </ul>
      <div className={style.toggleButton} onClick={props.click}>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
        <span className={style.bar}></span>
      </div>
    </>
  );
}

export default NavigationItems;
