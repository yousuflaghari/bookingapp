import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { FiLock, FiCheckCircle, FiXCircle } from "react-icons/fi";

/* ================= GLOBAL ================= */

const GlobalStyle = createGlobalStyle`
  body {
    margin:0;
    font-family: Arial, Helvetica, sans-serif;
    background:#f4f6f8;
  }
`;

/* ================= STYLED COMPONENTS ================= */

const Container = styled.div`
  max-width:500px;
  margin:50px auto;
  background:white;
  padding:30px;
  border-radius:12px;
  box-shadow:0 4px 15px rgba(0,0,0,0.08);
`;

const Header = styled.h2`
  color:#333;
  margin-bottom:20px;
`;

const ToggleContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:20px;
`;

const ToggleLabel = styled.span`
  font-weight:bold;
`;

const ToggleButton = styled.button`
  padding:8px 16px;
  border-radius:8px;
  border:none;
  cursor:pointer;
  background:${props => props.enabled ? "#28a745" : "#dc3545"};
  color:white;
  font-weight:bold;

  &:hover {
    opacity:0.9;
  }
`;

const QRContainer = styled.div`
  text-align:center;
  margin-bottom:20px;
`;

const SecretKey = styled.div`
  background:#f8f9fa;
  padding:10px;
  border-radius:8px;
  font-family:monospace;
  margin-bottom:20px;
  text-align:center;
`;

const Input = styled.input`
  width:100%;
  padding:10px;
  border-radius:8px;
  border:1px solid #ccc;
  margin-bottom:20px;
`;

const SaveButton = styled.button`
  width:100%;
  padding:12px;
  border:none;
  border-radius:8px;
  background:#343a40;
  color:white;
  font-weight:bold;
  cursor:pointer;

  &:hover {
    background:#23272b;
  }
`;

/* ================= COMPONENT ================= */

const TwoFA = () => {
  const [enabled, setEnabled] = useState(false);
  const [secret, setSecret] = useState("ABCD-EFGH-IJKL-MNOP");
  const [code, setCode] = useState("");

  const toggle2FA = () => {
    setEnabled(prev => !prev);
  };

  const handleVerify = () => {
    if (code.length === 6) {
      alert(`2FA ${enabled ? "enabled" : "disabled"} successfully!`);
      setCode("");
    } else {
      alert("Enter a valid 6-digit code.");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Two-Factor Authentication (2FA)</Header>

        <ToggleContainer>
          <ToggleLabel>{enabled ? "2FA Enabled" : "2FA Disabled"}</ToggleLabel>
          <ToggleButton enabled={enabled} onClick={toggle2FA}>
            {enabled ? "Disable" : "Enable"}
          </ToggleButton>
        </ToggleContainer>

        {enabled && (
          <>
            <QRContainer>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=otpauth://totp/BookingApp:user@example.com?secret=ABCD1234"
                alt="QR Code"
              />
            </QRContainer>

            <SecretKey>Secret Key: {secret}</SecretKey>

            <Input
              type="text"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={e => setCode(e.target.value)}
            />

            <SaveButton onClick={handleVerify}>Verify & Save</SaveButton>
          </>
        )}
      </Container>
    </>
  );
};

export default TwoFA;