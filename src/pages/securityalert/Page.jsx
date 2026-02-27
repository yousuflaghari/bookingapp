import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

/* ============================
   Animations
============================ */

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px);}
  to { opacity: 1; transform: translateY(0);}
`;

const pulse = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.05);}
  100% { transform: scale(1);}
`;

const spin = keyframes`
  to { transform: rotate(360deg);}
`;

/* ============================
   Styled Components
============================ */

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #ff4d4f, #ff7875);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

const Card = styled.div`
  background: #fff;
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  text-align: center;
  animation: ${fadeIn} 0.4s ease;
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 15px;
  animation: ${pulse} 2s infinite;
`;

const Title = styled.h2`
  font-size: 26px;
  margin-bottom: 10px;
  color: #222;
`;

const Description = styled.p`
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;
`;

const InfoBox = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: left;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Label = styled.span`
  font-weight: 600;
  color: #444;
`;

const Value = styled.span`
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  transition: 0.3s;
  min-width: 150px;

  background: ${(props) =>
    props.variant === "danger" ? "#dc3545" : "#0d6efd"};

  color: white;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const Loader = styled.div`
  width: 35px;
  height: 35px;
  border: 4px solid #eee;
  border-top: 4px solid #0d6efd;
  border-radius: 50%;
  margin: 20px auto;
  animation: ${spin} 1s linear infinite;
`;

const SuccessBox = styled.div`
  background: #e6fffa;
  padding: 15px;
  border-radius: 10px;
  color: #0f5132;
  font-size: 14px;
  margin-top: 20px;
`;

const Footer = styled.div`
  margin-top: 30px;
  font-size: 13px;
  color: #888;
`;

/* ============================
   Component
============================ */

const SecurityAlert = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [secured, setSecured] = useState(false);

  const handleSecure = async () => {
    setLoading(true);

    // simulate api call
    await new Promise((res) => setTimeout(res, 2000));

    setLoading(false);
    setSecured(true);

    setTimeout(() => {
      navigate("/reset-password");
    }, 2500);
  };

  const handleIgnore = () => {
    navigate("/dashboard");
  };

  return (
    <PageWrapper>
      <Card>
        <Icon>⚠️</Icon>

        {!loading && !secured && (
          <>
            <Title>Security Alert</Title>

            <Description>
              We detected a suspicious login attempt on your account.
              If this was not you, please secure your account immediately.
            </Description>

            <InfoBox>
              <InfoRow>
                <Label>Device:</Label>
                <Value>Chrome on Windows</Value>
              </InfoRow>

              <InfoRow>
                <Label>Location:</Label>
                <Value>Karachi, Pakistan</Value>
              </InfoRow>

              <InfoRow>
                <Label>IP Address:</Label>
                <Value>192.168.1.1</Value>
              </InfoRow>

              <InfoRow>
                <Label>Time:</Label>
                <Value>{new Date().toLocaleString()}</Value>
              </InfoRow>
            </InfoBox>

            <ButtonGroup>
              <Button onClick={handleIgnore}>
                It Was Me
              </Button>

              <Button variant="danger" onClick={handleSecure}>
                Secure Account
              </Button>
            </ButtonGroup>
          </>
        )}

        {loading && (
          <>
            <Title>Securing Your Account...</Title>
            <Loader />
            <Description>
              Please wait while we apply security measures.
            </Description>
          </>
        )}

        {secured && (
          <>
            <Title>Account Secured</Title>

            <SuccessBox>
              Your account has been secured successfully.
              Redirecting to password reset...
            </SuccessBox>
          </>
        )}

        <Footer>
          Booking App Security System • Stay Protected
        </Footer>
      </Card>
    </PageWrapper>
  );
};

export default SecurityAlert;

/* ============================
   Notes
============================ */

/*
Replace navigation routes:

navigate("/reset-password")
navigate("/dashboard")

Replace fake API with real API:

await axios.post("/api/security/secure")

Optional improvements:

- Add OTP verification
- Add device logout feature
- Add Google Authenticator
- Add email confirmation

*/