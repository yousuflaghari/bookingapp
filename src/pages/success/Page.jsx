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

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
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
  min-height: 80vh;
  background: ${({ theme }) => theme.colors.white};
`;

const IconWrapper = styled.div`
  font-size: 80px;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
  animation: ${bounce} 2s infinite;
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
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.darkPrimary};
    transform: translateY(-2px) rotate(5deg);
  }
`;

const Note = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 20px;
`;

/* ================== Page Component ================== */
export default function Success() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <IconWrapper>✅</IconWrapper>
        <Title>Success!</Title>
        <Description>
          Your action has been completed successfully. Thank you for using our platform. You can now continue to explore more features or return to the dashboard.
        </Description>

        <CTAButton onClick={() => alert("Redirecting to dashboard...")}>
          Go to Dashboard
        </CTAButton>

        <Note>
          You can also check your email for confirmation and detailed information regarding this action.
        </Note>
      </Section>

      <Footer />
    </div>
  );
}
