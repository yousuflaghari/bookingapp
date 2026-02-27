import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

/* ===========================
   Animations
=========================== */

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.04); }
  100% { transform: scale(1); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

/* ===========================
   Styled Components
=========================== */

const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0d6efd, #0dcaf0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 520px;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: ${fadeIn} 0.5s ease;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
  margin: auto;
  border-radius: 50%;
  background: #f1f5ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  margin-bottom: 20px;
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
  margin-bottom: 30px;
  line-height: 1.6;
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
  min-width: 130px;

  background: ${(props) =>
    props.variant === "danger" ? "#dc3545" : "#e9ecef"};

  color: ${(props) =>
    props.variant === "danger" ? "white" : "#333"};

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
  margin: auto;
  animation: ${spin} 1s linear infinite;
`;

const SuccessBox = styled.div`
  margin-top: 25px;
  padding: 15px;
  background: #e6fffa;
  border-radius: 10px;
  color: #0f5132;
  font-size: 14px;
`;

const FooterText = styled.div`
  margin-top: 30px;
  font-size: 13px;
  color: #888;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 6px;
  background: #eee;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 20px;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: #0d6efd;
  width: ${(props) => props.width}%;
  transition: width 0.4s ease;
`;

/* ===========================
   Logout Component
=========================== */

const Logout = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [progress, setProgress] = useState(0);

  /* ===========================
     Fake Logout API
  =========================== */

  const logoutUser = async () => {
    try {
      setLoading(true);

      // simulate progress
      let value = 0;
      const interval = setInterval(() => {
        value += 20;
        setProgress(value);
      }, 300);

      // simulate api delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      clearInterval(interval);

      // remove tokens
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setLoggedOut(true);
      setLoading(false);

      // redirect after logout
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  /* ===========================
     Auto logout on mount (optional)
  =========================== */

  useEffect(() => {
    // optional auto logout
    // logoutUser();
  }, []);

  /* ===========================
     Render
  =========================== */

  return (
    <PageWrapper>
      <Card>
        <IconWrapper>🔐</IconWrapper>

        {!loading && !loggedOut && (
          <>
            <Title>Logout Confirmation</Title>

            <Description>
              Are you sure you want to logout from your account?
              You will need to login again to access your bookings,
              dashboard and saved hotels.
            </Description>

            <ButtonGroup>
              <Button onClick={() => navigate(-1)}>
                Cancel
              </Button>

              <Button variant="danger" onClick={logoutUser}>
                Yes, Logout
              </Button>
            </ButtonGroup>
          </>
        )}

        {loading && (
          <>
            <Title>Logging you out...</Title>

            <Loader />

            <ProgressBarWrapper>
              <ProgressBar width={progress} />
            </ProgressBarWrapper>

            <Description>
              Please wait while we securely end your session.
            </Description>
          </>
        )}

        {loggedOut && (
          <>
            <Title>Successfully Logged Out</Title>

            <SuccessBox>
              You have been logged out successfully.
              Redirecting to login page...
            </SuccessBox>
          </>
        )}

        <FooterText>
          Booking App • Secure Logout System
        </FooterText>
      </Card>
    </PageWrapper>
  );
};

export default Logout;

/* ===========================
   Extra Components (Optional)
=========================== */

/* Example if you want modal version */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 16px;
  width: 90%;
  max-width: 420px;
  text-align: center;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 15px;
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

/* ===========================
   Notes
=========================== */

/*
1. Replace navigate("/login") with your route
2. Replace fake API with real endpoint:

await axios.post("/api/logout")

3. If using auth context:

const { logout } = useAuth();
logout();

4. Works with:

React Router v6
Styled Components
Next.js (small modification needed)

*/