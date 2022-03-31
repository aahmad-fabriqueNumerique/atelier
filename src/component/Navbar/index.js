import React from "react";
import logo from "../../images/logoWhite.svg";

import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  LogoImg,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <LogoImg src={logo}></LogoImg>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          
          <NavMenu>
            <NavItem>
              <NavLinks to="about"> A Propos </NavLinks>
            </NavItem>

            <NavItem>         
              <NavLinks to="discover"> Découvrir </NavLinks>
            </NavItem>

            <NavItem>           
              <NavLinks to="services"> Nos Services </NavLinks>
            </NavItem>

            <NavItem>       
              <NavLinks to="contact"> Contact </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink
              to={{ pathname: "https://atelier.fabriquenumerique.fr" }}
              target="_blank"
            >
              
              Accèder à GLPI
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
