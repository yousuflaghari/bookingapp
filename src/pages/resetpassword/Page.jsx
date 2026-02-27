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

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  margin-bottom: 15px;
  animation: ${fadeInUp} 0.5s ease forwards;
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

/* ================== Page Component ================== */
export default function ResetPassword() {
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [shakeError, setShakeError] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.password || !form.confirmPassword) {
      setError("Both fields are required!");
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match!");
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    setError("");
    setSuccess("Password reset successfully!");
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Reset Password</Title>
        <Description>Enter your new password below to regain access to your account.</Description>

        <FormWrapper>
          {error && <ErrorMessage shakeError={shakeError}>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <form onSubmit={handleSubmit}>
            <Input 
              type="password" 
              name="password" 
              placeholder="New Password" 
              value={form.password} 
              onChange={handleChange} 
            />
            <Input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm Password" 
              value={form.confirmPassword} 
              onChange={handleChange} 
            />
            <CTAButton type="submit">Reset Password</CTAButton>
          </form>
        </FormWrapper>
      </Section>

      <Footer />
    </div>
  );
}
