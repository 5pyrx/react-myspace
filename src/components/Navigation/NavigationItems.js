import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { useLocation } from "react-router-dom";

// Style
import style from './NavigationItems.module.css';

// Images
import LinkedInLogo from '../../assets/LinkedinBlack.png';
import GithubLogo from '../../assets/GithubBlack.png';

function NavigationItems() {
  const { hash } = useLocation();
  const isActive = (a) => {
    return hash === a;
  };
  
  return (
      <ul className={style.NavigationItems}>
        <li className={style.flexList}>
          <a href="https://www.linkedin.com/in/jonathan-spencer-55675792/">
            <img src={LinkedInLogo} alt="Linkedin"/>
          </a>
          <a href="https://github.com/5pyrx">
            <img src={GithubLogo} alt="Github"/>
          </a>
        </li>
        <li>
          <NavHashLink 
            exact to="#skills" 
            smooth
            style={
              isActive("#home")
                ? {
                  color: "white"
                } : {
                  color: "black"
                }
            }
            activeStyle={{
              fontWeight: "bold",
              color: "#ff4f98"
            }}
          >
            Skills
          </NavHashLink>
        </li>
        <li>
          <NavHashLink 
            exact to="#projects" 
            smooth
            style={
              isActive("#home")
                ? {
                  color: "white"
                } : {
                  color: "black"
                }
            }
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
            style={
              isActive("" || "#home")
                ? {
                  color: "white"
                } : {
                  color: "black"
                }
            }
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
            style={
              isActive("" || "#home")
                ? {
                  color: "white"
                } : {
                  color: "black"
                }
            }
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
