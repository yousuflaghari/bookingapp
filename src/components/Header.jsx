import React, { useState, useRef, useEffect } from "react"; 
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Register from "../pages/register/Page"

import {
  FaGlobe,
  FaQuestionCircle,
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi,
} from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";
import Login from "../pages/login/Page";

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 40px;
`;

const Logo = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  margin: 0;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 13px;
  outline: none;
  user-select: none;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 28px;
  right: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  width: 170px;
  z-index: 100;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: #f5f5f5;
  }
`;

const MenuItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const AuthButton = styled.button`
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const BottomBar = styled.div`
  display: flex;
  gap: 25px;
  padding: 8px 40px;
`;

const NavItem = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const [countryOpen, setCountryOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("PKR");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const countries = [
    { name: "Pakistan", code: "PKR" },
    { name: "India", code: "INR" },
    { name: "USA", code: "USD" },
    { name: "Germany", code: "EUR" },
  ];

  const languages = ["English", "Urdu", "Hindi", "German"];

  // ✅ Refs for dropdowns
  const countryRef = useRef(null);
  const languageRef = useRef(null);

  // ✅ Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setCountryOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderWrapper>
      <TopBar>
        <Logo onClick={() => navigate("/")}>LuxuryStay</Logo>

        <RightMenu>
          {/* Country Dropdown */}
          <DropdownWrapper ref={countryRef}>
            <DropdownButton
              onClick={() => {
                setCountryOpen(!countryOpen);
                setLanguageOpen(false);
              }}
            >
              <FaGlobe /> {selectedCountry}
            </DropdownButton>

            {countryOpen && (
              <DropdownMenu>
                {countries.map((c, i) => (
                  <DropdownItem
                    key={i}
                    onClick={() => {
                      setSelectedCountry(`${c.code}`);
                      setCountryOpen(false);
                    }}
                  >
                    {c.name} ({c.code})
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownWrapper>

          <DropdownWrapper ref={languageRef}>
            <DropdownButton
              onClick={() => {
                setLanguageOpen(!languageOpen);
                setCountryOpen(false);
              }}
            >
              <MdLanguage /> {selectedLanguage}
            </DropdownButton>

            {languageOpen && (
              <DropdownMenu>
                {languages.map((lang, i) => (
                  <DropdownItem
                    key={i}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setLanguageOpen(false);
                    }}
                  >
                    {lang}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </DropdownWrapper>

          <MenuItem>
            <FaQuestionCircle /> Help
          </MenuItem>

          <AuthButton onClick={() => navigate("/register")}>
           Register {Register}
          </AuthButton>

          <AuthButton onClick={() => navigate("/login")}>
            Login {Login}
          </AuthButton>
        </RightMenu>
      </TopBar>

      <BottomBar>
        <NavItem onClick={() => navigate("/stays")}>
          <FaBed /> Stays
        </NavItem>

        <NavItem onClick={() => navigate("/flights")}>
          <FaPlane /> Flights
        </NavItem>

        <NavItem onClick={() => navigate("/carrental")}>
          <FaCar /> Car Rental
        </NavItem>

        <NavItem onClick={() => navigate("/attractions")}>
          <FaUmbrellaBeach /> Attractions
        </NavItem>

        <NavItem onClick={() => navigate("/airport-taxis")}>
          <FaTaxi /> Airport Taxis
        </NavItem>
      </BottomBar>
    </HeaderWrapper>
  );
};

export default Header;