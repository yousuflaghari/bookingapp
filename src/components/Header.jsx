import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const Logo = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
`;

const NavItem = styled.span`
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  const navigate = useNavigate(); // 🔥 important

  return (
    <HeaderWrapper>
      <Logo onClick={() => navigate("/")}>LuxuryStay</Logo>

      <Nav>
        <NavItem onClick={() => navigate("/")}>Home</NavItem>
        <NavItem onClick={() => navigate("/hotels")}>Hotels</NavItem>
        <NavItem onClick={() => navigate("/restaurants")}>
          Restaurants
        </NavItem>
        <NavItem onClick={() => navigate("/about")}>About</NavItem>
      </Nav>

      <Button>Login</Button>
    </HeaderWrapper>
  );
};

export default Header;