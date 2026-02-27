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

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`;

/* ================== Sections ================== */
const Section = styled.section`
  padding: 100px 20px;
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

/* ================== Form ================== */
const FormWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: ${({ theme }) => theme.colors.light};
  padding: 40px 30px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  animation: ${fadeInUp} 1.4s ease forwards;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  margin-bottom: 20px;
  font-size: 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.primary};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
  animation: ${({ shakeError }) => (shakeError ? shake : "none")} 0.5s linear;
`;

const CTAButton = styled(Button)`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 14px;
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.darkPrimary};
    transform: translateY(-2px);
  }
`;

/* ================== Forgot / Social ================== */
const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 14px;
`;

const LinkText = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/* ================== Social Buttons ================== */
const SocialWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

const SocialButton = styled(Button)`
  flex: 1;
  padding: 12px;
  font-weight: 600;
  background: ${({ bgColor }) => bgColor || "#eee"};
  color: ${({ color }) => color || "#000"};
  border-radius: ${({ theme }) => theme.radius.md};
  &:hover {
    opacity: 0.9;
  }
`;

/* ================== Page Component ================== */
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shakeError, setShakeError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email & password are required!");
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    // dummy login
    alert(`Logged in as ${email}`);
    setError("");
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Login</Title>
        <Description>Access your LuxuryStay account to manage bookings, wishlist, and more.</Description>

        <FormWrapper>
          {error && <ErrorMessage shakeError={shakeError}>{error}</ErrorMessage>}
          <form onSubmit={handleSubmit}>
            <Input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <CTAButton type="submit">Login</CTAButton>
          </form>

          <OptionsWrapper>
            <LinkText href="/forgot-password">Forgot Password?</LinkText>
            <LinkText href="/register">Create Account</LinkText>
          </OptionsWrapper>

          <SocialWrapper>
            <SocialButton bgColor="#3b5998" color="#fff">Login with Facebook</SocialButton>
            <SocialButton bgColor="#db4437" color="#fff">Login with Google</SocialButton>
          </SocialWrapper>
        </FormWrapper>
      </Section>

      <Footer />
    </div>
  );
}
