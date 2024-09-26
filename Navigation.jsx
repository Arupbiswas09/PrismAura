//import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${props => props.theme.backgroundColor};
  padding: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><NavLink to="/">Home</NavLink></NavItem>
        <NavItem><NavLink to="/portfolio">Portfolio</NavLink></NavItem>
        <NavItem><NavLink to="/about">About</NavLink></NavItem>
        <NavItem><NavLink to="/contact">Contact</NavLink></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navigation;