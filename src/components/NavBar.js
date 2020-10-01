import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: ${(props) => props.theme.primaryColor};
  display: flex;
`;

const NavItem = styled.li`
  align-self: center;
  font-size: 1.3rem;
  list-style: none;
  margin: 0.5rem;
  padding: 0.5rem;

  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.buttonColor};

  &:hover {
    border: 2px solid ${(props) => props.theme.textColor};
  }
`;

const LogoNavItem = styled(NavItem)`
  font-size: 1.8rem;
  margin-right: auto;
  border: none;
  &:hover {
    border: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;

export default function NavBar() {
  return (
    <Nav>
      <LogoNavItem>
        <NavLink to="/">Pivot, Inc</NavLink>
      </LogoNavItem>
      <NavItem>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/signin">Sign In</NavLink>
      </NavItem>
    </Nav>
  );
}
