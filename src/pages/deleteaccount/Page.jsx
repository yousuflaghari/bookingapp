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
  max-width: 450px;
  background: ${({ theme }) => theme.colors.light};
  padding: 50px 35px;
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  animation: ${fadeInUp} 1.4s ease forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.darkRed};
    transform: translateY(-2px);
  }
`;

const ConfirmNote = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 15px;
`;

/* ================== Page Component ================== */
export default function DeleteAccount() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shakeError, setShakeError] = useState(false);
  const [success, setSuccess] = useState("");
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError("Password is required to delete account!");
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    if (!confirm) {
      setError("Please confirm that you want to delete your account!");
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }
    setError("");
    setSuccess("Your account has been deleted permanently.");
    setPassword("");
    setConfirm(false);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

      <Section>
        <Title>Delete Account</Title>
        <Description>
          Permanently delete your account. This action cannot be undone. Please enter your password and confirm to proceed.
        </Description>

        <FormWrapper>
          {error && <ErrorMessage shakeError={shakeError}>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <label style={{ display: "flex", alignItems: "center", marginBottom: "20px", cursor: "pointer" }}>
              <input 
                type="checkbox" 
                checked={confirm} 
                onChange={(e) => setConfirm(e.target.checked)} 
                style={{ marginRight: "10px" }}
              />
              I understand that deleting my account is permanent
            </label>
            <CTAButton type="submit">Delete Account</CTAButton>
          </form>

          <ConfirmNote>
            Please be certain before deleting your account. All your data will be lost.
          </ConfirmNote>
        </FormWrapper>
      </Section>

      <Footer />
    </div>
  );
}
