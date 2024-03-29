import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>

          <SidebarLink to="about" onClick={toggle}>
            A Propos
          </SidebarLink>

          <SidebarLink to="discover" onClick={toggle}>
            Découvrir
          </SidebarLink>

          <SidebarLink to="services" onClick={toggle}>
            Nos Services
          </SidebarLink>


          <SidebarLink to="contact" onClick={toggle}>  
            Contact
          </SidebarLink>

        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin"> Accèder à GLPI </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
