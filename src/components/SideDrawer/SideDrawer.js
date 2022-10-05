import React from 'react'
import { NavHashLink } from 'react-router-hash-link';

import style from './SideDrawer.module.css';

// Images
import LinkedInLogo from '../../assets/LinkedinBlack.png';
import GithubLogo from '../../assets/GithubBlack.png';


const sideDrawer = props => {
  return (
      <ul className={style.SideDrawer}>
        <li className={style.flexList}>
          <a 
            href="https://www.linkedin.com/in/jonathan-spencer-55675792/" 
            target="_blank" 
            rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="Linkedin"/>
          </a>
          <a 
            href="https://github.com/5pyrx" 
            target="_blank" 
            rel="noopener noreferrer">
            <img src={GithubLogo} alt="Github"/>
          </a>
        </li>
        <li className={style.listNav}>
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
        <li className={style.listNav}>
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
        <li className={style.listNav}>
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
  )
}

export default sideDrawer;