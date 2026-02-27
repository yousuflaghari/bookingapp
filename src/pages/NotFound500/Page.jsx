import React from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/Button";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(15deg); }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-15px); }
  60% { transform: translateY(-7px); }
`;

/* ================== Sections ================== */
const Section = styled.section`
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  background: ${({ theme }) => theme.colors.white};
`;

const IconWrapper = styled.div`
  font-size: 80px;
  color: red;
  margin-bottom: 20px;
  animation: ${shake} 1s infinite;
`;

const Title = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  animation: ${fadeInUp} 1s ease forwards;
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 40px;
  max-width: 600px;
  text-align: center;
  animation: ${fadeInUp} 1.2s ease forwards;
`;

/* ================== Buttons ================== */
const CTAButton = styled(Button)`
  width: 100%;
  max-width: 250px;
  background: red;
  color: white;
  font-weight: 700;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px) rotate(-5deg);
    background: darkred;
  }
`;

const Note = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 20px;
`;

/* ================== Page Component ================== */
export default function Error500() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <IconWrapper>💥</IconWrapper>
        <Title>500 - Server Error</Title>
        <Description>
          Oops! Something went wrong on our end. Don’t worry, our technical team has been notified. You can try reloading the page or go back to the dashboard.
        </Description>

        <CTAButton onClick={() => window.location.reload()}>Reload Page</CTAButton>
        <Note>
          If the issue persists, contact support or try again later.
        </Note>
      </Section>

      <Footer />
    </div>
  );
}
