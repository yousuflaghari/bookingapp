import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../components/Button";

/* ================== Animations ================== */
const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
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
const SocialButton = styled(Button)`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

const FacebookButton = styled(SocialButton)`
  background: #1877f2;
  color: white;
  &:hover {
    background: #155db2;
  }
`;

const GoogleButton = styled(SocialButton)`
  background: #db4437;
  color: white;
  &:hover {
    background: #a33227;
  }
`;

const TwitterButton = styled(SocialButton)`
  background: #1da1f2;
  color: white;
  &:hover {
    background: #0d8ddb;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 18px;
  animation: ${({ shakeError }) => (shakeError ? shake : "none")} 0.5s linear;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-bottom: 18px;
  animation: ${fadeInUp} 0.5s ease forwards;
`;

const Note = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 15px;
`;

/* ================== Page Component ================== */
export default function SocialLogin() {
  const [error, setError] = useState("");
  const [shakeError, setShakeError] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSocialLogin = (platform) => {
    // Dummy simulation
    if (!platform) {
      setError("Something went wrong. Try again!");
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    setError("");
    setSuccess(`Logged in successfully with ${platform}`);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Social Login</Title>
        <Description>
          Login quickly using your favorite social account. Choose a platform below to continue.
        </Description>

        {error && <ErrorMessage shakeError={shakeError}>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <div style={{ width: "100%", maxWidth: "450px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <FacebookButton onClick={() => handleSocialLogin("Facebook")}>
            <span>📘</span> Continue with Facebook
          </FacebookButton>
          <GoogleButton onClick={() => handleSocialLogin("Google")}>
            <span>🟢</span> Continue with Google
          </GoogleButton>
          <TwitterButton onClick={() => handleSocialLogin("Twitter")}>
            <span>🐦</span> Continue with Twitter
          </TwitterButton>
        </div>

        <Note>If you don’t have an account, you will be automatically registered.</Note>
      </Section>

      <Footer />
    </div>
  );
}
