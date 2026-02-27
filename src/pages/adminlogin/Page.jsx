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
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  background: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h1`
  font-size: 38px;
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
  max-width: 450px;
  background: ${({ theme }) => theme.colors.light};
  padding: 50px 35px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  animation: ${fadeInUp} 1.4s ease forwards;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 18px;
  margin-bottom: 22px;
  font-size: 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary};
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

const CTAButton = styled(Button)`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.darkPrimary};
    transform: translateY(-2px);
  }
`;

const ForgotLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
  text-align: center;
  display: block;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Note = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 15px;
`;

/* ================== Page Component ================== */
export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [shakeError, setShakeError] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Email and password are required!");
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    setError("");
    setSuccess(`Welcome, Admin ${form.email}`);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Admin Login</Title>
        <Description>Enter your admin credentials to manage LuxuryStay system and dashboards securely.</Description>

        <FormWrapper>
          {error && <ErrorMessage shakeError={shakeError}>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <form onSubmit={handleSubmit}>
            <Input 
              type="email" 
              name="email" 
              placeholder="Admin Email" 
              value={form.email} 
              onChange={handleChange} 
            />
            <Input 
              type="password" 
              name="password" 
              placeholder="Password" 
              value={form.password} 
              onChange={handleChange} 
            />
            <CTAButton type="submit">Login as Admin</CTAButton>
          </form>

          <ForgotLink href="/forgot-password">Forgot Password?</ForgotLink>
          <Note>For security, do not share your admin credentials with anyone.</Note>
        </FormWrapper>
      </Section>

      <Footer />
    </div>
  );
}
