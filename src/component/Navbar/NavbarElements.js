import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: #140A82;
    height: 80px;
    // margint-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px
    height: 80px;
    z-index: 1;
    padding: 0 24px;
`
export const NavLogo = styled(LinkR)`
    display: flex;
    color: white;
    justify-content: flex-start;
    font-size: 1.5rem;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        cursor: pointer;
        display: block;
        color: #fff;
        position: absolute;
        font-size: 1.8rem;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    display: flex;  
    cursor: pointer;
    color: #fff;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    text-decoration: none;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav`
    display: flex; 
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    cursor: pointer;
    text-decoration: none;
    background: #FFCC40;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 1rem;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    border-radius: 50px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`
export const LogoImg = styled.img`
    height: 140px;
    width: 140px;
   
`