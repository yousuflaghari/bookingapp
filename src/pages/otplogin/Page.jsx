
import React, { useState, useRef } from "react";
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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
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

/* ================== OTP Inputs ================== */
const OTPWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const OTPInput = styled.input`
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.primary};
  }
`;

/* ================== Messages ================== */
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
  max-width: 300px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-top: 10px;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.darkPrimary};
    transform: translateY(-2px);
  }
`;

const Note = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 15px;
`;

/* ================== Page Component ================== */
export default function OTPLogin() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [shakeError, setShakeError] = useState(false);
  const [success, setSuccess] = useState("");

  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    const val = element.value.replace(/[^0-9]/g, "");
    if (!val) return;
    let newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    // focus next input
    if (index < 5) inputsRef.current[index + 1].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some((v) => v === "")) {
      setError("Please enter the complete 6-digit OTP.");
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    setError("");
    setSuccess("OTP verified successfully!");
    setOtp(new Array(6).fill(""));
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>OTP Login</Title>
        <Description>
          Enter the 6-digit OTP sent to your registered email or phone number to securely login.
        </Description>

        {error && <ErrorMessage shakeError={shakeError}>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <OTPWrapper>
            {otp.map((data, index) => (
              <OTPInput
                key={index}
                type="text"
                maxLength="1"
                value={data}
                ref={(el) => (inputsRef.current[index] = el)}
                onChange={(e) => handleChange(e.target, index)}
              />
            ))}
          </OTPWrapper>

          <CTAButton type="submit">Verify OTP</CTAButton>
        </form>

        <Note>If you didn’t receive the OTP, you can request a new one after 30 seconds.</Note>
      </Section>

      <Footer />
    </div>
  );
}
