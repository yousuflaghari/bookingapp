// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// ===== Styled Components =====
const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 30px;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 10px 20px;

  h3 {
    margin-bottom: 15px;
    font-size: 18px;
    color: #fff;
  }

  p, a {
    font-size: 14px;
    color: #ccc;
    text-decoration: none;
    margin-bottom: 8px;
    display: block;

    &:hover {
      color: #ff6b6b;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  a {
    color: #ccc;
    font-size: 18px;
    transition: 0.3s;
    &:hover {
      color: #ff6b6b;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #333;
  padding-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #888;
`;

// ===== Footer Component =====
const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterColumn>
          <h3>About Us</h3>
          <p>BookingApp is your trusted platform for hotels, flights, and travel experiences worldwide.</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Quick Links</h3>
          <a href="/hotels">Hotels</a>
          <a href="/deals">Deals</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
        </FooterColumn>

        <FooterColumn>
          <h3>Contact</h3>
          <p>Email: support@bookingapp.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: Saddiqabad, Pakistan</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Follow Us</h3>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </SocialIcons>
        </FooterColumn>
      </FooterTop>

      <FooterBottom>
        &copy; {new Date().getFullYear()} BookingApp. All Rights Reserved.
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;