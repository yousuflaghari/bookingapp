import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/Button";

/* ================== Animations ================== */
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

/* ================== Sections ================== */
const Section = styled.section`
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  font-size: 120px;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${bounce} 2s infinite;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 20px;
  animation: ${fadeIn} 2s ease-in;
  text-align: center;
`;

const Description = styled.p`
  max-width: 800px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 20px;
  text-align: center;
  line-height: 1.8;
`;

const CTAButton = styled(Button)`
  margin-top: 40px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 14px 32px;
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.darkPrimary};
    transform: translateY(-2px);
  }
`;

/* ================== Background Visuals ================== */
const FloatingCircle = styled.div`
  position: absolute;
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.light};
  top: ${({ top }) => top || "50%"};
  left: ${({ left }) => left || "50%"};
  opacity: 0.4;
  animation: ${bounce} ${({ speed }) => speed || "6s"} ease-in-out infinite alternate;
`;

/* ================== Page Component ================== */
export default function NotFound404() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Floating Circles */}
      <FloatingCircle size="100px" top="10%" left="20%" speed="8s" />
      <FloatingCircle size="80px" top="70%" left="80%" speed="6s" />
      <FloatingCircle size="60px" top="50%" left="50%" speed="10s" />

      {/* Header */}
      <Header />

      {/* Main 404 Section */}
      <Section>
        <Title>404</Title>
        <Subtitle>Page Not Found</Subtitle>
        <Description>
          Oops! The page you are looking for does not exist, has been removed, or is temporarily unavailable.
        </Description>
        <CTAButton onClick={() => window.location.href = "/"}>Go Back Home</CTAButton>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
