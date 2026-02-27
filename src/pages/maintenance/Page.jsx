import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/Button";

/* ================== Animations ================== */
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
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
  font-size: 100px;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${pulse} 2s infinite;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 20px;
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

/* ================== Maintenance Visual ================== */
const Gear = styled.div`
  width: ${({ size }) => size || "80px"};
  height: ${({ size }) => size || "80px"};
  border: 5px solid ${({ theme }) => theme.colors.light};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  margin: 20px;
  animation: ${rotate} ${({ speed }) => speed || "3s"} linear infinite;
`;

/* ================== Page Component ================== */
export default function Maintenance() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Header */}
      <Header />

      {/* Maintenance Section */}
      <Section>
        <Title>🚧</Title>
        <Subtitle>Site Under Maintenance</Subtitle>
        <Description>
          LuxuryStay is currently undergoing scheduled maintenance to enhance your experience. 
          We apologize for any inconvenience and appreciate your patience.
        </Description>

        {/* Animated Gears */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <Gear size="80px" speed="4s" />
          <Gear size="100px" speed="6s" />
          <Gear size="60px" speed="3s" />
        </div>

        <Description style={{ marginTop: "30px" }}>
          Check back soon or subscribe to our notifications for updates.
        </Description>
        <CTAButton onClick={() => window.location.href = "/subscribe"}>Subscribe for Updates</CTAButton>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
