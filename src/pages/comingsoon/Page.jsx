import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/Button";

/* ================== Animations ================== */
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
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
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  font-size: 96px;
  color: ${({ theme }) => theme.colors.primary};
  animation: ${bounce} 2s infinite;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 20px;
  animation: ${fadeIn} 1.5s ease forwards;
`;

const Description = styled.p`
  max-width: 800px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 20px;
  line-height: 1.8;
  animation: ${fadeIn} 2s ease forwards;
`;

/* ================== Countdown ================== */
const CountdownWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const CountdownBox = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 20px 30px;
  border-radius: ${({ theme }) => theme.radius.md};
  text-align: center;
  animation: ${fadeIn} 2.5s ease forwards;
`;

const CountdownNumber = styled.h3`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
`;

const CountdownLabel = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`;

/* ================== CTA ================== */
const CTAButton = styled(Button)`
  margin-top: 50px;
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

/* ================== Page Component ================== */
export default function ComingSoon() {
  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      {/* Header */}
      <Header />

      {/* Main Coming Soon Section */}
      <Section>
        <Title>✨</Title>
        <Subtitle>Coming Soon</Subtitle>
        <Description>
          LuxuryStay is preparing something amazing for you! Stay tuned and be the first to experience our new features.
        </Description>

        {/* Countdown */}
        <CountdownWrapper>
          <CountdownBox>
            <CountdownNumber>12</CountdownNumber>
            <CountdownLabel>Days</CountdownLabel>
          </CountdownBox>
          <CountdownBox>
            <CountdownNumber>08</CountdownNumber>
            <CountdownLabel>Hours</CountdownLabel>
          </CountdownBox>
          <CountdownBox>
            <CountdownNumber>45</CountdownNumber>
            <CountdownLabel>Minutes</CountdownLabel>
          </CountdownBox>
          <CountdownBox>
            <CountdownNumber>30</CountdownNumber>
            <CountdownLabel>Seconds</CountdownLabel>
          </CountdownBox>
        </CountdownWrapper>

        {/* CTA */}
        <CTAButton onClick={() => window.location.href = "/subscribe"}>Notify Me</CTAButton>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
